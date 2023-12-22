import { createSlice } from "@reduxjs/toolkit";
import { IReduxAction } from '../store'
import { ITokenData } from "../../interfaces/ITokenData";

// @ts-ignore
interface ISlice extends ITokenData {
  isAuth: boolean
}

const initialState: ISlice = {
  isAuth: false,
  uid: '',
  roles: [],
  username: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reducer(state, action: IReduxAction<ISlice>) {
      for (let key in action.payload) {
        state[key] = action.payload[key];
      }
    }
  }
})

export default userSlice;