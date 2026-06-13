/**
 * ============================================================
 *  MonsieurData - central site content
 *  ------------------------------------------------------------
 *  All editable site copy lives in this file. Edit the string
 *  values; the components read from these exports.
 * ============================================================
 */

export const site = {
  name: "MonsieurData",
  url: "https://monsieurdata.be",
  title: "Digital Analytics Developer | GA4, GTM & BigQuery | MonsieurData",
  description:
    "GA4, GTM, server-side tagging and Consent Mode v2 for web and mobile apps, with BigQuery pipelines built to last. Remote-first digital analytics developer.",
  locale: "en",
  // Google Tag Manager container. Loaded site-wide via the Base layout.
  gtmId: "GTM-PLDJDXDD",
  email: "info@monsieurdata.be",
  linkedin: "https://www.linkedin.com/in/dimitridries/",
  // 30-min intro call. Also used by the Audit & Sprint package buttons.
  bookingUrl: "https://cal.com/athena-mrd-ms0iie/30min",
  // 45-min call for the embedded Data Partner conversation.
  bookingUrlPartner: "https://cal.com/athena-mrd-ms0iie/monsieurdata-45-min-meeting",
  owner: {
    name: "Dimitri Dries",
    role: "Digital Analytics Developer",
    location: "remote-first, worldwide",
  },
};

export const nav = {
  links: [
    { label: "Services", href: "/#services" },
    { label: "Approach", href: "/#approach" },
    { label: "About", href: "/#about" },
    // Blog is built & ready - uncomment to launch it:
    // { label: "Blog", href: "/blog" },
  ],
  cta: { label: "Book an intro call", href: "#contact" },
};

// Computed at build time so the "years active" stat never goes stale.
const FOUNDING_YEAR = 2018;
const yearsActive = new Date().getFullYear() - FOUNDING_YEAR;

export const hero = {
  eyebrow: "Digital analytics developer",
  // The hook. Short, declarative, durability + trust.
  headline: ["Tracking built to last.", "Numbers you can trust."],
  sub: "I help marketing and product teams fix broken tracking and build data foundations, across web and app, that last. Clean, documented and ready for whatever your BI team builds next.",
  primaryCta: { label: "Book a free intro call", href: "#contact" },
  secondaryCta: { label: "See how I work", href: "#services" },
  // Proof bar under the hero. Numbers count up on scroll.
  stats: [
    { value: yearsActive, suffix: "+", label: "years in digital analytics" },
    { value: 8, suffix: "", label: "clients helped" },
    { value: 30, suffix: "+", label: "websites tracked" },
    { value: 4, suffix: "+", label: "mobile apps tracked" },
  ],
};

export const valueProp = {
  eyebrow: "Why MonsieurData",
  title: "Data you can defend, decisions you can trust.",
  lede: "Most analytics setups are either broken, bloated, or both. I keep it simple: measure what matters, store it properly, and hand it off clean, documented and ready for your team to build on.",
  pillars: [
    {
      icon: "tagmanagement",
      title: "Tracking done right",
      body: "Tracking plans and measurement setups across web, server-side and mobile apps: GA4, Amplitude, Mixpanel, Google Tag Manager, Firebase, AppsFlyer & MMPs, whichever fits your stack. Documented, privacy-proof and built to survive your next release.",
    },
    {
      icon: "development",
      title: "Data where it belongs",
      body: "Pipelines into a data warehouse that centralise your web, app, marketing and product data: clean, deduplicated, documented and modelled so your BI team can build on it without cleanup.",
    },
    {
      icon: "reporting",
      title: "Documented and handed over",
      body: "Every setup comes with a tracking plan, dataLayer documentation and a handover your team (or the next developer) can actually follow. No tribal knowledge, no black box.",
    },
    {
      icon: "privacy",
      title: "Privacy by default",
      body: "Consent mode, server-side tagging and GDPR-aware data flows. Compliant measurement that still gives you numbers you can work with.",
    },
  ],
};

