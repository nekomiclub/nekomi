import { createSlice } from "@reduxjs/toolkit";
import { IReduxAction } from '../store'
import { ITokenData } from "../../interfaces/ITokenData";

/** User local state */
export interface IUserState {
  id: string | null,
  username: string | null,
  roles: string[],
  avatarURL: string | null,
}

/** Default user state */
export const defaultUserState: IUserState = {
  id: null,
  username: null,
  avatarURL: null,
  roles: []
}

const userSlice = createSlice({
  name: 'user',
  initialState: defaultUserState,
  reducers: {
    reducer(state, action: IReduxAction<IUserState>) {
      for (let key in action.payload) {
        state[key] = action.payload[key];
      }
    }
  }
})

export default userSlice;