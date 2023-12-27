import { NextPage } from 'next';
import { ReturnToHome } from '../components';
import { OopsRestricted } from '@/../assets/assets';
import Header from '../../../components/Header';

const Restricted: NextPage = (props) => {
  return (
    <div className="bg-dark h-screen">
      <Header />
      <div className="wrapper h-full w-full justify-center items-center">
        <OopsRestricted width={256} height={256} className='oops-restricted mb-[50px]' />

        <div className='flex flex-col gap-[8px] mb-[100px]'>
          <h1 className='uppercase text-[40px] text-white text-center'>ДОСТУП ОБМЕЖЕНИЙ</h1>
        </div>

        <ReturnToHome />
      </div>
    </div>
  );
}

export default Restricted;