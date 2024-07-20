import type { NextPage, Metadata, ResolvingMetadata } from 'next';

import { config, devMode } from '../../../config';
import axios, { AxiosError } from 'axios';
import { IDubber } from '../../../interfaces/IDubber';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { routes } from '../../../routes';

import './styles.scss';
import Tooltip from '../../../components/Tooltip';
import { DubStats, DubCrew } from './clientContent';
import { HappenedWrongScreen, NotFoundScreen } from '../../../components/Components';
import { IcoSocialInstagram, IcoSocialTelegram, IcoSocialTiktok, IcoSocialYoutube } from '../../../assets/Social';
import { IcoSupportByMeACoffee, IcoSupportDiaka, IcoSupportMonobank, IcoSupportPatreon, IcoSupportPrivatbank } from '../../../assets/Support';
import { IRSCProps } from '../../../interfaces/IRSC';
import { getUTC } from '../../../components/handlers';

export async function generateMetadata(
  { params }: IRSCProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const { data } = await axios.get<IDubber>(`${config.URL.apiHTTP}/v1/dubber/${params.code}`);

    return {
      title: `${data.name} на animee`,
      description: `Сторінка команди озвучення - ${data.name}`,
      metadataBase: new URL(`https://api.animee.club`),
      keywords: ['anime', 'аніме на українській мові', data.name],
      openGraph: {
        title: `${data.name} на animee`,
        description: `Сторінка команди озвучення - ${data.name}`,
        url: `https://animee.club/dub/${data.code}`,
        siteName: 'Animee',
        type: 'article',
        images: data.thumbURL
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
    const res = await axios.get<IDubber>(`${config.services.apiURL}/v1/dubber/${params.code}`);
    dubberData = res.data
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

  return (
    <div className="w-full min-h-screen h-full bg-dark">
      <Header />

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
            <div className='flex gap-[16px] items-stretch'>
              <div className='flex items-center gap-[16px]'>
                {dubberData.socials.instagram && <Link href={dubberData.socials.instagram} target='_blank'>
                  <IcoSocialInstagram width={32} height={32} />
                </Link>}
                {dubberData.socials.youtube && <Link href={dubberData.socials.youtube} target='_blank'>
                  <IcoSocialYoutube width={32} height={32} />
                </Link>}
                {dubberData.socials.telegram && <Link href={dubberData.socials.telegram} target='_blank'>
                  <IcoSocialTelegram width={32} height={32} />
                </Link>}
                {dubberData.socials.tiktok && <Link href={dubberData.socials.tiktok} target='_blank'>
                  <IcoSocialTiktok width={32} height={32} />
                </Link>}
              </div>

              <span className='block w-[1px] rounded-[2px] bg-white/[.2] flex-shrink-0'></span>

              <div className='flex items-center gap-[16px]'>
                {dubberData?.support.bymeacoffee && <>
                  <Link href={dubberData.support!.bymeacoffee} target='_blank'>
                    <IcoSupportByMeACoffee height={32} width={32} />
                  </Link>
                </>}

                {dubberData?.support.patreon && <>
                  <Link href={dubberData.support!.patreon} target='_blank'>
                    <IcoSupportPatreon height={32} width={32} />
                  </Link>
                </>}

                {dubberData?.support.privatbank && <>
                  <Link href={dubberData.support!.privatbank} target='_blank'>
                    <IcoSupportPrivatbank height={32} width={32} />
                  </Link>
                </>}

                {dubberData?.support.monobank && <>
                  <Link href={dubberData.support!.monobank} target='_blank'>
                    <IcoSupportMonobank height={32} width={32} />
                  </Link>
                </>}

                {dubberData?.support.diaka && <>
                  <Link href={dubberData.support!.diaka} target='_blank'>
                    <IcoSupportDiaka height={32} width={32} />
                  </Link>
                </>}
              </div>
            </div>

            {/* Their titles in library */}
            {/* <BorderGradient className='dub-allDubbedTitlesBtn w-full px-[24px] py-[8px]'>
      <Link className='w-full flex items-center justify-center gap-[24px]' href={`#`}>
        <div className='relative w-[32px] h-[32px]'>
          <IcoLibrary width={32} height={32} className='dub-btn--gradient' />
          <IcoLibrary width={32} height={32} className='dub-btn--white' />
        </div>
        <p className='text-[16px] text-white font-bold'>Всі озвучені тайтли</p>
      </Link>
    </BorderGradient> */}

            {/* Stats */}
            <div className='flex gap-[16px] items-start w-full'>
              <div className='flex flex-col gap-[8px] w-full'>
                <div className='flex items-center justify-between w-full max-[770px]:flex-col'>
                  <p className='text-[16px] text-white font-extralight'>Всього тайтлів на сайті:</p>
                  <p className='text-[16px] text-white font-bold'>Збираємо статистику...</p>
                </div>

                <div className='flex items-center justify-between w-full max-[770px]:flex-col'>
                  <p className='text-[16px] text-white font-extralight'>Працюють з:</p>
                  <p className='text-[16px] text-white font-bold'>Збираємо статистику...</p>
                </div>

                <div className='flex items-center justify-between w-full max-[770px]:flex-col'>
                  <p className='text-[16px] text-white font-extralight'>Найкращий по переглядам тайтл:</p>
                  <p className='text-[16px] text-white font-bold'>Збираємо статистику...</p>
                </div>

                <div className='flex items-center justify-between w-full max-[770px]:flex-col'>
                  <p className='text-[16px] text-white font-extralight'>Кількість людей:</p>
                  <p className='text-[16px] text-white font-bold'>Збираємо статистику...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}