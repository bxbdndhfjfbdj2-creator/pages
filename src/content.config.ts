import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const schema = z.object({
  title:z.string().min(1), summary:z.string().default(''),
  date:z.coerce.date(), updated:z.coerce.date().optional(),
  tags:z.array(z.string()).default([]),
  featured:z.boolean().default(false),draft:z.boolean().default(false),
  order:z.number().int().default(0),
  links:z.array(z.object({label:z.string(),url:z.string()})).default([]),
  authors:z.array(z.string()).optional(),venue:z.string().optional(),doi:z.string().optional(),repo:z.string().optional(),
});
const collection=(name:string)=>defineCollection({loader:glob({base:'./src/content/'+name,pattern:'**/*.md'}),schema});
export const collections={
 research:collection('research'), publications:collection('publications'),
 projects:collection('projects'), writing:collection('writing'), notes:collection('notes')
};
