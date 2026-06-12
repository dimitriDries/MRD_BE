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
    "GA4 & Google Tag Manager setups, server-side tagging, Consent Mode v2, BigQuery pipelines and dashboards your team will use. Remote-first digital analytics developer.",
  locale: "en",
  email: "dimitri@monsieurdata.be",
  linkedin: "https://www.linkedin.com/in/dimitridries/",
  // TODO(Dimitri): create a booking page (Calendly / Cal.com / SavvyCal) and paste the URL here.
  bookingUrl: "#book-a-call-TODO",
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

export const hero = {
  eyebrow: "Digital analytics developer",
  // The hook. Short, declarative, problem-first.
  // TODO(Dimitri): approve or sharpen. This sets the tone for everything.
  headline: ["You're sitting on data.", "Start acting on it."],
  sub: "I help marketing and product teams fix their tracking, centralise their data and ship reporting people actually use. From GA4 to BigQuery to the boardroom.",
  primaryCta: { label: "Book a free intro call", href: "#contact" },
  secondaryCta: { label: "See how I work", href: "#services" },
  // Proof bar under the hero. Numbers count up on scroll.
  // TODO(Dimitri): replace with your REAL numbers (these are placeholders).
  stats: [
    { value: 8, suffix: "+", label: "years in digital analytics" },
    { value: 15, suffix: "+", label: "clients helped" },
    { value: 30, suffix: "+", label: "tracking setups delivered" },
    { value: 100, suffix: "%", label: "independent & hands-on" },
  ],
};

export const valueProp = {
  eyebrow: "Why MonsieurData",
  title: "Data you can defend, decisions you can trust.",
  lede: "Most analytics setups are either broken, bloated, or both. I keep it simple: measure what matters, store it properly, and report it in a way your team actually uses.",
  pillars: [
    {
      icon: "tagmanagement",
      title: "Tracking done right",
      body: "Tracking plans, GA4 and Google Tag Manager setups (web & server-side) that are documented, privacy-proof and built to survive your next site release.",
    },
    {
      icon: "development",
      title: "Data where it belongs",
      body: "Pipelines into BigQuery that centralise your marketing and product data: clean, deduplicated and modelled for analysis, not just storage.",
    },
    {
      icon: "reporting",
      title: "Reporting that gets used",
      body: "Dashboards built around the decisions your team makes, not vanity metrics. If nobody opens it, it doesn't exist.",
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
      // TODO(Dimitri): confirm durations for all three tiers.
      // Pricing is deliberately NOT shown on the site (on-demand, per client).
      duration: "± 2 weeks",
      description:
        "A structured review of your current setup, covering tracking, data quality, consent and reporting. You get a prioritised roadmap you can execute with or without me.",
      includes: [
        "GA4, GTM & data layer review",
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
        "Hands-on delivery of your measurement foundation: tracking plan, GA4 / GTM implementation, BigQuery pipelines and the dashboards on top. Documented and handed over.",
      includes: [
        "Tracking plan & dataLayer spec",
        "GA4 + GTM build (web & server-side)",
        "BigQuery pipelines & data models",
        "Dashboards your team will use",
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
        "I join your company as your embedded data person for a fixed number of days per month: in your tools, in your meetings, on a first-name basis with your data. Monitoring, analysis, new tracking needs and a sparring partner for every data question.",
      includes: [
        "Embedded in your team & tools",
        "Fixed days per month, flexible scope",
        "Monitoring & data quality alerts",
        "Ad-hoc analysis & deep dives",
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
  // TODO(Dimitri): confirm/trim this list - drafted from your known stack.
  groups: [
    {
      title: "Measurement & tracking",
      items: [
        "Google Analytics 4",
        "Google Tag Manager",
        "Server-side tagging",
        "Tracking plans & dataLayer design",
        "Consent Mode v2 / CMPs",
        "AppsFlyer",
      ],
    },
    {
      title: "Data engineering",
      items: [
        "BigQuery",
        "SQL",
        "dbt",
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
        "Marketing data models",
        "Automated alerting",
        "Stakeholder dashboards",
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
  // TODO(Dimitri): personalise this bio (drafted as a starting point).
  paragraphs: [
    "I'm Dimitri Dries, a digital analytics developer. After years inside agencies and in-house teams, I started MonsieurData with a simple belief: most companies don't need more data, they need data they can trust.",
    "I work hands-on across the full chain: from the dataLayer in your codebase to the pipeline in BigQuery to the dashboard your CMO opens on Monday morning. One person, end to end, no handovers lost in translation.",
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
      a: "A digital analytics developer builds and maintains the technical side of measurement: Google Analytics 4 and Google Tag Manager implementations, dataLayer and tracking plans, server-side tagging, BigQuery data pipelines and reporting dashboards. Think of it as the hands-on counterpart to an analytics consultant: less slideware, more working setups.",
    },
    {
      q: "Do you only work with Google Analytics 4?",
      a: "GA4 and Google Tag Manager are the core of most projects, but the work spans the full stack: server-side GTM, BigQuery, dbt, Looker Studio, Power BI and mobile measurement with AppsFlyer. The right tool depends on your stack, not mine.",
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
