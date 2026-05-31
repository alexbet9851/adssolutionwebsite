export type Locale = "uk" | "ru" | "en";

export type TextPart = {
  text: string;
  highlight?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
};

export type CaseMetric = {
  value: string;
  label: string;
};

export type CaseItem = {
  id: number;
  image: string;
  title: string;
  niche: string;
  metrics: CaseMetric[];
};

export type OptimizationCaseItem = {
  id: number;
  beforeImage: string;
  afterImage: string;
  title: string;
  niche: string;
  results: Array<{ text: string; highlight: string }>;
};

export type LegalDocumentContent = {
  href: string;
  backLink: string;
  backHref: string;
  title: string;
  paragraphs: readonly string[];
  contactPrefix: string;
  email: string;
};

export type SiteContent = {
  locale: Locale;
  htmlLang: "uk" | "ru" | "en";
  homePath: string;
  metadata: {
    title: string;
    description: string;
  };
  language: {
    current: string;
    ariaLabel: string;
    alternatives: Array<{ label: string; href: string }>;
  };
  nav: {
    ariaLabel: string;
    items: NavItem[];
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    subtitleNormal: string;
    subtitleBold: string;
    headlineLines: readonly string[];
    headlineClassName?: string;
    cta: string;
    supportLine1: string;
    supportLine2: string;
  };
  results: {
    srHeading: string;
    photoAlt: string;
    statCards: Array<{
      title: string;
      subtitle: string;
      variant: "amber" | "dark";
    }>;
    bottomNormal: string;
    bottomBold: string;
    cta: string;
  };
  third: {
    badge: string;
    headingLines: readonly string[];
    cards: Array<{
      id: "results" | "leadgen" | "promises";
      title: string;
      parts: TextPart[];
    }>;
  };
  approach: {
    badge: string;
    headingYellow: string;
    headingWhiteLines: readonly string[];
    steps: Array<{
      id: string;
      title: string;
      description: string;
      iconAlt: string;
      iconRotation: string;
      reverse: boolean;
    }>;
  };
  workflow: {
    badge: string;
    heading: string;
    steps: Array<{ number: string; title: string; description: string }>;
    cta: string;
  };
  cases: {
    badge: string;
    headingYellow: string;
    headingWhite: string;
    prevAria: string;
    nextAria: string;
    slideAria: (index: number) => string;
    items: CaseItem[];
  };
  optimizationCases: {
    badge: string;
    headingYellow: string;
    headingWhite: string;
    beforeAltSuffix: string;
    afterAltSuffix: string;
    prevAria: string;
    nextAria: string;
    slideAria: (index: number) => string;
    items: OptimizationCaseItem[];
  };
  contact: {
    headingLines: readonly string[];
    subtitleLine1: string;
    subtitleLine2: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messengerLabel: string;
    messengerPlaceholder: string;
    websiteLabel: string;
    websitePlaceholder: string;
    submit: string;
    errorRequiredPhone: string;
    errorSubmitFailed: string;
    successMessage: string;
  };
  modal: {
    titleLines: readonly string[];
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messengerLabel: string;
    messengerPlaceholder: string;
    websiteLabel: string;
    websitePlaceholder: string;
    submit: string;
    errorRequiredPhone: string;
    errorSubmitFailed: string;
    successMessage: string;
    closeOverlay: string;
    closeButton: string;
  };
  footer: {
    navAria: string;
    navLinks: NavItem[];
    legalLinks: Array<{ label: string; href: string }>;
    sloganLine1: string;
    sloganLine2: string;
    phoneLabel: string;
    disclaimerLine1: string;
    disclaimerLine2: string;
    rights: string;
  };
  legal: {
    oferta: LegalDocumentContent;
    politics: LegalDocumentContent;
  };
};
