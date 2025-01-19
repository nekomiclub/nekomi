import { IDubber, TDubberMemberRole } from '../IDubber'
import { IUser } from '../IUser'

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

export interface IDubberPatchSettingsProps {
  dubberId: string
  nameUkr?: string
  nameEng?: string
  description?: string
  supportLinks?: Partial<IDubber['support']>
  socialLinks?: Partial<IDubber['socials']>
}

export interface IUserGetSearch {
  /** Query ~all will return all users */
  q: string

  /** Parse user invitation data (can/not be invited, already member) for dubber id */
  parseInvitationStatusFor?: string
}

export interface IUserGetSearchResult {
  user: IUser

  /** @requires parseInvitationStatusFor */
  invitationStatus?: 'can_be_invited' | 'telegram_not_linked' | 'invite_pending' | 'others_member_already'
}

export interface IDubberPostInviteSADProps {
  userId: string
  dubberId: string
}

export interface IDubberPatchMemberByIdProps {
  dubberId: string
  userId: string
  role?: TDubberMemberRole
}

export interface IDubberDeleteMemberByIdProps {
  dubberId: string
  userId: string
}