import { createSlice } from '@reduxjs/toolkit';

import { IReduxAction } from '../store'

/** User local state */
export interface IInternalsState {
  online: number
  headerHeight: number
}

/** Default user state */
export const internalsDefaultSlice: IInternalsState = {
  online: 1,
  headerHeight: 92
}

const internalsSlice = createSlice({
  name: 'internals',
  initialState: internalsDefaultSlice,
  reducers: {
    reducer(state, action: IReduxAction<IInternalsState>) {
      for (let key in action.payload) {
        state[key] = action.payload[key];
      }
    }
  }
})

export default internalsSlice;