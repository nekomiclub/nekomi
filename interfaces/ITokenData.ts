export type TAuthProviders = 'google' | 'telegram' | 'animee' | 'fullkekw'
export type TUserRoles = 'root' | 'admin' | 'moderator' | 'dubber' | 'subber' | 'subscriber' | 'editor' | 'user'

export interface ITokenData {
  roles: TUserRoles[],
  uid: string,
  username: string,
  iat?: number,
  exp?: number
}

/** Fullkekw usapi token saved in cookies */
export interface ISessionCookieData {
  sessionId: string,
  timestamp: number,
  userId: string
}