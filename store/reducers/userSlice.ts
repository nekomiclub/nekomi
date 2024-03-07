import { createSlice } from "@reduxjs/toolkit";
import { IReduxAction } from '../store'
import { ITokenData } from "../../interfaces/ITokenData";

/** 
 * @prop isAuth - Is user authorized
 * @prop isNewAccount - Temporary property, indicates if user migrate account to new provider
 */
export interface IUserState extends ITokenData {
  isAuth: boolean,
  isNewAccount: boolean
}

const initialState: IUserState = {
  isAuth: false,
  isNewAccount: false,
  uid: '',
  roles: [],
  username: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reducer(state, action: IReduxAction<IUserState>) {
      for (let key in action.payload) {
        state[key] = action.payload[key];
      }
    }
  }
})

export default userSlice;