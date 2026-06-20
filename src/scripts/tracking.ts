/**
 * ============================================================
 *  MonsieurData - dataLayer tracking framework (plan v1.1)
 *  ------------------------------------------------------------
 *  One engine, declarative markup. Components never call the
 *  dataLayer directly; they only declare intent via data-*
 *  attributes and this engine reads the DOM and pushes the
 *  tracking-plan events:
 *
 *    page_impression      (automatic, every page)
 *    consent_change       (pushed by the CMP, see ConsentBanner.astro)
 *    button_click         [data-cta]
 *    content_impression   [data-content]        (viewport 50%, or <details> open)
 *    content_interaction  [data-interactive]    (hover, desktop only)
 *
 *  Attribute contract (all language-independent values set in code):
 *    [data-section="<section_name>"]        section context for nested elements
 *    [data-cta]                             marks a tracked button/link
 *      data-cta-id        -> button_name     (stable slug)
 *      data-cta-type      -> button_type     (primary|secondary|link; else from class)
 *      data-cta-category  -> button_category (optional; else derived from href)
 *      href               -> button_target
 *    [data-content]                         marks a tracked content element
 *      data-content-type  -> content_type
 *      data-content-name  -> content_name    (stable key; falls back to
 *                                             data-content-id, then section_name)
 *      data-content-position -> content_location (else derived from DOM order)
 *    [data-interactive]                     adds hover content_interaction
 * ============================================================
 */

interface DLObject {
  [key: string]: unknown;
}

const w = window as unknown as { dataLayer?: DLObject[] };
function push(payload: DLObject): void {
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(payload);
}

const clean = (s: string | null | undefined): string =>
  (s ?? "").trim().replace(/\s+/g, " ");

const sectionNameOf = (el: Element): string =>
  el.closest<HTMLElement>("[data-section]")?.dataset.section || "";

// ---------------------------------------------------------------------------
// page_impression
// ---------------------------------------------------------------------------
function pageImpression(): void {
  push({
    event: "page_impression",
    page_path: location.pathname,
    page_name: document.body.dataset.pageName || "",
    page_type: document.body.dataset.pageType || "",
    page_title: document.title,
    page_language: document.documentElement.lang || "",
  });
}

// ---------------------------------------------------------------------------
// button_click  (delegated; works for clicks on child nodes too)
// ---------------------------------------------------------------------------
/** primary / secondary / link, from an explicit attr or the button class. */
function buttonTypeFor(el: HTMLElement): string {
  if (el.dataset.ctaType) return el.dataset.ctaType;
  if (el.classList.contains("btn--primary")) return "primary";
  if (el.classList.contains("btn--ghost") || el.classList.contains("btn--secondary")) return "secondary";
  return "link";
}

/** booking | navigation | section anchor | external | mailto | social | "" */
function buttonCategoryFor(el: HTMLElement, href: string): string {
  if (el.dataset.ctaCategory) return el.dataset.ctaCategory;
  if (!href) return "";
  if (href.startsWith("mailto:")) return "mailto";
  if (/cal\.com/i.test(href)) return "booking";
  if (/(?:linkedin|twitter|x|github|facebook|instagram)\.com/i.test(href)) return "social";
  if (href.startsWith("#")) return "section anchor";
  try {
    const u = new URL(href, location.href);
    if (u.host !== location.host) return "external";
    return u.hash ? "section anchor" : "navigation";
  } catch {
    return "";
  }
}

function bindClicks(): void {
  document.addEventListener(
    "click",
    (e) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-cta]");
      if (!el) return;
      const href = el.getAttribute("href") || el.dataset.ctaTarget || "";
      push({
        event: "button_click",
        button_type: buttonTypeFor(el),
        button_category: buttonCategoryFor(el, href),
        button_name: el.dataset.ctaId || "",
        button_text: clean(el.dataset.ctaText || el.textContent),
        button_target: href,
        section_name: sectionNameOf(el),
      });
    },
    { capture: true }
  );
}

// ---------------------------------------------------------------------------
// content model (shared by impression + interaction)
// ---------------------------------------------------------------------------
/** Stable, language-independent name: explicit name, else the id fallback,
    else the section name (so section-level impressions need no extra attr). */
function contentNameOf(el: HTMLElement): string {
  return clean(el.dataset.contentName) || el.dataset.contentId || sectionNameOf(el);
}

/**
 * 1-based position of the element among same-type peers.
 * Scope is the nearest ANCESTOR section, so section-level elements (whose only
 * [data-section] is themselves) fall back to the document and number
 * sequentially across the page (hero=1, clients=2, ...); nested items number
 * within their own section.
 */
