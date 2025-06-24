export interface User {
  statistics: UserStatistics
  libs: UserLib[]
  roles: string[]
  watchProgress: UserWatchProgress[]
  telegramData: UserTelegramData | null

  telegramLinkToken: string | null

  /** Events subscribes
   * @see docs/features.md#user-subscribes
   */
  subscribes: string[]

  id: string
  username: string
  avatar: string
  banner: string
  togetherRooms: UserTogetherRoom[]
}

/** User nekomi statistics */
export interface UserStatistics {
  isTelegramLinked: boolean

  /** Dubber team ID in which user is member */
  dubber_team_member: string | null

  /** UTC0 account creation timestamp */
  accountCreated: number

  /** Viewtime in seconds */
  viewtime: number
}

/** User watch progress item */
export interface UserWatchProgress {
  titleID: string
  dubberID: string
  episodeOrder: number

  /** Watch progress in seconds */
  progress: number

  /** Last update UT-0 timestamp */
  updatedAt: number
}

export interface UserTelegramData {
  id: number
}

export type UserLibType = 'favorite' | 'watching' | 'watched' | 'delayed' | 'plans' | 'custom'

export interface UserLib {
  id: string
  type: UserLibType

  /** UTC0 creation timestamp */
  createdAt: number

  /** Titles IDs */
  titles: string[]

  settings: {
    name: string

    /** Visibility to others */
    hidden: boolean

    /** Protection from settings changes */
    immortal: boolean
  }
}

export interface UserTogetherRoom {
  id: string
  titleId: string
  settings: {
    name: string
    password: string | null

    usersCanControl: boolean
    accurateSync: boolean
  }
}