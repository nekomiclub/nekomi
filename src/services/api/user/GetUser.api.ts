import z from 'zod';

import conf from '~/conf';
import { ROLE_PERMISSION } from '~/interfaces/IRole';
import IUser, { IUserLib, IUserViewProgress, USER_RESTRICTION, UserCardType } from '~/interfaces/IUser';
import { ISODateString, zBoolean } from '~/interfaces/types';
import { $api } from '~/utils/http';



const ParamsSchema = z.object({
  query: z.string().nonempty().optional(),
});

const QuerySchema = z.object({
  view: z.enum(['full', 'card', 'empty']).default('card'),

  get_permissions: zBoolean.optional(),
  get_username_changed_at: zBoolean.optional(),
  get_timestamps: zBoolean.optional(),

  /** @requires Authorization (CSRF) */
  get_view_progress: zBoolean.optional(),

  /** @requires Authorization (CSRF) */
  get_email: zBoolean.optional(),

  /** @requires Authorization (CSRF+Session) only for owner & admin */
  get_restrictions: zBoolean.optional(),

  /** @requires Authorization (CSRF+Session) only for owner & admin */
  get_libs: zBoolean.optional(),
});



const FullResponseKeys = ['id', 'username', 'avatar', 'cover', 'total_viewtime', 'dubber_team_member', 'roles'] as const;
export type UserFullType = Pick<IUser, typeof FullResponseKeys[number]>
type ViewType = z.infer<typeof QuerySchema>['view']


export interface IUserResponseMisc {
  /** @method get_email */
  email?: string



  /** @method get_username_changed_at */
  username_changed_at?: ISODateString



  /** @method get_permissions */
  permissions?: ROLE_PERMISSION[]



  /** @method get_restrictions */
  restrictions?: USER_RESTRICTION[]



  /** @method get_view_progress */
  view_progress?: IUserViewProgress[]



  /** @method get_libs */
  libs?: IUserLib[]



  /** @method get_timestamps */
  created_at?: ISODateString

  /** @method get_timestamps */
  updated_at?: ISODateString
}

type ResponseTypeMap = {
  full: UserFullType
  card: UserCardType
  empty: object
}

interface IResponse<T extends object> {
  message: string
  user: IUserResponseMisc & T
}



export default async function _GetUser<V extends ViewType>(
  params: z.infer<typeof ParamsSchema>,
  query: Partial<z.infer<typeof QuerySchema>> & { view: V },
  props?: { sessionToken?: string }
): Promise<IResponse<IUserResponseMisc & ResponseTypeMap[V]>> {
  const userQuery = params.query ? `/${params.query}` : '';

  return (await $api.get(`/user${userQuery}`, {
    params: query,
    headers: {
      Cookie: props?.sessionToken ? `${conf.vars.SESSION_COOKIE_NAME}=${props?.sessionToken}` : undefined
    }
  })).data;
}