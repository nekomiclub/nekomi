import { DevelopmentMode } from '~/conf';
import { ROLE_PERMISSION } from '~/interfaces/IRole';
import API from '~/services/api/API';
import { UserFullType } from '~/services/api/user/GetUser.api';



interface CheckUserAccessProps {
  session?: string

  /** @default [] */
  permissions?: ROLE_PERMISSION[]

  /** @default "AND" */
  checkMode?: 'AND' | 'OR'
}



/** Fetch user & check it's access, if user pass it's object will return */
export default async function CheckUserAccess({ permissions, checkMode, session }: CheckUserAccessProps): Promise<{ user?: UserFullType, permissions?: ROLE_PERMISSION[] }> {
  if (!session) return {};

  permissions = permissions ?? [];
  checkMode = checkMode ?? 'AND';

  try {
    const { user } = await API.getUser({}, { view: 'full', get_permissions: true }, { sessionToken: session });
    const permissions = user.permissions ?? [];

    // Pass root
    if (permissions?.includes(ROLE_PERMISSION.ABSOLUTE)) return { user, permissions };
    // Pass if no capabilities required
    if (!permissions?.length) return { user, permissions };

    const passPerms: ROLE_PERMISSION[] = [];

    permissions.forEach(cap => {
      if (permissions?.includes(cap)) passPerms.push(cap);
    });

    // Pass if each of required capability present
    if (checkMode === 'AND' && passPerms.length === permissions.length) return { user, permissions };
    // Pass if at least one required capability present
    if (checkMode === 'OR' && passPerms.length > 0) return { user, permissions };


    return {};
  } catch (e) {
    if (DevelopmentMode) console.error(e);

    return {};
  }
}