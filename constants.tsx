import { Language, Translation } from './types';
import { Palette, Printer, Megaphone, Monitor, Target } from 'lucide-react';

export const LANGUAGES: { code: Language; label: string; flag: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'ar', label: 'العربية', flag: '🇦🇪', dir: 'rtl' },
  { code: 'sv', label: 'Svenska', flag: '🇸🇪', dir: 'ltr' },
  { code: 'no', label: 'Norsk', flag: '🇳🇴', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'es', label: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'pt', label: 'Português', flag: '🇵🇹', dir: 'ltr' },
];

const EN_TRANSLATION: Translation = {
  nav: {
    home: 'Home',
    services: 'Services',
    gallery: 'Portfolio',
    about: 'About HD',
    contact: 'Contact',
  },
  hero: {
    label: 'Home of Design',
    headline: 'Marketing Agency',
    subheadline: 'Design / Marketing',
    cta: 'Explore Our Vision',
  },
  services: {
    title: 'Our Expertise',
    subtitle: 'A multidisciplinary approach to modern challenges.',
    clickDetails: 'Click for details',
    categories: {
      design: {
        id: 'design',
        title: 'Brand & Visual Identity',
        icon: 'Palette',
        items: [
          { title: 'Brand Design & Development', description: 'Defining core values and visual language.' },
          { title: 'Visual Identity Systems', description: 'Cohesive assets across all touchpoints.' },
        ],
      },
      property: {
        id: 'property',
        title: 'Print & Advertising Production',
        icon: 'Printer',
        items: [
          { title: 'Signage & Large Format Printing', description: 'High-impact displays for physical spaces.' },
          { title: 'Promotional Materials Production', description: 'Premium tactile marketing assets.' },
        ],
      },
      technical: {
        id: 'technical',
        title: 'Digital Marketing & Presence',
        icon: 'Megaphone',
        items: [
          { title: 'Social Media Management & Advertising', description: 'Engaging communities and driving traffic.' },
          { title: 'Digital Content & Campaign Management', description: 'Strategic storytelling for online growth.' },
        ],
      },
      commercial: {
        id: 'commercial',
        title: 'Digital Platforms Design',
        icon: 'Monitor',
        items: [
          { title: 'Website Design & Development', description: 'Immersive, responsive, and performant web experiences.' },
          { title: 'E-commerce Store Design & Setup', description: 'Seamless shopping journeys that convert.' },
        ],
      },
      marketing: {
        id: 'marketing',
        title: 'Marketing Strategy & Planning',
        icon: 'Target',
        items: [
          { title: 'Marketing Strategy Development', description: 'Data-driven roadmaps for market dominance.' },
          { title: 'Campaign Planning & Management', description: 'End-to-end execution of promotional initiatives.' },
        ],
      },
    },
  },
  gallery: {
    titleSelected: 'SELECTED',
    titleWorks: 'WORKS',
    subtitle: 'Designing form with meaning and direction.',
    projectLabel: 'Project',
    serviceLabel: 'Brand Identity / Strategy',
  },
  about: {
    title: 'The HD Philosophy',
    description: 'Home of Design is a convergence of art, technology, and strategy. We do not just design; we engineer experiences that define the future of business and living spaces.',
    stats: [
      { label: 'Projects', value: '150+' },
      { label: 'Years', value: '14' },
    ],
    cardTitle: 'HD Creative Studio',
    cardDesc1: 'Founded on the principle that design is intelligence made visible.',
    cardDesc2: 'We operate at the intersection of strategic thinking and artistic excellence.',
    quote: '"Design is not just what it looks like and feels like. Design is how it works."',
  },
  contact: {
    title: 'Start a Project',
    name: 'Your Name',
    email: 'Email Address',
    message: 'Tell us about your vision',
    submit: 'Send Request',
    hqLabel: 'HQ',
    address: '16 Östra Hamngatan, 411 09 Gothenburg',
    country: 'Sweden',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
  },
  footer: {
    rights: 'All rights reserved.',
  }
};

