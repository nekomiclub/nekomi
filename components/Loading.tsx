import { NextPage } from 'next';
import { Logo } from '../assets/assets';

import '../app/oops/styles.scss'

const Loading: NextPage<{ w?: string, h?: string }> = ({ h, w }) => {
  return (
    <div className={`w-${w || 'screen'} h-${h || 'screen'} bg-dark`}>
      <div className='flex flex-col gap-[80px] items-center justify-center h-full'>
        <Logo className='oops-logo' />
        <h2 className='text-[24px] font-bold text-white'>Завантажуємо...</h2>
      </div>
    </div>
  );
}

export default Loading;