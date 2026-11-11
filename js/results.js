const resultsTranslations = {
    en: {
        eyebrow: 'Live Flight Search',
        title: 'Flight search results',
        subtitle: 'Live offers returned by the Duffel test API. Prices and availability are for testing only.',
        loading: 'Loading results...',
        searchSummary: 'Search Summary',
        sourceDuffelTest: 'Source: Duffel test-mode results',
        searchError: 'The flight search API could not return results. Please try again later.',
        lowestPrice: 'Lowest price',
        provider: 'Provider',
        route: 'Route',
        outbound: 'Outbound',
        inbound: 'Return',
        duration: 'Duration',
        stops: 'Stops',
        refundable: 'Refundable',
        exchangeable: 'Exchangeable',
        official: 'Official airline',
        agency: 'Agency / OTA',
        oneWay: 'One way',
        roundTrip: 'Round trip',
        noResults: 'No trips were returned for this search yet.',
        badQuery: 'Missing search details. Please go back and search again.',
        yes: 'Yes',
        no: 'No',
        adults: 'Adults',
        children: 'Children',
        infants: 'Infants',
        stopLabel: (count) => (count === 0 ? 'Direct' : `${count} stop${count > 1 ? 's' : ''}`)
    },
    ar: {
        eyebrow: 'بحث رحلات حي',
        title: 'نتائج البحث عن الرحلات',
        subtitle: 'عروض مباشرة من واجهة Duffel التجريبية. الأسعار والتوافر للاختبار فقط.',
        loading: 'جارٍ تحميل النتائج...',
        searchSummary: 'ملخص البحث',
        sourceDuffelTest: 'المصدر: نتائج Duffel التجريبية',
        searchError: 'تعذر الحصول على نتائج من واجهة البحث. حاول مرة أخرى لاحقًا.',
        lowestPrice: 'أقل سعر',
        provider: 'مزود الحجز',
        route: 'المسار',
        outbound: 'الذهاب',
        inbound: 'العودة',
        duration: 'المدة',
        stops: 'التوقفات',
        refundable: 'قابل للاسترداد',
        exchangeable: 'قابل للتغيير',
        official: 'شركة طيران رسمية',
        agency: 'وكالة / OTA',
        oneWay: 'ذهاب فقط',
        roundTrip: 'ذهاب وعودة',
        noResults: 'لم يتم العثور على رحلات لهذا البحث حتى الآن.',
        badQuery: 'بيانات البحث ناقصة. عد للصفحة السابقة وابدأ البحث من جديد.',
        yes: 'نعم',
        no: 'لا',
        adults: 'بالغون',
        children: 'أطفال',
        infants: 'رضع',
        stopLabel: (count) => (count === 0 ? 'مباشر' : `${count} توقف`)
    }
};

const airportCityMap = {
    CAI: 'Cairo',
    DXB: 'Dubai',
    IST: 'Istanbul',
    RUH: 'Riyadh',
    JED: 'Jeddah',
    LON: 'London',
    DOH: 'Doha',
    SHJ: 'Sharjah',
    AUH: 'Abu Dhabi',
    KWI: 'Kuwait',
    AMM: 'Amman',
    MCT: 'Muscat',
    KRT: 'Khartoum'
};

function getResultsLang() {
    return localStorage.getItem('redstar_lang') || 'en';
}

function getSearchParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        origin: params.get('origin') || '',
        destination: params.get('destination') || '',
        departureDate: params.get('departureDate') || '',
        returnDate: params.get('returnDate') || '',
        adults: params.get('adults') || '1',
        children: params.get('children') || '0',
        infants: params.get('infants') || '0',
        cabin: params.get('cabin') || 'economy',
        currency: params.get('currency') || 'USD'
    };
}

function formatPassengerSummary(query, t) {
    return `${query.adults} ${t.adults} • ${query.children} ${t.children} • ${query.infants} ${t.infants}`;
}

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[character]);
}

function formatPlaceLabel(value) {
    const raw = String(value || '').trim();
    const upper = raw.toUpperCase();

    if (/^[A-Z]{3}$/.test(upper) && airportCityMap[upper]) {
        return `${airportCityMap[upper]} (${upper})`;
    }

    return raw;
}

