const REDSTAR_WHATSAPP = "201555988432";
const REVIEW_STORAGE_KEY = "redstar_reviews";

// قاموس الترجمة المعتمد لجميع صفحات الموقع
const translations = {
    ar: {
        dir: "rtl",
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_services: "خدماتنا",
        nav_contact: "تواصل معنا",
        nav_our_work: "أعمالنا",
        hero_eyebrow: "وكالة ريدستار للسياحة والسفر",
        hero_title: "انطلق أبعد مع شريك سفر موثوق ومحترف.",
        hero_text: "حجوزات طيران، فنادق، وتأشيرات مصممة لتلبية احتياجات المسافرين بسرعة ومرونة عبر الشرق الأوسط، إفريقيا، والوجهات العالمية.",
        start_planning: "ابدأ التخطيط",
        speak_whatsapp: "تحدث عبر واتساب",
        stat_flights_title: "تذاكر الطيران",
        stat_flights_text: "حجوزات مباشرة وأفضل المسارات الإقليمية والدولية.",
        stat_hotels_title: "الفنادق",
        stat_hotels_text: "إقامات مختارة بعناية لرجال الأعمال والعائلات.",
        stat_visas_title: "التأشيرات",
        stat_visas_text: "موافقات أمنية وتأشيرات دخول سريعة وموثوقة.",
        quick_search_title: "البحث السريع",
        quick_search_text: "احصل على أفضل الأسعار والتوافر خلال ثوانٍ.",
        tab_flights: "الطيران",
        tab_hotels: "الفنادق",
        round_trip: "ذهاب وعودة",
        one_way: "ذهاب فقط",
        origin_label: "مدينة المغادرة",
        dest_label: "وجهة الوصول",
        dep_date_label: "تاريخ المغادرة",
        ret_date_label: "تاريخ العودة",
        cabin_label: "الدرجة",
        currency_label: "العملة",
        travelers_label: "المسافرون",
        adults: "بالغين",
        kids: "أطفال",
        infants: "رضع",
        search_flights_btn: "طلب حجز الطيران عبر واتساب",
        hotel_dest_label: "المدينة أو الفندق",
        checkin_label: "تاريخ الدخول",
        checkout_label: "تاريخ الخروج",
        rooms_guests_label: "الغرف والنزلاء",
        rooms: "الغرف",
        guests: "البالغين",
        kids_label: "الأطفال",
        search_hotels_btn: "طلب حجز الفندق عبر واتساب",
        featured_kicker: "أبرز الوجهات",
        featured_title: "الوجهات الأكثر طلباً لدى مسافرينا",
        featured_text: "خطوط طيران مباشرة وإقامات مريحة لأهم الوجهات الإقليمية والدولية.",
        destination_dubai_title: "دبي والإمارات",
        destination_dubai_text: "عروض طيران مميزة وإقامات فاخرة للأعمال والعطلات العائلية.",
        destination_saudi_title: "المملكة العربية السعودية",
        destination_saudi_text: "رحلات ميسرة للزيارات والعمرة، وحجوزات طيران لكافة مدن المملكة.",
        destination_egypt_title: "جمهورية مصر العربية",
        destination_egypt_text: "تسهيلات دخول وموافقات أمنية سريعة وحجوزات طيران يومية.",
        destination_turkey_title: "تأشيرات تركيا قريبًا",
        destination_turkey_text: "خدمة التأشيرات التركية ستتوفر قريبًا.",
        destination_qatar_title: "تأشيرة قطر لمقيمي الخليج",
        destination_qatar_text: "إرشاد ومساعدة في متطلبات تأشيرة قطر لمقيمي الخليج.",
        destination_china_title: "تأشيرة الصين لمقيمي الخليج",
        destination_china_text: "تجهيز ومتابعة طلب تأشيرة الصين للمقيمين في الخليج.",
        feedback_kicker: "آراء الزوار",
        feedback_title: "شاركنا رأيك في تجربتك",
        visitor_count_label: "عدد زيارات الموقع حتى الآن:",
        review_name_placeholder: "الاسم",
        review_comment_placeholder: "اكتب رأيك",
        submit_review: "إرسال التقييم",
        work_hero_eyebrow: "أعمالنا",
        work_hero_title: "نماذج من أعمال ريدستار",
        work_hero_text: "شاهد نماذج من خدماتنا ونتائج أعمالنا في مكان واحد.",
        work_gallery_kicker: "معرض الأعمال",
        work_gallery_title: "أعمالنا وخدماتنا",
        work_gallery_text: "يتم تحديث هذا المعرض باستمرار بأحدث نماذج العمل.",
        work_empty: "سيتم إضافة نماذج الأعمال قريبًا.",
        contact_kicker: "تواصل معنا",
        contact_title: "دعنا نخطط لرحلتك القادمة",
        contact_text: "املأ النموذج وسيتواصل معك موظف الحجوزات فوراً عبر الواتساب.",
        contact_name: "الاسم بالكامل",
        contact_phone: "رقم الهاتف / الواتساب",
        contact_service: "الخدمة المطلوبة",
        contact_msg: "تفاصيل الطلب أو مسار الرحلة",
        contact_submit: "إرسال الطلب عبر واتساب",
        footer_copy: "وكالة ريدستار للسفر والسياحة. رحلات مدروسة بثقة.",
        footer_privacy: "سياسة الخصوصية",
        footer_terms: "الشروط والأحكام",

        // about.html
        about_title: "بوابتك الموثوقة للسفر عبر المنطقة",
        about_text: "تلتزم وكالة ريدستار بتقديم خدمات حجز الطيران، استخراج التأشيرات، وحجوزات الفنادق مع متابعة مباشرة واحترافية لكل مسافر.",
        cta_title: "خطط لرحلتك القادمة بثقة واطمئنان",
        cta_text: "فريقنا المتخصص جاهز لخدمتك وتقديم أفضل الخيارات المناسبة لميزانيتك.",
        cta_btn1: "استعرض الخدمات",
        cta_btn2: "تحدث مع ريدستار",
        about_service1_text: "نوفر وصولاً مباشراً لأفضل أسعار تذاكر الطيران الإقليمية والدولية بما في ذلك خطوط الطيران الخاصة برحلات السودان ومصر والخليج وإفريقيا.",
        about_service2_text: "تخليص تأشيرات السعودية بمختلف أنواعها، الموافقات الأمنية لمصر، وتأشيرات دول إفريقيا بكل سرعة ودقة لتسهيل إجراءات سفرك.",
        about_service3_text: "خيارات إقامة مدروسة تلبي متطلبات العائلات والمسافرين للأعمال بأفضل معايير الراحة والقرب من الخدمات والمطارات.",

        // contact.html placeholders + service options
        contact_name_placeholder: "اكتب اسمك الكريم",
        contact_phone_placeholder: "مثال: +249 912345678",
        contact_msg_placeholder: "اكتب خط السير، التواريخ المقترحة، أو أي ملاحظات إضافية...",
        opt_flight: "حجز طيران (بدر / تاركو / خطوط دولية)",
        opt_egypt_security: "الموافقة الأمنية لدخول مصر",
        opt_saudi_visa: "تأشيرات السعودية (عمرة / زيارة / سياحة)",
        opt_oman_visa: "تأشيرة سلطنة عمان",
        opt_africa_visa: "تأشيرات إفريقيا (كينيا / أوغندا / إثيوبيا / رواندا / جوبا)",
        opt_india_visa: "تأشيرة الهند العلاجية ومرافق مريض",
        opt_hotel: "حجوزات الفنادق والشقق الفندقية",
        opt_general: "استفسار عام",

        // services.html
        services_kicker: "خدمات التأشيرات والسياحة",
        our_work_title: "أعمالنا",
        services_title: "حلول السفر الشاملة والتأشيرات المعتمدة",
        services_text: "إنجاز سريع وموثوق لكافة أنواع التأشيرات، الموافقات الأمنية، وتذاكر الطيران المباشرة.",
        saudi_section_title: "تأشيرات المملكة العربية السعودية",
        africa_section_title: "تأشيرات الدول الإفريقية والموافقات",
        svc_tourism_title: "تأشيرة السياحة والعمرة",
        svc_tourism_text: "إصدار تأشيرات الدخول السياحية والعمرة الإلكترونية المتعددة والمفردة مع توفير التأمين الطبي المعتمد.",
        svc_tourism_btn: "طلب التأشيرة",
        svc_family_title: "الزيارات العائلية والشخصية والتجارية",
        svc_family_text: "متابعة مستندات التأشيرة وإجراءات منصة إنجاز، حجوزات مواعيد تساهيل، وتوثيق الطلبات الرسمية.",
        svc_family_btn: "طلب التأشيرة",
        svc_work_title: "تأشيرات العمل وإكمال الإجراءات",
        svc_work_text: "إنجاز متطلبات تفويض التأشيرات والتصديقات والربط الإلكتروني للجوازات بيسر واحترافية.",
        svc_work_btn: "استفسار ومتابعة",
        svc_egypt_title: "الموافقة الأمنية وتأشيرات مصر",
        svc_egypt_text: "استخراج الموافقات الأمنية السريعة للأفراد والعائلات مع خدمات الاستقبال من المطار والإقامة.",
        svc_egypt_btn: "طلب الموافقة",
        svc_eastafrica_title: "تأشيرات شرق إفريقيا (كينيا، أوغندا، إثيوبيا)",
        svc_eastafrica_text: "إصدار تصريح السفر الإلكتروني (eTA) لكينيا، وتأشيرات أوغندا وإثيوبيا ورواندا الإلكترونية السريعة.",
        svc_eastafrica_btn: "طلب تأشيرة إفريقيا",
        request_visa: "طلب التأشيرة",
        svc_kenya_text: "إصدار تصريح السفر الإلكتروني (eTA) ومتابعة متطلبات السفر.",
        svc_uganda_text: "تأشيرة إلكترونية سريعة وتجهيز متطلبات السفر.",
        svc_ethiopia_text: "تقديم طلب التأشيرة الإلكترونية ومراجعة المستندات.",
        svc_tanzania_text: "مساعدة في طلب التأشيرة وترتيب مستندات السفر.",
        svc_rwanda_text: "إجراءات التأشيرة الإلكترونية ومتابعة الطلب.",
        svc_cameroon_text: "تجهيز طلب التأشيرة وتأكيد المتطلبات قبل السفر.",
        svc_zanzibar_text: "مساعدة في متطلبات دخول زنجبار وتجهيز الطلب.",
        asia_gulf_section_title: "تأشيرات آسيا ومقيمي الخليج",
        svc_china_title: "تأشيرة الصين لمقيمي الخليج",
        svc_china_text: "مساعدة في تجهيز طلب تأشيرة الصين للمقيمين في دول الخليج.",
        svc_india_title: "تأشيرة الهند العلاجية لمقيمي مصر",
        svc_india_text: "تتوفر التأشيرة لحاملي الإقامات المصرية: إقامة مفوضية أو إقامة سياحية أو إقامة مؤقتة.",
        svc_qatar_title: "تأشيرة قطر لمقيمي الخليج",
        svc_qatar_text: "إرشاد للمقيمين في الخليج حول متطلبات تأشيرة قطر.",
        svc_oman_title: "تأشيرة عمان لمقيمي الخليج",
        svc_oman_text: "مساعدة في طلب تأشيرة عمان للمقيمين في دول الخليج.",
        svc_southsudan_title: "تأشيرات جنوب السودان وباقي الدول",
        svc_southsudan_text: "تخليص تأشيرات الدخول لجوبا، وتأشيرات سلطنة عمان، وتأشيرات الهند العلاجية والسياحية.",
        svc_southsudan_btn: "طلب الخدمة",

        // hotels.html
        hotels_hero_eyebrow: "الفنادق",
        hotels_hero_title: "قنوات حجز فندقية للإقامات القصيرة، رحلات العائلة، والحجوزات المميزة.",
        hotels_hero_text: "اختر منصة الحجز من الأسفل، أو ابدأ من نموذج البحث في الصفحة الرئيسية إذا أردت الفلترة حسب الوجهة أولاً.",
        agoda_text: "مناسبة لعروض الفنادق في آسيا والشرق الأوسط ووجهات المدن الكبرى.",
        hotelscom_text: "مفيدة لمقارنة فنادق المدن، إقامات الأعمال، والحجوزات بنظام النقاط.",
        booking_text: "مخزون عالمي قوي للفنادق والشقق والإقامات العائلية.",
        open_agoda: "فتح Agoda",
        open_hotels: "فتح Hotels.com",
        open_booking: "فتح Booking.com",

        // flights.html
        flights_hero_eyebrow: "الطيران",
        flights_hero_title: "قنوات حجز الطيران المباشرة في مكان واحد.",
        flights_hero_text: "استخدم هذه الروابط إذا كنت تعرف شركة الطيران المفضلة لديك مسبقاً، أو عد للصفحة الرئيسية لبحث سفر أشمل.",
        dir_kicker: "دليل شركات الطيران",
        dir_title: "قنوات حجز مفيدة للمسارات الإقليمية والدولية.",
        dir_text: "هذه مواقع حجز خارجية. كل زر يفتح قناة الحجز الرسمية أو المعروفة في نافذة جديدة.",
        ndc_text: "قناة حجز بديلة للاطلاع على المخزون المتاح لدى شركات الطيران.",
        badr_text: "مفيدة لرحلات السودان والمسارات الإقليمية القريبة.",
        tarco_text: "حجز شركة طيران إقليمية ومعلومات المسارات.",
        open_ndc: "فتح NDC",
        visit_site: "زيارة الموقع",

        // privacy.html
        privacy_eyebrow: "سياسة الخصوصية",
        privacy_title: "كيف تتعامل ريدستار ترافل مع بيانات الزوار والاستفسارات.",
        privacy_intro: "توضح سياسة الخصوصية هذه كيف نجمع ونستخدم المعلومات الأساسية عند التواصل أو استخدام الموقع.",
        privacy_effective_label: "تاريخ السريان",
        privacy_effective_date: "9 أبريل 2026",
        privacy_effective_text: "تنطبق هذه السياسة على الزوار والعملاء الذين يستخدمون الموقع، أو الواتساب، أو الهاتف، أو البريد الإلكتروني.",
        privacy_collect_title: "المعلومات التي نجمعها",
        privacy_collect_text: "قد نجمع الاسم ورقم الهاتف والبريد الإلكتروني والوجهة وتواريخ السفر وتفاصيل الخدمة المطلوبة عند التواصل مع ريدستار ترافل.",
        privacy_use_title: "كيف نستخدم المعلومات",
        privacy_use_1: "للرد على الاستفسارات ودعم الحجوزات أو طلبات التأشيرات.",
        privacy_use_2: "لمتابعة المساعدة السياحية والتواصل مع العملاء.",
        privacy_use_3: "لمشاركة مسارات الحجز أو الشراكات المناسبة عند الحاجة.",
        privacy_third_title: "خدمات الطرف الثالث",
        privacy_third_text: "قد يوجه الموقع المستخدمين إلى شركات الطيران، مزودي الفنادق، الواتساب، خدمات الأفلييت، أو شركاء السفر. للمواقع الخارجية سياسات خصوصية وشروط خاصة بها.",
        privacy_share_title: "مشاركة البيانات",
        privacy_share_text: "لا نبيع البيانات الشخصية. نشارك فقط التفاصيل اللازمة لدعم خدمة أو حجز مطلوب.",
        privacy_contact_title: "التواصل",
        privacy_contact_email: "البريد الإلكتروني: info@redstar-travel.com",
        privacy_contact_whatsapp: "واتساب: +249 912 327 987",

        // terms.html
        terms_eyebrow: "الشروط والأحكام",
        terms_title: "شروط خدمة بسيطة لاستخدام ريدستار ترافل.",
        terms_intro: "توضح هذه الشروط حدود الخدمة وطريقة استخدام الموقع وروابط الحجز وخدمات التأشيرات والاستفسارات.",
        terms_effective_label: "تاريخ السريان",
        terms_effective_date: "9 أبريل 2026",
        terms_effective_text: "باستخدامك لهذا الموقع فإنك توافق على هذه الشروط وأي تحديثات مستقبلية تُنشر هنا.",
        terms_scope_title: "نطاق الخدمة",
        terms_scope_text: "تقدم ريدستار ترافل معلومات سفر، معالجة استفسارات، دعم حجوزات، إرشاد فندقي، مساعدة تأشيرات، ومسارات حجز مع أطراف ثالثة.",
        terms_guarantee_title: "لا يوجد ضمان للحجز أو الموافقة",
        terms_guarantee_text: "إرسال استفسار لا يضمن توفر السعر، تأكيد الحجز، الحجز النهائي، أو الموافقة على التأشيرة. القرار النهائي يعتمد على مزودي الخدمة والجهات الرسمية الخارجية.",
        terms_pricing_title: "الأسعار والتوافر",
        terms_pricing_text: "قد تتغير الأسعار المعروضة وملاحظات السفر في أي وقت. يجب على المستخدمين تأكيد التفاصيل النهائية قبل الدفع أو الالتزام بالسفر.",
        terms_third_title: "روابط الطرف الثالث",
        terms_third_text: "قد نربط بمواقع شركات الطيران، الفنادق، الواتساب، منصات الأفلييت، وشركاء آخرين. ريدستار ترافل غير مسؤولة عن محتوى أو سياسات أو معاملات الأطراف الثالثة.",
        terms_user_title: "مسؤولية المستخدم",
        terms_user_1: "تقديم معلومات صحيحة ومستندات سفر سارية.",
        terms_user_2: "مراجعة شروط وأحكام الشركاء قبل الدفع.",
        terms_user_3: "استخدام الموقع بشكل قانوني ومحترم.",
        terms_contact_title: "التواصل",
        terms_contact_email: "البريد الإلكتروني: info@redstar-travel.com",
        terms_contact_whatsapp: "واتساب: +249 912 327 987",

        // passenger-details.html
        pd_heading: "بيانات المسافر الرئيسي",
        pd_label_name: "الاسم بالكامل (كما في جواز السفر)",
        pd_placeholder_name: "مثلاً: محمد أحمد علي",
        pd_label_passport: "رقم جواز السفر",
        pd_label_phone: "رقم الهاتف (واتساب)",
        pd_label_email: "البريد الإلكتروني",
        pd_btn_next: "الانتقال لتأكيد الدفع",

        // payment-demo.html
        pay_heading: "إتمام الدفع عبر بنكك",
        pay_instruction: "الرجاء تحويل المبلغ إلى حساب وكالة ريد ستار",
        pay_total_label: "إجمالي",
        pay_placeholder_ref: "أدخل رقم المرجع (Reference Number)",
        pay_btn_confirm: "تأكيد عملية التحويل",
        pay_success_heading: "✅ تم الحجز بنجاح",
        pay_success_ticket_label: "رقم التذكرة",
        pay_success_note: "سيتم إرسال التذكرة إلى بريدك الإلكتروني فوراً.",
        pay_btn_home: "العودة للرئيسية",

        // visa/visa.html
        visa_dir_hero_eyebrow: "دليل التأشيرات",
        visa_dir_hero_title: "اختر وجهة التأشيرة وانتقل مباشرة إلى التفاصيل الصحيحة.",
        visa_dir_hero_text: "تصفح صفحات الدول للاطلاع على المتطلبات وملاحظات الخدمة وإجراءات الاستفسار المباشر عبر ريدستار.",
        saudi_country: "المملكة العربية السعودية",
        visa_dir_saudi_text: "زيارة، عائلية، عمرة، وإرشادات السفر.",
        open_page: "فتح الصفحة",
        uae_country: "الإمارات",
        visa_dir_uae_text: "مسارات تأشيرة سياحية وخيارات متعددة حسب ملف المسافر.",
        egypt_country: "مصر",
        visa_dir_egypt_text: "دعم سريع للموافقات الأمنية ومراجعة سريعة للمستندات.",
        africa_card_title: "تأشيرات أفريقيا",
        africa_card_text: "خيارات تأشيرات لوجهات أفريقية مختارة مع متطلبات واضحة ولمحة عن الأسعار.",
        africa_visas: "تأشيرات أفريقيا",
        visa_directory: "دليل التأشيرات",

        // visa/saudi.html
        saudi_hero_eyebrow: "المملكة العربية السعودية",
        saudi_hero_title: "دعم لرحلات الزيارة والرحلات العائلية والرحلات الدينية.",
        saudi_hero_text: "تساعدك ريدستار في توجيه استفسارك نحو فئة السفر السعودية الصحيحة حتى تجهز المستندات الصحيحة مبكراً.",
        saudi_family_title: "زيارة عائلية",
        saudi_family_egypt: "من مصر: 10,500 جنيه مصري",
        saudi_family_sudan: "من السودان: 950,000 جنيه سوداني",
        saudi_umrah_title: "عمرة",
        saudi_umrah_text: "سيتم فتح باب التقديم بعد موسم الحج.",
        saudi_tourist_title: "زيارة سياحية لمقيمي دول الخليج",
        saudi_tourist_req_1: "نسخة جواز سفر سارية لمدة 6 أشهر",
        saudi_tourist_req_2: "نسخة هوية أو إقامة سارية",
        saudi_tourist_req_3: "صورة شخصية بخلفية بيضاء",
        saudi_tourist_price: "السعر: 600 درهم إماراتي",
        need_help: "محتاج مساعدة في استفسار تأشيرة السعودية؟",
        need_help_text: "افتح الواتساب برسالة معبأة مسبقاً ودع ريدستار يرشدك للمتطلبات التالية.",
        inquire_whatsapp: "استفسر عبر واتساب",
        back_visa: "العودة لدليل التأشيرات",

        // visa/uae.html
        uae_hero_eyebrow: "تأشيرة الإمارات",
        uae_hero_title: "دعم مرن لتأشيرة الإمارات السياحية لمختلف ملفات المسافرين.",
        uae_hero_text: "مناسبة للمسافرين المخططين لإقامات ترفيهية قصيرة، زيارات عائلية، أو سفر عبر منطقة الخليج.",
        uae_month_title: "تأشيرة شهر واحد",
        uae_month_adult: "بالغ: 650 درهم",
        uae_month_child: "طفل: 300 درهم",
        uae_two_month_title: "تأشيرة شهرين",
        uae_two_month_adult: "بالغ: 800 درهم",
        uae_two_month_child: "طفل: 330 درهم",
        uae_two_month_adult_guarantee: "بالغ مع ضمان: 1030 درهم (970 درهم قابلة للاسترداد). تنطبق على تأشيرات الدخول الواحد.",
        uae_multi_title: "تأشيرة شهرين متعددة الدخول",
        uae_multi_adult: "بالغ مع ضمان: 2230 درهم (1970 درهم قابلة للاسترداد)",
        uae_resident_title: "دعم لمقيمي دول الخليج / أوروبا أو الزيارة",
        uae_resident_item_1: "شهر واحد للبالغ: 800 درهم",
        uae_resident_item_2: "شهرين للبالغ: 1100 درهم",
        uae_resident_item_3: "شهر واحد للعائلة: 800 درهم للبالغ، 350 درهم للطفل",
        uae_resident_item_4: "شهرين للعائلة: 1000 درهم للبالغ، 500 درهم للطفل",
        uae_requirements_title: "المستندات المطلوبة",
        uae_doc_1: "نسخة جواز سفر سارية لمدة 6 أشهر",
        uae_doc_2: "صورة شخصية",
        uae_terms_title: "الشروط والأحكام",
        uae_terms_text: "في حال تجاوز المسافر مدة الإقامة أو مخالفة شروط التأشيرة، يتحمل الوكيل رسوم بلاغ هروب بقيمة 3500 درهم بالإضافة إلى أي غرامات ذات صلة.",
        ready_uae: "جاهز للاستفسار عن تأشيرة الإمارات؟",
        ready_uae_text: "أرسل استفسارك مباشرة لريدستار وسنرشدك للخيار الصحيح حسب ملف سفرك.",

        // visa/egypt.html
        egypt_hero_eyebrow: "دعم السفر إلى مصر",
        egypt_hero_title: "دعم سريع للموافقة الأمنية على مصر عندما يكون الوقت مهماً.",
        egypt_hero_text: "استخدم ريدستار للمتابعة الموجهة لدعم السفر المتعلق بمصر، خاصة عندما يحتاج المسافرون مساراً سريعاً ومستندات واضحة.",
        egypt_requirements_title: "المتطلبات",
        egypt_req_1: "جواز سفر ساري لمدة 6 أشهر",
        egypt_req_2: "وجهة الوصول",
        egypt_price_title: "السعر",
        egypt_price_text: "يبدأ من 470 دولار",
        order_label: "للطلب اضغط",
        here_link: "هنا",
        start_egypt: "ابدأ استفسارك عن مصر الآن.",
        start_egypt_text: "سنجهز رسالتك للواتساب حتى ترسل الطلب لريدستار فوراً.",
        send_inquiry: "إرسال الاستفسار",

        // visa/africa.html
        africa_hero_eyebrow: "دعم تأشيرات أفريقيا",
        africa_hero_title: "وجهات أفريقية مختارة مع إرشاد سريع للمتطلبات.",
        africa_hero_text: "استخدم هذه الصفحة كنقطة بداية للاطلاع على لمحة الأسعار وملاحظات المتطلبات الأساسية قبل إرسال استفسارك لريدستار.",
        tanzania_country: "تنزانيا",
        requirements_label: "المتطلبات",
        req_passport_photo: "نسخة جواز سفر + صورة شخصية",
        price_label: "السعر",
        price_70: "70 دولار",
        ethiopia_country: "إثيوبيا",
        price_75: "75 دولار",
        rwanda_country: "رواندا",
        uganda_country: "أوغندا",
        req_passport_photo_yellow: "نسخة جواز سفر + صورة شخصية + شهادة الحمى الصفراء",
        price_65: "65 دولار",
        south_sudan_country: "جنوب السودان",
        price_80: "80 دولار",
        cameroon_country: "الكاميرون",
        price_90: "90 دولار",
        kenya_country: "كينيا",
        price_60: "60 دولار",
        zanzibar_country: "زنجبار",
        africa_ask: "استفسر من ريدستار عن تأشيرة أفريقيا.",
        africa_ask_text: "يمكننا تأكيد أحدث المستندات، المساعدة في توجيه الأسعار، وإرشادك للخطوات الخاصة بالوجهة."
    },
    en: {
        dir: "ltr",
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",
        nav_our_work: "Our Work",
        hero_eyebrow: "RedStar Premium Travel Desk",
        hero_title: "Explore farther with a sharper travel partner.",
        hero_text: "Flights, hotels, and visa support designed for travelers who want fast answers, elegant planning, and smooth next steps across the Middle East, Africa, and beyond.",
        start_planning: "Start Planning",
        speak_whatsapp: "Speak On WhatsApp",
        stat_flights_title: "Flights",
        stat_flights_text: "Direct links and flexible route planning.",
        stat_hotels_title: "Hotels",
        stat_hotels_text: "Curated stays for business and family travel.",
        stat_visas_title: "Visas",
        stat_visas_text: "Clear requirements with fast inquiry support.",
        quick_search_title: "Quick Search",
        quick_search_text: "Compare your next move in a few seconds.",
        tab_flights: "Flights",
        tab_hotels: "Hotels",
        round_trip: "Round Trip",
        one_way: "One Way",
        origin_label: "Origin",
        dest_label: "Destination",
        dep_date_label: "Departure Date",
        ret_date_label: "Return Date",
        cabin_label: "Cabin Class",
        currency_label: "Currency",
        travelers_label: "Travelers",
        adults: "Adults",
        kids: "Children",
        infants: "Infants",
        search_flights_btn: "Request Flight on WhatsApp",
        hotel_dest_label: "Destination",
        checkin_label: "Check-in",
        checkout_label: "Check-out",
        rooms_guests_label: "Rooms & Guests",
        rooms: "Rooms",
        guests: "Guests",
        kids_label: "Kids",
        search_hotels_btn: "Request Hotel on WhatsApp",
        featured_kicker: "Featured Destinations",
        featured_title: "Popular routes our travelers keep returning to.",
        featured_text: "Direct airline connections and curated stays for top regional and global destinations.",
        destination_dubai_title: "Dubai and the UAE",
        destination_dubai_text: "Special flight offers and premium stays for business and family holidays.",
        destination_saudi_title: "Saudi Arabia",
        destination_saudi_text: "Convenient journeys for visits and Umrah, with flights to cities across the Kingdom.",
        destination_egypt_title: "Egypt",
        destination_egypt_text: "Entry support, fast security approvals, and daily flight bookings.",
        destination_turkey_title: "Turkey Visas Coming Soon",
        destination_turkey_text: "Turkey visa service will be available soon.",
        destination_qatar_title: "Qatar Visa for Gulf Residents",
        destination_qatar_text: "Guidance and support with Qatar visa requirements for Gulf residents.",
        destination_china_title: "China Visa for Gulf Residents",
        destination_china_text: "China visa application preparation and follow-up for Gulf residents.",
        feedback_kicker: "Visitor Reviews",
        feedback_title: "Tell us about your experience",
        visitor_count_label: "Total site visits:",
        review_name_placeholder: "Name",
        review_comment_placeholder: "Write your review",
        submit_review: "Submit Review",
        work_hero_eyebrow: "Our Work",
        work_hero_title: "Selected RedStar work",
        work_hero_text: "Explore examples of our services and completed work in one place.",
        work_gallery_kicker: "Work Gallery",
        work_gallery_title: "Our Work and Services",
        work_gallery_text: "This gallery is updated with new work examples over time.",
        work_empty: "Work examples will be added soon.",
        contact_kicker: "Get in Touch",
        contact_title: "Let’s Plan Your Journey",
        contact_text: "Fill in the details below and our team will connect with you immediately via WhatsApp.",
        contact_name: "Full Name",
        contact_phone: "Phone Number / WhatsApp",
        contact_service: "Service Needed",
        contact_msg: "Message / Travel Details",
        contact_submit: "Send Inquiry via WhatsApp",
        footer_copy: "RedStar Travel. Crafted for confident journeys.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms & Conditions",

        // about.html
        about_title: "Your trusted gateway for travel across the region",
        about_text: "RedStar Travel is committed to delivering flight bookings, visa processing, and hotel reservations with direct, professional follow-up for every traveler.",
        cta_title: "Plan your next trip with confidence",
        cta_text: "Our specialized team is ready to serve you and offer the best options for your budget.",
        cta_btn1: "Browse Services",
        cta_btn2: "Talk to RedStar",
        about_service1_text: "We provide direct access to the best regional and international flight ticket prices, including carriers serving Sudan, Egypt, the Gulf, and Africa.",
        about_service2_text: "Fast, accurate processing of Saudi visas of all kinds, Egypt security clearances, and African country visas to smooth your travel procedures.",
        about_service3_text: "Carefully selected stays that meet the needs of families and business travelers, with top comfort standards close to services and airports.",

        // contact.html placeholders + service options
        contact_name_placeholder: "Enter your full name",
        contact_phone_placeholder: "e.g. 01555988432",
        contact_msg_placeholder: "Write your itinerary, preferred dates, or any extra notes...",
        opt_flight: "Flight Booking (Badr / Tarco / International)",
        opt_egypt_security: "Egypt Entry Security Clearance",
        opt_saudi_visa: "Saudi Visas (Umrah / Visit / Tourism)",
        opt_oman_visa: "Oman Visa",
        opt_africa_visa: "Africa Visas (Kenya / Uganda / Ethiopia / Rwanda / Juba)",
        opt_india_visa: "India Medical Visa & Attendant",
        opt_hotel: "Hotel & Apartment Bookings",
        opt_general: "General Inquiry",

        // services.html
        services_kicker: "Visa & Travel Services",
        our_work_title: "Our Work",
        services_title: "Complete travel solutions and approved visas",
        services_text: "Fast, reliable processing for all visa types, security clearances, and direct flight tickets.",
        saudi_section_title: "Kingdom of Saudi Arabia Visas",
        africa_section_title: "African Country Visas & Clearances",
        svc_tourism_title: "Tourism & Umrah Visa",
        svc_tourism_text: "Issuance of single and multiple-entry tourism and e-Umrah visas, with approved medical insurance included.",
        svc_tourism_btn: "Request Visa",
        svc_family_title: "Family, Personal & Business Visits",
        svc_family_text: "Follow-up on visa documents and Enjaz platform procedures, Tasaheel appointment bookings, and official request documentation.",
        svc_family_btn: "Request Visa",
        svc_work_title: "Work Visas & Procedure Completion",
        svc_work_text: "Handling visa authorization requirements, attestations, and electronic passport linking with ease and professionalism.",
        svc_work_btn: "Inquire & Follow Up",
        svc_egypt_title: "Egypt Security Clearance & Visas",
        svc_egypt_text: "Fast security clearances for individuals and families, plus airport pickup and accommodation services.",
        svc_egypt_btn: "Request Clearance",
        svc_eastafrica_title: "East Africa Visas (Kenya, Uganda, Ethiopia)",
        svc_eastafrica_text: "Issuing Kenya's electronic Travel Authorization (eTA), plus fast e-visas for Uganda, Ethiopia, and Rwanda.",
        svc_eastafrica_btn: "Request Africa Visa",
        request_visa: "Request Visa",
        svc_kenya_text: "Electronic Travel Authorization (eTA) support and travel requirement guidance.",
        svc_uganda_text: "Fast e-visa support and travel document preparation.",
        svc_ethiopia_text: "E-visa application support and document review.",
        svc_tanzania_text: "Visa application support and travel document preparation.",
        svc_rwanda_text: "E-visa processing support and application follow-up.",
        svc_cameroon_text: "Visa application preparation and pre-travel requirement confirmation.",
        svc_zanzibar_text: "Support with Zanzibar entry requirements and application preparation.",
        asia_gulf_section_title: "Asia and Gulf Resident Visas",
        svc_china_title: "China Visa for Gulf Residents",
        svc_china_text: "Support preparing China visa applications for Gulf residents.",
        svc_india_title: "India Medical Visa for Egypt Residents",
        svc_india_text: "Available for holders of Egyptian residencies: consular, tourist, or temporary residency.",
        svc_qatar_title: "Qatar Visa for Gulf Residents",
        svc_qatar_text: "Guidance on Qatar visa requirements for Gulf residents.",
        svc_oman_title: "Oman Visa for Gulf Residents",
        svc_oman_text: "Support with Oman visa applications for Gulf residents.",
        svc_southsudan_title: "South Sudan Visa & Other Destinations",
        svc_southsudan_text: "Processing entry visas for Juba, Oman visas, and India medical and tourist visas.",
        svc_southsudan_btn: "Request Service",

        // hotels.html
        hotels_hero_eyebrow: "Hotels",
        hotels_hero_title: "Hotel channels for short stays, family trips, and premium reservations.",
        hotels_hero_text: "Choose a booking platform below or start from the search form on the home page if you want destination-based filtering first.",
        agoda_text: "Good for hotel deals across Asia, the Middle East, and major city destinations.",
        hotelscom_text: "Useful for comparing city hotels, business stays, and reward-based bookings.",
        booking_text: "Strong global inventory for hotels, apartments, and family-friendly stays.",
        open_agoda: "Open Agoda",
        open_hotels: "Open Hotels.com",
        open_booking: "Open Booking.com",

        // flights.html
        flights_hero_eyebrow: "Flights",
        flights_hero_title: "Direct airline and booking channels in one place.",
        flights_hero_text: "Use these links when you already know your preferred carrier, or move back to the home page for a broader travel search.",
        dir_kicker: "Airline Directory",
        dir_title: "Useful booking channels for regional and international routes.",
        dir_text: "These are external booking websites. Each button opens the official or known booking channel in a new tab.",
        ndc_text: "Alternative booking channel for available airline inventory.",
        badr_text: "Useful for Sudan and nearby regional routes.",
        tarco_text: "Regional airline booking and route information.",
        open_ndc: "Open NDC",
        visit_site: "Visit Site",

        // privacy.html
        privacy_eyebrow: "Privacy Policy",
        privacy_title: "How RedStar Travel handles visitor and inquiry information.",
        privacy_intro: "This privacy policy explains how we collect and use essential information when you contact us or use the website.",
        privacy_effective_label: "Effective Date",
        privacy_effective_date: "April 9, 2026",
        privacy_effective_text: "This policy applies to visitors and customers who use the website, WhatsApp inquiry flows, phone, or email channels.",
        privacy_collect_title: "Information We Collect",
        privacy_collect_text: "We may collect your name, phone number, email address, destination, travel dates, and service request details when you contact RedStar Travel.",
        privacy_use_title: "How We Use Information",
        privacy_use_1: "To reply to inquiries and support bookings or visa requests.",
        privacy_use_2: "To follow up on travel assistance and customer communication.",
        privacy_use_3: "To share suitable booking or partner pathways when relevant.",
        privacy_third_title: "Third-Party Services",
        privacy_third_text: "The website may redirect users to airlines, hotel providers, WhatsApp, affiliate services, or travel partners. External websites have their own privacy policies and terms.",
        privacy_share_title: "Data Sharing",
        privacy_share_text: "We do not sell personal data. We only share relevant details when necessary to support a requested service or booking handoff.",
        privacy_contact_title: "Contact",
        privacy_contact_email: "Email: redstarfortravel@gmail.com",
        privacy_contact_whatsapp: "WhatsApp: +249 912327987",

        // terms.html
        terms_eyebrow: "Terms of Service",
        terms_title: "Simple service terms for using RedStar Travel.",
        terms_intro: "These terms explain the scope of service and how to use the website, booking links, and visa and inquiry services.",
        terms_effective_label: "Effective Date",
        terms_effective_date: "April 9, 2026",
        terms_effective_text: "By using this website, you agree to these terms and any future updates posted here.",
        terms_scope_title: "Service Scope",
        terms_scope_text: "RedStar Travel provides travel information, inquiry handling, booking support, hotel guidance, visa assistance, and third-party booking pathways.",
        terms_guarantee_title: "No Guaranteed Booking Or Approval",
        terms_guarantee_text: "Submitting an inquiry does not guarantee fare availability, booking confirmation, reservation, or visa approval. Final decisions depend on external providers and authorities.",
        terms_pricing_title: "Pricing And Availability",
        terms_pricing_text: "Displayed prices and travel notes may change at any time. Users should confirm final details before making any payment or travel commitment.",
        terms_third_title: "Third-Party Links",
        terms_third_text: "We may link to airlines, hotels, WhatsApp, affiliate platforms, and partner services. RedStar Travel is not responsible for third-party content, policies, or transactions.",
        terms_user_title: "User Responsibility",
        terms_user_1: "Provide correct information and valid travel documents.",
        terms_user_2: "Review partner terms and conditions before payment.",
        terms_user_3: "Use the website lawfully and respectfully.",
        terms_contact_title: "Contact",
        terms_contact_email: "Email: redstarfortravel@gmail.com",
        terms_contact_whatsapp: "WhatsApp: +249 912327987",

        // passenger-details.html
        pd_heading: "Main Passenger Details",
        pd_label_name: "Full Name (as in passport)",
        pd_placeholder_name: "e.g. Mohamed Ahmed Ali",
        pd_label_passport: "Passport Number",
        pd_label_phone: "Phone Number (WhatsApp)",
        pd_label_email: "Email Address",
        pd_btn_next: "Continue to Payment Confirmation",

        // payment-demo.html
        pay_heading: "Complete Payment via Bankak",
        pay_instruction: "Please transfer the amount to the RedStar Travel agency account",
        pay_total_label: "Total",
        pay_placeholder_ref: "Enter Reference Number",
        pay_btn_confirm: "Confirm Transfer",
        pay_success_heading: "✅ Booking Confirmed",
        pay_success_ticket_label: "Ticket Number",
        pay_success_note: "The ticket will be sent to your email shortly.",
        pay_btn_home: "Back to Home",

        // visa/visa.html
        visa_dir_hero_eyebrow: "Visa Directory",
        visa_dir_hero_title: "Choose a visa destination and move straight to the right details.",
        visa_dir_hero_text: "Browse country pages for requirements, service notes, and direct inquiry actions through RedStar.",
        saudi_country: "Saudi Arabia",
        visa_dir_saudi_text: "Visit, family, Umrah, and travel guidance.",
        open_page: "Open Page",
        uae_country: "UAE",
        visa_dir_uae_text: "Tourist visa pathways and traveler profile options.",
        egypt_country: "Egypt",
        visa_dir_egypt_text: "Fast security approval support and quick document review.",
        africa_card_title: "Africa Visas",
        africa_card_text: "Visa options for selected African destinations with clear requirements and pricing snapshots.",
        africa_visas: "Africa Visas",
        visa_directory: "Visa Directory",

        // visa/saudi.html
        saudi_hero_eyebrow: "Saudi Arabia",
        saudi_hero_title: "Support for visit travel, family travel, and religious journeys.",
        saudi_hero_text: "RedStar helps direct your inquiry toward the right Saudi travel category so you can prepare the correct documents early.",
        saudi_family_title: "Family Visit",
        saudi_family_egypt: "From Egypt: 10,500 EGP",
        saudi_family_sudan: "From Sudan: 950,000 SDG",
        saudi_umrah_title: "Umrah",
        saudi_umrah_text: "Applications will open after Hajj.",
        saudi_tourist_title: "Tourist Visit for GCC Residents",
        saudi_tourist_req_1: "Passport copy valid for 6 months",
        saudi_tourist_req_2: "ID or residence permit copy valid",
        saudi_tourist_req_3: "Personal photo with white background",
        saudi_tourist_price: "Price: 600 AED",
        need_help: "Need help with a Saudi visa inquiry?",
        need_help_text: "Open WhatsApp with a pre-filled message and let RedStar guide the next requirements.",
        inquire_whatsapp: "Inquire on WhatsApp",
        back_visa: "Back to Visa Directory",

        // visa/uae.html
        uae_hero_eyebrow: "UAE Visa",
        uae_hero_title: "Flexible UAE tourist visa support for different traveler profiles.",
        uae_hero_text: "Suitable for travelers planning short leisure stays, family visits, or travel routed through the Gulf region.",
        uae_month_title: "One-Month Visa",
        uae_month_adult: "Adult: 650 AED",
        uae_month_child: "Child: 300 AED",
        uae_two_month_title: "Two-Month Visa",
        uae_two_month_adult: "Adult: 800 AED",
        uae_two_month_child: "Child: 330 AED",
        uae_two_month_adult_guarantee: "Adult with guarantee: 1030 AED (970 AED refundable). This applies to single-entry visas.",
        uae_multi_title: "Two-Month Multiple Entry Visa",
        uae_multi_adult: "Adult with guarantee: 2230 AED (1970 AED refundable)",
        uae_resident_title: "GCC / Europe Residents or Visit Support",
        uae_resident_item_1: "One month adult: 800 AED",
        uae_resident_item_2: "Two months adult: 1100 AED",
        uae_resident_item_3: "One month family: 800 AED per adult, 350 AED per child",
        uae_resident_item_4: "Two months family: 1000 AED per adult, 500 AED per child",
        uae_requirements_title: "Required Documents",
        uae_doc_1: "Passport copy valid for 6 months",
        uae_doc_2: "Personal photo",
        uae_terms_title: "Terms & Conditions",
        uae_terms_text: "If the traveler overstays or breaks the visa rules, the agent must pay an absconding report fee of 3500 AED plus any related fines.",
        ready_uae: "Ready to ask about the UAE visa?",
        ready_uae_text: "Send a direct inquiry to RedStar and we will guide you through the right visa option for your travel profile.",

        // visa/egypt.html
        egypt_hero_eyebrow: "Egypt Travel Support",
        egypt_hero_title: "Fast Egypt security approval support when timing matters.",
        egypt_hero_text: "Use RedStar for guided follow-up on Egypt-related travel support, especially when travelers need a quick path and clear next documents.",
        egypt_requirements_title: "Requirements",
        egypt_req_1: "Passport valid for 6 months",
        egypt_req_2: "Arrival destination",
        egypt_price_title: "Price",
        egypt_price_text: "Starting from $470",
        order_label: "To order click",
        here_link: "here",
        start_egypt: "Start your Egypt inquiry now.",
        start_egypt_text: "We will prepare your message for WhatsApp so you can send the request to RedStar immediately.",
        send_inquiry: "Send Inquiry",

        // visa/africa.html
        africa_hero_eyebrow: "Africa Visa Support",
        africa_hero_title: "Selected African destinations with quick requirement guidance.",
        africa_hero_text: "Use this page as a starting point for pricing snapshots and basic requirement notes before sending your inquiry to RedStar.",
        tanzania_country: "Tanzania",
        requirements_label: "Requirements",
        req_passport_photo: "Passport copy + personal photo",
        price_label: "Price",
        price_70: "$70",
        ethiopia_country: "Ethiopia",
        price_75: "$75",
        rwanda_country: "Rwanda",
        uganda_country: "Uganda",
        req_passport_photo_yellow: "Passport copy + personal photo + yellow fever card",
        price_65: "$65",
        south_sudan_country: "South Sudan",
        price_80: "$80",
        cameroon_country: "Cameroon",
        price_90: "$90",
        kenya_country: "Kenya",
        price_60: "$60",
        zanzibar_country: "Zanzibar",
        africa_ask: "Ask RedStar about an Africa visa.",
        africa_ask_text: "We can confirm the latest documents, help with pricing guidance, and direct you toward the right destination-specific steps."
    }
};

