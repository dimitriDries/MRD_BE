# Content checklist - what needs YOUR input

Everything below is drafted or placeholder. Edit `src/data/site.ts` for almost
all of it (each item is also marked `TODO(Dimitri)` in the code).

## Must do before launch

- [ ] **Booking URL** - create a Calendly/Cal.com page and set `site.bookingUrl`
      in `src/data/site.ts`. The main CTA button points there.
- [ ] **Hero stats** - all four numbers (8+ years / 15+ clients helped /
      30+ setups / 100%) are invented. Replace with your real numbers
      (`hero.stats`).
- [ ] **Testimonials** - all three quotes are `[PLACEHOLDER]`. Get 2–3 real
      quotes (with permission) and replace `testimonials.items`.
- [ ] **Client logos** - drop logo files in `public/images/clients/` and update
      `clients.logos` (currently styled text placeholders).
- [ ] **About bio** - drafted from what's publicly known; personalise
      `about.paragraphs`.
- [ ] **VAT number** - add to the footer (`src/components/Footer.astro`).
- [ ] **Domain** - confirm `https://www.monsieurdata.be` in `astro.config.mjs`,
      `src/data/site.ts` and `public/robots.txt`.

## Should review

- [ ] **Hero hook** - "You're sitting on data. Start acting on it." Approve or
      sharpen (`hero.headline`).
- [ ] **Skills list** - drafted from your known stack; trim/extend
      (`skills.groups`).
- [ ] **Package scope** - review tier names, durations and bullet lists
      (`packages.tiers`). Data Partner is now the highlighted tier
      ("Highest value", embedded-in-your-team positioning).
- [ ] **FAQ answers** - written for SEO/GEO based on your services; check
      every claim is true for how you actually work (`faq.items`).
- [ ] **Keyword strategy** - read `docs/SEO-KEYWORDS.md`; the blog post
      list at the bottom is your SEO roadmap.
- [ ] **OG image** - design a 1200×630 social-share image (currently the logo
      thumbnail). Then update the `ogImage` path in `src/layouts/Base.astro`.

## When launching the blog

1. Write posts in `src/content/blog/` (see `example-post.md` for the format).
2. Uncomment the Blog link in `src/data/site.ts` → `nav.links`.
3. Remove the `/blog` filter in `astro.config.mjs` (sitemap).
4. Set `noindex={true}` → `{false}` in `src/pages/blog/index.astro` and
   `src/pages/blog/[...slug].astro`.
5. Remove the `Disallow: /blog` line in `public/robots.txt`.
