import { defineCollection, z } from "astro:content";

const tutorialCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
        date: z.date(),
    }),
});

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
        date: z.date(),
    }),
});

export const collections = {
    tutorial: tutorialCollection,
    blog: blogCollection,
};