// وظيفة تبديل اللغات
function setLanguage(lang) {
    localStorage.setItem("redstar_lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir;

    document.querySelectorAll("[data-i18n]").forEach(elem => {
        const key = elem.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            elem.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
        const key = elem.getAttribute("data-i18n-placeholder");
        if (translations[lang] && translations[lang][key]) {
            elem.setAttribute("placeholder", translations[lang][key]);
        }
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    // Let page-specific scripts (results.js, hotel-results.js, payment-demo) re-render
    document.dispatchEvent(new CustomEvent("redstar:language-changed", { detail: { lang } }));
}

// تشغيل التبويبات (Tabs)
function openTab(evt, tabName) {
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    const targetTab = document.getElementById(tabName);
    if (targetTab) targetTab.classList.add("active");
    if (evt && evt.currentTarget) evt.currentTarget.classList.add("active");
}

// تبديل نوع الرحلة (ذهاب وعودة / ذهاب فقط)
function toggleReturn(isRoundTrip) {
    const returnBox = document.getElementById("return-box");
    if (returnBox) {
        returnBox.style.display = isRoundTrip ? "block" : "none";
    }
}

function isArabicPage() {
    return document.documentElement.lang === "ar";
}

function openWhatsAppMessage(message, phoneNumber = REDSTAR_WHATSAPP) {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

function sendFlightToWhatsApp(message) {
    openWhatsAppMessage(message);
}

// 1. معالجة طلب الطيران
function formatTravelerCount(count, singular, plural, language) {
    const numericCount = Number(count);
    if (language === "en") {
        return `${numericCount} ${numericCount === 1 ? singular : plural}`;
    }
    if (numericCount === 1) {
        return `واحد ${singular}`;
    }
    return `${numericCount} ${plural}`;
}

function searchFlights() {
    const language = isArabicPage() ? "ar" : "en";
    const origin = document.getElementById("flight-origin")?.value.trim() || (language === "ar" ? "غير محدد" : "Not specified");
    const dest = document.getElementById("flight-dest")?.value.trim() || (language === "ar" ? "غير محدد" : "Not specified");
    const departure = document.getElementById("flight-departure")?.value || (language === "ar" ? "غير محدد" : "Not specified");
    const returnDate = document.getElementById("flight-return")?.value;
    const tripType = document.querySelector('input[name="trip-type"]:checked')?.value || "round-trip";
    const cabin = document.getElementById("flight-cabin")?.value || "Economy";
    const currency = document.getElementById("flight-currency")?.value || "USD";
    const adults = document.getElementById("adults")?.value || 1;
    const kids = document.getElementById("kids")?.value || 0;
    const infants = document.getElementById("infants")?.value || 0;

    const english = language === "en";
    let msg = english
        ? `*New Flight Booking Request (RedStar Travel)* ✈️\n\n• *Route:* From ${origin} to ${dest}\n• *Trip type:* ${tripType === 'round-trip' ? 'Round trip' : 'One way'}\n• *Travel date:* ${departure}\n`
        : `*طلب حجز طيران جديد (RedStar Travel)* ✈️\n\n• *خط السير:* من ${origin} إلى ${dest}\n• *نوع الرحلة:* ${tripType === 'round-trip' ? 'ذهاب وعودة' : 'ذهاب فقط'}\n• *تاريخ السفر:* ${departure}\n`;

    if (tripType === 'round-trip' && returnDate) {
        msg += english ? `• *Return date:* ${returnDate}\n` : `• *تاريخ العودة:* ${returnDate}\n`;
    }

    msg += english
        ? `• *Cabin:* ${cabin}\n• *Travelers:* ${formatTravelerCount(adults, 'adult', 'adults', language)}, ${formatTravelerCount(kids, 'child', 'children', language)}, ${formatTravelerCount(infants, 'infant', 'infants', language)}\n• *Currency:* ${currency}\n\n_I would like to receive the available prices and seats for this trip._`
        : `• *الدرجة:* ${cabin}\n• *المسافرون:* ${formatTravelerCount(adults, 'بالغ', 'بالغين', language)}، ${formatTravelerCount(kids, 'طفل', 'أطفال', language)}، ${formatTravelerCount(infants, 'رضيع', 'رضع', language)}\n• *العملة:* ${currency}\n\n_أرجو تزويدي بالأسعار والمقاعد المتاحة لهذه الرحلة._`;

    openWhatsAppMessage(msg);
}

// 2. معالجة طلب الفنادق
function searchHotels() {
    const english = !isArabicPage();
    const dest = document.getElementById("hotel-dest")?.value.trim() || "غير محدد";
    const checkin = document.getElementById("hotel-checkin")?.value || "غير محدد";
    const checkout = document.getElementById("hotel-checkout")?.value || "غير محدد";
    const rooms = document.getElementById("rooms")?.value || 1;
    const guests = document.getElementById("guests")?.value || 2;
    const kids = document.getElementById("hotel-kids")?.value || 0;

    const msg = english
        ? `*New Hotel Booking Request (RedStar Travel)* 🏨\n\n• *Destination / city:* ${dest}\n• *Check-in:* ${checkin}\n• *Check-out:* ${checkout}\n• *Rooms:* ${rooms}\n• *Guests:* ${guests} adults, ${kids} children\n\n_I would like to receive the best available hotel options and prices._`
        : `*طلب حجز فندق جديد (RedStar Travel)* 🏨\n\n• *الوجهة / المدينة:* ${dest}\n• *تاريخ الدخول:* ${checkin}\n• *تاريخ الخروج:* ${checkout}\n• *عدد الغرف:* ${rooms}\n• *النزلاء:* ${guests} بالغين، ${kids} أطفال\n\n_أرجو تزويدي بأفضل خيارات الفنادق المتاحة وأسعارها._`;

    openWhatsAppMessage(msg);
}

// 3. إرسال طلب تأشيرة مخصصة
function sendVisaRequest(countryName, visaType) {
    const msg = isArabicPage()
        ? `*طلب تأشيرة جديدة (RedStar Travel)* 📄\n\n• *الوجهة المطلوبة:* ${countryName}\n• *نوع التأشيرة / الخدمة:* ${visaType}\n\n_أرجو تزويدي بالمتطلبات والأسعار ومدة الاستخراج._`
        : `*New Visa Request (RedStar Travel)* 📄\n\n• *Requested destination:* ${countryName}\n• *Visa / service type:* ${visaType}\n\n_Please send me the requirements, prices, and processing time._`;
    openWhatsAppMessage(msg);
}

// 4. معالجة نموذج صفحة Contact
function handleContactForm(e) {
    if (e) e.preventDefault();
    const english = !isArabicPage();
    const name = document.getElementById("contact-name")?.value.trim() || (english ? "Customer" : "عميل");
    const phone = document.getElementById("contact-phone")?.value.trim() || (english ? "Not provided" : "غير مسجل");
    const service = document.getElementById("contact-service")?.value || (english ? "General inquiry" : "استفسار عام");
    const message = document.getElementById("contact-message")?.value.trim() || (english ? "No additional details" : "لا توجد تفاصيل إضافية");

    const text = english
        ? `*New Inquiry (RedStar Travel)* 📩\n\n• *Name:* ${name}\n• *Phone:* ${phone}\n• *Service:* ${service}\n• *Details:* ${message}`
        : `*طلب استفسار جديد (RedStar Travel)* 📩\n\n• *الاسم:* ${name}\n• *الهاتف:* ${phone}\n• *الخدمة:* ${service}\n• *التفاصيل:* ${message}`;

    openWhatsAppMessage(text);
}

function startDestinationSlideshows() {
    const images = document.querySelectorAll("img[data-slideshow-folder]");
    if (!images.length) {
        return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const imageRoot = window.location.pathname.includes("/visa/")
        ? "../assets/images/destinations/"
        : "assets/images/destinations/";

    const activateSlideshow = (image, slideshowIndex) => {
        const folder = image.dataset.slideshowFolder;
        const count = Number(image.dataset.slideshowCount);
        const requestedStart = Number(image.dataset.slideshowStart);
        let currentImage = requestedStart >= 1 && requestedStart <= count
            ? requestedStart
            : (slideshowIndex % count) + 1;
        image.src = `${imageRoot}${folder}/image${currentImage}.webp`;

        const showNextImage = () => {
            image.style.opacity = "0";
            window.setTimeout(() => {
                currentImage = currentImage === count ? 1 : currentImage + 1;
                image.src = `${imageRoot}${folder}/image${currentImage}.webp`;
                image.style.opacity = "1";
            }, 600);
        };

        window.setTimeout(() => {
            showNextImage();
            window.setInterval(showNextImage, 5000);
        }, slideshowIndex * 1600 + 5000);
    };

    if (!("IntersectionObserver" in window)) {
        images.forEach((image, index) => activateSlideshow(image, index));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            const image = entry.target;
            const index = Array.from(images).indexOf(image);
            observer.unobserve(image);
            activateSlideshow(image, index);
        });
    }, { rootMargin: "200px 0px" });

    images.forEach((image) => observer.observe(image));
}

// عند تحميل الصفحة
async function markHiddenVisit() {
    try {
        await fetch("/api/site-stats", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ type: "visit" })
        });
    } catch (error) {
        // Silent fail: static deployments do not have a backend counter by default.
    }
}

