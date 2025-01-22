import { $api } from '~/components/http';
import { config, devMode } from '~/config';
import { TRoleCapability } from '~/interfaces/IRoles';
import { IUser } from '~/interfaces/IUser';



interface ICheckUserAccessProps {
  session?: string

  /** @default [] */
  capabilities?: TRoleCapability[]

  /** @default "AND" */
  checkMode?: 'AND' | 'OR'
}



/** Fetch user & check it's access, if user pass it's object will return */
export async function CheckUserAccess({ capabilities, checkMode, session }: ICheckUserAccessProps): Promise<{ user?: IUser, capabilities?: TRoleCapability[] }> {
  if (!session) return {};

  capabilities = capabilities ?? [];
  checkMode = checkMode ?? 'AND';

  try {
    const { data } = await $api.get<{ user: IUser, parsedRoles: TRoleCapability[] }>(`/user/*`, {
      params: {
        detailed: true,
        parseRoles: true
      },
      headers: {
        Cookie: `${config.vars.SessionCookie}=${session}`
      }
    })

    const { parsedRoles, user } = data;

    // Pass root
    if (parsedRoles.includes('root')) return { user, capabilities: parsedRoles };
    // Pass if no capabilities required
    if (!capabilities.length) return { user, capabilities: parsedRoles };

    const passCaps: TRoleCapability[] = []

    capabilities.forEach(cap => {
      if (parsedRoles.includes(cap)) passCaps.push(cap);
    })

    // Pass if each of required capability present
    if (checkMode === 'AND' && passCaps.length === capabilities.length) return { user, capabilities: parsedRoles };
    // Pass if at least one required capability present
    if (checkMode === 'OR' && passCaps.length > 0) return { user, capabilities: parsedRoles };


    return {};
  } catch (e) {
    if (devMode) console.error(e);

    return {};
  }
}