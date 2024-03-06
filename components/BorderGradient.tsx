import { NextPage } from 'next';
import Link from 'next/link';
import { Play } from '../assets/assets';
import '../app/w/[query]/styles.scss'

/** @deprecated use .gradientNew (See README.md) */
const BorderGradient: NextPage<{ children: any, width?: string, round?: string, className?: string, h?: string, w?: string }> = ({ children, round, width, className, w, h }) => {
  return (
    <div className={`gradient--primary-border ${h ? h : 'h-fit'}  ${w ? w : 'w-fit'}${className || ''}`} style={{ '--w': width || '1px', '--r': round || '4px' } as React.CSSProperties}>
      {children}
    </div>
  );
}

/** @deprecated use NewWatchButton instead */
export const WatchButton: React.FC<{ href: string }> = ({ href }) => {
  return <div className='flex gap-[8px]'>
    <BorderGradient round='2px' className='max-[600px]:w-full'>
      <Link href={href}>
        <button className='watch-btn px-[24px] py-[16px] flex gap-[16px] items-center justify-center rounded-[2px] max-[600px]:w-full'>
          <div className='relative w-[32px] h-[32px]'>
            <Play width={32} height={32} className='absolute red' />
            <Play width={32} height={32} className='absolute white' />
          </div>
          <p className='text-[24px] text-white'>Дивитись</p>
        </button>
      </Link>
    </BorderGradient>
  </div>
}

export default BorderGradient;