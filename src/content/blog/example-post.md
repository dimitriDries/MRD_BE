---
title: "Example post - how the blog works"
description: "A template post showing the frontmatter format. Set draft: false to publish."
pubDate: 2026-06-11
tags: ["analytics", "ga4"]
draft: true
---

This is a draft post - it will **never** appear on the site while `draft: true`
is set in the frontmatter above.

## How to publish a post

1. Duplicate this file in `src/content/blog/` and give it a clear filename
   (the filename becomes the URL slug, e.g. `ga4-bigquery-export.md` →
   `/blog/ga4-bigquery-export`).
2. Fill in the frontmatter: `title`, `description` (this is your SEO meta
   description - make it count), `pubDate`, `tags`.
3. Write the post in plain Markdown below the frontmatter.
4. Set `draft: false`.

## When you launch the blog

- Uncomment the Blog link in `src/data/site.ts` (`nav.links`).
- Remove the `/blog` filter in `astro.config.mjs` so blog pages join the sitemap.
- Remove the `noindex` flag in `src/pages/blog/index.astro` and
  `src/pages/blog/[...slug].astro`.
