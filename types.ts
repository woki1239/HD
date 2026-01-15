export type Language = 'en' | 'ar' | 'de' | 'es' | 'fr' | 'pt' | 'sv' | 'no';

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  items: ServiceItem[];
}

export interface NavItem {
  id: string;
  label: string;
}

export interface Translation {
  nav: {
    home: string;
    services: string;
    gallery: string;
    about: string;
    contact: string;
  };
  hero: {
    label: string;
    headline: string;
    subheadline: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    clickDetails: string;
    categories: {
      design: ServiceCategory;
      property: ServiceCategory;
      technical: ServiceCategory;
      commercial: ServiceCategory;
      marketing: ServiceCategory;
    }
  };
  gallery: {
    titleSelected: string;
    titleWorks: string;
    subtitle: string;
    projectLabel: string;
    serviceLabel: string;
  };
  about: {
    title: string;
    description: string;
    stats: { label: string; value: string }[];
    cardTitle: string;
    cardDesc1: string;
    cardDesc2: string;
    quote: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    hqLabel: string;
    address: string;
    country: string;
    emailLabel: string;
    phoneLabel: string;
  };
  footer: {
    rights: string;
  };
}