// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import rehypeExternalLinks from "rehype-external-links";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://gregdan3.dev",
  base: "/",
  publicDir: "./static",
  integrations: [mdx(), svelte(), sitemap(), icon(), robotsTxt()],
  markdown: {
    shikiConfig: {
      theme: "nord"
    },
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [[rehypeExternalLinks, {
      target: "_blank"
    }]]
  },
  server: {
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin"
    }
  },
  devToolbar: {
    enabled: false
  }
});