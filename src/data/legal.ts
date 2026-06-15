/**
 * ============================================================
 *  MonsieurData - legal entity + policy data
 *  ------------------------------------------------------------
 *  Single source of truth for the Privacy Policy, Cookie Policy
 *  and Legal Notice pages. Fill in every [TODO] before publishing
 *  these pages publicly. The legal copy is a solid GDPR/Belgian
 *  draft but SHOULD be reviewed by a privacy professional.
 * ============================================================
 */

import { site } from "./site";

export const company = {
  // Identity (GDPR Art. 13 - controller details). REQUIRED before going live.
  legalName: "[TODO: legal name — e.g. Dimitri Dries / MonsieurData BV]",
  tradingName: "MonsieurData",
  legalForm: "[TODO: e.g. sole proprietorship (eenmanszaak) or BV]",
  address: "[TODO: street + number, postcode, city, Belgium]",
  // Pulled from the footer VAT line; confirm it's correct.
  enterpriseNumber: "BE 1007.857.714",
  vat: "BTW BE 1007.857.714",

  // Contact for privacy matters / data-subject requests.
  privacyEmail: site.email, // info@monsieurdata.be
  generalEmail: site.email,

  // A formal DPO is generally NOT required for a small practice like this.
  // Leave null unless you appoint one.
  dpo: null as null | { name: string; email: string },

  country: "Belgium",
};

/** Supervisory authorities a visitor can complain to. */
export const authorities = {
  belgium: {
    name: "Gegevensbeschermingsautoriteit / Autorité de protection des données (GBA/APD)",
    url: "https://www.gegevensbeschermingsautoriteit.be",
  },
  uk: { name: "Information Commissioner's Office (ICO)", url: "https://ico.org.uk" },
};

/** Last-updated date shown on the legal pages (keep in step with consent policyVersion). */
export const legalUpdated = "14 June 2026";

/**
 * Cookie / local-storage inventory for the Cookie Policy table.
 * Analytics entries activate once analytics tracking is implemented; they are
 * listed now so the policy is accurate the moment GA4 goes live.
 */
export const cookieInventory = [
  {
    category: "Strictly necessary",
    items: [
      {
        name: "mrd_consent",
        provider: "MonsieurData (first-party)",
        purpose: "Stores your cookie/consent choice so you are not asked on every visit.",
        duration: "6 months",
        type: "Local storage + cookie",
      },
    ],
  },
  {
    category: "Analytics (only with your consent)",
    items: [
      {
        name: "_ga, _ga_<id>",
        provider: "Google (Google Analytics 4)",
        purpose:
          "Distinguish visitors and remember session state to produce aggregated usage statistics. Set only after you accept analytics. [Activates once analytics tracking is live.]",
        duration: "Up to 2 years",
        type: "Cookie",
      },
    ],
  },
  // Marketing row appears in the policy only when consentConfig.enableMarketing is true.
  {
    category: "Marketing (only with your consent)",
    marketingOnly: true,
    items: [
      {
        name: "(varies by ad platform)",
        provider: "Google Ads / other ad platforms",
        purpose:
          "Measure and personalise advertising across sites. Only used if marketing tracking is enabled and you accept it.",
        duration: "Varies",
        type: "Cookie",
      },
    ],
  },
];

/**
 * Third parties / processors that may receive data, for the Privacy Policy.
 * All US-based recipients rely on EU-US Data Privacy Framework and/or SCCs.
 */
export const processors = [
  {
    name: "Google (Google Tag Manager, Google Analytics)",
    role: "Tag management and, once enabled, website analytics.",
    location: "EU / United States",
    safeguard: "EU-US Data Privacy Framework + Standard Contractual Clauses",
  },
  {
    name: "GitHub Pages (GitHub, Inc. / Microsoft)",
    role: "Website hosting and delivery; processes IP addresses in server logs for security and delivery.",
    location: "United States",
    safeguard: "EU-US Data Privacy Framework + Standard Contractual Clauses",
  },
  {
    name: "Cal.com",
    role: "Scheduling of intro calls when you book via a cal.com link (handled on cal.com's own pages).",
    location: "United States",
    safeguard: "Standard Contractual Clauses",
  },
  {
    name: "Google (Apps Script + Google Sheets)",
    role: "Stores the consent audit log (your consent choice, timestamp and policy version).",
    location: "EU / United States",
    safeguard: "EU-US Data Privacy Framework + Standard Contractual Clauses",
    backendOnly: true, // shown only when a consent log endpoint is configured
  },
];
