import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const DeveloperCard: React.FC<{ username: string, name?: string, avatar: string }> = ({ avatar, username, name }) => {
  return <div className='px-[24px] py-[16px] rounded-[4px] bg-grey w-full flex flex-col gap-[24px]'>
    <div className='flex gap-[24px] items-center'>
      <img src={avatar} alt={`${username}'s avatar`} loading='lazy' className='w-[128px] h-[128px] rounded-[2px]' />

      <div className='flex flex-col gap-[8px]'>
        <div className='flex flex-col gap-[4px]'>
          <p className='text-[24px] font-bold text-white'>{name || `@${username}`}</p>
          {name ? <p className='text-[16px] text-white font-extralight'>@{username}</p> : null}
        </div>
      </div>
    </div>

    <div className='flex gap-[24px]'>
      <div className='flex flex-col gap-[16px]'>
        <h3 className='text-[24px] text-white font-bold'>Стек</h3>

        <ul>
          <li className='text-[16px] text-white font-extralight'>Засновник Fullkekw</li>
          <li className='text-[16px] text-white font-extralight'>Full-stack developer</li>
          <li className='text-[16px] text-white font-extralight'>Дизайнер</li>
          <li className='text-[16px] text-white font-extralight'>Контент-мейкер</li>
          <li className='text-[16px] text-white font-extralight'>Редактор</li>
        </ul>
      </div>

      <span className='w-[1px] h-full bg-white/[.2] block'></span>

      <div className='flex flex-col gap-[16px]'>
        <h3 className='text-[24px] text-white font-bold'>Мережі</h3>

        <ul>
          <li className='text-[16px] text-white font-bold gradient--primary-text'><Link href={'https://t.me/unniiiverse'} target='_blank'>Telegram</Link></li>
          <li className='text-[16px] text-white font-bold gradient--primary-text'><Link href={'https://github.com/unniiiverse'} target='_blank'>Github</Link></li>
        </ul>
      </div>
    </div>
  </div>
}

const Contacts: NextPage = (props) => {
  return (
    <div className='w-full min-h-screen h-full bg-dark pt-[120px] flex gap-[120px] flex-col'>
      <Header />

      <div className="wrapper h-full justify-center items-center">
        <h2 className='text-[24px] text-white mb-[24px] text-center'>Контакти розробників animee</h2>

        <div className='flex justify-center gap-[16px] max-w-[1170px] w-full'>
          <div className='flex flex-col gap-[8px] w-fit'>
            <DeveloperCard avatar='https://avatars.githubusercontent.com/u/83117340?v=4' username='unniiiverse' name='Mykhailo' />
          </div>
          {/* 
          <span className='w-[1px] h-full bg-white/[.2] block'></span>

          <div className='flex flex-col gap-[8px] w-full'>

          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contacts;