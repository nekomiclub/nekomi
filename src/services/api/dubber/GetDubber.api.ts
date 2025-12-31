import z from 'zod';

import IDubber, { DubberCardType, DubberRoleType } from '~/interfaces/IDubber';
import { UserCardType } from '~/interfaces/IUser';
import { ISODateString, zBoolean } from '~/interfaces/types';
import { $api } from '~/utils/http';



const FullResponseKeys = ['id', 'slug', 'name', 'about', 'avatar', 'cover', 'socials', 'support'] as const;
export type DubberFullType = Pick<IDubber, typeof FullResponseKeys[number]>

export interface IDubberMemberCard extends UserCardType {
  role: DubberRoleType
  member_since: ISODateString
}

type ViewType = z.infer<typeof QuerySchema>['view']



interface IResponseMisc {
  /** @method get_members */
  members?: IDubberMemberCard[]



  /** @method get_timestamps */
  created_at?: ISODateString

  /** @method get_timestamps */
  updated_at?: ISODateString
}

type ResponseTypeMap = {
  full: DubberFullType
  card: DubberCardType
  empty: object
}

interface IResponse<T extends object> {
  message: string

  dubber: IResponseMisc & T
}



const ParamSchema = z.object({
  query: z.string().nonempty()
});

const QuerySchema = z.object({
  view: z.enum(['full', 'card', 'empty']).default('card'),
  get_timestamps: zBoolean.optional(),

  /** @requires Authorization (CSRF) */
  get_members: zBoolean.optional(),
});



export default async function _GetDubber<V extends ViewType>(
  params: z.infer<typeof ParamSchema>,
  query: Partial<z.infer<typeof QuerySchema>> & { view: V }
): Promise<IResponse<ResponseTypeMap[V]>> {
  return (await $api.get<IResponse<ResponseTypeMap[V]>>(`/dubber/${params.query}`, { params: query })).data;
}