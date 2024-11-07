'use client'



import { NextPage } from 'next';
import { useState } from 'react';

import Tooltip from '../../../components/Tooltip';
import { IDubber } from '../../../interfaces/IDubber';
import { IcoChain } from '../../../assets/Icons';
import { LoadingImage,copyToClipboard } from '../../../components/Components';
import { config } from '../../../config';



interface IProps {
  dubber: IDubber
}


export const DubberHeader: NextPage<IProps> = ({ dubber }) => {
  const [urlCopied, setUrlCopied] = useState(false)

  function copyProfileURL() {
    copyToClipboard(`${config.URL.baseURL}/dub/${dubber.code}`);
    setUrlCopied(true);

    setTimeout(() => {
      setUrlCopied(false);
    }, 3000);
  }

  return (
    <div className='bg-dark'>
      {/* Image */}
      <div className='w-full h-[400px] flex justify-center items-center bg-darkGrey'>
        <p className='text-[60px] gradient--primary-text font-bold uppercase max-[600px]:text-[40px] select-none'>nekomi.club</p>
      </div>

      <div className={`wrapper h-[128px] max-[820px]:h-[270px]`}>
        {/* Profile */}
        <div className={`flex gap-[32px] w-full relative -top-[128px] max-[820px]:flex-col max-[820px]:items-center`}>
          {/* Avatar */}
          <LoadingImage src={dubber.thumbURL} width='256px' height='256px' parentClassName='shrink-0' />

          {/* Container */}
          <div className={`flex justify-between items-center w-full relative top-[64px] max-[820px]:top-0`}>
            {/* User */}
            <div className='flex flex-col gap-[4px]'>
              <p className='text-white text-[32px] font-bold max-[1140px]:text-[24px] break-all' title={dubber.name}>{dubber.name}</p>
              <p className='text-lightGrey' title={dubber.code}>@{dubber.code}</p>
            </div>

            {/* Settings */}
            <div className='flex gap-[8px]'>
              <Tooltip content={urlCopied ? 'Посилання скопійовано!' : 'Копіювати посилання на команду'}>
                <button className={`p-[16px] duration-200 ${urlCopied ? 'bg-green' : 'hover:bg-purple focus-visible:bg-purple'} rounded-[4px] max-[600px]:p-[12px]`} onClick={() => copyProfileURL()}>
                  <IcoChain width={32} height={32} className='max-[600px]:w-[24px] max-[600px]:h-[24px]' />
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export const DubberStatCard: NextPage<{ type: 'titlesDubbed', value: string, label: string }> = ({ type, label, value }) => {
//   return (
//     <div className='px-[32px] py-[16px] rounded-[4px] bg-darkGrey'>
//       {type === 'titlesDubbed' && <IcoMicrophone width={60} height={60} />}

//       <div className='w-full flex flex-col gap-[8px]'>
//         <p className='text-white text-[32px] font-bold'>{value}</p>
//         <p className='text-white'>{label}</p>
//       </div>
//     </div>
//   );
// }

export const DubberLabel: NextPage<{ label: string }> = ({ label }) => {
  return (
    <div className='w-full flex items-center gap-[16px]'>
      <h3 className='text-white text-[32px] font-bold'>{label}</h3>

      <span className='w-full h-[3px] bg-grey'></span>
    </div>
  );
}