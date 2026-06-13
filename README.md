# MonsieurData - website

Astro static site for [monsieurdata.be](https://monsieurdata.be).

## Commands

```bash
npm install      # once
npm run dev      # local dev server on http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Where things live

| What | Where |
| --- | --- |
| **All site copy** (hero, packages, skills, testimonials…) | `src/data/site.ts` |
| Content still needing real input | `CONTENT-TODO.md` |
| Design tokens (colors, fonts, spacing) | `src/styles/global.css` |
| Brand guidelines | `brand/MonsieurData_BrandBook.html` |
| Page sections (components) | `src/components/` |
| Blog posts (Markdown) | `src/content/blog/` |
| SEO: meta + JSON-LD | `src/layouts/Base.astro` |
| robots.txt / llms.txt | `public/` |
| Original brand assets | `images/` (not deployed; web copies in `public/images/`) |

## Blog (hidden, pre-launch)

The blog is fully built but hidden: not in the nav, `noindex`, excluded from
the sitemap and disallowed in robots.txt. The launch checklist is at the
bottom of `CONTENT-TODO.md` and in `src/content/blog/example-post.md`.

## Deploying

`npm run build` produces a fully static `dist/` - host it on Netlify, Vercel,
Cloudflare Pages or GitHub Pages. Set the build command to `npm run build`
and the output directory to `dist`.
