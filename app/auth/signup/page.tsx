import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from '@/../routes';
import { WithForm, WithGoogle } from '@/../components/Auth';
import { Logo } from '@/../assets/assets';

import DefaultImg1 from '@/../assets/defaultLargeImages/3.webp'

const page: NextPage = (props) => {
  return (
    <>
      {/* Fix with blurhash */}
      <div className='fixed top-0 left-0 w-full h-full'>
        <Image src={DefaultImg1} alt='...' blurDataURL={DefaultImg1.blurDataURL} fill loading='lazy' className='absolute h-full -z-[1]' />
      </div>

      <div className="container">
        <div className='flex flex-col items-center gap-[24px]'>
          <Link href={routes.home.path}>
            <Logo width={128} height={102} />
          </Link>

          <div className='flex flex-col gap-[4px] items-center'>
            <h2 className='text-[32px] font-bold text-white'>Створи акаунт</h2>
            <p className='text-[14px] font-extralight text-white'>Отримай всі переваги від наявності акаунту</p>
          </div>

          <div className='flex flex-col gap-[4px] w-full'>
            <div className='flex flex-col gap-[4px]'>
              <WithGoogle />
              {/* <p className='text-[14px] text-white font-extralight'>Пароль та юзернейм можна змінити в налаштуваннях</p> */}
            </div>
          </div>

          <div className='w-full flex gap-[32px] items-center'>
            <span className='block w-full h-[1px] bg-[#A1A1A1]/[.5]'></span>
            <p className='uppercase text-white text-[24px] font-extralight'>ЧИ</p>
            <span className='block w-full h-[1px] bg-[#A1A1A1]/[.5]'></span>
          </div>

          <p className='text-white text-[24px] font-extralight max-w-[490px] text-center'>Реєстрація через юзернейм/почту тимчасово недоступна</p>

          {/* <WithForm /> */}
        </div>

        <p className='text-white text-[24px] font-extralight'>Є акаунт? <Link href={routes.authSignin.path} className='text-purple font-bold'>Увійти</Link></p>
      </div>
    </>
  );
}

export default page;