import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import internalsSlice, { IInternalsState } from './reducers/internalsSlice';
import userSlice, { IUserState } from './reducers/userSlice';

export interface IReduxAction<T> {
  type: string,
  payload: T
}

const rootReducer = combineReducers({
  user: userSlice.reducer,
  storage: internalsSlice.reducer
});

export const setupStore = (props?: {
  preloadedState?: {
    user?: IUserState,
    storage?: IInternalsState
  }
}) => {
  const preloadedState = props?.preloadedState;

  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];