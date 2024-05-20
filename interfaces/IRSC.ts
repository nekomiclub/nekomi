/**
 * RSC interface
 * 
 * Generics
 * 
 * A - query params
 * 
 * B - search params
 */
export interface IRSCProps<A = {
  [param: string]: string
}, B = {
  [searchParam: string]: string
}> {
  params: A | never,
  searchParams: B | never,
}

/**
 * Layout interface
 * 
 * Generics
 * 
 * A - query params
 */
export interface ILayoutProps<A = {
  [param: string]: string
}> {
  params: A,
  children: React.ReactElement
}