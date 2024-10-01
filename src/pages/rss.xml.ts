import { marked } from "marked";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  let posts = await getCollection("blog", (post) => post.data.published);
  posts = posts.sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  posts = posts.slice(0, 8);

  posts = await Promise.all(
    posts.map(async (post) => {
      // post.data.description = post.data.description
      //   ? await marked.parse(post.data.description)
      //   : undefined;
      //
      post.body = await marked.parse(post.body);
      return post;
    }),
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
      // content: post.body,
    })),
  });
}
