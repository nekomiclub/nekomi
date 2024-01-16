'use client'

import React, { useState, useEffect } from 'react'
import { NextPage } from 'next';
import { GoogleLogo } from '../../assets/assets'

import DefaultImg1 from '../../assets/defaultLargeImages/3.webp'
import Image from 'next/image';
import { Logo } from '../../assets/assets';
import Link from 'next/link';
import { routes } from '../../routes';
import { WithGoogle, WithForm } from '../../components/Auth'
import { HashImage } from 'hash-image';

const AuthSignIn: NextPage = (props) => {
  return (
    <div className='relative h-screen'>
      <div className='fixed top-0 left-0 w-full h-full'>
        <HashImage src={DefaultImg1.src} alt='...' fill parentClassName='!h-full' />
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
          </div>

          <div className='w-full flex gap-[32px] items-center'>
            <span className='block w-full h-[1px] bg-[#A1A1A1]/[.5]'></span>
            <p className='uppercase text-white text-[24px] font-extralight'>ЧИ</p>
            <span className='block w-full h-[1px] bg-[#A1A1A1]/[.5]'></span>
          </div>

          <p className='text-white text-[24px] max-[500px]:text-[16px] font-extralight max-w-[490px] text-center'>Авторизація через юзернейм/почту тимчасово недоступна</p>

          {/* <WithForm method='signin' /> */}
        </div>

        <p className='text-white text-[24px] max-[500px]:text-[16px] font-extralight text-center max-[500px]:pb-[32px]'>Нема акаунту? <Link href={routes.authSignup.path} className='text-purple font-bold'>Зареєструватися</Link></p>
      </div>
    </div>
  );
}

export default AuthSignIn;