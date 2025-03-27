import { defineCollection, reference, z } from "astro:content";

const goofSchema = {
  date: z.date(),
};

export const goofsCollection = defineCollection({
  type: "content",
  schema: z.object({ ...goofSchema }),
});

const blogSchema = {
  title: z.string(),
  description: z.string().optional(),
  tags: z
    .array(
      z.union([
        // z.object({ name: z.string(), icon: z.string().optional() }),
        z.string(),
        reference("tags"),
      ]),
    )
    .optional(),
  date: z.date(),
  updated: z.date().optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  published: z.boolean(),
  related: z.array(reference("blog") || reference("projects")).optional(),
};

export const blogCollection = defineCollection({
  type: "content",
  schema: z.object({ ...blogSchema }),
});

const projectSchema = {
  ...blogSchema,
  repo: z.string().url(),
  link: z.string().url().optional(),
  role: z.union([
    z.literal("creator"),
    z.literal("maintainer"),
    z.literal("contributor"),
  ]),
};

export const projectCollection = defineCollection({
  type: "content",
  schema: z.object({ ...projectSchema }),
});

const tagSchema = {
  name: z.string(),
  icon: z.string().optional(),
};

export const tagCollection = defineCollection({
  type: "data",
  schema: z.object({ ...tagSchema }),
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
  tags: tagCollection,
  goofs: goofsCollection,
};
