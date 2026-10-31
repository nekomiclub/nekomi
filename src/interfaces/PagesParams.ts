export interface ITeamPageParams {
  slug: string;
}

export type ITeamSettingsPageParams = ITeamPageParams



export interface IUserLibPageProps extends IUserPageProps {
  lib_id: string
}

export interface IUserPageProps {
  username: string
}

export interface IUserSettingsPageProps extends IUserPageProps { }



export interface IAnimePageParams {
  query: string;
}

export interface IAnimePageSearchParams {
  /** Whether device is mobile */
  mobile?: any;
}