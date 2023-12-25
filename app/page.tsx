'use client'

import { NextPage, Metadata } from 'next';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import userSlice from '../store/reducers/userSlice';
import { logout } from '../components/authorization'
import BorderGradient from '../components/BorderGradient';

const Home: NextPage = (props) => {
  const { isAuth, roles, uid, username } = useAppSelector(state => state.user)
  const { reducer } = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className="page">
      <h1>{isAuth ? <>
        <p>Logged in as {username}</p>
        <button onClick={() => logout()}>logout</button>
      </> : <>
        You are not logged in.
      </>}</h1>
    </div>
  );
}

export default Home;