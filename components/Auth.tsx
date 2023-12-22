'use client'

import { NextPage } from 'next';
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
      router.replace(routes.home.path)

    } catch (e) {
      console.log(e)

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
      <button className='w-full flex gap-[40px] py-[16px] px-[24px] bg-white rounded-[2px] justify-center items-center' onClick={authorizate}>
        <GoogleLogo width={24} height={24} />
        <p className='text-dark text-[24px] font-extralight'>Продовжити з Google</p>
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

export const WithForm: NextPage<{ method: 'signin' | 'signup' }> = (props) => {
  const ref = useRef<HTMLDivElement>(null)

  const [fv] = useState(new FormValidator({
    formId: 'auth-form',
    throw: 'afterEach'
  }))

  const sendForm = async () => {
    ref.current!.innerHTML = ''

    const payload = {
      username: (document.querySelector('#signin-username') as HTMLInputElement).value!,
      password: (document.querySelector('#signin-password') as HTMLInputElement).value!
    }

    try {
      await signin(payload)
      const tokenData = await $api.post(`${env.apiUrl}/v1/decode`, {
        method: 'access',
        token: localStorage.getItem('token')
      })

      console.log(tokenData)
    } catch (e) {
      if (e instanceof AxiosError) {
        const emsg = e.response?.data.msg;
        let responseMsg = '';

        if (emsg === 'User with provided username is not found') {
          responseMsg = 'Користувач з цим нікнеймом не знайдений';
        } else if (emsg === 'Password is incorrect') {
          responseMsg = 'Пароль неправильний';
        }


        ref.current?.insertAdjacentHTML('beforeend', `<p class="text-red-400 max-w-[426px]">${responseMsg || emsg}</p>`)
      } else {
        // @ts-ignore
        ref.current?.insertAdjacentHTML('beforeend', `<p class="text-red-400 max-w-[426px]">При авторизації виникла помилка - ${e.message || e.msg}</p>`)
      }
    }
  }

  useEffect(() => {
    fv.init();
  }, [])

  return (
    <div className='flex flex-col gap-[16px] w-full'>
      <form action="none" onSubmit={e => fv.validate(e, props.method === 'signin' ? fvRulesSignin : fvRulesSignup, sendForm)} id='auth-form' className='w-full flex flex-col gap-[12px]'>
        <div className='flex flex-col gap-[4px]'>
          <input type="text" name='username' id='auth-username' placeholder='@username' className='auth-field' />
        </div>
        <div className='flex flex-col gap-[4px]'>
          <input type="password" name='password' id='auth-password' placeholder='***' className='auth-field' />
        </div>

        {props.method === 'signup' ? <>
          <div className='flex flex-col gap-[4px]'>
            <input type="password" name='password' id='auth-password-confirm' placeholder='***' className='auth-field' />
          </div>
        </> : null}

        <button type='submit' className='px-[24px] py-[16px] bg-dark w-full rounded-[4px] flex gap-[40px] items-center justify-center'>
          <p className='text-white text-[24px] font-extralight'>Продовжити</p>
          <AuthContinue width={32} height={32} />
        </button>
      </form>

      <div ref={ref}></div>
    </div>
  );
}

export const logout = () => {
  console.log('logout')
}