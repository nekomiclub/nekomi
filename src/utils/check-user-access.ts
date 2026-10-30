import { IsDevelopment } from '~/conf';
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
export default async function CheckUserAccess({ permissions: requiredPermissions, checkMode, session }: CheckUserAccessProps): Promise<{ user?: UserFullType, permissions?: ROLE_PERMISSION[] }> {
  if (!session) return {};

  requiredPermissions = requiredPermissions ?? [];
  checkMode = checkMode ?? 'AND';

  try {
    const { user } = await API.getUser({}, { view: 'full', get_permissions: true }, { sessionToken: session });
    const permissions = user.permissions ?? [];

    // Pass if no capabilities required
    if (!requiredPermissions?.length) return { user, permissions };

    // Pass root
    if (permissions?.includes(ROLE_PERMISSION.ABSOLUTE)) return { user, permissions };

    const passedPermissions: ROLE_PERMISSION[] = [];

    permissions.forEach(cap => {
      if (requiredPermissions?.includes(cap)) passedPermissions.push(cap);
    });

    // Pass if each of required capability present
    if (checkMode === 'AND' && passedPermissions.length === permissions.length) return { user, permissions };
    // Pass if at least one required capability present
    if (checkMode === 'OR' && passedPermissions.length > 0) return { user, permissions };


    return {};
  } catch (e) {
    if (IsDevelopment) console.error(e);

    return {};
  }
}