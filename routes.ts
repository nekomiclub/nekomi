

export type TRouteStatus = 'clear' | 'indev'

export interface IRoute {
  /** Route path */
  path: string

  /** Define if route static (/hello) or dynamic (/hello/[name])
   * @default false
   */
  dynamic?: boolean

  /** Page status 
   * @default clear
  */
  status?: TRouteStatus
}

type TRoute = 'home'
  | 'watch_title'
  | 'info_agreement'
  | 'info_contacts'
  | 'info_dmca'
  | 'info_policy'
  | 'user_profile'
  | 'user_list'
  | 'dubber_profile'
  | 'title_patcher'

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
  dubber_profile: {
    path: '/dub',
    dynamic: true
  },
  title_patcher: {
    path: '/patcher',
    dynamic: true
  },
  user_list: {
    path: '/u/*/list/*',
    dynamic: true
  },
  user_profile: {
    path: '/u',
    dynamic: true
  },
  watch_title: {
    path: '/w',
    dynamic: true
  }
}