import { createSlice } from '@reduxjs/toolkit';

import { TRoleCapability } from '../../interfaces/IRoles';
import { IUserLib, IUserWatchProgress } from '../../interfaces/IUser';
import { IReduxAction } from '../store'

/** User local state */
export interface IUserState {
  id: string
  username: string
  roles: string[]
  avatar: string
  capabilities: TRoleCapability[]
  watchProgress: IUserWatchProgress[]
  libs: IUserLib[]
  isTelegramLinked: boolean
  dubberTeamMember: string | null
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
  dubberTeamMember: null
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