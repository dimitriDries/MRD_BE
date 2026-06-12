# Content handoff - MonsieurData website

**Audience of this doc:** a Claude Cowork session (or any collaborator) that
will write and place the final content for the MonsieurData website, with no
prior context. Everything you need is in this file and the files it points to.

---

## 1. What this project is

MonsieurData is the digital analytics practice of **Dimitri Dries**, a
**digital analytics developer** (his exact preferred title - never
"consultant", never "freelance"). The website is a single-page Astro 5 site
with a hidden, pre-built blog. The design, structure and components are
**done and approved**. Your job is content only: replacing drafted
placeholders with real, final copy and assets.

Repo root: this repository (the folder containing this `docs/` directory).

| Quick reference | Where |
| --- | --- |
| ALL editable copy | `src/data/site.ts` (one file, plain TypeScript object literals) |
| Open content tasks | `CONTENT-TODO.md` (repo root) - treat as your task list |
| Tone, voice, brand rules | `brand/MonsieurData_BrandBook.html` (open in a browser), summary in §4 below |
| SEO/GEO keyword strategy | `docs/SEO-KEYWORDS.md` |
| Blog posts | `src/content/blog/*.md` |
| Client logos | `public/images/clients/` (folder may need creating) |
| Preview your changes | `npm run dev` → http://localhost:4321 |

---

## 2. Hard rules (non-negotiable)

1. **No em dashes (—) anywhere.** Use commas, colons, periods or "·".
2. **Never** describe Dimitri as a "consultant" or "freelancer"; the title is
   **digital analytics developer**. (Exception: the FAQ answer that defines
   the term may *reference* "analytics consultant" as a contrast.)
3. **No pricing on the site.** No euro/dollar amounts, no "from €X", no day
   rates. Pricing is on demand: the copy says a proposal follows the intro
   call. Do not undo this.
4. **No geographic anchoring to Belgium.** The audience is international
   (US, UK, EU). Don't add "Belgium" or "Belgian" anywhere in site copy or
   metadata.
5. **Don't touch design files**: components (`src/components/`), styles
   (`src/styles/`), layout (`src/layouts/`), config (`astro.config.mjs`).
   If copy needs a structural change (e.g. a 4th package), flag it instead
   of editing components.
6. Anything still fake is marked `TODO(Dimitri)` in code comments or
   `[PLACEHOLDER]` in strings. **Never ship placeholder text silently** -
   either replace it with confirmed content from Dimitri, or leave the
   marker intact.

---

## 3. Where each piece of content lives

Everything below is in **`src/data/site.ts`** unless stated otherwise. Each
export is a plain object: edit string values, keep the structure.

### `site` (global metadata)
- `title` / `description`: the SEO title tag and meta description. Keep the
  keyword strategy from `docs/SEO-KEYWORDS.md` (GA4, GTM, server-side
  tagging, BigQuery must stay in there).
- `bookingUrl`: currently `"#book-a-call-TODO"`. **Needs Dimitri's real
  Calendly/Cal.com URL.** This is the most important missing item; the main
  CTA button is dead until it's set.
- `email`, `linkedin`: confirmed, leave as is.

### `hero`
- `headline`: the hook, two lines (array of 2 strings). Current draft:
  "You're sitting on data." / "Start acting on it." Needs Dimitri's
  approval, not silent replacement.
- `sub`: supporting line under the hook.
- `stats`: array of `{ value, suffix, label }`. **All four numbers are
  invented** (8+ years, 15+ clients, 30+ setups, 100%). Get real numbers
  from Dimitri. Values must be numbers (they animate counting up).

### `valueProp` (the "Why MonsieurData" section)
- Four pillars with `title` + `body`. Drafted and on-message; review with
  Dimitri but largely final in tone.

### `packages` (the offer, 3 tiers)
- `tiers[]`: name, tagline, `duration` (no price field - see rule 3),
  `description`, `includes[]` (5 bullets each), `cta`.
- The **Data Partner** tier has `featured: true` and `badge: "Highest value"`
  with embedded-in-your-team positioning. Keep that hierarchy.
