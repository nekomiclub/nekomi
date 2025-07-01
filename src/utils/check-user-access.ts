import { DevelopmentMode } from '~/config';
import { RoleCapability } from '~/interfaces/RoleIntf';
import { User } from '~/interfaces/UserIntf';
import API from '~/services/ApiService';



interface CheckUserAccessProps {
  session?: string

  /** @default [] */
  capabilities?: RoleCapability[]

  /** @default "AND" */
  checkMode?: 'AND' | 'OR'
}



/** Fetch user & check it's access, if user pass it's object will return */
export default async function CheckUserAccess({ capabilities, checkMode, session }: CheckUserAccessProps): Promise<{ user?: User, capabilities?: RoleCapability[] }> {
  if (!session) return {};

  capabilities = capabilities ?? [];
  checkMode = checkMode ?? 'AND';

  try {
    const { user, capabilities } = await API.getUser({ query: '*', parseCapabilities: true }, {
      session
    })

    // Pass root
    if (capabilities?.includes('root')) return { user, capabilities };
    // Pass if no capabilities required
    if (!capabilities?.length) return { user, capabilities };

    const passCaps: RoleCapability[] = []

    capabilities.forEach(cap => {
      if (capabilities?.includes(cap)) passCaps.push(cap);
    })

    // Pass if each of required capability present
    if (checkMode === 'AND' && passCaps.length === capabilities.length) return { user, capabilities };
    // Pass if at least one required capability present
    if (checkMode === 'OR' && passCaps.length > 0) return { user, capabilities };


    return {};
  } catch (e) {
    if (DevelopmentMode) console.error(e);

    return {};
  }
}