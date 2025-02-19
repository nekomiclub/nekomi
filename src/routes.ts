import { TRoleCapability } from './interfaces/IRoles'

export type TRouteStatus = 'clear' | 'indev'

export interface IRoute {
  /** Route path */
  path: string

  /** Define if route static (/hello) or dynamic (/hello/[property_1]). If route contain more than 1 prop, route should look like /hello/ASTERISK/world/ASTERISK
   * @default false
   */
  dynamic?: boolean

  /** Page status. Status page will be returned if nextjs can not resolved
   * @default clear
   * 
   * @deprecated outdated
  */
  status?: TRouteStatus

  /** List of required capabilities to have access to this route
   * 
   * @deprecated use CheckUserAccess instead
   */
  capabilitiesRequired?: TRoleCapability[]

  /** Validate capabilities mode
   * @param AND each of required capability must be present
   * @param OR one of required capabilities must be present
   * @default AND
   * 
   * @deprecated use CheckUserAccess instead
   */
  capabilitiesRequiredMode?: 'AND' | 'OR';
}

type TRoute = 'home'
  | 'watch_title'
  | 'watch_together'
  | 'info_agreement'
  | 'info_contacts'
  | 'info_dmca'
  | 'info_policy'
  | 'info_tos'
  | 'user_profile'
  | 'user_list'
  | 'dubber_profile'
  | 'dubber_settings'
  | 'patcher_title'
  | 'patcher_media'

/** @deprecated use Routes instead */
export const routes: { [key in TRoute]: IRoute } = {
  home: {
    path: '/'
  },
  info_agreement: {
    path: '/info/agreement'
  },
  info_contacts: {
    path: '/info/contacts'
  },
  info_dmca: {
    path: '/info/dmca'
  },
  info_policy: {
    path: '/info/policy'
  },
  info_tos: {
    path: '/info/terms'
  },
  dubber_profile: {
    path: '/dub',
    dynamic: true
  },
  /** @extends /dub */
  dubber_settings: {
    path: '/settings',
    dynamic: true
  },
  /** Must be above patcher_title  */
  patcher_media: {
    path: '/patcher/media',
  },
  patcher_title: {
    path: '/patcher',
    dynamic: true,
  },
  /** @extends /user */
  user_list: {
    path: '/list',
    dynamic: true
  },
  user_profile: {
    path: '/u',
    dynamic: true
  },
  watch_title: {
    path: '/w',
    dynamic: true,
  },
  watch_together: {
    path: '/together',
    dynamic: true,
  }
}

export const Routes = routes;