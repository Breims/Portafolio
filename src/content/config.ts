import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: z.object({
		inProgress: z.boolean(),
		img: z.string().optional(),
		url: z.string().optional(),
		title: z.string(),
		description: z.string(),
		urlrepo: z.string().optional(),
        urllive: z.string().optional(),
		ruteTech: z.array(z.string()).optional(),
	}),
});

export const collections = {
	projects: projectsCollection,
};
