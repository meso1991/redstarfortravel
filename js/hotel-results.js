const hotelResultsTranslations = {
    en: {
        eyebrow: 'Live Hotel Search',
        title: 'Available hotel rates',
        subtitle: 'Rates and availability are returned by Nuitee Connect. Sandbox results are for testing only.',
        summary: 'Hotel Search Summary',
        guests: 'Guests',
        rooms: 'Rooms',
        children: 'Children',
        loading: 'Searching Nuitee Connect for live hotel rates...',
        source: 'Source: Nuitee Connect',
        sandbox: 'Sandbox prices and availability are for testing only.',
        noResults: 'No available hotel rates were returned for this search.',
        searchFailed: 'The hotel search API could not return results. Please try again later.',
        noQuery: 'Missing or invalid search details. Please go back and search again.',
        address: 'Address',
        city: 'City',
        rating: 'Rating',
        stars: 'Stars',
        room: 'Room',
        perStay: 'total for stay',
        board: 'Meal plan',
        refundable: 'Refundable',
        notRefundable: 'Non-refundable'
    },
    ar: {
        eyebrow: 'بحث فنادق مباشر',
        title: 'أسعار الفنادق المتاحة',
        subtitle: 'الأسعار والتوافر من Nuitee Connect. نتائج البيئة التجريبية مخصصة للاختبار فقط.',
        summary: 'ملخص بحث الفنادق',
        guests: 'الضيوف',
        rooms: 'الغرف',
        children: 'الأطفال',
        loading: 'جارٍ البحث عن أسعار الفنادق عبر Nuitee Connect...',
        source: 'المصدر: Nuitee Connect',
        sandbox: 'الأسعار والتوافر التجريبيان مخصصان للاختبار فقط.',
        noResults: 'لم تُرجع واجهة البحث أسعارًا متاحة لهذا البحث.',
        searchFailed: 'تعذر الحصول على نتائج من واجهة الفنادق. حاول مرة أخرى لاحقًا.',
        noQuery: 'بيانات البحث ناقصة أو غير صحيحة. عد وابدأ البحث من جديد.',
        address: 'العنوان',
        city: 'المدينة',
        rating: 'التقييم',
        stars: 'النجوم',
        room: 'الغرفة',
        perStay: 'إجمالي الإقامة',
        board: 'الوجبات',
        refundable: 'قابل للاسترداد',
        notRefundable: 'غير قابل للاسترداد'
    }
};

let hotelResultsState = null;

function getHotelResultsLang() {
    return localStorage.getItem('redstar_lang') || 'en';
}

function getHotelSearchParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        destination: params.get('destination') || '',
        checkin: params.get('checkin') || '',
        checkout: params.get('checkout') || '',
        adults: Number(params.get('adults') || 2),
        children: (params.get('childAges') || '').split(',').filter(Boolean).map(Number),
        rooms: Number(params.get('rooms') || 1),
        nationality: params.get('nationality') || 'SD',
        currency: params.get('currency') || 'USD'
    };
}

function formatHotelPrice(amount, currency) {
    const value = Number(amount);
    if (!Number.isFinite(value)) return '';
    try {
        return new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(value);
    } catch {
        return `${value} ${currency}`;
    }
}

function appendHotelText(parent, tagName, text, className = '') {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    element.textContent = text;
    parent.appendChild(element);
    return element;
}

