export interface IDubberGetOneByQueryProps {
  query: string
  detailed?: boolean
  fetchDubbedAnime?: boolean
  parseMembers?: boolean

  /** Use cache
   * @default true
   */
  useCache?: boolean
}

export interface IDubberPutAvatarProps {
  file: File
  dubberId: string
}

export interface IDubberPutBannerProps {
  file: File
  dubberId: string
}