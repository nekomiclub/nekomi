import { Metadata, NextPage, ResolvingMetadata } from 'next';
import { IRSCProps } from '../../../interfaces/IRSC';
import { LoadingImage } from '../../../components/Components';

import UnniiiverseAvatar from '../../../assets/img/unniiiverseAvatar.png';
import Link from 'next/link';
import { IcoSocialGithub, IcoSocialTelegram } from '../../../assets/Social';

import './styles.scss';



export function generateMetadata(): Metadata {
  return {
    title: 'Контакти розробників',
    robots: 'none',
    openGraph: {
      title: 'Контакти розробників'
    }
  }
}

const RSC: NextPage<IRSCProps> = () => {
  return (
    <>
      <div className="w-full h-full min-h-screen bg-dark">
        <div className="wrapper justify-center items-center w-full min-h-screen h-full px-[24px]">
          <div className='px-[24px] py-[24px] bg-darkGrey rounded-[4px] flex flex-col gap-[16px] w-full max-w-[600px]'>
            <div className='flex items-center gap-[16px] max-[460px]:flex-col'>
              <LoadingImage src={UnniiiverseAvatar.src} width='128px' height='128px' parentClassName='shrink-0' />

              <div className='w-full flex flex-col items-center gap-[4px]'>
                <h3 className='text-white text-[32px] font-bold uppercase'>mykhailo</h3>
                <p className='text-lightGrey'>@unniiiverse</p>
              </div>
            </div>

            {/* Description */}
            <p className='text-white'>Fullkekw Founder</p>

            {/* Stack */}
            <div className='flex gap-[16px] items-center'>
              <h4 className='text-white text-[24px] font-bold'>Стек</h4>

              <div className='w-full h-[3px] gradient--primary'></div>
            </div>

            <ul className='flex flex-col gap-[8px]'>
              <li>
                <p className='text-white'>Software Engineer</p>
              </li>
            </ul>

            {/* Contacts */}
            <div className='flex gap-[16px] items-center'>
              <h4 className='text-white text-[24px] font-bold'>Контакти</h4>

              <div className='w-full h-[3px] bg-grey'></div>
            </div>

            <ul className='flex items-center gap-[16px] justify-center w-full'>
              <li>
                <Link href={'https://t.me/unniiiverse'} target='_blank'>
                  <IcoSocialTelegram className='contacts-contact' />
                </Link>
              </li>

              <li>
                <Link href={'https://github.com/unniiiverse'} target='_blank'>
                  <IcoSocialGithub className='contacts-contact' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default RSC;