const AR_TRANSLATION: Translation = {
  nav: {
    home: 'الرئيسية',
    services: 'خدماتنا',
    gallery: 'المعرض',
    about: 'عن HD',
    contact: 'تواصل معنا',
  },
  hero: {
    label: 'بيت التصميم',
    headline: 'وكالة تسويق',
    subheadline: 'تصميم / تسويق',
    cta: 'استكشف رؤيتنا',
  },
  services: {
    title: 'خبراتنا',
    subtitle: 'نهج متعدد التخصصات للتحديات الحديثة.',
    clickDetails: 'اضغط للتفاصيل',
    categories: {
      design: {
        id: 'design',
        title: 'العلامة التجارية والهوية البصرية',
        icon: 'Palette',
        items: [
          { title: 'تصميم وتطوير العلامة التجارية', description: 'تحديد القيم الجوهرية واللغة البصرية.' },
          { title: 'أنظمة الهوية البصرية', description: 'أصول متماسكة عبر جميع نقاط الاتصال.' },
        ],
      },
      property: {
        id: 'property',
        title: 'الطباعة والإنتاج الإعلاني',
        icon: 'Printer',
        items: [
          { title: 'اللافتات والطباعة كبيرة الحجم', description: 'شاشات عرض عالية التأثير للمساحات المادية.' },
          { title: 'إنتاج المواد الترويجية', description: 'أصول تسويقية ملموسة فاخرة.' },
        ],
      },
      technical: {
        id: 'technical',
        title: 'التسويق الرقمي والتواجد الرقمي',
        icon: 'Megaphone',
        items: [
          { title: 'إدارة وسائل التواصل الاجتماعي والإعلانات', description: 'إشراك المجتمعات وزيادة الزيارات.' },
          { title: 'المحتوى الرقمي وإدارة الحملات', description: 'سرد قصصي استراتيجي للنمو عبر الإنترنت.' },
        ],
      },
      commercial: {
        id: 'commercial',
        title: 'تصميم المنصات الرقمية',
        icon: 'Monitor',
        items: [
          { title: 'تصميم وتطوير المواقع الإلكترونية', description: 'تجارب ويب غامرة وسريعة الاستجابة.' },
          { title: 'تصميم وإعداد المتاجر الإلكترونية', description: 'رحلات تسوق سلسة تحقق المبيعات.' },
        ],
      },
      marketing: {
        id: 'marketing',
        title: 'استراتيجيات التسويق والتخطيط',
        icon: 'Target',
        items: [
          { title: 'تطوير استراتيجيات التسويق', description: 'خطط تعتمد على البيانات للهيمنة على السوق.' },
          { title: 'تخطيط وإدارة الحملات', description: 'تنفيذ شامل للمبادرات الترويجية.' },
        ],
      },
    },
  },
  gallery: {
    titleSelected: 'أعمال',
    titleWorks: 'مختارة',
    subtitle: 'تصميم الشكل بمعنى واتجاه.',
    projectLabel: 'مشروع',
    serviceLabel: 'هوية العلامة التجارية / الاستراتيجية',
  },
  about: {
    title: 'فلسفة HD',
    description: 'بيت التصميم هو التقاء للفن والتكنولوجيا والاستراتيجية. نحن لا نصمم فحسب؛ بل نهندس تجارب تحدد مستقبل الأعمال ومساحات المعيشة.',
    stats: [
      { label: 'مشاريع', value: '+150' },
      { label: 'سنوات', value: '14' },
    ],
    cardTitle: 'استوديو HD الإبداعي',
    cardDesc1: 'تأسسنا على مبدأ أن التصميم هو ذكاء مرئي.',
    cardDesc2: 'نعمل عند تقاطع التفكير الاستراتيجي والتميز الفني.',
    quote: '"Design is not just what it looks like and feels like. Design is how it works."',
  },
  contact: {
    title: 'ابدأ مشروعاً',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'حدثنا عن رؤيتك',
    submit: 'إرسال الطلب',
    hqLabel: 'المقر الرئيسي',
    address: '16 Östra Hamngatan, 411 09 Gothenburg',
    country: 'السويد',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'الهاتف',
  },
  footer: {
    rights: 'جميع الحقوق محفوظة.',
  }
};

