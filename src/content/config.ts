import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    // author: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    date: z.date(),
    updated: z.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    published: z.boolean(),
  }),
});

export const collections = {
  blog: blogCollection,
};
