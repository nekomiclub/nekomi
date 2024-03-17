import { NextPage } from 'next';
import { ReturnToHome } from './components';
import Link from 'next/link';
import { IcoServerUnavailable } from '../../assets/ico/Icos';

const ServerUnavailable: NextPage = (props) => {
  return (
    <div className="bg-dark h-screen">
      <div className="wrapper h-full w-full justify-center items-center">
        <IcoServerUnavailable width={256} height={256} className='mb-[50px]' />
        <div className='flex flex-col gap-[8px] mb-[100px] items-center'>
          <h1 className='uppercase text-[40px] text-white text-center'>СЕРВЕР НЕДОСТУПНИЙ</h1>
          <h3 className='text-[24px] text-white uppercase text-center'>СЛІДКУЙТЕ ЗА ОНОВЛЕННЯМИ В <Link className='text-blue' href={'https://t.me/an1meeClub'} target='_blank'>ТЕЛЕГРАМ</Link></h3>
        </div>
      </div>
    </div>
  );
}

export default ServerUnavailable;