const SV_TRANSLATION: Translation = {
  nav: {
    home: 'Hem',
    services: 'Tjänster',
    gallery: 'Portfolio',
    about: 'Om HD',
    contact: 'Kontakt',
  },
  hero: {
    label: 'Home of Design',
    headline: 'Marknadsförings|Byrå',
    subheadline: 'Design / Marknadsföring',
    cta: 'Utforska Vår Vision',
  },
  services: {
    title: 'Vår Expertis',
    subtitle: 'Ett tvärvetenskapligt synsätt på moderna utmaningar.',
    clickDetails: 'Klicka för detaljer',
    categories: {
      design: {
        id: 'design',
        title: 'Varumärke & Visuell Identitet',
        icon: 'Palette',
        items: [
          { title: 'Varumärkesdesign & Utveckling', description: 'Definierar kärnvärden och visuellt språk.' },
          { title: 'Visuella Identitetssystem', description: 'Sammanhängande tillgångar över alla kontaktytor.' },
        ],
      },
      property: {
        id: 'property',
        title: 'Tryck & Reklamproduktion',
        icon: 'Printer',
        items: [
          { title: 'Skyltning & Storformatstryck', description: 'Effektfulla skärmar för fysiska miljöer.' },
          { title: 'Produktion av Marknadsmaterial', description: 'Exklusiva taktila marknadsföringstillgångar.' },
        ],
      },
      technical: {
        id: 'technical',
        title: 'Digital Marknadsföring & Närvaro',
        icon: 'Megaphone',
        items: [
          { title: 'Hantering av Sociala Medier', description: 'Engagerar målgrupper och driver trafik.' },
          { title: 'Digitalt Innehåll & Kampanjhantering', description: 'Strategiskt berättande för tillväxt online.' },
        ],
      },
      commercial: {
        id: 'commercial',
        title: 'Design av Digitala Plattformar',
        icon: 'Monitor',
        items: [
          { title: 'Webbdesign & Utveckling', description: 'Uppslukande, responsiva och prestandastarka webbupplevelser.' },
          { title: 'E-handel & Butiksdesign', description: 'Sömlösa köpresor som konverterar.' },
        ],
      },
      marketing: {
        id: 'marketing',
        title: 'Marknadsstrategi & Planering',
        icon: 'Target',
        items: [
          { title: 'Utveckling av Marknadsstrategi', description: 'Datadrivna färdplaner för marknadsdominans.' },
          { title: 'Kampanjplanering & Hantering', description: 'Helhetsgenomförande av marknadsföringsinitiativ.' },
        ],
      },
    },
  },
  gallery: {
    titleSelected: 'UTVALDA',
    titleWorks: 'ARBETEN',
    subtitle: 'Designar form med mening och riktning.',
    projectLabel: 'Projekt',
    serviceLabel: 'Varumärkesidentitet / Strategi',
  },
  about: {
    title: 'HD-filosofin',
    description: 'Home of Design är en sammansmältning av konst, teknik och strategi. Vi designar inte bara; vi konstruerar upplevelser som definierar framtiden för affärs- och livsmiljöer.',
    stats: [
      { label: 'Projekt', value: '150+' },
      { label: 'År', value: '14' },
    ],
    cardTitle: 'HD Creative Studio',
    cardDesc1: 'Grundat på principen att design är synliggjord intelligens.',
    cardDesc2: 'Vi verkar i skärningspunkten mellan strategiskt tänkande och konstnärlig excellens.',
    quote: '"Design is not just what it looks like and feels like. Design is how it works."',
  },
  contact: {
    title: 'Starta ett Projekt',
    name: 'Ditt Namn',
    email: 'E-postadress',
    message: 'Berätta om din vision',
    submit: 'Skicka Förfrågan',
    hqLabel: 'Huvudkontor',
    address: '16 Östra Hamngatan, 411 09 Gothenburg',
    country: 'Sverige',
    emailLabel: 'E-post',
    phoneLabel: 'Telefon',
  },
  footer: {
    rights: 'Alla rättigheter förbehållna.',
  }
};

