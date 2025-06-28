import { DubberPageParams, PatcherPageParams, UserPageLibProps, UserPageProps, WatchPageParams } from './interfaces/PagesParams';








interface Route<P extends any[] = any[]> {
  path: (...args: P) => string;
}

type RoutesMap = {
  [K in keyof typeof routeDefinitions]: Route<
    Parameters<typeof routeDefinitions[K]['path']>
  >
};



const routeDefinitions = {
  // === Pages
  home: { path: () => `/` },

  // === Dev Pages
  devIcons: { path: () => `/dev/icons` },
  devScreenNoConnection: { path: () => `/dev/screen/noConnection` },
  devScreenNotFound: { path: () => `/dev/screen/notFound` },
  devScreenNotRendered: { path: () => `/dev/screen/notRendered` },

  // === Dubber Pages
  dubber: { path: ({ slug }: DubberPageParams) => `/dub/${slug}` },
  dubberSettings: { path: ({ slug }: DubberPageParams) => `/dub/${slug}/settings` },

  // === Info Pages
  infoAgreement: { path: () => `/info/agreement` },
  infoContacts: { path: () => `/info/contacts` },
  infoDMCA: { path: () => `/info/dmca` },
  infoPolicy: { path: () => `/info/policy` },
  infoTerms: { path: () => `/info/terms` },

  // === Patcher Pages
  patcher: { path: ({ uuid }: PatcherPageParams) => `/patcher/${uuid}` },
  patcherMedia: { path: () => `/patcher/media` },

  // === Together Pages
  together: { path: () => `/together` },
  togetherRoom: { path: () => `/together/notexist` },

  // === User Pages
  user: { path: ({ username }: UserPageProps) => `/u/${username}` },
  userLib: { path: ({ username, libID }: Required<UserPageLibProps>) => `/u/${username}/lib/${libID}` },

  // === Watch Pages
  watch: { path: ({ query }: WatchPageParams) => `/w/${query}` },
};

export const Routes: RoutesMap = routeDefinitions;