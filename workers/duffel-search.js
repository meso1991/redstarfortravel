const DUFFEL_OFFER_REQUESTS_URL = "https://api.duffel.com/air/offer_requests";
const NUITEE_HOTEL_RATES_URL = "https://api.liteapi.travel/v3.0/hotels/rates";
const WORKER_ORIGINS = new Set([
    "https://redstar-travel.com",
    "https://www.redstar-travel.com"
]);
const MAX_PASSENGERS = 9;
const MAX_OFFERS = 10;
const MAX_HOTEL_RESULTS = 20;

const CITY_CODES = {
    cairo: "CAI",
    "القاهرة": "CAI",
    "port sudan": "PZU",
    "بورتسودان": "PZU",
    "port sudan airport": "PZU",
    khartoum: "KRT",
    "الخرطوم": "KRT",
    dubai: "DXB",
    "دبي": "DXB",
    istanbul: "IST",
    "اسطنبول": "IST",
    "إسطنبول": "IST",
    riyadh: "RUH",
    "الرياض": "RUH",
    jeddah: "JED",
    "جدة": "JED",
    doha: "DOH",
    "الدوحة": "DOH",
    sharjah: "SHJ",
    "الشارقة": "SHJ",
    "abu dhabi": "AUH",
    "أبوظبي": "AUH",
    muscat: "MCT",
    "مسقط": "MCT"
};

function corsHeaders(origin) {
    return {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
        "Vary": "Origin"
    };
}

function jsonResponse(payload, status = 200, origin = "") {
    return new Response(JSON.stringify(payload), {
        status,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-store",
            ...corsHeaders(origin)
        }
    });
}

function resolveIataCode(value) {
    const raw = String(value || "").trim();
    const parenthesizedCode = raw.match(/\(([A-Za-z]{3})\)\s*$/);
    if (parenthesizedCode) return parenthesizedCode[1].toUpperCase();
    if (/^[A-Za-z]{3}$/.test(raw)) return raw.toUpperCase();

    const normalized = raw.toLocaleLowerCase().replace(/\s+/g, " ");
    return CITY_CODES[normalized] || "";
}

function parseCount(value, defaultValue, minimum = 0) {
    if (value === null || value === "") return defaultValue;
    const count = Number(value);
    return Number.isInteger(count) && count >= minimum && count <= MAX_PASSENGERS ? count : null;
}