const NO_TRANSLATION: Translation = {
  nav: {
    home: 'Hjem',
    services: 'Tjenester',
    gallery: 'Portefølje',
    about: 'Om HD',
    contact: 'Kontakt',
  },
  hero: {
    label: 'Home of Design',
    headline: 'Markedsførings|Byrå',
    subheadline: 'Design / Markedsføring',
    cta: 'Utforsk Vår Visjon',
  },
  services: {
    title: 'Vår Ekspertise',
    subtitle: 'En tverrfaglig tilnærming til moderne utfordringer.',
    clickDetails: 'Klikk for detaljer',
    categories: {
      design: {
        id: 'design',
        title: 'Merkevare & Visuell Identitet',
        icon: 'Palette',
        items: [
          { title: 'Merkevareutvikling & Design', description: 'Definere kjerneverdier og visuelt språk.' },
          { title: 'Visuelle Identitetssystemer', description: 'Sammenhengende uttrykk på alle flater.' },
        ],
      },
      property: {
        id: 'property',
        title: 'Trykk & Reklameproduksjon',
        icon: 'Printer',
        items: [
          { title: 'Skilting & Storformat', description: 'Effektfulle løsninger for fysiske miljøer.' },
          { title: 'Produksjon av Markedsmateriell', description: 'Eksklusive fysiske markedsføringselementer.' },
        ],
      },
      technical: {
        id: 'technical',
        title: 'Digital Markedsføring & Tilstedeværelse',
        icon: 'Megaphone',
        items: [
          { title: 'Sosiale Medier & Annonsering', description: 'Engasjere målgrupper og øke trafikk.' },
          { title: 'Digitalt Innhold & Kampanjestyring', description: 'Strategisk historiefortelling for vekst på nett.' },
        ],
      },
      commercial: {
        id: 'commercial',
        title: 'Design av Digitale Plattformer',
        icon: 'Monitor',
        items: [
          { title: 'Webdesign & Utvikling', description: 'Oppslukende, responsive og raske webopplevelser.' },
          { title: 'E-handel & Nettbutikk', description: 'Sømløse kjøpsopplevelser som konverterar.' },
        ],
      },
      marketing: {
        id: 'marketing',
        title: 'Markedsstrategi & Planlegging',
        icon: 'Target',
        items: [
          { title: 'Strategiutvikling', description: 'Datadrevne veikart for markedsdominans.' },
          { title: 'Kampanjeplanlegging', description: 'Helhetlig gjennomføring av markedsføringstiltak.' },
        ],
      },
    },
  },
  gallery: {
    titleSelected: 'UTVALGTE',
    titleWorks: 'ARBEIDER',
    subtitle: 'Utformer form med mening og retning.',
    projectLabel: 'Prosjekt',
    serviceLabel: 'Merkevareidentitet / Strategi',
  },
  about: {
    title: 'HD-filosofien',
    description: 'Home of Design er en konvergens av kunst, teknologi og strategi. Vi designer ikke bare; vi skaper opplevelser som definerer fremtiden for næringsliv og leverom.',
    stats: [
      { label: 'Prosjekter', value: '150+' },
      { label: 'År', value: '14' },
    ],
    cardTitle: 'HD Creative Studio',
    cardDesc1: 'Grunnlagt på prinsippet om at design er intelligens gjort synlig.',
    cardDesc2: 'Vi opererer i krysningspunktet mellom strategisk tenkning og kunstnerisk fortreffelighet.',
    quote: '"Design is not just what it looks like and feels like. Design is how it works."',
  },
  contact: {
    title: 'Start et Prosjekt',
    name: 'Ditt Navn',
    email: 'E-postadresse',
    message: 'Fortell oss om din visjon',
    submit: 'Send Forespørsel',
    hqLabel: 'Hovedkontor',
    address: '16 Östra Hamngatan, 411 09 Gothenburg',
    country: 'Sverige',
    emailLabel: 'E-post',
    phoneLabel: 'Telefon',
  },
  footer: {
    rights: 'Alle rettigheter forbeholdt.',
  }
};

