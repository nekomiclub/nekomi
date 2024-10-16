import { createSlice } from "@reduxjs/toolkit";
import { IReduxAction } from '../store'
import { ITokenData } from "../../interfaces/ITokenData";
import { TRoleCapability } from "../../interfaces/IRoles";
import { IUserWatchProgress } from "../../interfaces/IUser";

/** User local state */
export interface IUserState {
  id: string
  username: string
  roles: string[]
  avatar: string
  capabilities: TRoleCapability[]
  watchProgress: IUserWatchProgress[]
  loaded: boolean
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