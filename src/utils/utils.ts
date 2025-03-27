import { getCollection } from "astro:content";
import type { CollectionEntry, CollectionKey } from "astro:content";
import type { ImageMetadata } from "astro";

export const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const formatDate = (date: Date, offset: number = 0): string => {
  offset = offset * 60 * 60 * 1000;
  date = new Date(date.getTime() + offset);
  const day = date.getDate();
  const month = date.toLocaleString("en", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

export const fetchImage = async (
  src?: string,
  backup?: ImageMetadata,
): Promise<ImageMetadata | null> => {
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/data/images/*",
  );
  // TODO: what if frontmatter.image isn't in images
  const givenImage = src ? images[src] : null;
  const usedImage = givenImage ? (await givenImage()).default : backup;

  if (usedImage) {
    return usedImage;
  }
  return null;
};

export async function getCollectionPosts<K extends CollectionKey>(
  collection: K,
  filter?: (post: CollectionEntry<K>) => boolean,
  sort?: (a: CollectionEntry<K>, b: CollectionEntry<K>) => number,
): Promise<CollectionEntry<K>[]> {
  if (!filter) {
    filter = (post) => {
      if ("published" in post.data) {
        return post.data.published || import.meta.env.DEV;
      }
      return true;
    };
  }
  if (!sort) {
    sort = (a, b) => {
      if ("date" in a.data && "date" in b.data) {
        return b.data.date.valueOf() - a.data.date.valueOf();
      }
      return 0;
    };
  }

  const posts = await getCollection(collection, filter);
  posts.sort(sort);
  return posts;
}

export const getFeedPosts = async () => {
  let posts: (CollectionEntry<"blog"> | CollectionEntry<"projects">)[] = [];

  const blog = await getCollection(
    "blog",
    (post) => (post.data.published && post.body) || import.meta.env.DEV,
  );
  const projects = await getCollection(
    "projects",
    (post) => (post.data.published && post.body) || import.meta.env.DEV,
  );

  posts.push(...blog);
  posts.push(...projects);

  posts = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return posts;
};

export const clipArticle = (article: string, size: number = 150): string => {
  // NOTE: this can split in the middle of syntax.
  // the user is expected to fade out whatever they render
  let words = article.split(" ");
  words = words.slice(0, size);
  return words.join(" ");
};