const DE_TRANSLATION: Translation = {
  nav: {
    home: 'Startseite',
    services: 'Leistungen',
    gallery: 'Portfolio',
    about: 'Über HD',
    contact: 'Kontakt',
  },
  hero: {
    label: 'Home of Design',
    headline: 'Marketingagentur',
    subheadline: 'Design / Marketing',
    cta: 'Vision Entdecken',
  },
  services: {
    title: 'Unsere Expertise',
    subtitle: 'Ein multidisziplinärer Ansatz für moderne Herausforderungen.',
    clickDetails: 'Klicken für Details',
    categories: {
      design: {
        id: 'design',
        title: 'Marke & Visuelle Identität',
        icon: 'Palette',
        items: [
          { title: 'Markendesign & Entwicklung', description: 'Definition von Grundwerten und visueller Sprache.' },
          { title: 'Visuelle Identitätssysteme', description: 'Kohärente Assets an allen Kontaktpunkten.' },
        ],
      },
      property: {
        id: 'property',
        title: 'Druck & Werbeproduktion',
        icon: 'Printer',
        items: [
          { title: 'Beschilderung & Großformatdruck', description: 'Wirkungsvolle Displays für physische Räume.' },
          { title: 'Produktion von Werbematerialien', description: 'Hochwertige taktile Marketing-Assets.' },
        ],
      },
      technical: {
        id: 'technical',
        title: 'Digitales Marketing & Präsenz',
        icon: 'Megaphone',
        items: [
          { title: 'Social Media Management & Werbung', description: 'Communities einbinden und Traffic generieren.' },
          { title: 'Digitaler Inhalt & Kampagnenmanagement', description: 'Strategisches Storytelling für Online-Wachstum.' },
        ],
      },
      commercial: {
        id: 'commercial',
        title: 'Design digitaler Plattformen',
        icon: 'Monitor',
        items: [
          { title: 'Webdesign & Entwicklung', description: 'Immersive, reaktionsschnelle und leistungsstarke Web-Erlebnisse.' },
          { title: 'E-Commerce-Shop-Design & Einrichtung', description: 'Nahtlose Einkaufsreisen, die konvertieren.' },
        ],
      },
      marketing: {
        id: 'marketing',
        title: 'Marketingstrategie & Planung',
        icon: 'Target',
        items: [
          { title: 'Entwicklung von Marketingstrategien', description: 'Datengesteuerte Roadmaps für die Marktbeherrschung.' },
          { title: 'Kampagnenplanung & Management', description: 'End-to-End-Ausführung von Werbeinitiativen.' },
        ],
      },
    },
  },
  gallery: {
    titleSelected: 'AUSGEWÄHLTE',
    titleWorks: 'ARBEITEN',
    subtitle: 'Formgestaltung mit Bedeutung und Richtung.',
    projectLabel: 'Projekt',
    serviceLabel: 'Markenidentität / Strategie',
  },
  about: {
    title: 'Die HD-Philosophie',
    description: 'Home of Design ist eine Konvergenz aus Kunst, Technologie und Strategie. Wir entwerfen nicht nur; wir konstruieren Erlebnisse, die die Zukunft von Geschäfts- und Lebensräumen definieren.',
    stats: [
      { label: 'Projekte', value: '150+' },
      { label: 'Jahre', value: '14' },
    ],
    cardTitle: 'HD Kreativstudio',
    cardDesc1: 'Gegründet auf dem Prinzip, dass Design sichtbar gemachte Intelligenz ist.',
    cardDesc2: 'Wir arbeiten an der Schnittstelle von strategischem Denken und künstlerischer Exzellenz.',
    quote: '"Design is not just what it looks like and feels like. Design is how it works."',
  },
  contact: {
    title: 'Projekt Starten',
    name: 'Ihr Name',
    email: 'E-Mail-Adresse',
    message: 'Erzählen Sie uns von Ihrer Vision',
    submit: 'Anfrage Senden',
    hqLabel: 'Hauptsitz',
    address: '16 Östra Hamngatan, 411 09 Gothenburg',
    country: 'Schweden',
    emailLabel: 'E-Mail',
    phoneLabel: 'Telefon',
  },
  footer: {
    rights: 'Alle Rechte vorbehalten.',
  }
};

