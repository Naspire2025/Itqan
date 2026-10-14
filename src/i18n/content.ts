// All site copy, both languages. Source: program brochure (final 6), rebranded to CFDP.
export const locales = ['ar', 'en'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'ar';

type L = { ar: string; en: string };
type LL = { ar: string[]; en: string[] };

export const site = {
  // Same in both languages: a name, never translated.
  brand: 'CFDP',
  brandFull: 'Certified Factory Digitalization Professional',
  phones: [
    { country: { ar: 'الأردن', en: 'Jordan' } as L, number: '+962 7 8500 0401', wa: '962785000401' },
    { country: { ar: 'الإمارات', en: 'UAE' } as L, number: '+971 55 777 9798', wa: '971557779798' },
    { country: { ar: 'مصر', en: 'Egypt' } as L, number: '+20 128 281 9310', wa: '201282819310' },
    { country: { ar: 'مصر', en: 'Egypt' } as L, number: '+20 155 508 5422', wa: '201555085422' },
  ],
};

export const ui = {
  nav: {
    home: { ar: 'الرئيسية', en: 'Home' },
    program: { ar: 'البرنامج', en: 'Program' },
    pricing: { ar: 'الأسعار والمسارات', en: 'Tracks & Pricing' },
    instructors: { ar: 'المحاضرون', en: 'Instructors' },
    accreditations: { ar: 'الاعتمادات', en: 'Accreditations' },
    contact: { ar: 'تواصل معنا', en: 'Contact' },
    enroll: { ar: 'سجّل الآن', en: 'Enroll now' },
    switch: { ar: 'English', en: 'العربية' },
  },
  hero: {
    eyebrow: { ar: 'CFDP · تعلّم. تدرّب. اعمل.', en: 'CFDP · Learn. Train. Work.' } as L,
    title: { ar: 'المصانع تنتقل إلى الرقمية', en: 'Factories moving to digital' } as L,
    sub: {
      ar: 'برنامج أونلاين متكامل للتحول الرقمي في التصنيع والتصدير: ٢٢ محورًا من التجارة الإلكترونية والتسويق الرقمي حتى سلاسل الإمداد ولين 6 سيجما.',
      en: 'A complete online program for digital transformation in manufacturing and export, from e-commerce and digital marketing to supply chains and Lean Six Sigma, across 22 core axes.',
    } as L,
    cta1: { ar: 'سجّل الآن', en: 'Enroll now' } as L,
    cta2: { ar: 'استعرض البرنامج', en: 'Explore the program' } as L,
  },
  stats: [
    { value: '22', label: { ar: 'محورًا رئيسيًا', en: 'Core axes' } as L },
    { value: '50', label: { ar: 'ساعة تدريبية', en: 'Training hours' } as L },
    { value: '6', label: { ar: 'أيام مكثفة', en: 'Intensive days' } as L },
    { value: '2', label: { ar: 'لغتان: عربي وإنجليزي', en: 'Languages: AR & EN' } as L },
  ],
  why: {
    title: { ar: 'لماذا CFDP؟', en: 'Why CFDP?' } as L,
    lead: {
      ar: 'البرنامج الوحيد في العالم الذي يحتوي على الـ٢٢ محورًا الرئيسية في عمليات التصنيع والتصدير الخارجي.',
      en: 'The only program in the world that covers the 22 main axes of manufacturing and external export.',
    } as L,
    items: {
      ar: [
        'منهج تكاملي مصمم خصيصًا لمعالجة المشكلات الموجودة بالسوق',
        'البرنامج أونلاين بالكامل عن طريق سيستم أونلاين متكامل خاص بالأكاديمية',
        'محاضرون متخصصون أكاديميًا وعمليًا',
        'باقات مرنة على حسب حجم المؤسسة',
        'تسعير مميز بالنسبة لمحتوى البرنامج',
        'شهادة في نهاية البرنامج بالتعاون مع جهات دولية',
        'البرنامج متوفر باللغتين العربية والإنجليزية',
      ],
      en: [
        'An integrative approach designed specifically to address the problems in the market',
        'Completely online through the academy’s integrated online system',
        'Academically and practically specialized lecturers',
        'Flexible packages according to the size of the institution',
        'Distinctive pricing for the content of the program',
        'A certificate at the end of the program, issued with international partners',
        'Available in both Arabic and English',
      ],
    } as LL,
  },
  about: {
    title: { ar: 'عن CFDP', en: 'About CFDP' } as L,
    body: {
      ar: 'يقدم CFDP نموذجًا مميزًا في التعليم الإلكتروني ينطلق من شعار متكامل «اتعلم. اتدرب. اشتغل»، حيث الجمع بين العلم والعمل والممارسة الدائمة التي تؤدي للنجاح. كما يقدم مناهج محدثة ومحاضرين من قلب سوق العمل للجمع بين متطلبات الدراسة الأكاديمية والتطبيق الذي يحتاجه السوق، وذلك في وقت قياسي غير مخل بالمعلومات أو الممارسة العملية وبتكلفة تناسب مع أغلب شرائح المجتمع.',
      en: 'CFDP offers a distinct model in e-learning built on one integrated slogan: “Learn. Train. Work.” It combines knowledge, work and permanent practice that leads to success. Updated curricula and lecturers from the heart of the labor market join academic requirements with what the market needs, in record time and at a cost that suits most segments of society.',
    } as L,
    vision: {
      title: { ar: 'الرؤية', en: 'Vision' } as L,
      body: {
        ar: 'أن يكون CFDP من أكبر نماذج التعليم الإلكتروني للأعمال في مصر والعالم العربي، وأن يقدم نموذجًا متطورًا ومتكاملًا متخصصًا في البيزنس في التعليم والتدريب الإلكتروني.',
        en: 'To be one of the largest e-learning models for business in Egypt and the Arab world, offering an advanced, integrated model specialized in business e-learning and training.',
      } as L,
    },
    mission: {
      title: { ar: 'الرسالة', en: 'Mission' } as L,
      body: {
        ar: 'تقديم رحلة تعليمية متكاملة، وتأسيس كوادر متقنة لتخصصاتها تجمع بين الجانبين النظري والعملي، وتكون مؤثرة بصورة إيجابية في سوق العمل المصري والعربي.',
        en: 'To offer an integrated educational journey and establish cadres skilled in their specializations, combining theory and practice and positively influencing the Egyptian and Arab labor market.',
      } as L,
    },
  },
  countries: {
    title: { ar: 'أهم دول متدربينا', en: 'Where our trainees come from' } as L,
    list: {
      ar: ['مصر', 'الأردن', 'العراق', 'ليبيا', 'فلسطين', 'الإمارات', 'إنجلترا', 'ألمانيا'],
      en: ['Egypt', 'Jordan', 'Iraq', 'Libya', 'Palestine', 'UAE', 'England', 'Germany'],
    } as LL,
  },
  outlines: {
    title: { ar: 'محاور البرنامج الـ٢٢', en: 'The 22 program axes' } as L,
    items: {
      ar: [
        'الفعاليات عبر الإنترنت: ماهيتها وأنواعها',
        'كيفية المشاركة في فعالية عبر الإنترنت (حدث افتراضي)',
        'إدارة عمليات التواصل مع العملاء والشركاء المحتملين افتراضيًا',
        'مقدمة عن التجارة الإلكترونية',
        'أساسيات التسويق',
        'المزيج التسويقي',
        'أساسيات تأسيس علامة تجارية (Branding)',
        'مسار تطوير المنتج',
        'مقدمة في التصوير الاحترافي للمنتجات',
        'مقدمة عن التسويق الإلكتروني',
        'أساسيات الإعلانات على مواقع التواصل الاجتماعي',
        'مقدمة عن تهيئة محركات البحث وإعلانات جوجل',
        'أساسيات عن الموقع الإلكتروني والتطبيقات الإلكترونية',
        'معلومات عن أهم مواقع التجارة الإلكترونية في العالم وكيفية الاشتراك بها',
        'أساسيات كتابة المحتوى التسويقي',
        'أنواع ومزايا وسائل الدفع الإلكتروني',
        'مقدمة عن التسويق بالعمولة',
        'مقدمة في خدمات الشحن والتوصيل',
        'أسس خدمات ما بعد البيع',
        'إدارة التصدير',
        'إدارة سلاسل الإمداد',
        'لين 6 سيجما',
      ],
      en: [
        'Online events: what they are and their types',
        'How to participate in an online (virtual) event',
        'Managing communication with clients and potential partners virtually',
        'Introduction to electronic commerce',
        'Marketing basics',
        'The marketing mix',
        'The basics of establishing a brand',
        'The product development path',
        'Introduction to professional product photography',
        'An introduction to electronic marketing',
        'The basics of advertising on social media',
        'Introduction to SEO and Google Ads',
        'Website basics and applications',
        'The most important trade sites in the world and how to subscribe',
        'The basics of writing marketing content',
        'Types and advantages of electronic payment methods',
        'Introduction to affiliate marketing',
        'Introduction to shipping and delivery services',
        'Foundations of after-sales services',
        'Export management',
        'Supply chain management',
        'Lean Six Sigma',
      ],
    } as LL,
  },
  outcomes: {
    title: { ar: 'مخرجات البرنامج', en: 'What you will be able to do' } as L,
    items: {
      ar: [
        'فهم مصطلحات التجارة الإلكترونية',
        'كيفية إنشاء أو الاشتراك في فعالية افتراضية',
        'كيفية إعداد خطة عمل لمتجر إلكتروني وتصميم مزيج المنتجات وإدارة عمليات المتجر',
        'معرفة أساسيات التسويق والبيع على مواقع التواصل الاجتماعي',
        'القدرة على بناء علامة تجارية للمتجر الإلكتروني',
        'معرفة عمل نظام المتجر الإلكتروني',
        'كيفية تحليل النتائج التسويقية',
        'كيف تبني انتماء عميل لعلامتك التجارية',
        'معرفة طرق الدفع الإلكتروني والتعامل مع شركات الشحن المختلفة',
        'العلاقة بين اللوجستيات والمشتريات، وتحديد استراتيجية الشراء وعقود التجارة الدولية',
        'معرفة نظام إدارة المخزون واستراتيجيات إدارة المخاطر في سلاسل الإمداد',
        'معرفة مراحل عملية التصدير',
      ],
      en: [
        'Understand e-commerce terminology',
        'Create or subscribe to a virtual event',
        'Prepare a business plan for an online store, design a product mix and manage its operations',
        'Know the basics of marketing and selling on social media',
        'Build a brand for the online store',
        'Know how the electronic store system works',
        'Analyze marketing results',
        'Build a client’s affiliation with your brand',
        'Know electronic payment methods and deal with different shipping companies',
        'Understand logistics and procurement, purchasing strategy and international trade contracts',
        'Know inventory management and risk management strategies in supply chains',
        'Know the stages of the export process',
      ],
    } as LL,
  },
  schedule: {
    title: { ar: 'جدول البرنامج التدريبي', en: 'Training schedule' } as L,
    sub: { ar: 'ستة أيام، كل يوم محور عمل متكامل.', en: 'Six days, each one a complete working theme.' } as L,
    dayLabel: { ar: 'اليوم', en: 'Day' } as L,
    days: [
      {
        title: { ar: 'الفعاليات الافتراضية', en: 'Virtual events' },
        items: {
          ar: [
            'تعريف الملتقيات الافتراضية وأنواعها',
            'تخطيط وتنفيذ فعالية افتراضية ناجحة ووضع أهدافها',
            'استهداف الشريحة المناسبة والترويج للفعالية',
            'آلية تدريب العملاء على الحضور وبناء التفاعل',
            'قياس الأداء أثناء الفعالية وبعدها',
            'نماذج عملية لأهم الفعاليات الافتراضية الناجحة',
          ],
          en: [
            'Defining virtual forums and their types',
            'Plan and implement a successful virtual event and set its goals',
            'Target the right segment and promote the event',
            'Train clients to attend and build interaction',
            'Measure performance during and after the event',
            'Practical models of the most successful virtual events',
          ],
        },
      },
      {
        title: { ar: 'التجارة الإلكترونية', en: 'E-commerce' },
        items: {
          ar: [
            'تعريف وأهمية واتجاهات التجارة الإلكترونية وأنواعها',
            'تحليل المستهلك والمنافسة عبر الإنترنت',
            'الخطة المبدئية للمتجر الإلكتروني وأسس فهم الأعمال',
            'استراتيجية المنتج وأنواع الموردين وأسس التسعير',
            'إطلاق وإدارة متجر على منصات التجارة الإلكترونية الرئيسية',
            'حلول الدفع الرقمية واختيار شركاء الشحن والتوصيل',
          ],
          en: [
            'Definition, importance, trends and types of e-commerce',
            'Online consumer and competition analysis',
            'The initial plan for the online store and business fundamentals',
            'Product strategy, types of suppliers and pricing',
            'Launching and managing a store on major e-commerce platforms',
            'Digital payment solutions and choosing shipping partners',
          ],
        },
      },
      {
        title: { ar: 'التسويق والعلامة التجارية', en: 'Marketing & branding' },
        items: {
          ar: [
            'أساسيات التسويق والمزيج التسويقي وتطبيقه على التجارة الإلكترونية',
            'كيفية تأسيس علامة تجارية لمتجر إلكتروني (Branding)',
            'أساسيات الدعاية والإعلانات ومقدمة في التسويق الرقمي',
            'التعرف على منصات التواصل الاجتماعي وأنواعها',
            'كتابة المحتوى على منصات التواصل',
            'كيفية اختيار المنصات المناسبة للإعلان عليها',
          ],
          en: [
            'Marketing basics and the marketing mix applied to e-commerce',
            'How to establish a brand for an online store',
            'Basics of advertising and an introduction to digital marketing',
            'Social media platforms and their types',
            'Writing content for social media platforms',
            'Choosing the right platforms to advertise on',
          ],
        },
      },
      {
        title: { ar: 'الإعلانات الرقمية', en: 'Digital advertising' },
        items: {
          ar: [
            'تحديد أهداف الإعلان والتسويق',
            'إعلانات فيسبوك وتويتر وإنستجرام وسناب شات للتجارة الإلكترونية',
            'إعلانات جوجل وتحسين محركات البحث للتجارة الإلكترونية',
            'تحديد ميزانية الحملة مقابل المستهدفات البيعية',
            'تحليل نتائج وأداء الإعلانات',
          ],
          en: [
            'Setting advertising and marketing goals',
            'Facebook, Twitter, Instagram and Snapchat ads for e-commerce',
            'Google ads and e-commerce SEO',
            'Setting the campaign budget against sales targets',
            'Analyzing ad results and performance',
          ],
        },
      },
      {
        title: { ar: 'المنتج والموقع وخدمة العملاء', en: 'Product, website & customer care' },
        items: {
          ar: [
            'أساسيات تصوير المنتجات للتجارة الإلكترونية',
            'أساسيات الموقع الإلكتروني وإدارة التطبيقات',
            'أساسيات كتابة المحتوى للموقع',
            'مقدمة في التسويق بالعمولة',
            'خدمات ما بعد البيع وخدمات العناية بالعملاء',
          ],
          en: [
            'Basics of product photography for e-commerce',
            'Fundamentals of website and application management',
            'The basics of writing website content',
            'Introduction to affiliate marketing',
            'After-sales service and customer care',
          ],
        },
      },
      {
        title: { ar: 'التصدير وسلاسل الإمداد ولين 6 سيجما', en: 'Export, supply chain & Lean Six Sigma' },
        items: {
          ar: [
            'اختيار السوق وتحليل SWOT',
            'تراخيص التصدير وتسعير الصادرات وتكاليفها',
            'فهم أسعار صرف العملات وإدارة مخاطر التصدير',
            'تغليف ووسم البضائع واستراتيجيات التسويق',
            'أساسيات تخطيط المبيعات والعمليات واستراتيجيات التصنيع',
            'مؤشرات الأداء الرئيسية وسلاسل التوريد المستدامة',
            'مراحل لين 6 سيجما: القياس والتحليل والتحسين والتحكم',
          ],
          en: [
            'Market selection and SWOT analysis',
            'Export licenses, pricing and costing',
            'Understanding exchange rates and export risk management',
            'Packing and labeling of goods; marketing strategies',
            'Sales and operations planning; manufacturing strategies',
            'KPIs and sustainable, socially responsible supply chains',
            'Lean Six Sigma: Measure, Analyze, Improve, Control',
          ],
        },
      },
    ],
  },
  includes: {
    title: { ar: 'ما يشمله البرنامج', en: 'What the program includes' } as L,
    items: {
      ar: ['أجندة يومية بمحتوى البرنامج', 'مادة علمية رقمية', 'شهادة معتمدة', 'متابعة تدريبية', 'تحليل النتائج', 'تقرير بأداء المتدربين'],
      en: ['Daily agenda of program content', 'Digital scientific material', 'Approved certificate', 'Follow-up training', 'Analysis of results', 'A report on the trainees’ performance'],
    } as LL,
  },
  tracks: {
    title: { ar: 'مدة البرنامج والمسارات', en: 'Duration & tracks' } as L,
    headers: {
      track: { ar: 'المسار', en: 'Track' } as L,
      days: { ar: 'الأيام', en: 'Days' } as L,
      total: { ar: 'إجمالي الساعات', en: 'Total hours' } as L,
      daily: { ar: 'الساعات اليومية', en: 'Daily hours' } as L,
    },
    rows: [
      { track: { ar: 'المسار المكثف', en: 'Fast track' } as L, days: { ar: '٦ أيام (أسبوع واحد)', en: '6 days (one week)' } as L, total: '50', daily: { ar: '٨ ساعات يوميًا', en: '8 hours per day' } as L },
      { track: { ar: 'المسار القياسي', en: 'Standard track' } as L, days: { ar: '١٢ يوم (أسبوعين)', en: '12 days (two weeks)' } as L, total: '50', daily: { ar: '٤ ساعات يوميًا', en: '4 hours per day' } as L },
      { track: { ar: 'المسار المرن', en: 'Flexible track' } as L, days: { ar: 'كل سبت (٦ أسابيع)', en: 'Every Saturday (6 weeks)' } as L, total: '50', daily: { ar: '٨ ساعات يوميًا', en: '8 hours per day' } as L },
    ],
  },
  pricing: {
    title: { ar: 'باقات الأسعار', en: 'Packages & pricing' } as L,
    sub: { ar: 'السعر للفرد بالدولار الأمريكي، وكلما زاد عدد المشتركين انخفضت التكلفة.', en: 'Fee per person in US dollars. The more participants, the lower the price.' } as L,
    headers: {
      pkg: { ar: 'الباقة', en: 'Package' } as L,
      people: { ar: 'عدد المشتركين', en: 'Participants' } as L,
      fee: { ar: 'تكلفة المشترك', en: 'Fee per person' } as L,
      total: { ar: 'الإجمالي', en: 'Total' } as L,
    },
    rows: [
      { name: { ar: 'البرونزية', en: 'Bronze' } as L, people: '3', fee: '666', total: '1,998' },
      { name: { ar: 'الفضية', en: 'Silver' } as L, people: '5', fee: '555', total: '2,775' },
      { name: { ar: 'الذهبية', en: 'Gold' } as L, people: '10', fee: '444', total: '4,440', featured: true },
      { name: { ar: 'الماسية', en: 'Diamond' } as L, people: '20+', fee: '333', total: '6,660+' },
    ],
    cta: { ar: 'اطلب عرض سعر', en: 'Request a quote' } as L,
  },
  instructors: {
    title: { ar: 'المحاضرون', en: 'Instructors' } as L,
    sub: { ar: 'ممارسون من قلب سوق العمل، أكاديميًا وعمليًا.', en: 'Practitioners from the heart of the labor market.' } as L,
    people: [
      {
        slug: 'khaled-farouk',
        name: { ar: 'خالد فاروق', en: 'Khaled Farouk' } as L,
        role: { ar: 'خبير تسويق واستراتيجيات', en: 'Marketing strategy' } as L,
        bio: {
          ar: ['مدير تسويق بخبرة تزيد عن ١٢ عامًا', 'إجراء دراسات حالة ناجحة في العديد من المجالات: العقارات، التجزئة، التجارة الإلكترونية، التعليم', 'تأسيس شركات ناشئة ووضع أهداف تسويقية وتكوين فريق تسويق'],
          en: ['Marketing manager with 12+ years of experience', 'Successful case studies in real estate, retail, e-commerce and education', 'Established startups, set marketing goals and built marketing teams'],
        } as LL,
      },
      {
        slug: 'saad-alalfi',
        name: { ar: 'سعد الألفي', en: 'Saad Alalfi' } as L,
        role: { ar: 'التجارة الإلكترونية والعلامات التجارية', en: 'E-commerce & branding' } as L,
        bio: {
          ar: ['١٥ عامًا من الخبرة في إدارة المحتوى و٥ سنوات في التجارة الإلكترونية والعلامات التجارية وتسويق الشركات الناشئة', 'طوّر أول منتدى إلكتروني في ٢٠٠٤، وأسس متجر AM-DAHAB للتجارة الإلكترونية ومدونة El-Founder'],
          en: ['15 years in content management and 5 years in e-commerce, branding and startup marketing', 'Built an e-forum in 2004, founded the AM-DAHAB e-commerce store and the El-Founder blog'],
        } as LL,
      },
      {
        slug: 'sabreen-morsi',
        name: { ar: 'صابرين مرسي', en: 'Sabreen Morsi' } as L,
        role: { ar: 'مؤسسة فارينا للخدمات التسويقية', en: 'Founder, Farinas Marketing Services' } as L,
        bio: {
          ar: ['المديرة التنفيذية ومؤسسة شركة فاريناس للخدمات التسويقية بخبرة تزيد عن ١٨ عامًا', 'بكالوريوس الهندسة الطبية من جامعة القاهرة وماجستير إدارة الأعمال من الجامعة الأمريكية بالقاهرة', 'شاركت في العديد من المؤتمرات والندوات لرائدات الأعمال'],
          en: ['CEO and founder of Farinas Marketing Services with 18+ years’ experience', 'BSc in Medical Engineering from Cairo University and an MBA from the American University in Cairo', 'Speaker at many conferences and forums for women entrepreneurs'],
        } as LL,
      },
      {
        slug: 'haitham-ahmed',
        name: { ar: 'هيثم أحمد', en: 'Haitham Ahmed' } as L,
        role: { ar: 'الإعلانات الرقمية', en: 'Digital advertising' } as L,
        bio: {
          ar: ['خبرة أكثر من ٨ سنوات في التسويق الإلكتروني وإدارة الحملات الإعلانية على منصات التواصل في مصر والوطن العربي', 'إعداد خطط التسويق وميزانيات الحملات الإعلانية'],
          en: ['8+ years in digital marketing and managing ad campaigns on all social platforms in Egypt and the Arab world', 'Digital marketing plans and campaign budgets'],
        } as LL,
      },
      {
        slug: 'hanaa-maghrabi',
        name: { ar: 'هناء المغربي', en: 'Hanaa Maghrabi' } as L,
        role: { ar: 'مديرة تسويق', en: 'Marketing manager' } as L,
        bio: {
          ar: ['مدير تسويق بخبرة أكثر من ١٠ سنوات في السوق الخليجي والمصري', 'نجاحات بارزة لأكثر من ١٠٠ عميل في مصر والوطن العربي', 'أكثر من ٥٠٠ ساعة تدريب احترافية في التسويق والإعلان على منصات السوشيال ميديا'],
          en: ['Marketing manager with 10+ years in the Gulf and Egyptian markets', 'Remarkable results for 100+ clients in Egypt and the Arab world', '500+ training hours in marketing and social media advertising'],
        } as LL,
      },
      {
        slug: 'asmaa-metwally',
        name: { ar: 'أسماء متولي', en: 'Asmaa Metwally' } as L,
        role: { ar: 'التصدير وسلاسل الإمداد', en: 'Export & supply chain' } as L,
        bio: {
          ar: ['خبرات تخطت ١٠ سنوات في التصدير وسلاسل الإمداد في صناعات مختلفة داخل مصر وخارجها', 'متخصصة في تحسين العمليات وتخطيط الأعمال والتصنيع الخالي من الهدر', 'بكالوريوس العلوم في الهندسة الميكانيكية'],
          en: ['10+ years in export and supply chains across industries in Egypt and abroad', 'Skilled in process improvement, business planning and lean manufacturing', 'BSc in Mechanical Engineering'],
        } as LL,
      },
    ],
  },
  accreditations: {
    title: { ar: 'الاعتمادات', en: 'Accreditations' } as L,
    current: { ar: 'الاعتمادات الحالية', en: 'Current accreditations' } as L,
    progress: { ar: 'اعتمادات تحت التعاقد', en: 'In progress' } as L,
    progressNote: {
      ar: 'هذه الجهات قيد التعاقد ولم يكتمل اعتمادها بعد.',
      en: 'These bodies are in the contracting process and are not yet confirmed.',
    } as L,
    currentList: [
      { name: 'Asia Masters Center', note: { ar: 'Professional Training · Co. Reg. 1031079-H', en: 'Professional Training · Co. Reg. 1031079-H' } as L },
    ],
    progressList: ['The CPD Certification Service', 'Napoleon Hill Training Corporation', 'ISCN'],
    certTitle: { ar: 'الشهادة الممنوحة', en: 'The certificate' } as L,
    certBody: {
      ar: 'يحصل المشتركون على شهادة إتمام CFDP بالتعاون مع مركز آسيا ماسترز.',
      en: 'Participants receive a CFDP certificate of completion with the Asia Masters Center.',
    } as L,
  },
  contact: {
    title: { ar: 'تواصل مع مستشار البرنامج', en: 'Talk to a program advisor' } as L,
    sub: { ar: 'أخبرنا عن مؤسستك وعدد المشتركين وسنرسل لك العرض المناسب.', en: 'Tell us about your organization and group size and we will send the right offer.' } as L,
    form: {
      name: { ar: 'الاسم', en: 'Full name' } as L,
      org: { ar: 'المؤسسة / المصنع', en: 'Company / factory' } as L,
      email: { ar: 'البريد الإلكتروني', en: 'Email' } as L,
      phone: { ar: 'رقم الهاتف / واتساب', en: 'Phone / WhatsApp' } as L,
      pkg: { ar: 'الباقة', en: 'Package' } as L,
      track: { ar: 'المسار', en: 'Track' } as L,
      msg: { ar: 'رسالتك', en: 'Your message' } as L,
      send: { ar: 'إرسال الطلب', en: 'Send request' } as L,
      unsure: { ar: 'لست متأكدًا بعد', en: 'Not sure yet' } as L,
    },
    whatsapp: { ar: 'واتساب', en: 'WhatsApp' } as L,
  },
  footer: {
    tagline: { ar: 'تعلّم. تدرّب. اعمل.', en: 'Learn. Train. Work.' } as L,
    rights: { ar: 'جميع الحقوق محفوظة', en: 'All rights reserved' } as L,
  },
  cta: {
    title: { ar: 'جاهز لنقل مصنعك إلى الرقمية؟', en: 'Ready to take your factory digital?' } as L,
    sub: { ar: 'تواصل مع مستشار البرنامج لاختيار الباقة والمسار المناسبين.', en: 'Speak to a program advisor to pick the right package and track.' } as L,
  },
};
