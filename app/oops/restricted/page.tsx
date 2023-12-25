import { NextPage } from 'next';
import { ReturnToHome } from '../components';
import { OopsRestricted } from '@/../assets/assets';

const Restricted: NextPage<{ reason?: string }> = (props) => {
  return (
    <div className="bg-dark h-screen">
      <div className="wrapper h-full w-full justify-center items-center">
        <OopsRestricted width={256} height={256} className='oops-restricted mb-[50px]' />

        <div className='flex flex-col gap-[8px] mb-[100px]'>
          <h1 className='uppercase text-[40px] text-white'>ДОСТУП ОБМЕЖЕНИЙ</h1>
          <h3 className='text-[16px] text-white font-extralight'>Причина: {props.reason || 'Не надана'}</h3>
        </div>

        <ReturnToHome />
      </div>
    </div>
  );
}

export default Restricted;