function formatSearchSummary(query, t) {
    const type = query.returnDate ? t.roundTrip : t.oneWay;
    return `
        <span class="kicker">${t.searchSummary}</span>
        <h2>${escapeHtml(formatPlaceLabel(query.origin))} → ${escapeHtml(formatPlaceLabel(query.destination))}</h2>
        <div class="meta-row">
            <span>${escapeHtml(type)}</span>
            <span>${escapeHtml(query.departureDate)}${query.returnDate ? ` - ${escapeHtml(query.returnDate)}` : ''}</span>
            <span>${escapeHtml(formatPassengerSummary(query, t))}</span>
        </div>
    `;
}

function renderResults(payload, query) {
    const lang = getResultsLang();
    const t = resultsTranslations[lang];
    const status = document.getElementById('resultsStatus');
    const grid = document.getElementById('resultsGrid');
    const summary = document.getElementById('searchSummary');

    summary.innerHTML = formatSearchSummary(query, t);
    grid.innerHTML = '';

    const sourceText = payload.source === 'duffel_test' ? t.sourceDuffelTest : t.searchError;
    status.innerHTML = `<strong>${escapeHtml(sourceText)}</strong>${payload.note ? `<p style="margin-top: 10px; color: var(--muted);">${escapeHtml(payload.note)}</p>` : ''}`;

    const trips = payload.trips || [];
    if (trips.length === 0) {
        grid.innerHTML = `<article class="detail-card"><h3>${t.noResults}</h3></article>`;
        return;
    }

    trips.slice().sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity)).forEach((trip) => {
        const card = document.createElement('article');
        card.className = 'detail-card';

        card.innerHTML = `
            <span class="kicker">${t.lowestPrice}</span>
            <h3>${escapeHtml(trip.price)} ${escapeHtml(trip.currency)}</h3>
            <div class="meta-row">
                <span>${t.provider}: ${escapeHtml(trip.providerName)}</span>
            </div>
            <p><strong>${t.route}:</strong> ${escapeHtml(trip.route.originCity)} (${escapeHtml(trip.route.originCode)}) → ${escapeHtml(trip.route.destinationCity)} (${escapeHtml(trip.route.destinationCode)})</p>
            <div class="meta-row">
                <span>${t.outbound}: ${escapeHtml(trip.outbound.departureTime)} - ${escapeHtml(trip.outbound.arrivalTime)}</span>
                <span>${t.duration}: ${escapeHtml(trip.outbound.duration)}</span>
                <span>${t.stops}: ${escapeHtml(t.stopLabel(trip.outbound.stops))}</span>
            </div>
            ${trip.inbound ? `<div class="meta-row"><span>${t.inbound}: ${escapeHtml(trip.inbound.departureTime)} - ${escapeHtml(trip.inbound.arrivalTime)}</span><span>${t.duration}: ${escapeHtml(trip.inbound.duration)}</span><span>${t.stops}: ${escapeHtml(t.stopLabel(trip.inbound.stops))}</span></div>` : ''}
            <div class="meta-row">
                <span>${t.refundable}: ${trip.refundable ? t.yes : t.no}</span>
                <span>${t.exchangeable}: ${trip.exchangeable ? t.yes : t.no}</span>
            </div>
        `;

        grid.appendChild(card);
    });
}

async function initResultsPage() {
    const query = getSearchParams();
    const lang = getResultsLang();
    const t = resultsTranslations[lang];
    const status = document.getElementById('resultsStatus');

    document.getElementById('resultsEyebrow').textContent = t.eyebrow;
    document.getElementById('resultsTitle').textContent = t.title;
    document.getElementById('resultsSubtitle').textContent = t.subtitle;
    status.textContent = t.loading;

    if (!query.origin || !query.destination || !query.departureDate) {
        status.textContent = t.badQuery;
        return;
    }

    try {
        const url = new URL('https://redstar-duffel-search.redstarfortravel.workers.dev/api/flights/search');
        Object.entries(query).forEach(([key, value]) => {
            if (value !== '') url.searchParams.set(key, String(value));
        });
        const response = await fetch(url.toString(), { headers: { Accept: 'application/json' } });
        const payload = await response.json();
        if (!response.ok) {
            throw new Error(payload.error || 'The flight search service returned an error.');
        }
        renderResults(payload, query);
    } catch (error) {
        status.textContent = `${t.searchError} ${error.message}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.body.dataset.page === 'results') {
        initResultsPage();
    }
});

document.addEventListener('redstar:language-changed', () => {
    if (document.body.dataset.page === 'results') {
        initResultsPage();
    }
});
