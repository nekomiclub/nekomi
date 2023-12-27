'use client'

import { NextPage } from 'next';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react'

import { Logo, Home } from '../../../assets/assets'
import { ReturnToHome } from '../components';

import '../styles.scss'

const Indev: NextPage = (props) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.has('redirected')) {
      console.warn('You are being redirected to indev page due to site`s development status')
      console.warn('You can connect fullkekw (which is owner of the site) in telegram - @unniiiverse')
    }
  }, [])

  return (
    <div className="bg-dark h-screen">
      <div className="wrapper h-full w-full justify-center items-center">
        <Logo width={256} height={256} className='oops-logo mb-[50px]' />
        <h1 className='uppercase text-[40px] text-white mb-[100px] text-center'>МИ ПРАЦЮЄМО НАД ЦИМ</h1>
        <ReturnToHome />
      </div>
    </div>
  );
}

export default Indev;