function isValidDate(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return false;
    const parsed = new Date(`${value}T00:00:00Z`);
    return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

function getCabinClass(value) {
    const cabin = String(value || "economy").toLowerCase().replace(/[\s-]+/g, "_");
    const supported = new Set(["economy", "premium_economy", "business", "first"]);
    return supported.has(cabin) ? cabin : "";
}

function formatDuration(duration, departure, arrival) {
    const match = String(duration || "").match(/^PT(?:(\d+)H)?(?:(\d+)M)?$/);
    if (match) {
        const hours = Number(match[1] || 0);
        const minutes = Number(match[2] || 0);
        return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
    }

    const elapsed = new Date(arrival).getTime() - new Date(departure).getTime();
    if (!Number.isFinite(elapsed) || elapsed < 0) return "";
    const minutes = Math.floor(elapsed / 60000);
    return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}

function normalizeSlice(slice) {
    const segments = Array.isArray(slice?.segments) ? slice.segments : [];
    if (!segments.length) return null;

    const first = segments[0];
    const last = segments[segments.length - 1];
    return {
        departureTime: first.departing_at || "",
        arrivalTime: last.arriving_at || "",
        duration: formatDuration(slice.duration, first.departing_at, last.arriving_at),
        stops: Math.max(0, segments.length - 1),
        airline: first.operating_carrier?.name || first.marketing_carrier?.name || ""
    };
}

function normalizeOffer(offer) {
    const slices = Array.isArray(offer?.slices) ? offer.slices : [];
    const outbound = normalizeSlice(slices[0]);
    if (!outbound || !offer?.total_amount || !offer?.total_currency) return null;

    const firstSegment = slices[0].segments[0];
    const routeOrigin = firstSegment.origin || {};
    const routeDestination = slices[0].segments[slices[0].segments.length - 1].destination || {};
    const conditions = offer.conditions || {};

    return {
        id: offer.id || "",
        price: Number(offer.total_amount),
        currency: offer.total_currency,
        providerName: offer.owner?.name || "Duffel",
        providerType: "airline",
        handoffUrl: "",
        refundable: conditions.refund_before_departure?.allowed === true,
        exchangeable: conditions.change_before_departure?.allowed === true,
        route: {
            originCode: routeOrigin.iata_code || "",
            destinationCode: routeDestination.iata_code || "",
            originCity: routeOrigin.city_name || routeOrigin.name || routeOrigin.iata_code || "",
            destinationCity: routeDestination.city_name || routeDestination.name || routeDestination.iata_code || ""
        },
        outbound,
        inbound: slices[1] ? normalizeSlice(slices[1]) : null
    };
}

function parseChildAges(value) {
    if (!value) return [];
    const ages = value.split(",").map((age) => age.trim());
    if (ages.some((age) => !/^(?:[0-9]|1[0-7])$/.test(age))) return null;
    return ages.map(Number);
}

function getHotelPrice(offer, roomType) {
    const offerPrice = Array.isArray(offer?.offerRetailRate)
        ? offer.offerRetailRate[0]
        : offer?.offerRetailRate;
    if (Number.isFinite(Number(offerPrice?.amount)) && Number(offerPrice.amount) > 0) {
        return { amount: Number(offerPrice.amount), currency: offerPrice.currency || "" };
    }

    const rate = roomType?.rates?.[0];
    const rateTotal = Array.isArray(rate?.retailRate?.total) ? rate.retailRate.total[0] : null;
    if (Number.isFinite(Number(rateTotal?.amount)) && Number(rateTotal.amount) > 0) {
        return { amount: Number(rateTotal.amount), currency: rateTotal.currency || "" };
    }
    return null;
}

function normalizeHotel(offer, hotelsById) {
    const roomTypes = Array.isArray(offer?.roomTypes) ? offer.roomTypes : [];
    const hotel = hotelsById.get(offer?.hotelId) || {};
    const choices = roomTypes
        .map((roomType) => ({ roomType, price: getHotelPrice(offer, roomType) }))
        .filter((choice) => choice.price)
        .sort((a, b) => a.price.amount - b.price.amount);
    if (!choices.length) return null;

    const { roomType, price } = choices[0];
    const rate = Array.isArray(roomType.rates) ? roomType.rates[0] : null;
    const refundableTag = rate?.cancellationPolicies?.refundableTag;
    return {
        id: offer.hotelId || hotel.id || "",
        name: hotel.name || offer.hotelName || "Hotel",
        city: hotel.city_name || "",
        address: hotel.address || "",
        photo: hotel.main_photo || hotel.thumbnail || "",
        rating: Number.isFinite(Number(hotel.rating)) && Number(hotel.rating) > 0 ? Number(hotel.rating) : null,
        stars: Number.isFinite(Number(hotel.stars)) && Number(hotel.stars) > 0 ? Number(hotel.stars) : null,
        price: price.amount,
        currency: price.currency || "",
        room: rate?.name || roomType.name || "",
        board: rate?.boardName || "",
        refundable: refundableTag ? refundableTag === "RFN" : null
    };
}

async function searchNuiteeHotels(request, env, corsOrigin) {
    const params = new URL(request.url).searchParams;
    const destination = (params.get("destination") || "").trim();
    const checkin = params.get("checkin") || "";
    const checkout = params.get("checkout") || "";
    const adults = parseCount(params.get("adults"), 2, 1);
    const rooms = parseCount(params.get("rooms"), 1, 1);
    const childAges = parseChildAges(params.get("childAges") || "");
    const nationality = (params.get("nationality") || "SD").toUpperCase();
    const currency = (params.get("currency") || "USD").toUpperCase();

    if (!destination || destination.length > 120 || !isValidDate(checkin) || !isValidDate(checkout) || checkout <= checkin) {
        return jsonResponse({ error: "Enter a destination and valid check-in/check-out dates." }, 400, corsOrigin);
    }
    if (adults === null || rooms === null || adults < rooms || childAges === null
        || adults + childAges.length > MAX_PASSENGERS) {
        return jsonResponse({ error: "Guest, room, or child age details are invalid." }, 400, corsOrigin);
    }
    if (!/^[A-Z]{2}$/.test(nationality) || !/^[A-Z]{3}$/.test(currency)) {
        return jsonResponse({ error: "Use a two-letter nationality code and a three-letter currency code." }, 400, corsOrigin);
    }
    if (!env.NUITEE_API_KEY) {
        return jsonResponse({ error: "Nuitee Connect is not configured on this deployment." }, 503, corsOrigin);
    }

    const childAgesByRoom = Array.from({ length: rooms }, () => []);
    childAges.forEach((age, index) => childAgesByRoom[index % rooms].push(age));
    const baseAdultsPerRoom = Math.floor(adults / rooms);
    const extraAdults = adults % rooms;
    const occupancies = childAgesByRoom.map((children, index) => ({
        rooms: 1,
        adults: baseAdultsPerRoom + (index < extraAdults ? 1 : 0),
        children
    }));

    const locationCode = destination.match(/(?:\(([A-Za-z]{3})\)\s*|^([A-Za-z]{3})$)/);
    const searchBody = {
        checkin,
        checkout,
        currency,
        guestNationality: nationality,
        occupancies,
        timeout: 10,
        limit: MAX_HOTEL_RESULTS,
        maxRatesPerHotel: 1,
        sort: [{ field: "price", direction: "ascending" }],
        includeHotelData: true
    };
    if (locationCode) {
        searchBody.iataCode = (locationCode[1] || locationCode[2]).toUpperCase();
    } else {
        searchBody.aiSearch = `Hotels in ${destination}`;
    }

    let response;
    try {
        response = await fetch(NUITEE_HOTEL_RATES_URL, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-API-Key": env.NUITEE_API_KEY
            },
            body: JSON.stringify(searchBody)
        });
    } catch {
        return jsonResponse({ error: "Unable to reach Nuitee Connect. Please try again shortly." }, 502, corsOrigin);
    }

    let body;
    try {
        body = await response.json();
    } catch {
        return jsonResponse({ error: "Nuitee Connect returned an invalid response." }, 502, corsOrigin);
    }
    if (!response.ok) {
        const message = body?.error?.message || body?.message || body?.errors?.[0]?.message;
        return jsonResponse({ error: message || `Hotel search failed (${response.status}).` }, 502, corsOrigin);
    }

    const hotelsById = new Map(
        (Array.isArray(body?.hotels) ? body.hotels : []).map((hotel) => [hotel.id, hotel])
    );
    const hotels = (Array.isArray(body?.data) ? body.data : [])
        .map((offer) => normalizeHotel(offer, hotelsById))
        .filter(Boolean)
        .sort((a, b) => a.price - b.price)
        .slice(0, MAX_HOTEL_RESULTS);

    return jsonResponse({
        source: "nuitee_connect",
        sandbox: body?.sandbox === true,
        hotels
    }, 200, corsOrigin);
}

