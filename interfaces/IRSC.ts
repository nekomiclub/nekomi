/**
 * RSC interface
 */
export interface IRSCProps<QUERY = {
  [param: string]: string
}, SEARCH = {
  [searchParam: string]: string
}> {
  params: QUERY | never,
  searchParams: SEARCH | never,
}

/**
 * Layout interface
 */
export interface ILayoutProps<QUERY = {
  [param: string]: string
}> {
  params: QUERY,
  children: React.ReactElement
}