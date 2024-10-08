// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";

// import remarkAbbr from "remark-abbr";
import rehypeExternalLinks from "rehype-external-links";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import { remarkMark } from "remark-mark-highlight";
import remarktoc from "remark-toc";
// import {
//   remarkDefinitionList,
//   defListHastHandlers,
// } from "remark-definition-list";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

export default defineConfig({
  site: "https://gregdan3.dev",
  base: "/",
  publicDir: "./public",
  integrations: [
    mdx(),
    icon({ iconDir: "src/icons" }),
    sitemap(),
    robotsTxt(),
    compress(),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      wrap: true,
    },
    remarkPlugins: [
      // remarkAbbr,
      remarkGfm,
      remarkSmartypants,
      // remarkDefinitionList,
      remarkMark,
      [
        remarktoc,
        {
          heading: "^(TOC|Table of Contents)$",
          ordered: false,
          tight: true,
          maxDepth: 4,
        },
      ],
    ],
    rehypePlugins: [
      rehypeAutolinkHeadings,
      rehypeSlug,
      [
        rehypeExternalLinks,
        {
          target: "_blank",
        },
      ],
    ],
    // remarkRehype: { handlers: defListHastHandlers },
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