- Durations are estimates; confirm with Dimitri.

### `clients` (logo slider)
- `logos[]`: currently 6 entries with `logo: null`, which renders styled
  text placeholders. To finish:
  1. Get logo files (SVG preferred, else PNG ~240px wide; monochrome works
     best - they're shown greyscale until hover).
  2. Put them in `public/images/clients/` (create the folder).
  3. Set each entry to `{ name: "Acme", logo: "/images/clients/acme.svg" }`.
  - Ask Dimitri which clients may be named publicly; written permission is
    the norm for logo walls.

### `skills` (toolbox)
- Three groups of text chips. Drafted from Dimitri's known stack (GA4, GTM,
  server-side tagging, BigQuery, SQL, dbt, Python, Looker Studio, Power BI,
  AppsFlyer...). Have him confirm/trim; don't invent tools.

### `testimonials`
- Three quotes, **all marked `[PLACEHOLDER]`**. Need real client quotes with
  name, role, company and the client's permission. 2 good ones beat 3 fake
  ones; the slider handles any count ≥ 1.

### `about`
- Two-paragraph bio + LinkedIn link. Drafted; personalise with Dimitri
  (career facts, the story behind "MonsieurData"). The portrait image is
  already in place.

### `faq`
- Six Q&As, written for SEO/GEO (they feed FAQPage schema, so the visible
  text and the schema stay in sync automatically). Verify every factual
  claim with Dimitri (working model, time zones, process). Keep answers
  self-contained: AI assistants quote them verbatim.

### `contact`
- CTA section copy. Final in tone; works once `site.bookingUrl` is real.

### Footer VAT number
- The one piece of copy NOT in `site.ts`: add Dimitri's VAT/BTW number in
  `src/components/Footer.astro` (there's a TODO comment where it goes).

---

## 4. Voice & tone (summary of the brand book)

Confident, plain-spoken, lightly witty. A senior expert with nothing to
prove. Concretely:

- Short declarative sentences. Concrete claims over adjectives.
- No buzzwords ("synergy", "cutting-edge", "unlock"), no exclamation marks.
- Dry humour allowed, max one wink per section ("If nobody opens it, it
  doesn't exist.").
- Headings are sentence case and end with a period ("Three ways to work
  together.").
- Numbers and labels can use the mono style; copy never shouts.
- British-leaning spelling is currently used ("centralise"); stay consistent.

---

## 5. Blog content (second phase)

The blog is fully built but hidden (not in nav, noindex, out of sitemap).

**To write a post:** copy `src/content/blog/example-post.md`, follow its
frontmatter format (`title`, `description`, `pubDate`, `tags`,
`draft: false` to publish). Filename = URL slug.

**Priority topics** (from the keyword research, in order):
1. GA4 BigQuery export tutorial
2. Server-side GTM setup guide (Consent Mode v2 angle)
3. GA4 audit checklist
4. Tracking plan template
5. Why your GA4 numbers don't match your CRM

**To launch the blog** (only when ≥ 2 real posts exist), follow the 5-step
checklist at the bottom of `CONTENT-TODO.md` (nav link, sitemap filter,
noindex flags, robots.txt).

---

## 6. How to preview and verify

```bash
npm install   # once
npm run dev   # → http://localhost:4321
```

After every content change, check:
1. The page renders (no build error in the terminal).
2. Your text fits: headlines wrap on mobile width (~375px), card bullets
   stay roughly equal length across the three packages.
3. No em dash slipped in: search the repo for "—".
4. `npm run build` passes before handing back.

## 7. Definition of done

- [ ] Real booking URL wired up
- [ ] Real hero stats
- [ ] Real testimonials (≥ 2, with permission)
- [ ] Client logos in the slider (with permission)
- [ ] Bio approved by Dimitri
- [ ] FAQ facts verified
- [ ] VAT number in footer
- [ ] All `TODO(Dimitri)` / `[PLACEHOLDER]` markers resolved or explicitly
      deferred
- [ ] `npm run build` green
