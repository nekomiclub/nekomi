import { createSlice } from '@reduxjs/toolkit';

import { RoleCapability } from '~/interfaces/RoleIntf';
import { UserLib, UserTogetherRoom, UserWatchProgress } from '~/interfaces/UserIntf';
import { IReduxAction } from '../store'

/** User local state */
export interface IUserState {
  id: string
  username: string
  roles: string[]
  avatar: string
  capabilities: RoleCapability[]
  watchProgress: UserWatchProgress[]
  libs: UserLib[]
  isTelegramLinked: boolean
  dubberTeamMember: string | null
  togetherRooms: UserTogetherRoom[]
}

/** Default user state */
export const userStateDefault: IUserState = {
  id: '',
  username: '',
  avatar: '',
  roles: [],
  capabilities: [],
  watchProgress: [],
  libs: [],
  isTelegramLinked: false,
  dubberTeamMember: null,
  togetherRooms: []
}

const userSlice = createSlice({
  name: 'user',
  initialState: userStateDefault,
  reducers: {
    reducer(state, action: IReduxAction<IUserState>) {
      for (let key in action.payload) {
        state[key] = action.payload[key];
      }
    }
  }
})

export default userSlice;