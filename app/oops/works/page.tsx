import { NextPage } from 'next';
import { OopsTechWorks } from '../../../assets/assets';
import { ReturnToHome } from '../components';
import Link from 'next/link';
import Header from '../../../components/Header';

const TechWorks: NextPage = (props) => {
  return (
    <div className="bg-dark h-screen">
      <Header />
      <div className="wrapper h-full w-full justify-center items-center">
        <OopsTechWorks width={256} height={256} className='mb-[50px]' />
        <div className='flex flex-col gap-[8px] mb-[100px] items-center'>
          <h1 className='uppercase text-[40px] text-white text-center'>ТЕХНІЧНІ РОБОТИ</h1>
          <h3 className='text-[24px] text-white uppercase text-center'>СЛІДКУЙТЕ ЗА ОНОВЛЕННЯМИ В <Link className='text-purple' href={'https://t.me/an1meeClub'} target='_blank'>ТЕЛЕГРАМ</Link></h3>
        </div>
        <ReturnToHome />
      </div>
    </div>
  );
}

export default TechWorks;