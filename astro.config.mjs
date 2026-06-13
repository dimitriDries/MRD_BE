// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const SITE_URL = "https://monsieurdata.be";

export default defineConfig({
  site: SITE_URL,
  trailingSlash: "never",
  integrations: [
    sitemap({
      // Blog stays out of the sitemap until it has real content.
      // When you launch the blog, remove this filter.
      filter: (page) => !page.includes("/blog"),
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
});
