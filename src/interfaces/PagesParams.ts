export interface IDubberPageParams {
  slug: string;
}



export interface IUserLibPageProps extends IUserPageProps {
  libId: string;
}

export interface IUserPageProps {
  username: string;
}

export interface IUserSettingsPageProps extends IUserPageProps { }



export interface IAnimePageParams {
  query: string;
}

export interface IAnimePageSearchParams {
  /** Whether device is mobile */
  mobile?: any;
}