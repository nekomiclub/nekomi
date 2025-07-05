import { z } from 'zod';



export const AnimePatchByUuidSchema = z.object({
  uuid: z.string(),

  nameUkr: z.string().optional(),
  nameEng: z.string().optional(),
  nameAlt: z.string().array().optional(),

  malId: z.number().optional(),
  imdbId: z.string().optional(),
  scoreIMDB: z.number().optional(),
  scoreMAL: z.number().optional(),
  malScoredBy: z.number().optional(),
  episodesCount: z.number().optional(),
  year: z.number().optional(),
  studios: z.string().array().optional(),
  genres: z.string().array().optional(),
  posterAdapt: z.string().optional(),
  isDMCARestricted: z.boolean().optional(),

  status: z.string().optional(),
  season: z.string().optional(),
  media: z.string().optional(),
  rate: z.string().optional(),

  details: z.string().optional(),
  description: z.string().optional(),
});

export type AnimePatchByUuidProps = z.infer<typeof AnimePatchByUuidSchema>