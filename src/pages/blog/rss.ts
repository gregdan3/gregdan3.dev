import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  let posts = await getCollection("blog", (post) => post.data.published);
  posts = posts.sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  return rss({
    title: "glog | gregsite",
    description:
      "Every developer needs an abandoned blog, and this one is mine.",
    site: context.site!,
    stylesheet: "/style.xsl",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}`,
    })),
  });
}
