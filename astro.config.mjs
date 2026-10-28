// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const SITE_URL = "https://monsieurdata.be";

export default defineConfig({
  site: SITE_URL,
  trailingSlash: "never",
  integrations: [
    sitemap({
      // Blog stays out of the sitemap until it has real content (remove the
      // /blog check when you launch it). /privacy is noindexed, so it is
      // excluded too: a sitemap must not list URLs that ask not to be indexed.
      filter: (page) => !page.includes("/blog") && !page.endsWith("/privacy"),
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
});
