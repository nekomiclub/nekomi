'use client'

import React, { useState, useEffect } from 'react'
import { NextPage } from 'next';
import { useSearchParams } from 'next/navigation'
import { GoogleLogo } from '../../assets/assets'

import DefaultImg1 from '../../assets/defaultLargeImages/3.webp'
import Image from 'next/image';
import { Logo } from '../../assets/assets';
import Link from 'next/link';
import { routes } from '../../routes';
import { WithGoogle } from '../../components/Auth'
import { HashImage } from 'hash-image';
import { LoadingImage } from '../../components/GeneralComponents';

const AuthSignIn: NextPage = (props) => {
  const searchParams = useSearchParams();

  return (
    <div className='relative h-screen'>
      <div className='fixed top-0 left-0 w-full h-full'>
        <LoadingImage src={DefaultImg1.src} />
      </div>

      <div className="container relative z-[3]">
        <div className='flex flex-col items-center gap-[24px]'>
          <Link href={routes.home.path}>
            <Logo width={128} height={102} />
          </Link>

          <div className='flex flex-col gap-[4px] items-center'>
            <h2 className='text-[32px] max-[500px]:text-[24px] font-bold text-white text-center'>З поверненням!</h2>
            <p className='text-[14px] font-extralight text-white text-center'>Увійди в свій акаунт, та повернись у світ українського аніме</p>
          </div>

          <div className='flex flex-col gap-[4px] w-full'>
            <WithGoogle />
            <p className='text-white max-w-[400px]'>Авторизація через Google буде прибрана після 22 березня включно</p>
            <Link href={`${routes.authSignup.path}/continue?ref=${searchParams.get('ref')}`} className='w-full flex gap-[40px] max-[500px]:gap-[24px] max-[500px]:py-[8px] max-[500px]:px-[16px] py-[16px] px-[24px] bg-dark rounded-[2px] justify-center items-center'>
              <p className='text-white text-[24px] max-[500px]:16px font-extralight'>Продовжити з Fullkekw</p>
            </Link>
          </div>
        </div>

        <p className='text-white text-[24px] max-[500px]:text-[16px] font-extralight text-center max-[500px]:pb-[32px]'>Нема акаунту? <Link href={`${routes.authSignup.path}/continue?ref=${searchParams.get('ref')}`} className='text-purple font-bold'>Зареєструватися</Link></p>
      </div>
    </div>
  );
}

export default AuthSignIn;