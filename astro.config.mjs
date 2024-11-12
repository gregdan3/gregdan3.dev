// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";
import icon from "astro-icon";
import pagefind from "astro-pagefind";
import purgecss from "astro-purgecss";
import robotsTxt from "astro-robots-txt";

import rehypeExternalLinks from "rehype-external-links";
import { remarkMark } from "remark-mark-highlight";
import remarktoc from "remark-toc";

import playformInline from "@playform/inline";

export default defineConfig({
  site: "https://gregdan3.dev",
  base: "/",
  publicDir: "./public",
  integrations: [
    mdx(),
    icon({ iconDir: "src/icons" }),
    pagefind(),
    purgecss(),
    playformInline({}),
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
