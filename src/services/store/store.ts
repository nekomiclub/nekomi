import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import userSlice, { IUserState } from './reducers/userSlice';

export interface IReduxAction<T> {
  type: string,
  payload: T
}

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export const setupStore = (props?: {
  preloadedState?: {
    user?: IUserState,
  }
}) => {
  const preloadedState = props?.preloadedState;

  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];