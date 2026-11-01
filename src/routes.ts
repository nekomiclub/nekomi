import { IAnimePageParams, ITeamPageParams, IUserLibPageProps, IUserPageProps, IUserSettingsPageProps } from './shared/types/PagesParams';



interface IRoute<P extends any[] = any[]> {
  path: (...args: P) => string;
}

type RoutesMapType = {
  [K in keyof typeof definitions]: IRoute<
    Parameters<typeof definitions[K]['path']>
  >
};



const definitions = {
  // === Pages
  home: { path: () => `/` },

  // === Dev Pages
  dev_icons: { path: () => `/dev/icons` },
  dev_screen_no_connection: { path: () => `/dev/screen/noConnection` },
  dev_screen_not_found: { path: () => `/dev/screen/notFound` },
  dev_screen_not_rendered: { path: () => `/dev/screen/notRendered` },

  // === Dubber Pages
  team: { path: ({ slug }: ITeamPageParams) => `/team/${slug}` },
  team_settings: { path: ({ slug }: ITeamPageParams) => `/team/${slug}/settings` },

  // === Info Pages
  info_agreement: { path: () => `/info/agreement` },
  info_contacts: { path: () => `/info/contacts` },
  info_DMCA: { path: () => `/info/dmca` },
  info_policy: { path: () => `/info/policy` },
  info_terms: { path: () => `/info/terms` },

  // === User Pages
  user: { path: ({ username }: IUserPageProps) => `/user/${username}` },
  user_lib: { path: ({ username, lib_id: libId }: Required<IUserLibPageProps>) => `/user/${username}/${libId}` },
  user_settings: { path: ({ username }: Required<IUserSettingsPageProps>) => `/user/${username}/settings` },

  // === Watch Pages
  anime: { path: ({ query }: IAnimePageParams) => `/anime/${query}` },
};



const routes: RoutesMapType = definitions;

export default routes;