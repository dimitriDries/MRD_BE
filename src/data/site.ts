/**
 * ============================================================
 *  MonsieurData - central site content
 *  ------------------------------------------------------------
 *  ALL editable copy lives in this file. Anything marked
 *  `TODO(Dimitri)` needs your real input - drafted placeholders
 *  are clearly flagged so nothing fake ships unnoticed.
 *  See CONTENT-TODO.md for the full checklist.
 * ============================================================
 */

export const site = {
  name: "MonsieurData",
  url: "https://monsieurdata.be",
  // SEO: leads with the highest-intent search terms (see docs/SEO-KEYWORDS.md)
  title: "Digital Analytics Developer | GA4, GTM & BigQuery | MonsieurData",
  description:
    "GA4, GTM, server-side tagging and Consent Mode v2 for web and mobile apps, with BigQuery pipelines built to last. Remote-first digital analytics developer.",
  locale: "en",
  email: "dimitri@monsieurdata.be",
  linkedin: "https://www.linkedin.com/in/dimitridries/",
  bookingUrl: "https://cal.com/athena-mrd-ms0iie/30min",
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
      body: "Pipelines into BigQuery that centralise your web, app, marketing and product data: clean, deduplicated, documented and modelled so your BI team can build on it without cleanup.",
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
  tiers: [
    {
      name: "Analytics Audit",
      tagline: "Know where you stand",
      // Pricing is deliberately NOT shown on the site (on-demand, per client).
      duration: "± 2 weeks",
      description:
        "A structured review of your current setup, covering tracking, data quality, consent and reporting. You get a prioritised roadmap you can execute with or without me.",
      includes: [
        "Analytics platform, tag management & data layer review",
        "Data quality & consent check",
        "Reporting & KPI assessment",
        "Prioritised, actionable roadmap",
        "Walkthrough call with your team",
      ],
      cta: "Start with an audit",
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
        "Fixed days per month, flexible scope",
        "Monitoring & data quality alerts",
        "New tracking needs, scoped and shipped fast",
        "Direct line, no agency overhead",
      ],
      cta: "Discuss a retainer",
      featured: true,
      badge: "Highest value",
    },
  ],
};

export const clients = {
  eyebrow: "Trusted by",
  title: "Brands I've worked with.",
  // TODO(Dimitri): drop client logo files in /public/images/clients/
  // (SVG preferred, or PNG ±240px wide, monochrome looks best)
  // and replace these entries: { name: "...", logo: "/images/clients/x.svg" }.
  // `logo: null` renders a styled wordmark placeholder instead.
  logos: [
    { name: "Client One", logo: null },
    { name: "Client Two", logo: null },
    { name: "Client Three", logo: null },
    { name: "Client Four", logo: null },
    { name: "Client Five", logo: null },
    { name: "Client Six", logo: null },
  ],
};

export const skills = {
  eyebrow: "Toolbox",
  title: "Skills & tools.",
  lede: "Specialised where it counts, fluent across the rest of the stack.",
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
  // TODO(Dimitri): ALL three quotes below are PLACEHOLDERS - replace with
  // real client quotes (name + role + company, with their permission).
  items: [
    {
      quote:
        "[PLACEHOLDER] Dimitri rebuilt our tracking from the ground up. For the first time we trust the numbers in our dashboards.",
      author: "Name Surname",
      role: "Marketing Manager",
      company: "Company A",
    },
    {
      quote:
        "[PLACEHOLDER] Rare combination: deeply technical, but explains it in a way the whole team understands.",
      author: "Name Surname",
      role: "Head of Digital",
      company: "Company B",
    },
    {
      quote:
        "[PLACEHOLDER] Our BigQuery setup went from chaos to a single source of truth. Delivered on time, documented, no fuss.",
      author: "Name Surname",
      role: "Data Lead",
      company: "Company C",
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
  title: "Questions, answered.",
  // Written to match how people (and AI assistants) actually phrase searches.
  // Keep answers factual and self-contained: they feed the FAQPage schema.
  items: [
    {
      q: "What does a digital analytics developer do?",
      a: "A digital analytics developer builds and maintains the technical side of measurement: tracking plans and dataLayer design, analytics and tag management implementations (GA4, Amplitude, Mixpanel, Google Tag Manager, server-side tagging), mobile app tracking and BigQuery data pipelines. Think of it as the hands-on counterpart to an analytics consultant: less slideware, more working setups, handed off clean and documented for your BI team to build on.",
    },
    {
      q: "Do you only work with Google Analytics 4?",
      a: "No. GA4 is one of several platforms I work with, alongside Amplitude, Mixpanel and others, and for plenty of the teams I work with it isn't the right fit. Part of an audit is picking the platform that matches your product, team and budget, not defaulting to whatever's free. Google Tag Manager, server-side tagging, BigQuery, dbt/Dataform, Looker Studio, Power BI and mobile measurement (Firebase, AppsFlyer, other MMPs) round out the stack regardless of which analytics platform you land on.",
    },
    {
      q: "Do you handle mobile app tracking?",
      a: "Yes, mobile measurement is one of my focus areas: Firebase/GA4 for apps, AppsFlyer and other MMPs, wired into the same data foundation as your web tracking so app and web data tell one consistent story instead of living in separate silos.",
    },
    {
      q: "Will you build us a dashboard?",
      a: "Not as part of the standard scope. My work ends when clean, structured, documented data lands in your warehouse or analytics platform, ready for your BI team or tooling to build on. That handoff is deliberate: it's where my expertise stops and your team's (or your BI partner's) begins.",
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
      a: "Pricing is tailored to scope: a focused audit is priced very differently from an ongoing embedded role. After the free intro call you get a fixed, itemised proposal, so there are never surprises on the invoice.",
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