function renderHotelResults(query, t) {
    document.getElementById('hotelResultsEyebrow').textContent = t.eyebrow;
    document.getElementById('hotelResultsTitle').textContent = t.title;
    document.getElementById('hotelResultsSubtitle').textContent = t.subtitle;

    const summary = document.getElementById('hotelSearchSummary');
    const grid = document.getElementById('hotelResultsGrid');
    const status = document.getElementById('hotelResultsStatus');

    summary.replaceChildren();
    appendHotelText(summary, 'span', t.summary, 'kicker');
    appendHotelText(summary, 'h2', query.destination);
    const meta = appendHotelText(summary, 'div', '', 'meta-row');
    appendHotelText(meta, 'span', `${query.checkin} - ${query.checkout}`);
    appendHotelText(meta, 'span', `${t.guests}: ${query.adults + query.children.length}`);
    appendHotelText(meta, 'span', `${t.children}: ${query.children.length}`);
    appendHotelText(meta, 'span', `${t.rooms}: ${query.rooms}`);

    grid.replaceChildren();
    status.textContent = hotelResultsState.invalid
        ? t.noQuery
        : hotelResultsState.error
            ? `${t.searchFailed} ${hotelResultsState.error}`
            : t.source;
    if (hotelResultsState.payload?.sandbox) {
        appendHotelText(status, 'p', t.sandbox);
    }

    const hotels = hotelResultsState.payload?.hotels || [];
    if (!hotelResultsState.error && hotels.length === 0) {
        appendHotelText(grid, 'article', t.noResults, 'detail-card');
        return;
    }

    hotels.forEach((hotel) => {
        const card = document.createElement('article');
        card.className = 'detail-card';
        if (hotel.photo) {
            const image = document.createElement('img');
            image.src = hotel.photo;
            image.alt = hotel.name;
            image.loading = 'lazy';
            image.className = 'hotel-result-image';
            card.appendChild(image);
        }
        appendHotelText(card, 'h3', hotel.name);
        if (hotel.address) appendHotelText(card, 'p', `${t.address}: ${hotel.address}`);

        const meta = appendHotelText(card, 'div', '', 'meta-row');
        if (hotel.city) appendHotelText(meta, 'span', `${t.city}: ${hotel.city}`);
        if (hotel.stars) appendHotelText(meta, 'span', `${t.stars}: ${hotel.stars}`);
        if (hotel.rating) appendHotelText(meta, 'span', `${t.rating}: ${hotel.rating}`);
        if (hotel.room) appendHotelText(meta, 'span', `${t.room}: ${hotel.room}`);
        if (hotel.board) appendHotelText(meta, 'span', `${t.board}: ${hotel.board}`);
        if (hotel.refundable !== null) {
            appendHotelText(meta, 'span', hotel.refundable ? t.refundable : t.notRefundable);
        }

        appendHotelText(card, 'strong', `${formatHotelPrice(hotel.price, hotel.currency)} (${t.perStay})`);
        grid.appendChild(card);
    });
}

async function initHotelResultsPage() {
    if (document.body.dataset.page !== 'hotel_results') return;

    const query = getHotelSearchParams();
    const t = hotelResultsTranslations[getHotelResultsLang()];
    const status = document.getElementById('hotelResultsStatus');
    if (!query.destination || query.destination.length > 120 || !query.checkin || !query.checkout || query.checkout <= query.checkin
        || !Number.isInteger(query.adults) || query.adults < query.rooms || query.adults + query.children.length > 9
        || query.children.some((age) => !Number.isInteger(age) || age < 0 || age > 17)
        || !Number.isInteger(query.rooms) || query.rooms < 1
        || !/^[A-Z]{2}$/.test(query.nationality) || !/^[A-Z]{3}$/.test(query.currency)) {
        hotelResultsState = { query, payload: null, error: '', invalid: true };
        renderHotelResults(query, t);
        return;
    }

    if (hotelResultsState?.query && hotelResultsState.query.destination === query.destination
        && hotelResultsState.query.checkin === query.checkin && hotelResultsState.query.checkout === query.checkout) {
        renderHotelResults(query, t);
        return;
    }

    hotelResultsState = { query, payload: null, error: '', invalid: false };
    document.getElementById('hotelResultsEyebrow').textContent = t.eyebrow;
    document.getElementById('hotelResultsTitle').textContent = t.title;
    document.getElementById('hotelResultsSubtitle').textContent = t.subtitle;
    status.textContent = t.loading;

    try {
        const url = new URL('https://redstar-duffel-search.redstarfortravel.workers.dev/api/hotels/search');
        url.searchParams.set('destination', query.destination);
        url.searchParams.set('checkin', query.checkin);
        url.searchParams.set('checkout', query.checkout);
        url.searchParams.set('adults', String(query.adults));
        url.searchParams.set('rooms', String(query.rooms));
        url.searchParams.set('childAges', query.children.join(','));
        url.searchParams.set('nationality', query.nationality);
        url.searchParams.set('currency', query.currency);

        const response = await fetch(url.toString(), { headers: { Accept: 'application/json' } });
        const payload = await response.json();
        if (!response.ok) throw new Error(payload.error || `Hotel search failed (${response.status}).`);
        hotelResultsState.payload = payload;
    } catch (error) {
        hotelResultsState.error = error.message;
    }

    renderHotelResults(query, hotelResultsTranslations[getHotelResultsLang()]);
}

document.addEventListener('DOMContentLoaded', initHotelResultsPage);
document.addEventListener('redstar:language-changed', () => {
    if (hotelResultsState?.query) {
        renderHotelResults(hotelResultsState.query, hotelResultsTranslations[getHotelResultsLang()]);
    }
});