const ES_TRANSLATION: Translation = {
  nav: {
    home: 'Inicio',
    services: 'Servicios',
    gallery: 'Portafolio',
    about: 'Sobre HD',
    contact: 'Contacto',
  },
  hero: {
    label: 'Home of Design',
    headline: 'Agencia de Marketing',
    subheadline: 'Diseño / Marketing',
    cta: 'Explora Nuestra Visión',
  },
  services: {
    title: 'Nuestra Experiencia',
    subtitle: 'Un enfoque multidisciplinario para los desafíos modernos.',
    clickDetails: 'Clic para detalles',
    categories: {
      design: {
        id: 'design',
        title: 'Marca e Identidad Visual',
        icon: 'Palette',
        items: [
          { title: 'Diseño y Desarrollo de Marca', description: 'Definiendo valores fundamentales y lenguaje visual.' },
          { title: 'Sistemas de Identidad Visual', description: 'Activos cohesivos en todos los puntos de contacto.' },
        ],
      },
      property: {
        id: 'property',
        title: 'Impresión y Producción Publicitaria',
        icon: 'Printer',
        items: [
          { title: 'Señalización e Impresión de Gran Formato', description: 'Pantallas de alto impacto para espacios físicos.' },
          { title: 'Producción de Materiales Promocionales', description: 'Activos de marketing táctiles premium.' },
        ],
      },
      technical: {
        id: 'technical',
        title: 'Marketing Digital y Presencia',
        icon: 'Megaphone',
        items: [
          { title: 'Gestión de Redes Sociales y Publicidad', description: 'Involucrando comunidades y generando tráfico.' },
          { title: 'Contenido Digital y Gestión de Campañas', description: 'Narración estratégica para el crecimiento en línea.' },
        ],
      },
      commercial: {
        id: 'commercial',
        title: 'Diseño de Plataformas Digitales',
        icon: 'Monitor',
        items: [
          { title: 'Diseño y Desarrollo Web', description: 'Experiencias web inmersivas, responsivas y de alto rendimiento.' },
          { title: 'Diseño y Configuración de Tiendas E-commerce', description: 'Recorridos de compra fluidos que convierten.' },
        ],
      },
      marketing: {
        id: 'marketing',
        title: 'Estrategia y Planificación de Marketing',
        icon: 'Target',
        items: [
          { title: 'Desarrollo de Estrategia de Marketing', description: 'Hojas de ruta basadas en datos para el dominio del mercado.' },
          { title: 'Planificación y Gestión de Campañas', description: 'Ejecución integral de iniciativas promocionales.' },
        ],
      },
    },
  },
  gallery: {
    titleSelected: 'TRABAJOS',
    titleWorks: 'SELECCIONADOS',
    subtitle: 'Diseñando la forma con significado y dirección.',
    projectLabel: 'Proyecto',
    serviceLabel: 'Identidad de Marca / Estrategia',
  },
  about: {
    title: 'La Filosofía HD',
    description: 'Home of Design es una convergencia de arte, tecnología y estrategia. No solo diseñamos; diseñamos experiencias que definen el futuro de los negocios y los espacios vitales.',
    stats: [
      { label: 'Proyectos', value: '150+' },
      { label: 'Años', value: '14' },
    ],
    cardTitle: 'Estudio Creativo HD',
    cardDesc1: 'Fundado bajo el principio de que el diseño es inteligencia hecha visible.',
    cardDesc2: 'Operamos en la intersección del pensamiento estratégico y la excelencia artística.',
    quote: '"Design is not just what it looks like and feels like. Design is how it works."',
  },
  contact: {
    title: 'Iniciar un Proyecto',
    name: 'Tu Nombre',
    email: 'Dirección de Correo',
    message: 'Cuéntanos sobre tu visión',
    submit: 'Enviar Solicitud',
    hqLabel: 'Sede Central',
    address: '16 Östra Hamngatan, 411 09 Gothenburg',
    country: 'Suecia',
    emailLabel: 'Correo',
    phoneLabel: 'Teléfono',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  }
};

