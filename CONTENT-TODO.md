# Content checklist - what's left for you

- [ ] Replace the 3 placeholder testimonial quotes (`testimonials.items`)
- [ ] Add real client logos to `public/images/clients/` and update `clients.logos`
- [ ] Design and add a real 1200x630 OG image, then update `ogImage` in `src/layouts/Base.astro`
- [ ] Set up Google Search Console
- [ ] Publish 2-3 long-tail blog posts (list in `docs/SEO-KEYWORDS.md`)
- [ ] Revisit title tag (GA4 vs. vendor-agnostic, consultant vs. developer) once GSC has data

## When launching the blog

- [ ] Write posts in `src/content/blog/`
- [ ] Uncomment Blog link in `nav.links`
- [ ] Remove `/blog` filter in `astro.config.mjs` sitemap
- [ ] Set `noindex` to `false` on blog pages
- [ ] Remove `Disallow: /blog` in `public/robots.txt`
