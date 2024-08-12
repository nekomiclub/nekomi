import { createSlice } from "@reduxjs/toolkit";
import { IReduxAction } from '../store'
import { ITokenData } from "../../interfaces/ITokenData";

/** User local state */
export interface IStorageSlice {
  online: number
}

/** Default user state */
export const storageDefaultSlice: IStorageSlice = {
  online: 1
}

const storageSlice = createSlice({
  name: 'online',
  initialState: storageDefaultSlice,
  reducers: {
    reducer(state, action: IReduxAction<IStorageSlice>) {
      for (let key in action.payload) {
        state[key] = action.payload[key];
      }
    }
  }
})

export default storageSlice;