/**
 * RSC params interface
 * 
 * Generics
 * 
 * A - extends params
 * 
 * B - extends searchParams
 */
export interface IRSCProps<A = null, B = null> {
  params: {
    [key: string]: string | never
  } | A,
  searchParams: {
    [key: string]: string | never
  } | B
}