function getStoredReviews() {
    try {
        const raw = localStorage.getItem(REVIEW_STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

function saveStoredReviews(reviews) {
    try {
        localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(reviews));
    } catch (error) {
        // Ignore storage errors in private browsing or restricted environments.
    }
}

function renderReviews(reviews) {
    const reviewsList = document.getElementById("reviews-list");
    if (!reviewsList) {
        return;
    }

    if (!reviews.length) {
        reviewsList.innerHTML = '<p class="review-empty">لا توجد تقييمات بعد. كن أول من يكتب رأيك.</p>';
        return;
    }

    reviewsList.innerHTML = reviews.map((review) => {
        const safeName = (review.name || "ضيف").replace(/[<>]/g, "");
        const safeComment = (review.comment || "").replace(/[<>]/g, "");
        const stars = "★".repeat(Number(review.rating || 5));
        return `
            <article class="review-item">
                <div class="review-header">
                    <strong>${safeName}</strong>
                    <span class="review-stars">${stars}</span>
                </div>
                <p>${safeComment}</p>
            </article>
        `;
    }).join("");
}

async function loadReviews() {
    const reviews = getStoredReviews();
    renderReviews(reviews);
}

async function submitReview(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const nameInput = document.getElementById("review-name");
    const ratingInput = document.getElementById("review-rating");
    const commentInput = document.getElementById("review-comment");
    const statusElement = document.getElementById("review-status");

    if (!form || !nameInput || !ratingInput || !commentInput || !statusElement) {
        return;
    }

    const payload = {
        name: nameInput.value.trim(),
        rating: Number(ratingInput.value),
        comment: commentInput.value.trim()
    };

    if (!payload.comment || !Number.isInteger(payload.rating) || payload.rating < 1 || payload.rating > 5) {
        statusElement.textContent = "يرجى كتابة رأيك واختيار تقييم من 1 إلى 5.";
        return;
    }

    statusElement.textContent = "جاري إرسال التقييم...";

    try {
        const reviews = getStoredReviews();
        const nextReviews = [{
            name: payload.name || "ضيف",
            rating: payload.rating,
            comment: payload.comment,
            date: new Date().toISOString()
        }, ...reviews].slice(0, 20);

        saveStoredReviews(nextReviews);
        form.reset();
        renderReviews(nextReviews);
        statusElement.textContent = "تم إرسال التقييم بنجاح.";
    } catch (error) {
        statusElement.textContent = "تعذر إرسال التقييم الآن. حاول مرة أخرى.";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const currentYearElem = document.querySelector("[data-current-year]");
    if (currentYearElem) currentYearElem.textContent = new Date().getFullYear();

    const savedLang = localStorage.getItem("redstar_lang") || "ar";
    setLanguage(savedLang);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            setLanguage(btn.getAttribute("data-lang"));
        });
    });

    const reviewForm = document.getElementById("review-form");
    if (reviewForm) {
        reviewForm.addEventListener("submit", submitReview);
    }

    loadReviews();
    markHiddenVisit();
    startDestinationSlideshows();

});
function loadEnvFile(filePath) {
    if (!fs.existsSync(filePath)) {
        return;
    }

    const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
    lines.forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) {
            return;
        }

        const separatorIndex = trimmed.indexOf("=");
        if (separatorIndex === -1) {
            return;
        }

        const key = trimmed.slice(0, separatorIndex).trim();
        const rawValue = trimmed.slice(separatorIndex + 1).trim();
        const value = rawValue.replace(/^['"]|['"]$/g, "");

        if (key && process.env[key] === undefined) {
            process.env[key] = value;
        }
    });
}

