import { createSlice } from '@reduxjs/toolkit';

import { ROLE_PERMISSION } from '~/interfaces/IRole';
import { IUserLib, IUserViewProgress } from '~/interfaces/IUser';
import { IReduxAction } from '~/store/store';

/** User local state */
export interface IUserState {
  id: string
  username: string
  roles: string[]
  avatar: string

  permissions: ROLE_PERMISSION[]
  view_progress: IUserViewProgress[]
  libs: IUserLib[]
  dubber_team_member: string | null
}

/** Default user state */
export const userStateDefault: IUserState = {
  id: '',
  username: '',
  avatar: '',
  roles: [],
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