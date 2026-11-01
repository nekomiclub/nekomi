import z from 'zod';




export const AnimePlayerDataSchema = z.object({
  anime_id: z.string().nonempty(),
  dubber_id: z.string().nonempty().nullable(),
  episode: z.coerce.number().positive().nullable(),
  provider: z.enum(['ashdi_vod', 'moonanime_vod', 'tortuga_vod']).nullable()
});