function buildPassengers(adults, children, infants) {
    return [
        ...Array.from({ length: adults }, () => ({ type: "adult" })),
        ...Array.from({ length: children }, () => ({ type: "child" })),
        ...Array.from({ length: infants }, () => ({ type: "infant_without_seat" }))
    ];
}

async function searchDuffel(request, env, corsOrigin) {
    const params = new URL(request.url).searchParams;
    const origin = resolveIataCode(params.get("origin"));
    const destination = resolveIataCode(params.get("destination"));
    const departureDate = params.get("departureDate") || "";
    const returnDate = params.get("returnDate") || "";
    const adults = parseCount(params.get("adults"), 1, 1);
    const children = parseCount(params.get("children"), 0);
    const infants = parseCount(params.get("infants"), 0);
    const cabinClass = getCabinClass(params.get("cabin"));
    const totalPassengers = adults === null || children === null || infants === null
        ? MAX_PASSENGERS + 1
        : adults + children + infants;

    if (!origin || !destination) {
        return jsonResponse({ error: "Use a supported city name or a 3-letter IATA airport code." }, 400, corsOrigin);
    }
    if (!isValidDate(departureDate) || (returnDate && !isValidDate(returnDate))) {
        return jsonResponse({ error: "Use valid departure and return dates in YYYY-MM-DD format." }, 400, corsOrigin);
    }
    if (returnDate && returnDate < departureDate) {
        return jsonResponse({ error: "The return date must be on or after the departure date." }, 400, corsOrigin);
    }
    if (adults === null || children === null || infants === null || totalPassengers > MAX_PASSENGERS || infants > adults) {
        return jsonResponse({ error: "Passenger counts are invalid. Infants must not exceed adults, with at most 9 passengers." }, 400, corsOrigin);
    }
    if (!cabinClass) {
        return jsonResponse({ error: "Choose economy, premium economy, business, or first class." }, 400, corsOrigin);
    }
    if (!env.DUFFEL_API_TOKEN) {
        return jsonResponse({ error: "Duffel is not configured on this deployment." }, 503, corsOrigin);
    }

    const slices = [{ origin, destination, departure_date: departureDate }];
    if (returnDate) {
        slices.push({ origin: destination, destination: origin, departure_date: returnDate });
    }

    let response;
    try {
        response = await fetch(`${DUFFEL_OFFER_REQUESTS_URL}?return_offers=true`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${env.DUFFEL_API_TOKEN}`,
                "Content-Type": "application/json",
                "Duffel-Version": "v2"
            },
            body: JSON.stringify({
                data: {
                    slices,
                    passengers: buildPassengers(adults, children, infants),
                    cabin_class: cabinClass
                }
            })
        });
    } catch {
        return jsonResponse({ error: "Unable to reach Duffel. Please try again shortly." }, 502, corsOrigin);
    }

    let body;
    try {
        body = await response.json();
    } catch {
        return jsonResponse({ error: "Duffel returned an invalid response." }, 502, corsOrigin);
    }

    if (!response.ok) {
        const message = body?.errors?.[0]?.message;
        return jsonResponse({ error: message || `Duffel search failed (${response.status}).` }, 502, corsOrigin);
    }

    const trips = (Array.isArray(body?.data?.offers) ? body.data.offers : [])
        .map(normalizeOffer)
        .filter((offer) => offer && Number.isFinite(offer.price) && offer.price > 0)
        .sort((a, b) => a.price - b.price)
        .slice(0, MAX_OFFERS);

    return jsonResponse({
        source: "duffel_test",
        currency: trips[0]?.currency || "USD",
        note: "Duffel test-mode offers; prices and availability are for testing only.",
        trips
    }, 200, corsOrigin);
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const origin = request.headers.get("Origin") || "";
        if (!WORKER_ORIGINS.has(origin)) {
            return jsonResponse({ error: "Origin not allowed." }, 403);
        }
        if (request.method === "OPTIONS") {
            return new Response(null, { status: 204, headers: corsHeaders(origin) });
        }
        if (request.method !== "GET") {
            return jsonResponse({ error: "Method not allowed." }, 405, origin);
        }
        if (url.pathname === "/api/flights/search") {
            return searchDuffel(request, env, origin);
        }
        if (url.pathname === "/api/hotels/search") {
            return searchNuiteeHotels(request, env, origin);
        }
        return jsonResponse({ error: "Not Found." }, 404, origin);
    }
};
