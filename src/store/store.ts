import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import storageSlice from './reducers/storageSlice';
import userSlice from './reducers/userSlice';

export interface IReduxAction<T> {
  type: string,
  payload: T
}

const rootReducer = combineReducers({
  user: userSlice.reducer,
  storage: storageSlice.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];