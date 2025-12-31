import z from 'zod';

import { $api } from '~/utils/http';



interface IResponse {
  message: string

  /** Changes diff */
  diff: string[]
}



const editLibAnimeSchema = z.object({
  lib_id: z.string().nonempty(),
  anime_id: z.string().nonempty(),
});

const ParamsSchema = z.object({
  id: z.string().nonempty().optional()
});

const BodySchema = z.object({
  add_lib_anime: editLibAnimeSchema.optional(),
  remove_lib_anime: editLibAnimeSchema.optional(),

  edit_view_progress: z.object({
    anime_id: z.string().nonempty(),
    dubber_id: z.string().nonempty(),
    episode: z.number(),
    progress: z.number(),
    viewtime: z.number(),
  }).optional(),

  remove_view_progress: z.object({
    anime_id: z.string().nonempty(),
  }).optional(),

  set_username: z.object({
    username: z.string()
  }).optional(),
});



export default async function _PatchUser(
  params: z.infer<typeof ParamsSchema>,
  body: z.infer<typeof BodySchema>
): Promise<IResponse> {
  const userId = params.id ? `/${params.id}` : '';

  return (await $api.patch(`/user${userId}`, body)).data;
}