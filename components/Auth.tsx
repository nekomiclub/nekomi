'use client'

import { NextPage } from 'next';
import { useSearchParams } from 'next/navigation'
import { useRef, useState, useEffect } from 'react'
import { GoogleLogo, AuthContinue } from '../assets/assets';
import { firebaseApp } from './firebase'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FormValidator, IFormInputRules } from 'react-uvc'
import { signin } from './authorization'
import axios, { AxiosError } from 'axios'
import userSlice from '../store/reducers/userSlice'
import { useRouter } from 'next/navigation'

import { useAppDispatch, useAppSelector } from '../hooks/redux'

import '../styles/components/Auth.scss';
import $api from './http';
import { env } from '../config';
import { ITokenData } from '../interfaces/ITokenData';
import { routes } from '../routes';

export const WithGoogle: NextPage = (props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { isAuth, roles, uid, username } = useAppSelector(state => state.user)
  const { reducer } = userSlice.actions;
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null)

  const authorizate = async () => {
    ref.current!.innerHTML = '';
    const auth = getAuth(firebaseApp);

    try {
      const data = await signInWithPopup(auth, new GoogleAuthProvider());
      const payload = {
        username: data.user.email!.split('@')[0],
        password: '~google',
        // @ts-ignore
        token: data.user.accessToken
      }

      const res = await signin(payload)
      const resData = res.data;

      localStorage.setItem('token', resData.token)

      const tokenData = await $api.post<ITokenData>(`${env.apiUrl}/v1/token/decode`, {
        method: 'access',
        token: `bearer=${resData.token}`,
      })

      dispatch(reducer({ isAuth: true, roles: tokenData.data.roles, uid: tokenData.data.uid, username: tokenData.data.username }))
      router.replace(searchParams.get('ref')!)

    } catch (e) {
      console.error(e)

      if (e instanceof AxiosError) {
        ref.current?.insertAdjacentHTML('beforeend', `<p class="text-red-400 max-w-[426px]">${e.response?.data.msg}</p>`)
      } else {
        // @ts-ignore
        ref.current?.insertAdjacentHTML('beforeend', `<p class="text-red-400 max-w-[426px]">При авторизації через цей провайдер виникла помилка - ${e.message || e.msg}</p>`)
      }
    }
  }

  return (
    <div>
      <button className='w-full flex gap-[40px] max-[500px]:gap-[24px] max-[500px]:py-[8px] max-[500px]:px-[16px] py-[16px] px-[24px] bg-white rounded-[2px] justify-center items-center' onClick={authorizate}>
        <GoogleLogo width={24} height={24} />
        <p className='text-dark text-[24px] max-[500px]:16px font-extralight'>Продовжити з Google</p>
      </button>

      <div ref={ref}></div>
    </div>
  );
}

const fvRulesSignin: IFormInputRules[] = [
  {
    id: 'signin-username',
    notEmpty: {
      val: true,
      msg: 'Нікнейм не може бути порожнім'
    },
    minLength: {
      val: 3,
      msg: `Занадто мало символів (мінімально - 3)`
    },
    maxLength: {
      val: 32,
      msg: 'Поле не може бути довле 32х символів'
    }
  },
  {
    id: 'signin-password',
    notEmpty: {
      val: true,
      msg: 'Пароль не може бути порожнім'
    },
    minLength: {
      val: 6,
      msg: `Занадто мало символів (мінімально - 6)`
    },
    maxLength: {
      val: 32,
      msg: 'Поле не може бути довле 32х символів'
    },
    custom: {
      val(input) {
        if (input.value.match('~')) {
          throw new Error('Пароль містить недопустимі символи')
        }
      },
    }
  }
]

const fvRulesSignup: IFormInputRules[] = [
  {
    id: 'signin-username',
    notEmpty: {
      val: true,
      msg: 'Нікнейм не може бути порожнім'
    },
    minLength: {
      val: 3,
      msg: `Занадто мало символів (мінімально - 3)`
    },
    maxLength: {
      val: 32,
      msg: 'Поле не може бути довле 32х символів'
    }
  },
  {
    id: 'signin-password',
    notEmpty: {
      val: true,
      msg: 'Пароль не може бути порожнім'
    },
    minLength: {
      val: 6,
      msg: `Занадто мало символів (мінімально - 6)`
    },
    maxLength: {
      val: 32,
      msg: 'Поле не може бути довле 32х символів'
    },
    custom: {
      val(input) {
        if (input.value.match('~')) {
          throw new Error('Пароль містить недопустимі символи')
        }
      },
    }
  }
]

export const logout = () => {
  console.log('logout')
}