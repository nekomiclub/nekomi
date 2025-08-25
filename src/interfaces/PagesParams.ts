interface Params {
  [param: string]: any;
}



export interface DubberPageParams extends Params {
  slug: string;
}



export interface PatcherPageParams extends Params {
  uuid: string;
}



export interface UserLibPageProps extends UserPageProps {
  libId: string;
}

export interface UserPageProps extends Params {
  username: string;
}

export interface UserSettingsPageProps extends UserPageProps { }



export interface WatchPageParams extends Params {
  query: string;
}

export interface WatchPageSearchParams extends Params {
  /** Whether device is mobile */
  mobile?: any;
}