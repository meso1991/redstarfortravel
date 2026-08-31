// رقم واتساب الوكالة لاستقبال الحجوزات
const REDSTAR_WHATSAPP = "249123327987"; // عدل الرقم هنا إذا رغبت

function sendBookingToWhatsApp(data) {
    let message = "";

    if (data.type === "flight") {
        message = `*طلب حجز طيران جديد (RedStar Travel)* ✈️%0A%0A` +
                  `• *من:* ${data.from || 'غير محدد'}%0A` +
                  `• *إلى:* ${data.to || 'غير محدد'}%0A` +
                  `• *تاريخ السفر:* ${data.departureDate || 'غير محدد'}%0A` +
                  (data.returnDate ? `• *تاريخ العودة:* ${data.returnDate}%0A` : "") +
                  `• *الدرجة:* ${data.flightClass || 'اقتصادية'}%0A` +
                  `• *الركاب:* ${data.passengers || '1 بالغ'}%0A` +
                  `• *العملة المفضلة:* ${data.currency || 'USD'}`;
    } else if (data.type === "hotel") {
        message = `*طلب حجز فندق جديد (RedStar Travel)* 🏨%0A%0A` +
                  `• *الوجهة / المدينة:* ${data.city || 'غير محدد'}%0A` +
                  `• *تاريخ الوصول:* ${data.checkIn || 'غير محدد'}%0A` +
                  `• *تاريخ المغادرة:* ${data.checkOut || 'غير محدد'}%0A` +
                  `• *تفاصيل الإقامة:* ${data.guests || 'شخصين - غرفة واحدة'}`;
    } else if (data.type === "service") {
        message = `*استفسار عن خدمة / تأشيرة* 📄%0A%0A` +
                  `• *نوع الخدمة:* ${data.serviceName}%0A` +
                  `• *ملاحظات العميل:* ${data.details || 'طلب استفسار ومتابعة'}`;
    }

    const url = `https://wa.me/${REDSTAR_WHATSAPP}?text=${message}`;
    window.open(url, "_blank");
}