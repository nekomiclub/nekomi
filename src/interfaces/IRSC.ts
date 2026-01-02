/**
 * Next.js RSC props
 */

export interface IRSCProps<QUERY = {
  [param: string]: string;
}, SEARCH = {
  [searchParam: string]: string;
}> {
  params: Promise<QUERY>;
  searchParams: Promise<SEARCH>;
}


/**
 * Next.js Layout props
 */

export interface ILayoutProps<QUERY = {
  [param: string]: string;
}> {
  children: React.ReactNode
  params: Promise<QUERY>
}