export const packages = {
  eyebrow: "Services",
  title: "Three ways to work together.",
  lede: "Clear scope, no lock-in. Start small, scale when it proves its worth. Every engagement is scoped and priced to your situation: you'll get a clear proposal after the intro call.",
  note: "Not sure which fits? That's exactly what the intro call is for.",
  // `bookingKey` selects which cal.com link a tier's button opens:
  //   "intro"   → site.bookingUrl (30-min call)
  //   "partner" → site.bookingUrlPartner (45-min call)
  tiers: [
    {
      name: "Analytics Audit",
      tagline: "Know where you stand",
      duration: "± 2 weeks",
      description:
        "A structured review of your current setup, covering tracking, data quality, consent and reporting. You get a prioritised roadmap you can execute with or without me, including a recommendation on whether your current toolstack is the right fit.",
      includes: [
        "Analytics platform, tag management & data layer review",
        "Data quality & consent check",
        "Toolstack fit & migration advice",
        "Prioritised, actionable roadmap",
        "Walkthrough call with your team",
      ],
      cta: "Schedule your audit",
      bookingKey: "intro",
      featured: false,
    },
    {
      name: "Implementation Sprint",
      tagline: "Get it built, properly",
      duration: "4–8 weeks",
      description:
        "Hands-on delivery of your measurement foundation across web and app: tracking plan, analytics and tag management implementation (GA4, Amplitude, Mixpanel, GTM, server-side or whatever fits your stack) and BigQuery pipelines. Documented and handed over, ready for whatever your BI tools build on top.",
      includes: [
        "Tracking plan & dataLayer spec",
        "Analytics & tag management build (web & server-side)",
        "Mobile app tracking (Firebase, AppsFlyer & MMPs)",
        "BigQuery pipelines & data models",
        "Documentation & handover session",
      ],
      cta: "Plan a sprint",
      bookingKey: "intro",
      featured: false,
    },
    {
      name: "Data Partner",
      tagline: "Embedded in your team",
      duration: "ongoing, flexible days",
      description:
        "I join your company as your embedded data person for a fixed number of days per month: in your tools, in your meetings, on a first-name basis with your data. Monitoring, new tracking needs and a sparring partner for every data question.",
      includes: [
        "Embedded in your team & tools",
        "Flexible scope",
        "New tracking needs; scoped and shipped fast",
        "Direct line; no agency overhead",
        "No project management needed; I project manage myself"
      ],
      cta: "Let's talk",
      bookingKey: "partner",
      featured: true,
      badge: "Highest value",
    },
  ],
};

export const clients = {
  eyebrow: "Trusted by",
  title: "Brands I've worked with.",
  // `logo: null` renders a styled wordmark placeholder instead.
  logos: [
    { name: "Loop Earplugs", logo: "/images/clients/LoopEarplugs.png" },
    { name: "D'ieteren", logo: "/images/clients/Dieteren.png" },
    { name: "Carmoola", logo: "/images/clients/Carmoola.png" },
    { name: "Acerta", logo: "/images/clients/Acerta.png" },
    { name: "Get Driven", logo: "/images/clients/GetDriven.png" },
    { name: "Proximus", logo: "/images/clients/Proximus.png" },
    { name: "Torf", logo: "/images/clients/Torfs.png" },
    { name: "Essent", logo: "/images/clients/Essent.png" },
  ],
};

export const skills = {
  eyebrow: "Toolbox",
  title: "Skills & tools.",
  lede: "Specialised where it counts, fluent across the rest of the stack. My expertise is in the concepts, not any single vendor, so the tools below are where I work most, not the limit of what I work with. Whatever platform you run, the foundation is the same.",
  note: "Don't see your tool? That's fine. The concepts carry across platforms, so I can pick it up and advise on the best fit for your stack.",
  groups: [
    {
      title: "Measurement & tracking",
      items: [
        "Tracking plans & dataLayer design",
        "GA4, Amplitude & Mixpanel",
        "Google Tag Manager & server-side tagging",
        "Mobile app tracking (Firebase, AppsFlyer & MMPs)",
        "Consent Mode v2 / CMPs",
        "Marketing pixels & attribution",
      ],
    },
    {
      title: "Data engineering",
      items: [
        "BigQuery",
        "SQL",
        "dbt / Dataform",
        "Python",
        "Google Apps Script",
        "API integrations",
      ],
    },
    {
      title: "Reporting & activation",
      items: [
        "Looker Studio",
        "Power BI",
        "KPI frameworks",
        "Marketing & app data models",
        "Automated data quality alerting",
        "BI-ready data handoff",
      ],
    },
  ],
};

export const testimonials = {
  eyebrow: "Word on the street",
  title: "What clients say.",
  // Each `quote` is an array of paragraphs; <strong> marks the key phrases.
  items: [
    {
      quote: [
        "Dimitri consistently demonstrated <strong>deep technical knowledge</strong> and provided invaluable input.",
        "He is <strong>highly solution-oriented</strong> and always managed to find effective solutions to every challenge our digital media team presented to him.",
      ],
      author: "Simon De Pauw",
      role: "Digital Media Manager",
      company: "D'ieteren",
    },
    {
      quote: [
        "Dimitri consistently demonstrated his <strong>deep technical expertise and strategic thinking</strong>, effectively leading the implementation across a complex landscape of <strong>over 20 brands and 90 domains</strong>.",
        "He excels at ensuring projects are <strong>delivered on time and to a high standard</strong>.",
      ],
      author: "Tanu Sharma",
      role: "Product Lead",
      company: "Google",
    },
    {
      quote: [
        "<strong>Dedicated and well-structured</strong> are two qualities Dimitri can directly apply to any project to move it forward. No matter how many times I challenged him, he consistently came up with detailed options and a clear recommendation on any technical matter.",
        "Every organisation would benefit from Dimitri's <strong>expertise and versatility</strong> to make any digital analytics implementation a success.",
      ],
      author: "William Lallemant",
      role: "Analytics Manager",
      company: "D'ieteren",
    },
    {
      quote: [
        "He delivered <strong>efficient, high-quality work</strong> while perfectly integrating into the team and facilitating cross-BU initiatives.",
        "Dimitri was a <strong>real asset</strong> to our team.",
      ],
      author: "Aurélie Vanneste",
      role: "Operations & Analytics Director",
      company: "D'ieteren",
    },
    {
      quote: [
        "The collaboration with Dimitri has always been <strong>very efficient</strong>. He is well structured and his knowledge continuously fed our digital thinking.",
        "I could witness how he grew into a <strong>team leader</strong>, always there to support his team and collaborate with other business units. A real pleasure to work with.",
      ],
      author: "Frédéric Leclercq",
      role: "Digital Team Lead",
      company: "D'ieteren",
    },
  ],
};

