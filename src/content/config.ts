import { defineCollection, z } from "astro:content";

const blogSchema = {
  title: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  date: z.date(),
  updated: z.date().optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  published: z.boolean(),
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
  skills: z.array(z.object({ name: z.string(), icon: z.string() })).optional(),
  // TODO: should skills be a data type?
};

export const projectCollection = defineCollection({
  type: "content",
  schema: z.object({ ...projectSchema }),
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
};