const FR_TRANSLATION: Translation = {
  nav: {
    home: 'Accueil',
    services: 'Services',
    gallery: 'Portfolio',
    about: 'À propos',
    contact: 'Contact',
  },
  hero: {
    label: 'Home of Design',
    headline: 'Agence Marketing',
    subheadline: 'Design / Marketing',
    cta: 'Explorer Notre Vision',
  },
  services: {
    title: 'Nos Expertises',
    subtitle: 'Une approche multidisciplinaire aux défis modernes.',
    clickDetails: 'Cliquez pour les détails',
    categories: {
      design: {
        id: 'design',
        title: 'Marque & Identité Visuelle',
        icon: 'Palette',
        items: [
          { title: 'Design & Développement de Marque', description: 'Définir les valeurs fondamentales et le langage visuel.' },
          { title: 'Systèmes d\'Identité Visuelle', description: 'Actifs cohérents sur tous les points de contact.' },
        ],
      },
      property: {
        id: 'property',
        title: 'Impression & Production Publicitaire',
        icon: 'Printer',
        items: [
          { title: 'Signalétique & Impression Grand Format', description: 'Affichages à fort impact pour les espaces physiques.' },
          { title: 'Production de Matériel Promotionnel', description: 'Actifs marketing tactiles haut de gamme.' },
        ],
      },
      technical: {
        id: 'technical',
        title: 'Marketing Digital & Présence',
        icon: 'Megaphone',
        items: [
          { title: 'Gestion & Publicité Réseaux Sociaux', description: 'Engager les communautés et générer du trafic.' },
          { title: 'Contenu Digital & Gestion de Campagnes', description: 'Storytelling stratégique pour la croissance en ligne.' },
        ],
      },
      commercial: {
        id: 'commercial',
        title: 'Design de Plateformes Digitales',
        icon: 'Monitor',
        items: [
          { title: 'Design & Développement Web', description: 'Expériences web immersives, réactives et performantes.' },
          { title: 'Design & Configuration E-commerce', description: 'Parcours d\'achat fluides qui convertissent.' },
        ],
      },
      marketing: {
        id: 'marketing',
        title: 'Stratégie Marketing & Planification',
        icon: 'Target',
        items: [
          { title: 'Développement de Stratégie Marketing', description: 'Feuilles de route basées sur les données pour la domination du marché.' },
          { title: 'Planification & Gestion de Campagne', description: 'Exécution de bout en bout des initiatives promotionnelles.' },
        ],
      },
    },
  },
  gallery: {
    titleSelected: 'SÉLECTION',
    titleWorks: 'TRAVAUX',
    subtitle: 'Concevoir la forme avec sens et direction.',
    projectLabel: 'Projet',
    serviceLabel: 'Identité de Marque / Stratégie',
  },
  about: {
    title: 'La Philosophie HD',
    description: 'Home of Design est une convergence d\'art, de technologie et de stratégie. Nous ne faisons pas que concevoir ; nous ingénierons des expériences qui définissent l\'avenir des entreprises et des espaces de vie.',
    stats: [
      { label: 'Projets', value: '150+' },
      { label: 'Années', value: '14' },
    ],
    cardTitle: 'Studio Créatif HD',
    cardDesc1: 'Fondé sur le principe que le design est l\'intelligence rendue visible.',
    cardDesc2: 'Nous opérons à l\'intersection de la pensée stratégique et de l\'excellence artistique.',
    quote: '"Design is not just what it looks like and feels like. Design is how it works."',
  },
  contact: {
    title: 'Démarrer un Projet',
    name: 'Votre Nom',
    email: 'Adresse Email',
    message: 'Parlez-nous de votre vision',
    submit: 'Envoyer la Demande',
    hqLabel: 'Siège Social',
    address: '16 Östra Hamngatan, 411 09 Gothenburg',
    country: 'Suède',
    emailLabel: 'Email',
    phoneLabel: 'Téléphone',
  },
  footer: {
    rights: 'Tous droits réservés.',
  }
};

