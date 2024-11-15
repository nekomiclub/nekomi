import { createSlice } from '@reduxjs/toolkit';

import { IReduxAction } from '../store'
import { IUserLib, IUserWatchProgress } from '../../interfaces/IUser';
import { TRoleCapability } from '../../interfaces/IRoles';

/** User local state */
export interface IUserState {
  id: string
  username: string
  roles: string[]
  avatar: string
  capabilities: TRoleCapability[]
  watchProgress: IUserWatchProgress[]
  loaded: boolean
  libs: IUserLib[]
  isTelegramLinked: boolean
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
  loaded: false,
  isTelegramLinked: false
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