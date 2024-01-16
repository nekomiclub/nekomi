'use client'

import { NextPage } from 'next';
import { ITitle } from '../interfaces/ITitle';
import Link from 'next/link';
import { routes } from '../routes';

import '../styles/components/GeneralComponents.scss'
import { HashImage } from 'hash-image';

export const TitleCard: NextPage<{ title: ITitle }> = ({ title }) => {
  return (
    <Link href={routes.watchTitle.path.replace('*', title.code)}>
      <div className='title-card w-full flex flex-col items-center justify-between relative h-[240px] rounded-[4px]'>
        <HashImage src={title.poster} alt="poster" fill parentClassName='absolute top-0 left-0 !w-full !h-full' />

        <div className='w-full flex justify-end relative z-[2]'>
          <div className='px-[4px] py-[2px] rounded-[2px] relative top-[2px] right-[4px] gradient--primary'>
            <p className='text-[12px] text-white font-bold'>{title.rating}</p>
          </div>
        </div>

        <div className='title-card-blur bg-dark/[.2] backdrop-blur-[10px] px-[8px] py-[4px] w-full relative z-[2]'>
          <p className='text-[16px] text-white text-center'>{title.names.ukr || title.code}</p>
        </div>
      </div>
    </Link>
  )
}