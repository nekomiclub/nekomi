import './styles.scss';

import Link from 'next/link';

import { NextPage, Metadata, ResolvingMetadata } from 'next';
import axios, { AxiosError } from 'axios';

import Tooltip from '../../../components/Tooltip';

import { config, devMode } from '../../../config';
import { IDubber } from '../../../interfaces/IDubber';
import { routes } from '../../../routes';
import { DubStats, DubCrew } from './clientContent';
import { HappenedWrongScreen, NotFoundScreen } from '../../../components/Components';
import { IcoSocialInstagram, IcoSocialTelegram, IcoSocialTiktok, IcoSocialYoutube } from '../../../assets/Social';
import { IcoSupportByMeACoffee, IcoSupportDiaka, IcoSupportMonobank, IcoSupportPatreon, IcoSupportPrivatbank } from '../../../assets/Support';
import { IRSCProps } from '../../../interfaces/IRSC';
import { getUTC } from '../../../components/handlers';
import { $api } from '../../../components/http';



export async function generateMetadata(
  { params }: IRSCProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const { data } = await $api.get<{ dubber: IDubber }>(`/dubber/${params.code}`);

    return {
      title: `${data.dubber.name} на animee`,
      description: `Сторінка команди озвучення - ${data.dubber.name}`,
      metadataBase: new URL(`https://api.animee.club`),
      keywords: ['anime', 'аніме на українській мові', data.dubber.name],
      openGraph: {
        title: `${data.dubber.name} на animee`,
        description: `Сторінка команди озвучення - ${data.dubber.name}`,
        url: `https://animee.club/dub/${data.dubber.code}`,
        siteName: 'Animee',
        type: 'article',
        images: data.dubber.thumbURL
      }
    }
  } catch (e) {
    return {
      title: `Команда озвучення не знайдена`
    }
  }
}



export default async function RSC({ params }: IRSCProps<{ code: string }>) {
  // @ts-ignore
  let dubberData: IDubber = {};

  try {
    const res = await $api.get<{ dubber: IDubber }>(`/dubber/${params.code}`);
    dubberData = res.data.dubber
  } catch (e) {
    if (e instanceof AxiosError) {
      const code = e.response?.data?.code || 500;

      devMode ? console.error(e.response?.data) : null;

      if (code === 404) {
        return <NotFoundScreen />
      } else if (code === 400) {
        return <HappenedWrongScreen cause={`[${e.code}]: ${e.response?.data?.msg || e.response?.data?.message || 'No message provided'}`} />
      } else {
        return <HappenedWrongScreen cause={e.message} />
      }
    } else {
      const date = `${getUTC().date} ${getUTC().time}`
      const at = `/RSC`;

      console.error(`[${date}]: Server error occured at ${at} - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`);
      return <HappenedWrongScreen cause={`Server error occured at ${at}. See logs at ${date}`} />;
    }
  }

  console.log(dubberData)

  return (
    <div className="w-full min-h-screen h-full bg-dark">
      <div className='py-[200px]'>
        <div className="wrapper h-full items-center justify-center">
          <div className='flex flex-col gap-[32px] relative items-center rounded-[4px] bg-darkGrey px-[32px] py-[24px] w-full'>
            <div className='relative h-[64px] w-[128px]'>
              <img src={dubberData.thumbURL} alt={`${dubberData.name} image`} loading='lazy' className='absolute left-0 -top-[80px] w-[128px] h-[128px] rounded-[4px]' />
            </div>

            {/* Name */}
            <div className='flex flex-col gap-[8px]'>
              <h1 className='text-[24px] text-white font-bold text-center'>{dubberData.name}</h1>
              <h3 className='text-[16px] text-white font-extralight text-center'>@{dubberData.code}</h3>
            </div>

            {/* Stat */}
            <div className='flex gap-[32px] items-center'>
              <DubStats dubberData={dubberData} />
            </div>

            {/* Description * crew */}
            <div className='flex gap-[16px] items-stretch w-full max-[770px]:flex-col-reverse'>
              <div className='w-full'>
                <p className='text-[16px] text-white font-extralight text-justify'>{dubberData.description}</p>
              </div>

              <span className='block w-[1px] rounded-[2px] bg-white/[.2] flex-shrink-0 max-[770px]:w-full max-[770px]:h-[1px]'></span>

              <div className='w-full flex flex-col gap-[8px]'>
                <DubCrew dubberData={dubberData} />
              </div>
            </div>

            {/* Socials & support */}
            <div className='flex gap-[16px] items-stretch w-full'>
              <div className='flex items-center justify-end gap-[16px] w-full'>
                {dubberData.socials?.instagram && <Link href={dubberData.socials.instagram} target='_blank'>
                  <IcoSocialInstagram width={32} height={32} />
                </Link>}
                {dubberData.socials?.youtube && <Link href={dubberData.socials.youtube} target='_blank'>
                  <IcoSocialYoutube width={32} height={32} />
                </Link>}
                {dubberData.socials?.telegram && <Link href={dubberData.socials.telegram} target='_blank'>
                  <IcoSocialTelegram width={32} height={32} />
                </Link>}
                {dubberData.socials?.tiktok && <Link href={dubberData.socials.tiktok} target='_blank'>
                  <IcoSocialTiktok width={32} height={32} />
                </Link>}
              </div>

              <span className='block w-[1px] rounded-[2px] bg-white/[.2] flex-shrink-0'></span>

              <div className='flex items-center gap-[16px] w-full'>
                {dubberData.support?.bymeacoffee && <>
                  <Link href={dubberData.support!.bymeacoffee} target='_blank'>
                    <IcoSupportByMeACoffee height={32} width={32} />
                  </Link>
                </>}

                {dubberData.support?.patreon && <>
                  <Link href={dubberData.support!.patreon} target='_blank'>
                    <IcoSupportPatreon height={32} width={32} />
                  </Link>
                </>}

                {dubberData.support?.privatbank && <>
                  <Link href={dubberData.support!.privatbank} target='_blank'>
                    <IcoSupportPrivatbank height={32} width={32} />
                  </Link>
                </>}

                {dubberData.support?.monobank && <>
                  <Link href={dubberData.support!.monobank} target='_blank'>
                    <IcoSupportMonobank height={32} width={32} />
                  </Link>
                </>}

                {dubberData.support?.diaka && <>
                  <Link href={dubberData.support!.diaka} target='_blank'>
                    <IcoSupportDiaka height={32} width={32} />
                  </Link>
                </>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}