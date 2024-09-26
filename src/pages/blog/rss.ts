import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  let posts = await getCollection("blog", (post) => post.data.published);
  posts = posts.sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  return rss({
    title: "glog | gregsite",
    description: "every dev needs an abandoned blog, and this one is mine",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}`,
    })),
  });
}
