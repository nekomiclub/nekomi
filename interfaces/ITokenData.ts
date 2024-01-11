export type TAuthProviders = 'google' | 'telegram' | 'animee' | 'fullkekw'
export type TUserRoles = 'root' | 'admin' | 'moderator' | 'dubber' | 'subber' | 'subscriber' | 'editor' | 'user'

export interface ITokenData {
  roles: TUserRoles[],
  uid: string,
  username: string,
  iat?: number,
  exp?: number
}