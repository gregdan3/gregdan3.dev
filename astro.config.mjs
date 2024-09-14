// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import rehypeExternalLinks from "rehype-external-links";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://gregdan3.dev",
  base: "/",
  publicDir: "./public",
  integrations: [mdx(), sitemap(), icon(), robotsTxt()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      wrap: true,
    },
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
        },
      ],
    ],
  },
  server: {
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
  devToolbar: {
    enabled: false,
  },
});
