import { marked } from "marked";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getFeedPosts } from "@utils/utils.ts";

export async function GET(context: APIContext) {
  let posts = await getFeedPosts();
  posts = posts.slice(0, 10);

  // posts = await Promise.all(
  //   posts.map(async (post) => {
  //     // rendering the description is dumb, this isn't html
  //     // post.data.description = post.data.description
  //     //   ? await marked.parse(post.data.description)
  //     //   : undefined;
  //     //
  //     post.body = await marked.parse(post.body);
  //     return post;
  //   }),
  // );

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
      link: `/${post.collection}/${post.slug}`,
      // content: post.body,
    })),
  });
}