const PT_TRANSLATION: Translation = {
  nav: {
    home: 'Início',
    services: 'Serviços',
    gallery: 'Portfólio',
    about: 'Sobre a HD',
    contact: 'Contato',
  },
  hero: {
    label: 'Home of Design',
    headline: 'Agência de Marketing',
    subheadline: 'Design / Marketing',
    cta: 'Explore Nossa Visão',
  },
  services: {
    title: 'Nossa Expertise',
    subtitle: 'Uma abordagem multidisciplinar para desafios modernos.',
    clickDetails: 'Clique para detalhes',
    categories: {
      design: {
        id: 'design',
        title: 'Marca e Identidade Visual',
        icon: 'Palette',
        items: [
          { title: 'Design e Desenvolvimento de Marca', description: 'Definiendo valores fundamentais e linguagem visual.' },
          { title: 'Sistemas de Identidade Visual', description: 'Ativos coesos em todos os pontos de contato.' },
        ],
      },
      property: {
        id: 'property',
        title: 'Impressão e Produção Publicitária',
        icon: 'Printer',
        items: [
          { title: 'Sinalização e Impressão de Grande Formato', description: 'Displays de alto impacto para espaços físicos.' },
          { title: 'Produção de Materiais Promocionais', description: 'Ativos de marketing táteis premium.' },
        ],
      },
      technical: {
        id: 'technical',
        title: 'Marketing Digital e Presença',
        icon: 'Megaphone',
        items: [
          { title: 'Gestão de Redes Sociais e Publicidade', description: 'Engajando comunidades e gerando tráfego.' },
          { title: 'Conteúdo Digital e Gestão de Campanhas', description: 'Storytelling estratégico para crescimento online.' },
        ],
      },
      commercial: {
        id: 'commercial',
        title: 'Design de Plataformas Digitais',
        icon: 'Monitor',
        items: [
          { title: 'Design e Desenvolvimento de Websites', description: 'Experiências web imersivas, responsivas e de alto desempenho.' },
          { title: 'Design e Configuração de E-commerce', description: 'Jornadas de compra perfeitas que convertem.' },
        ],
      },
      marketing: {
        id: 'marketing',
        title: 'Estratégia e Planejamento de Marketing',
        icon: 'Target',
        items: [
          { title: 'Desenvolvimento de Estratégia de Marketing', description: 'Roteiros baseados em dados para domínio do mercado.' },
          { title: 'Planejamento e Gestão de Campanhas', description: 'Execução ponta a ponta de iniciativas promocionales.' },
        ],
      },
    },
  },
  gallery: {
    titleSelected: 'TRABALHOS',
    titleWorks: 'SELECIONADOS',
    subtitle: 'Projetando a forma com significado e direção.',
    projectLabel: 'Projeto',
    serviceLabel: 'Identidade de Marca / Estratégia',
  },
  about: {
    title: 'A Filosofia HD',
    description: 'Home of Design é uma convergência de arte, tecnologia e estratégia. Não apenas projetamos; engenhamos experiências que definem o futuro dos negócios e espaços de convivência.',
    stats: [
      { label: 'Projetos', value: '150+' },
      { label: 'Anos', value: '14' },
    ],
    cardTitle: 'Estúdio Criativo HD',
    cardDesc1: 'Fundado no princípio de que o design é inteligência tornada visível.',
    cardDesc2: 'Operamos na interseção do pensamento estratégico e excelência artística.',
    quote: '"Design is not just what it looks like and feels like. Design is how it works."',
  },
  contact: {
    title: 'Inicie um Projeto',
    name: 'Seu Nome',
    email: 'Endereço de E-mail',
    message: 'Conte-nos sobre sua visão',
    submit: 'Enviar Solicitação',
    hqLabel: 'Sede',
    address: '16 Östra Hamngatan, 411 09 Gothenburg',
    country: 'Suécia',
    emailLabel: 'E-mail',
    phoneLabel: 'Telefone',
  },
  footer: {
    rights: 'Todos os direitos reservados.',
  }
};

const BASE_TRANSLATION = EN_TRANSLATION;

export const getTranslation = (lang: Language): Translation => {
  const translations: Record<Language, Translation> = {
    en: EN_TRANSLATION,
    ar: AR_TRANSLATION,
    sv: SV_TRANSLATION,
    no: NO_TRANSLATION,
    de: DE_TRANSLATION,
    es: ES_TRANSLATION,
    fr: FR_TRANSLATION,
    pt: PT_TRANSLATION,
  };

  return translations[lang] || EN_TRANSLATION;
};