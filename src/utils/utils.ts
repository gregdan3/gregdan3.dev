import { getCollection } from "astro:content";
import type { CollectionEntry, ContentEntryMap } from "astro:content";
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

export async function getCollectionPosts(
  collections: keyof ContentEntryMap | (keyof ContentEntryMap)[],
  givenFilter?: (post: CollectionEntry<keyof ContentEntryMap>) => boolean,
  givenSort?: (
    a: CollectionEntry<keyof ContentEntryMap>,
    b: CollectionEntry<keyof ContentEntryMap>,
  ) => number,
): Promise<CollectionEntry<keyof ContentEntryMap>> {
  // must be published or be in dev
  let filter = (post: CollectionEntry<keyof ContentEntryMap>) => {
    return post.data.published || import.meta.env.DEV;
  };
  if (givenFilter) {
    filter = givenFilter;
  }

  // reverse chronological sort e.g. newest to oldest
  let sort = (
    a: CollectionEntry<keyof ContentEntryMap>,
    b: CollectionEntry<keyof ContentEntryMap>,
  ) => {
    return b.data.date.valueOf() - a.data.date.valueOf();
  };
  if (givenSort) {
    sort = givenSort;
  }

  let posts = [];

  if (Array.isArray(collections)) {
    posts = await Promise.all(
      collections.map((collection) => getCollection(collection, filter)),
    );
  } else {
    posts = await getCollection(collections, filter);
  }
  posts = posts.flat();

  posts = posts.sort(sort);
  // @ts-expect-error: it's returning a post which really should be Any content entry
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
