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

  // === Legal pages
  legal_tos: { path: () => `/legal/terms-of-service` },
  legal_privacy: { path: () => `/legal/privacy-policy` },

  // === User Pages
  user: { path: ({ username }: IUserPageProps) => `/user/${username}` },
  user_lib: { path: ({ username, lib_id: libId }: Required<IUserLibPageProps>) => `/user/${username}/${libId}` },
  user_settings: { path: ({ username }: Required<IUserSettingsPageProps>) => `/user/${username}/settings` },

  // === Watch Pages
  anime: { path: ({ query }: IAnimePageParams) => `/anime/${query}` },
};



const Routes: RoutesMapType = definitions;

export default Routes;