export const about = {
  eyebrow: "About",
  title: "The monsieur behind the data.",
  paragraphs: [
    "I'm Dimitri Dries, an independent analytics developer working at the intersection of business, technology and marketing. I design and build the data collection infrastructure that makes reliable, data-driven decisions possible: tracking architecture, dataLayer design, tag management (web and server-side), marketing pixels, attribution, and getting the right data into your analytics tools, ad platforms and data warehouse. I'm platform-agnostic: GA4, Amplitude, Mixpanel or whatever your team already runs, the architecture comes first and the platform fits around it.",
    "Before founding MonsieurData in 2024, I spent five years embedded at D'Ieteren, leading the analytics transformation of a multi-brand automotive group from fragmented, low-maturity tracking to a cross-brand foundation used by every team. Since then I've rebuilt analytics foundations from scratch for fast-scaling e-commerce brands, fintech platforms and enterprise organisations, including mobile measurement ecosystems built across web and app.",
    "I don't build on top of your stack. I build at its core, so it lasts and scales as your company grows. I work end-to-end and self-sufficiently. You don't need to project-manage me.",
  ],
  portrait: "/images/DimitriDries_ZW_NoBG.png",
};

export const faq = {
  eyebrow: "FAQ",
  title: "Questions; answered.",
  // Written to match how people (and AI assistants) actually phrase searches.
  // Keep answers factual and self-contained: they feed the FAQPage schema.
  items: [
    {
      q: "What does a digital analytics developer do?",
      a: "A digital analytics developer builds and maintains the technical side of measurement: tracking plans and dataLayer design, analytics and tag management implementations (GA4, Amplitude, Mixpanel, Google Tag Manager, server-side tagging), mobile app tracking and BigQuery data pipelines. Think of it as the hands-on counterpart to an analytics consultant: less slideware, more working setups, handed off clean and documented for your BI team to build on.",
    },
    {
      q: "What toolstack do you use?",
      a: "Whatever fits the job. I'm tool-agnostic by design: my work revolves around digital analytics concepts (tracking architecture, dataLayer design, identity, consent, data modelling) that apply to any platform. The tools shown here (GA4, Amplitude, Mixpanel, Google Tag Manager, BigQuery, Firebase, AppsFlyer and others) are where I spend most of my time, but they're a sample, not a limit: if your stack uses something else, the same foundation still works and I can manage it. I also keep direct contacts at the major analytics vendors, so I can advise on which solution actually fits your product, team and budget, and help you decide on (and migrate to) a better-fitting stack rather than defaulting to whatever you already have.",
    },
    {
      q: "Do you handle mobile app tracking?",
      a: "Yes, mobile measurement is one of my focus areas: Firebase/GA4 for apps, AppsFlyer and other MMPs, wired into the same data foundation as your web tracking so app and web data tell one consistent story instead of living in separate silos.",
    },
    {
      q: "Will you build us a dashboard?",
      a: "Not as part of the standard scope. My work ends when clean, structured, documented data lands in your warehouse or analytics platform, ready for your BI team or tooling to build on. That handoff is deliberate: it's where my main expertise stops and your team's (or your BI partner's) begins.",
    },
    {
      q: "Can you make our tracking GDPR-compliant?",
      a: "Yes. Privacy-proof measurement is part of every setup: Consent Mode v2, CMP integration and server-side tagging, so you stay compliant and still get numbers you can work with.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes. I work remote-first with marketing and product teams across Europe, the UK and the US. Documented setups and async updates keep collaboration smooth across time zones, with calls where it matters. For ongoing work I embed directly in your team and tools.",
    },
    {
      q: "How much does it cost?",
      a: "Pricing is tailored to scope. After the free intro call you get a fixed, itemised proposal, no surprises.",
    },
    {
      q: "Do you use AI in your work?",
      a: "Yes, as a tool, not a replacement. AI helps me draft documentation, scaffold code and speed up the repetitive parts of a build, but the architecture decisions, the QA and the judgment calls stay with me. You're hiring an experienced analytics developer who works faster and more precisely because of AI, not an AI-generated setup with my name attached.",
    },
    {
      q: "How do we get started?",
      a: "Book a free 30-minute intro call. You bring the questions, I'll give an honest first take. Most engagements start with an analytics audit, so you know exactly where you stand before committing to anything bigger.",
    },
  ],
};

export const contact = {
  eyebrow: "Get in touch",
  title: "Let's look at your data.",
  lede: "A free 30-minute intro call: you bring the questions, I'll bring an honest first take. No pitch deck, no obligations.",
  primaryCta: { label: "Book a free intro call" }, // href = site.bookingUrl
  altLabel: "Prefer email?",
};
