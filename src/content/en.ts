import type { SiteContent } from "@/types/site-content";

const NAV_ITEMS = [
  { label: "About Me", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Stages", href: "#steps" },
  { label: "Cases", href: "#cases" },
] as const;

const FOOTER_NAV_LINKS = NAV_ITEMS;

const LEGAL_LINKS = [
  { label: "Offer", href: "/oferta-en" },
  { label: "Privacy Policy", href: "/politics-en" },
] as const;

const OFERTA_PARAGRAPHS = [
  "This document is an official proposal (public offer) from an independent internet marketing specialist (hereinafter — the Contractor) and contains the terms for providing services through the adssolutions.pro website.",
  "By using the website and/or requesting services, the User confirms agreement with the terms of this Offer.",
  "General provisions",
  "1.1. The Contractor provides services for setting up, managing, and consulting on Google Ads campaigns.",
  "1.2. The Contractor is an independent specialist and does not represent Google LLC or any other companies.",
  "1.3. Information on the website is for informational purposes only and is not a guarantee of specific results.",
  "Service delivery process",
  "2.1. Service terms (scope of work, timelines, cost) are agreed individually with the Client via messaging or another communication channel.",
  "2.2. Services are provided remotely.",
  "2.3. The Contractor may refuse to provide services without explanation before work begins.",
  "Rights and obligations of the parties",
  "3.1. The Contractor undertakes to provide services diligently and within the agreed terms.",
  "3.2. The Client undertakes to provide accurate information necessary for service delivery.",
  "3.3. The Contractor is not responsible for the actions of third parties, including platforms, advertising systems, and analytics services.",
  "Limitation of liability",
  "4.1. The Contractor does not guarantee specific sales figures, revenue, number of leads, or profit.",
  "4.2. Advertising campaign results depend on many factors beyond the Contractor's control.",
  "Intellectual property",
  "5.1. All website materials are the intellectual property of the Contractor.",
  "5.2. Copying and using materials without permission is prohibited.",
  "Final provisions",
  "6.1. The Contractor reserves the right to change the terms of this Offer without prior notice.",
  "6.2. The current version of the Offer is always available on the website.",
  "Contact information",
] as const;

const POLITICS_PARAGRAPHS = [
  "This Privacy Policy defines the procedure for processing and protecting personal data of adssolutions.pro website users.",
  "General provisions",
  "1.1. The website is managed by an independent internet marketing specialist.",
  "1.2. Using the website means the user agrees to this Privacy Policy.",
  "Personal data",
  "2.1. We may collect the following data voluntarily provided by the user:",
  "name;",
  "email address;",
  "phone number;",
  "other information specified in the contact form.",
  "Purposes of data processing",
  "Personal data is used exclusively for:",
  "contacting the user;",
  "providing information about services;",
  "preparing commercial proposals;",
  "improving service quality.",
  "Transfer of data to third parties",
  "4.1. We do not transfer, sell, or share personal data with third parties.",
  "4.2. Data transfer is possible only in cases provided by law.",
  "Information security",
  "We take reasonable technical and organizational measures to protect personal data from unauthorized access.",
  "Use of cookies",
  "The website may use cookies and third-party analytics services (for example, Google Analytics) to analyze user behavior and improve website performance.",
  "Policy changes",
  "We reserve the right to change this Privacy Policy without prior notice.",
  "Contacts",
] as const;

export const enContent: SiteContent = {
  locale: "en",
  htmlLang: "en",
  homePath: "/en",
  metadata: {
    title: "Google Ads That Actually Makes You Money",
    description:
      "Professional Google Ads Specialist | ROAS-Driven Campaigns. Search, Shopping, Performance Max. EU-focused. Free Audit & Strategy.",
  },
  language: {
    current: "EN",
    ariaLabel: "Choose language",
    alternatives: [
      { label: "UA", href: "/" },
      { label: "RU", href: "/ru" },
    ],
  },
  nav: {
    ariaLabel: "Main navigation",
    items: [...NAV_ITEMS],
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    subtitleNormal: "Professional advertising management with a focus on ",
    subtitleBold: "ROI and profit growth.",
    headlineLines: [
      "SCALING BUSINESS WITH",
      "GOOGLE ADS: FROM",
      "STRATEGY TO PROFIT",
    ],
    cta: "Free Express Audit",
    supportLine1:
      "I'll identify the mistakes that are draining your budget right now,",
    supportLine2: "and provide a concrete plan to fix them.",
  },
  results: {
    srHeading: "About Me",
    photoAlt: "Google Ads specialist",
    statCards: [
      {
        title: "More than 4 years",
        subtitle: "experience with Google Ads",
        variant: "amber",
      },
      {
        title: "15+ case studies",
        subtitle: "from services to goods",
        variant: "dark",
      },
      {
        title: "UA / EU",
        subtitle: "working on local and international projects.",
        variant: "dark",
      },
      {
        title: "$250,000+",
        subtitle: "Total managed budget",
        variant: "amber",
      },
    ],
    bottomNormal: "I work with markets in Ukraine and Europe, ",
    bottomBold: "launching campaigns that actually generate revenue.",
    cta: "Ask a question",
  },
  third: {
    badge: "Why",
    headingLines: ["IT'S WORTH WORKING", "WITH ME"],
    cards: [
      {
        id: "results",
        title: "RESULTS-ORIENTED WORK",
        parts: [
          { text: "I fix mistakes", highlight: true },
          {
            text: " made by previous contractors. I cut out unnecessary expenses and optimize campaigns so they generate profit, not just empty traffic.",
          },
        ],
      },
      {
        id: "leadgen",
        title: "LEADGEN AND E-COM",
        parts: [
          { text: "I know how to " },
          { text: "generate high-quality leads", highlight: true },
          {
            text: " for various services and how to build a steady stream of sales for an online store.",
          },
        ],
      },
      {
        id: "promises",
        title: "RESULTS, NOT PROMISES",
        parts: [
          { text: "No fluff — " },
          { text: "just hard numbers", highlight: true },
          { text: ", transparent reporting, and actual sales." },
        ],
      },
    ],
  },
  approach: {
    badge: "Collaboration",
    headingYellow: "A COMPREHENSIVE",
    headingWhiteLines: ["APPROACH TO YOUR", "PROJECT"],
    steps: [
      {
        id: "strategy",
        title: "STRATEGY AND LAUNCH",
        description:
          "In-depth analysis of the account structure, compilation of semantic terms and negative keyword lists. Setting up analytics and conversion tracking so we can track every target action.",
        iconAlt: "Strategy and launch",
        iconRotation: "-rotate-6 md:-rotate-12",
        reverse: false,
      },
      {
        id: "optimization",
        title: "OPTIMIZATION AND MONITORING",
        description:
          "I continuously monitor metrics and adjust target audiences. I identify underperforming areas that drain the budget and prioritize those that deliver results. You receive transparent weekly reports",
        iconAlt: "Optimization and monitoring",
        iconRotation: "rotate-6 md:rotate-12",
        reverse: true,
      },
      {
        id: "scaling",
        title: "SCALING",
        description:
          "Identifying new growth opportunities. I'm testing different campaign types (P-Max, Search, Remarketing) and audience segments to increase the number of orders while maintaining the cost per lead.",
        iconAlt: "Scaling",
        iconRotation: "-rotate-6 md:-rotate-12",
        reverse: false,
      },
    ],
  },
  workflow: {
    badge: "Stages",
    heading: "OUR PARTNERSHIP",
    steps: [
      {
        number: "01",
        title: "DIVE AND BRIEFING",
        description:
          "I'll analyze your business, your competitors, and your past advertising experience (if any). We'll clearly define the goals and KPIs we need to achieve to ensure transparency from day one.",
      },
      {
        number: "02",
        title: "PREPARATION AND START",
        description:
          "While I handle the technical side (setting up the account and analytics), you'll receive a step-by-step launch plan. Before we go live, we'll finalize all the ads and the structure.",
      },
      {
        number: "03",
        title: "TEST PERIOD AND CALIBRATION",
        description:
          "The first two weeks after launch are the most critical. I monitor the campaigns daily to quickly filter out irrelevant traffic and ensure that Google's algorithms are learning in the right direction.",
      },
      {
        number: "04",
        title: "STABLE OPERATION AND COMMUNICATION",
        description:
          "We're always available via a convenient messaging app. Once a week, I send a report with the results and a plan for the coming week. You can track the project's progress and see exactly what's driving the increase in sales.",
      },
    ],
    cta: "Free Express Audit",
  },
  cases: {
    badge: "Cases",
    headingYellow: "MY CLIENTS'",
    headingWhite: "RESULTS",
    prevAria: "Previous case",
    nextAria: "Next case",
    slideAria: (index) => `Go to slide ${index + 1}`,
    items: [
      {
        id: 1,
        image: "/assets/6 block/Кейс бу айфоны 3.jpg",
        title: "CASE: APPLE TECH E-COMMERCE STORE (USED)",
        niche: "Niche: Sale of used iPhone, MacBook, and iPad",
        metrics: [
          { value: "2,500", label: "orders (conversions) received" },
          { value: "262 UAH", label: "average cost per order (CPA)" },
          { value: "650,000+ UAH", label: "total advertising budget of the project" },
          { value: "20 months", label: "period of stable management and scaling" },
        ],
      },
      {
        id: 2,
        image: "/assets/6 block/Кейс агентсво недвижимости 2.jpg",
        title: "CASE: REAL ESTATE AGENCY",
        niche: "Niche: Urgent buyout and apartment sales",
        metrics: [
          { value: "1,250+", label: "inquiries (leads) received" },
          { value: "442 UAH", label: "average cost per lead in a highly competitive niche" },
          { value: "550,000+ UAH", label: "total advertising budget of the project" },
          { value: "16 months", label: "duration of continuous management and optimization" },
        ],
      },
      {
        id: 3,
        image: "/assets/6 block/Кейс автомастерская 1.jpg",
        title: "CASE: AUTO REPAIR SHOP (STO)",
        niche: "Niche: Body repair and car painting",
        metrics: [
          { value: "90", label: "target leads received" },
          { value: "210 UAH", label: "average cost per lead (CPL)" },
          { value: "12%", label: "average CTR (ad click-through rate)" },
          { value: "18,900 UAH", label: "total advertising budget" },
        ],
      },
      {
        id: 4,
        image: "/assets/6 block/Кейс логистика китай 4.jpg",
        title: "CASE: LOGISTICS AND CARGO DELIVERY FROM CHINA",
        niche: "Niche: International freight (B2B)",
        metrics: [
          { value: "960+", label: "leads received" },
          { value: "275 UAH", label: "cost per lead in a highly competitive B2B niche" },
          { value: "6.4%", label: "average website conversion rate" },
          { value: "260,000+ UAH", label: "total advertising budget of the project" },
        ],
      },
      {
        id: 5,
        image: "/assets/6 block/Кейс безпека.jpg",
        title: "CASE: PERSONAL SECURITY SYSTEMS STORE",
        niche:
          "Niche: Equipment for protection and detecting hidden devices (bug detectors, dosimeters)",
        metrics: [
          { value: "1,100+", label: "confirmed orders received" },
          { value: "738%", label: "average ROAS across the account" },
          { value: "171 UAH", label: "average cost per transaction" },
          {
            value: "385,000+ UAH",
            label: "revenue generated from the advertising channel alone",
          },
        ],
      },
    ],
  },
  optimizationCases: {
    badge: "Cases",
    headingYellow: "BEFORE / AFTER",
    headingWhite: "OPTIMIZATION",
    beforeAltSuffix: " — before",
    afterAltSuffix: " — after",
    prevAria: "Previous slide",
    nextAria: "Next slide",
    slideAria: (index) => `Go to slide ${index + 1}`,
    items: [
      {
        id: 1,
        beforeImage: "/assets/cases/АН до.jpeg",
        afterImage: "/assets/cases/АН после.jpeg",
        title: "CASE: Real Estate Agency",
        niche: "Niche: Real estate agency",
        results: [
          {
            text: "Conversion cost reduced by 2x",
            highlight: "625 UAH → 283 UAH",
          },
        ],
      },
      {
        id: 2,
        beforeImage: "/assets/cases/Безп до.jpeg",
        afterImage: "/assets/cases/Безп после.jpeg",
        title: "CASE: PERSONAL SECURITY SYSTEMS STORE",
        niche:
          "Niche: Equipment for protection and detecting hidden devices (bug detectors, dosimeters)",
        results: [
          {
            text: "Conversion cost reduced",
            highlight: "177.65 UAH → 138.32 UAH",
          },
          {
            text: "Number of conversions increased",
            highlight: "by 1.7x",
          },
        ],
      },
      {
        id: 3,
        beforeImage: "/assets/cases/еком витера до.jpeg",
        afterImage: "/assets/cases/еком витера после.jpeg",
        title: "CASE: FOOD SUPPLEMENTS E-COMMERCE STORE",
        niche: "Niche: Food supplements and vitamins",
        results: [
          {
            text: "Conversion cost reduced",
            highlight: "158.19 UAH → 93.67 UAH",
          },
          {
            text: "Number of conversions increased",
            highlight: "several times over",
          },
        ],
      },
      {
        id: 4,
        beforeImage: "/assets/cases/Рем КПП до.jpeg",
        afterImage: "/assets/cases/Рем КПП после.jpeg",
        title: "CASE: AUTOMATIC TRANSMISSION REPAIR",
        niche: "Niche: Repair and maintenance of automatic transmissions",
        results: [
          {
            text: "Conversion cost reduced",
            highlight: "1,649 UAH → 872 UAH",
          },
          {
            text: "Reduction",
            highlight: "by almost 2x",
          },
        ],
      },
    ],
  },
  contact: {
    headingLines: ["READY TO GROW", "YOUR PROFITS WITH", "GOOGLE ADS?"],
    subtitleLine1: "Request a free express audit.",
    subtitleLine2: "I'll analyze your project and propose a scaling strategy.",
    nameLabel: "Your name",
    namePlaceholder: "Your name",
    contactLabel: "Telegram / Phone",
    contactPlaceholder: "Telegram / Phone*",
    websiteLabel: "Website link",
    websitePlaceholder: "Website link (if available)",
    submit: "Get the strategy",
    errorRequiredContact: "Please provide Telegram or phone — this field is required.",
    errorSubmitFailed: "Could not submit the request. Please try again.",
    successMessage: "Request submitted successfully",
  },
  modal: {
    titleLines: ["REQUEST A FREE", "EXPRESS AUDIT"],
    subtitle: "I'll analyze your project and propose a scaling strategy.",
    nameLabel: "Your name",
    namePlaceholder: "Your name",
    contactLabel: "Telegram / Phone",
    contactPlaceholder: "Telegram / Phone*",
    websiteLabel: "Website link",
    websitePlaceholder: "Website link (if available)",
    submit: "Get the strategy",
    errorRequiredContact: "Please provide Telegram or phone — this field is required.",
    errorSubmitFailed: "Could not submit the request. Please try again.",
    successMessage: "Request submitted successfully",
    closeOverlay: "Close form",
    closeButton: "Close",
  },
  footer: {
    navAria: "Site navigation",
    navLinks: [...FOOTER_NAV_LINKS],
    legalLinks: [...LEGAL_LINKS],
    sloganLine1: "“Only clean, relevant",
    sloganLine2: "traffic for your business”",
    phoneLabel: "Phone",
    disclaimerLine1:
      "This website is not affiliated with, endorsed by, or sponsored by Google LLC.",
    disclaimerLine2: "Google Ads is a trademark of Google LLC.",
    rights: "All rights Reserved.",
  },
  legal: {
    oferta: {
      href: "/oferta-en",
      backLink: "Back to home",
      backHref: "/en",
      title: "Public Offer",
      paragraphs: OFERTA_PARAGRAPHS,
      contactPrefix:
        "For all questions related to service delivery, you can contact us by email:",
      email: "alexshabala98@gmail.com",
    },
    politics: {
      href: "/politics-en",
      backLink: "Back to home",
      backHref: "/en",
      title: "Privacy Policy",
      paragraphs: POLITICS_PARAGRAPHS,
      contactPrefix:
        "For questions related to personal data processing, you can contact us at:",
      email: "alexshabala98@gmail.com",
    },
  },
};
