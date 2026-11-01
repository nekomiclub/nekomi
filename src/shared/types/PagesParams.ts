/** Next.js RSC props */
export interface IRSCProps<P = {
  [param: string]: string;
}, S = {
  [searchParam: string]: string;
}> {
  params: Promise<P>;
  searchParams: Promise<S>;
}

/** Next.js Layout props */
export interface ILayoutProps<P = {
  [param: string]: string;
}> {
  children: React.ReactNode;
  params: Promise<P>;
}



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
