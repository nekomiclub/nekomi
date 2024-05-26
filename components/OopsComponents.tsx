import { NextPage } from 'next';

import CatImg from '../assets/oopsIndevCat.png';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from '../routes';
import { IcoGhost, IcoHome, IcoInternet, IcoOffline } from '../assets/Icons';

const ReturnHome = () => {
  return (
    <Link href={routes.home.path} className="p-[16px] rounded-[2px] bg-darkGrey duration-200 hover:bg-gradientPrimaryFallback focus-visible:bg-gradientPrimaryFallback w-fit">
      <IcoHome width={32} height={32} />
    </Link>
  );
}

/** Indev screen */
export const IndevScreen: NextPage = (props) => {
  return (
    <div className="bg-dark min-h-screen h-full w-full flex justify-center items-center">
      <div className="wrapper">
        <div className='flex items-center gap-[32px] max-[832px]:flex-col'>
          <Image src={CatImg.src} alt='Tinkering about...' width={386} height={386} className='max-[832px]:w-[256px] max-[832px]:h-[256px]' />

          <div className='flex flex-col gap-[80px] w-full justify-center items-center max-[832px]:gap-[40px]'>
            <div className='flex flex-col gap-[16px]'>
              <h1 className='text-white text-[40px] text-center max-[832px]:text-[24px]'>Кіт вже думає, що ж тут зробити</h1>
              <p className='text-lightGrey text-center'>Завітайте сюди пізніше</p>
            </div>

            <ReturnHome />
          </div>
        </div>
      </div>
    </div>
  );
}

/** NotFound screen */
export const NotFoundScreen: NextPage = (props) => {
  return (
    <div className="bg-dark min-h-screen h-full w-full flex justify-center items-center">
      <div className="wrapper">
        <div className='flex flex-col gap-[80px] items-center max-[700px]:gap-[40px]'>
          <div className='flex flex-col gap-[16px] items-center'>
            <div className='flex items-center gap-[40px] max-[700px]:gap-[24px]'>
              <p className='text-white text-[256px] max-[700px]:text-[128px]'>4</p>
              <IcoGhost width={256} height={256} className='max-[700px]:w-[128px] max-[700px]:h-[128px]' />
              <p className='text-white text-[256px] max-[700px]:text-[128px]'>4</p>
            </div>

            <h1 className='text-[40px] text-white text-center max-[700px]:text-[24px]'>Отакої, в нас нема такої сторінки</h1>
          </div>

          <ReturnHome />
        </div>
      </div>
    </div>
  );
}

/** Something happened wrong screen
 * @param cause optional error message
 */
export const HappenedWrongScreen: NextPage<{ cause?: string }> = ({ cause }) => {
  return (
    <div className="bg-dark min-h-screen h-full w-full flex justify-center items-center">
      <div className="wrapper">
        <div className='flex flex-col gap-[80px] items-center max-[700px]:gap-[40px]'>
          <div className='flex flex-col gap-[16px] items-center'>
            <div className='flex items-center gap-[24px]'>
              <p className='text-white text-[128px]'>4</p>
              <IcoGhost width={128} height={128} />
              <p className='text-white text-[128px]'>0</p>
            </div>

            <h1 className='text-[40px] text-white text-center max-[700px]:text-[24px]'>Щось пішло не так..</h1>
            <h3 className='text-red text-center'>{cause || 'Ну, причини нема'}</h3>
          </div>

          <ReturnHome />
        </div>
      </div>
    </div>
  );
}

/** Server unavailable screen */
export const ServerUnavailable: NextPage = (props) => {
  return (
    <div className="bg-dark min-h-screen h-full w-full flex justify-center items-center">
      <div className="wrapper">
        <div className='flex flex-col gap-[80px] items-center'>
          <div className='flex flex-col justify-center items-center'>
            <IcoOffline width={256} height={256} className='max-[700px]:w-[128px] max-[700px]:h-[128px]' />
            <div className='flex flex-col gap-[16px]'>
              <h1 className='text-center text-white text-[40px] max-[700px]:text-[24px]'>Здається, з сервером щось не те...</h1>
              <p className='text-center text-white'>
                Якщо в телеграмі <a href="https://t.me/an1meeClub" className='text-purple'>animee</a> нема сповіщення про роботи, створіть будь ласка тікет в <a href="https://discord.gg/UmDfKTpsh5" className='text-purple'>діскорді</a>
              </p>
            </div>
          </div>

          <Link href={routes.polling.path} className='p-[8px] rounded-[2px] bg- bg-darkGrey duration-200 hover:bg-purple focus-visible:bg-purple flex gap-[16px] items-center'>
            <IcoInternet />
            <p className='text-white uppercase'>статус сервісів</p>
          </Link>
        </div>
      </div>
    </div>
  );
}