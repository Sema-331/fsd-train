import { z } from 'zod';

export const schemaTodo = z
  .object({
    id: z.string(),
    title: z.string(),
    secondTitle: z.string(),
    completed: z.boolean(),
  })
  .array();

export type TypeSchema = z.infer<typeof schemaTodo>;
