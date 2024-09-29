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
