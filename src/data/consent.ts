/**
 * ============================================================
 *  MonsieurData CMP - consent configuration
 *  ------------------------------------------------------------
 *  Runtime config for the consent banner + Google Consent Mode v2.
 *  Tag BLOCKING happens in GTM; this file only captures, stores
 *  and signals consent. Imported by both the banner UI (server
 *  render) and its client script (bundled), plus the consent-
 *  default snippet in Base.astro.
 * ============================================================
 */

export const consentConfig = {
  /**
   * Bump this whenever the meaning of consent changes (new category,
   * new vendor, materially changed policy). A stored consent record
   * with an older version is treated as expired -> banner re-shows.
   */
  policyVersion: "2026-06-14",

  /** Re-ask for consent after this many days (Belgian APD: don't keep it forever). */
  reconsentDays: 182,

  /** Key used for both localStorage and the first-party cookie. */
  storageKey: "mrd_consent",

  /**
   * THE TOGGLE. Flip to `true` to switch from
   *   Necessary + Analytics
   * to
   *   Necessary + Analytics + Marketing
   * This adds the Marketing category to the banner AND enables the
   * ad_* Consent Mode signals. Also update the Cookie Policy when you do.
   */
  enableMarketing: false,

  /**
   * Apps Script Web App URL for the consent audit log (see
   * _MRD_internal/consent-log/). Empty string = backend logging off
   * (the banner still works; it just won't POST a record).
   */
  logEndpoint: "", // TODO(Dimitri): paste the deployed /exec URL here
};

/**
 * Consent categories. `necessary` is always on and cannot be refused.
 * `signals` are the Google Consent Mode v2 keys each category controls.
 * Marketing is only shown/active when consentConfig.enableMarketing is true.
 */
export type ConsentCategoryId = "necessary" | "analytics" | "marketing";

export interface ConsentCategory {
  id: ConsentCategoryId;
  label: string;
  description: string;
  required?: boolean;
  /** Consent Mode v2 signals granted when this category is granted. */
  signals: string[];
}

const ALL_CATEGORIES: ConsentCategory[] = [
  {
    id: "necessary",
    label: "Strictly necessary",
    description:
      "Required for the site to work and to remember your privacy choice. These are always on and cannot be switched off.",
    required: true,
    signals: ["security_storage"],
  },
  {
    id: "analytics",
    label: "Analytics",
    description:
      "Help me understand how the site is used (which pages, how visitors navigate) so I can improve it. Aggregated and pseudonymous.",
    signals: ["analytics_storage"],
  },
  {
    id: "marketing",
    label: "Marketing",
    description:
      "Used to measure and personalise advertising across sites. Only active if I run ad campaigns.",
    signals: ["ad_storage", "ad_user_data", "ad_personalization"],
  },
];

/** Categories actually shown, respecting the enableMarketing toggle. */
export const consentCategories: ConsentCategory[] = ALL_CATEGORIES.filter(
  (c) => c.id !== "marketing" || consentConfig.enableMarketing,
);

/** The full Consent Mode v2 signal set, all denied by default (security granted). */
export const CONSENT_DEFAULT: Record<string, "granted" | "denied"> = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "granted",
};