function locationOf(el: HTMLElement): string {
  if (el.dataset.contentPosition) return el.dataset.contentPosition;
  const type = el.dataset.contentType;
  if (!type) return "";
  const scope: ParentNode =
    (el.parentElement && el.parentElement.closest<HTMLElement>("[data-section]")) || document;
  const peers = Array.from(scope.querySelectorAll<HTMLElement>(`[data-content-type="${type}"]`));
  const i = peers.indexOf(el);
  return i >= 0 ? String(i + 1) : "";
}

function contentPayload(el: HTMLElement, event: string, extra?: DLObject): DLObject {
  return {
    event,
    content_type: el.dataset.contentType || "",
    content_name: contentNameOf(el),
    content_location: locationOf(el),
    section_name: sectionNameOf(el),
    ...(extra || {}),
  };
}

/** Dedup key: once per content element per page-view (handles marquee clones). */
function dedupKey(el: HTMLElement): string {
  return [el.dataset.contentType, contentNameOf(el), sectionNameOf(el), locationOf(el)].join("|");
}

// ---------------------------------------------------------------------------
// content_impression  (viewport 50%, or <details> open for accordions)
// ---------------------------------------------------------------------------
const firedImpressions = new Set<string>();
function fireImpression(el: HTMLElement): void {
  const key = dedupKey(el);
  if (firedImpressions.has(key)) return;
  firedImpressions.add(key);
  push(contentPayload(el, "content_impression"));
}

function bindImpressions(): void {
  const items = Array.from(document.querySelectorAll<HTMLElement>("[data-content]"));
  const viewportItems: HTMLElement[] = [];

  items.forEach((el) => {
    // Accordions report the impression when the answer becomes visible (open),
    // not when the closed summary scrolls into view.
    if (el.tagName === "DETAILS" || el.dataset.impressionOn === "open") {
      const details = (el.tagName === "DETAILS" ? el : el.querySelector("details")) as HTMLDetailsElement | null;
      if (details) {
        details.addEventListener("toggle", () => {
          if (details.open) fireImpression(el);
        });
        return;
      }
    }
    viewportItems.push(el);
  });

  if ("IntersectionObserver" in window && viewportItems.length) {
    // "50% visible" means 50% of the element OR (for elements taller than the
    // viewport, where 50% of the element can never show) the element covering
    // 50% of the viewport. Granular thresholds so tall sections still report.
    const thresholds = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    // Dwell gate: an element must stay "seen enough" for DWELL_MS before the
    // impression fires. Scrolling straight past cancels the pending timer, so
    // only content the visitor actually rests on (or scrolls to and stops on)
    // counts. Avoids counting everything flicked past at speed.
    const DWELL_MS = 1000;
    const pending = new WeakMap<Element, number>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const viewportH = entry.rootBounds?.height || window.innerHeight;
          const seenEnough =
            entry.isIntersecting &&
            (entry.intersectionRatio >= 0.5 ||
              entry.intersectionRect.height >= viewportH * 0.5);
          if (seenEnough) {
            if (pending.has(el)) return; // already counting down
            const timer = window.setTimeout(() => {
              pending.delete(el);
              fireImpression(el);
              io.unobserve(el);
            }, DWELL_MS);
            pending.set(el, timer);
          } else {
            // Left view before the dwell completed: cancel.
            const timer = pending.get(el);
            if (timer !== undefined) {
              window.clearTimeout(timer);
              pending.delete(el);
            }
          }
        });
      },
      { threshold: thresholds }
    );
    viewportItems.forEach((el) => io.observe(el));
  } else {
    viewportItems.forEach(fireImpression);
  }
}

// ---------------------------------------------------------------------------
// content_interaction  (hover, desktop pointer only, deduped + debounced)
// ---------------------------------------------------------------------------
function bindInteractions(): void {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const fired = new Set<string>();

  document.querySelectorAll<HTMLElement>("[data-interactive]").forEach((el) => {
    let timer: number | undefined;
    el.addEventListener("mouseenter", () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const key = dedupKey(el) + "|hover";
        if (fired.has(key)) return;
        fired.add(key);
        push(contentPayload(el, "content_interaction", { interaction_type: "hover" }));
      }, 120);
    });
    el.addEventListener("mouseleave", () => window.clearTimeout(timer));
  });
}

// ---------------------------------------------------------------------------
// init
// ---------------------------------------------------------------------------
function init(): void {
  pageImpression();
  bindClicks();
  bindImpressions();
  bindInteractions();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
