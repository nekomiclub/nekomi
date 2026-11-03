import { createSlice } from '@reduxjs/toolkit';

import { ROLE_PERMISSION_ENUM, TUserLib, TUserViewProgress } from '~/shared/lib/api/api-types';
import { IReduxAction } from '~/shared/store/store';



/** User local state */
export interface IUserState {
  id: string
  username: string
  avatar: string

  permissions: (keyof typeof ROLE_PERMISSION_ENUM)[]
  view_progress: TUserViewProgress[]
  libs: TUserLib[]
  dubber_team_member: string | null
}

/** Default user state */
export const userStateDefault: IUserState = {
  id: '',
  username: '',
  avatar: '',
  permissions: [],
  view_progress: [],
  libs: [],
  dubber_team_member: null,
};

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
});

export default userSlice;