function sendJson(res, statusCode, payload) {
    res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(payload));
}

function sendFile(res, filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    const stream = fs.createReadStream(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    stream.pipe(res);
    stream.on("error", () => {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Internal Server Error");
    });
}

function resolveCode(input) {
    if (!input) {
        return "";
    }

    const raw = String(input).trim();
    if (/^[A-Za-z]{3}$/.test(raw)) {
        return raw.toUpperCase();
    }

    const normalized = raw.toLowerCase().replace(/\s+/g, "");
    return CITY_NAME_ALIASES[normalized] || CITY_CODE_MAP[normalized] || "";
}

function getCityLabel(input, fallbackCode) {
    const raw = String(input || "").trim();
    const resolvedCode = resolveCode(raw) || fallbackCode || "";

    if (resolvedCode && CODE_CITY_MAP[resolvedCode]) {
        return CODE_CITY_MAP[resolvedCode];
    }

    if (/^[A-Za-z]{3}$/.test(raw) && CODE_CITY_MAP[raw.toUpperCase()]) {
        return CODE_CITY_MAP[raw.toUpperCase()];
    }

    return raw || resolvedCode;
}

function isWegoConfigured() {
    return Boolean(process.env.WEGO_API_TOKEN);
}

function buildSearchPayload(query) {
    const originCode = resolveCode(query.origin);
    const destinationCode = resolveCode(query.destination);

    if (!originCode || !destinationCode) {
        return {
            error: "Please use a supported city name or a 3-letter IATA airport code for origin and destination."
        };
    }

    const legs = [
        {
            departureAirportCode: originCode,
            arrivalAirportCode: destinationCode,
            outboundDate: query.departureDate
        }
    ];

    if (query.returnDate) {
        legs.push({
            departureAirportCode: destinationCode,
            arrivalAirportCode: originCode,
            outboundDate: query.returnDate
        });
    }

    return {
        search: {
            siteCode: process.env.WEGO_SITE_CODE || "EG",
            locale: process.env.WEGO_LOCALE || "en",
            currencyCode: process.env.WEGO_CURRENCY_CODE || "USD",
            deviceType: "DESKTOP",
            appType: "WEB_APP",
            adultsCount: Number(query.adults || 1),
            childrenCount: Number(query.children || 0),
            infantsCount: Number(query.infants || 0),
            cabin: "economy",
            legs,
            offset: 0,
            userLoggedIn: false,
            showWegoFares: true,
            showWegoFaresOnly: false,
            clientCreatedAt: new Date().toISOString()
        }
    };
}

async function wegoRequest(url, options = {}) {
    const response = await fetch(url, {
        ...options,
        headers: {
            Authorization: `Bearer ${process.env.WEGO_API_TOKEN}`,
            "Content-Type": "application/json",
            ...(options.headers || {})
        }
    });

    if (!response.ok) {
        const message = await response.text();
        throw new Error(`Wego request failed (${response.status}): ${message}`);
    }

    return response.json();
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function getBestFare(trip) {
    if (!trip || !Array.isArray(trip.fares) || trip.fares.length === 0) {
        return null;
    }

    return trip.fares
        .slice()
        .sort((a, b) => (a?.price?.totalAmountUsd ?? Infinity) - (b?.price?.totalAmountUsd ?? Infinity))[0];
}

function normalizeTrip(trip, currencyCode) {
    const fare = getBestFare(trip);
    const firstLeg = trip?.legs?.[0];
    const secondLeg = trip?.legs?.[1];
    const provider = fare?.provider || {};
    const segments = firstLeg?.segments || [];

    return {
        id: trip?.id || "",
        price: fare?.price?.totalAmount ?? null,
        currency: fare?.price?.currencyCode || currencyCode || "USD",
        providerName: provider.name || "Unknown Provider",
        providerType: provider.type || "ota",
        handoffUrl: fare?.handoffUrl || "",
        refundable: Boolean(fare?.refundable),
        exchangeable: Boolean(fare?.exchangeable),
        route: {
            originCode: firstLeg?.departureAirportCode || "",
            destinationCode: firstLeg?.arrivalAirportCode || "",
            originCity: segments[0]?.departureCityName || getCityLabel(firstLeg?.departureAirportCode, firstLeg?.departureAirportCode) || "",
            destinationCity: segments[segments.length - 1]?.arrivalCityName || getCityLabel(firstLeg?.arrivalAirportCode, firstLeg?.arrivalAirportCode) || ""
        },
        outbound: {
            departureTime: firstLeg?.departureTime || "",
            arrivalTime: firstLeg?.arrivalTime || "",
            duration: firstLeg?.duration || "",
            stops: firstLeg?.stopoversCount ?? 0,
            airline: segments[0]?.airlineName || ""
        },
        inbound: secondLeg
            ? {
                  departureTime: secondLeg.departureTime || "",
                  arrivalTime: secondLeg.arrivalTime || "",
                  duration: secondLeg.duration || "",
                  stops: secondLeg.stopoversCount ?? 0,
                  airline: secondLeg.segments?.[0]?.airlineName || ""
              }
            : null
    };
}

async function fetchWegoResults(query) {
    const payload = buildSearchPayload(query);
    if (payload.error) {
        throw new Error(payload.error);
    }

    const created = await wegoRequest("https://affiliate-api.wego.com/metasearch/flights/searches", {
        method: "POST",
        body: JSON.stringify(payload)
    });

    const searchId = created?.search?.id || created?.id;
    if (!searchId) {
        throw new Error("Wego did not return a search ID.");
    }

    let offset = 0;
    let stablePolls = 0;
    let previousCount = -1;
    let latestResponse = null;

    for (let attempt = 0; attempt < 4; attempt += 1) {
        const pollUrl = new URL(`https://affiliate-api.wego.com/metasearch/flights/searches/${searchId}/results`);
        pollUrl.searchParams.set("offset", String(offset));
        pollUrl.searchParams.set("locale", process.env.WEGO_LOCALE || "en");
        pollUrl.searchParams.set("currencyCode", process.env.WEGO_CURRENCY_CODE || "USD");

        const polled = await wegoRequest(pollUrl.toString());
        latestResponse = polled;

        const count = Number(polled?.count || 0);
        if (count === previousCount) {
            stablePolls += 1;
        } else {
            stablePolls = 0;
        }

        previousCount = count;
        offset += count;

        if (stablePolls >= 1) {
            break;
        }

        await sleep(500 + attempt * 500);
    }

    const trips = Array.isArray(latestResponse?.trips) ? latestResponse.trips.slice(0, 6) : [];
    const tripDetails = await Promise.all(
        trips.map(async (trip) => {
            const detailUrl = new URL(`https://affiliate-api.wego.com/metasearch/flights/trips/${encodeURIComponent(trip.id)}`);
            detailUrl.searchParams.set("locale", process.env.WEGO_LOCALE || "en");
            detailUrl.searchParams.set("currencyCode", process.env.WEGO_CURRENCY_CODE || "USD");

            try {
                const detail = await wegoRequest(detailUrl.toString());
                return normalizeTrip(detail?.trip || trip, process.env.WEGO_CURRENCY_CODE || "USD");
            } catch (error) {
                return normalizeTrip(trip, process.env.WEGO_CURRENCY_CODE || "USD");
            }
        })
    );

    return {
        source: "wego_live",
        searchId,
        currency: process.env.WEGO_CURRENCY_CODE || "USD",
        trips: tripDetails.filter((trip) => trip.price !== null)
    };
}

function buildMockResults(query) {
    const originCode = resolveCode(query.origin) || String(query.origin || "").trim().toUpperCase();
    const destinationCode = resolveCode(query.destination) || String(query.destination || "").trim().toUpperCase();
    const currency = "USD";

    return {
        source: "mock",
        currency,
        note: "Live Wego credentials are not configured yet. These are demo cards to complete the UI flow.",
        trips: [
            {
                id: "mock-1",
                price: 299,
                currency,
                providerName: "Wego Demo Fare",
                providerType: "ota",
                handoffUrl: "",
                refundable: true,
                exchangeable: false,
                route: {
                    originCode,
                    destinationCode,
                    originCity: getCityLabel(query.origin, originCode),
                    destinationCity: getCityLabel(query.destination, destinationCode)
                },
                outbound: {
                    departureTime: "08:15",
                    arrivalTime: "12:05",
                    duration: "3h 50m",
                    stops: 0,
                    airline: "Demo Airways"
                },
                inbound: query.returnDate
                    ? {
                          departureTime: "18:40",
                          arrivalTime: "22:20",
                          duration: "3h 40m",
                          stops: 0,
                          airline: "Demo Airways"
                      }
                    : null
            },
            {
                id: "mock-2",
                price: 245,
                currency,
                providerName: "Budget Link",
                providerType: "ota",
                handoffUrl: "",
                refundable: false,
                exchangeable: false,
                route: {
                    originCode,
                    destinationCode,
                    originCity: getCityLabel(query.origin, originCode),
                    destinationCity: getCityLabel(query.destination, destinationCode)
                },
                outbound: {
                    departureTime: "11:30",
                    arrivalTime: "16:35",
                    duration: "5h 05m",
                    stops: 1,
                    airline: "Regional Connect"
                },
                inbound: query.returnDate
                    ? {
                          departureTime: "09:20",
                          arrivalTime: "14:15",
                          duration: "4h 55m",
                          stops: 1,
                          airline: "Regional Connect"
                      }
                    : null
            },
            {
                id: "mock-3",
                price: 338,
                currency,
                providerName: "Official Airline",
                providerType: "airline",
                handoffUrl: "",
                refundable: true,
                exchangeable: true,
                route: {
                    originCode,
                    destinationCode,
                    originCity: getCityLabel(query.origin, originCode),
                    destinationCity: getCityLabel(query.destination, destinationCode)
                },
                outbound: {
                    departureTime: "19:00",
                    arrivalTime: "22:25",
                    duration: "3h 25m",
                    stops: 0,
                    airline: "Official Airline"
                },
                inbound: query.returnDate
                    ? {
                          departureTime: "07:10",
                          arrivalTime: "10:40",
                          duration: "3h 30m",
                          stops: 0,
                          airline: "Official Airline"
                      }
                    : null
            }
        ]
    };
}

async function handleFlightSearch(reqUrl, res) {
    const query = {
        origin: reqUrl.searchParams.get("origin") || "",
        destination: reqUrl.searchParams.get("destination") || "",
        departureDate: reqUrl.searchParams.get("departureDate") || "",
        returnDate: reqUrl.searchParams.get("returnDate") || "",
        adults: reqUrl.searchParams.get("adults") || "",
        children: reqUrl.searchParams.get("children") || "",
        infants: reqUrl.searchParams.get("infants") || ""
    };

    if (!query.origin || !query.destination) {
        return sendJson(res, 400, { error: "Origin and destination are required" });
    }

    const payload = buildSearchPayload(query);
    if (payload.error) {
        return sendJson(res, 400, { error: payload.error });
    }

    try {
        const response = await fetch("https://affiliate-api.wego.com/metasearch/flights/searches", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.WEGO_API_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const error = await response.text();
            return sendJson(res, response.status, { error });
        }

        const data = await response.json();
        sendJson(res, 200, data);
    } catch (error) {
        sendJson(res, 500, { error: "Internal Server Error" });
    }
}

async function handleWegoResults(reqUrl, res) {
    const searchId = reqUrl.searchParams.get("searchId");
    if (!searchId) {
        return sendJson(res, 400, { error: "Search ID is required" });
    }

    let offset = 0;
    let stablePolls = 0;
    let previousCount = -1;
    let latestResponse = null;

    for (let attempt = 0; attempt < 4; attempt += 1) {
        const pollUrl = new URL(`https://affiliate-api.wego.com/metasearch/flights/searches/${searchId}/results`);
        pollUrl.searchParams.set("offset", String(offset));
        pollUrl.searchParams.set("locale", process.env.WEGO_LOCALE || "en");
        pollUrl.searchParams.set("currencyCode", process.env.WEGO_CURRENCY_CODE || "USD");

        const polled = await fetch(pollUrl.toString(), {
            headers: {
                Authorization: `Bearer ${process.env.WEGO_API_TOKEN}`
            }
        });

        if (!polled.ok) {
            const error = await polled.text();
            return sendJson(res, polled.status, { error });
        }

        const data = await polled.json();
        latestResponse = data;

        const count = Number(data?.count || 0);
        if (count === previousCount) {
            stablePolls += 1;
        } else {
            stablePolls = 0;
        }

        previousCount = count;
        offset += count;

        if (stablePolls >= 1) {
            break;
        }

        await sleep(500 + attempt * 500);
    }

    if (!latestResponse) {
        return sendJson(res, 500, { error: "Failed to retrieve results" });
    }

    const trips = Array.isArray(latestResponse.trips) ? latestResponse.trips.slice(0, 6) : [];
    const tripDetails = await Promise.all(
        trips.map(async (trip) => {
            const detailUrl = new URL(`https://affiliate-api.wego.com/metasearch/flights/trips/${encodeURIComponent(trip.id)}`);
            detailUrl.searchParams.set("locale", process.env.WEGO_LOCALE || "en");
            detailUrl.searchParams.set("currencyCode", process.env.WEGO_CURRENCY_CODE || "USD");

            const detail = await fetch(detailUrl.toString(), {
                headers: {
                    Authorization: `Bearer ${process.env.WEGO_API_TOKEN}`
                }
            });

            if (!detail.ok) {
                const error = await detail.text();
                return normalizeTrip(trip, process.env.WEGO_CURRENCY_CODE || "USD");
            }

            return normalizeTrip(await detail.json(), process.env.WEGO_CURRENCY_CODE || "USD");
        })
    );

    sendJson(res, 200, {
        source: "wego_live",
        searchId,
        currency: process.env.WEGO_CURRENCY_CODE || "USD",
        trips: tripDetails.filter((trip) => trip.price !== null)
    });
}

function sendVisaInquiry(phrase) {
    const message = isArabicPage()
        ? `مرحبًا ريدستار ترافل، أريد طلب ${phrase}.`
        : `Hello RedStar Travel, I want to request ${phrase}.`;
    openWhatsAppMessage(message, "249912327987");
}
