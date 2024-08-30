import './styles.scss';

import Link from 'next/link';

import { NextPage, Metadata, ResolvingMetadata } from 'next';
import axios, { AxiosError } from 'axios';

import Tooltip from '../../../components/Tooltip';

import { config, devMode } from '../../../config';
import { IDubber } from '../../../interfaces/IDubber';
import { routes } from '../../../routes';
import { HappenedWrongScreen, NotFoundScreen } from '../../../components/Components';
import { IcoSocialInstagram, IcoSocialTelegram, IcoSocialTiktok, IcoSocialYoutube } from '../../../assets/Social';
import { IcoSupportByMeACoffee, IcoSupportDiaka, IcoSupportMonobank, IcoSupportPatreon, IcoSupportPrivatbank } from '../../../assets/Support';
import { IRSCProps } from '../../../interfaces/IRSC';
import { getUTC } from '../../../components/handlers';
import { $api } from '../../../components/http';
import { DubberHeader } from './ClientComponents';



export async function generateMetadata(
  { params }: IRSCProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const { data } = await $api.get<{ dubber: IDubber }>(`/dubber/${params.code}`);
    const { dubber } = data;

    return {
      title: `${dubber.name} — animee`,
      description: `Сторінка команди озвучення ${dubber.name} на animee`,
      keywords: ['anime', 'аніме на українській мові', dubber.name],
      openGraph: {
        title: `${dubber.name} — animee`,
        description: `Сторінка команди озвучення ${dubber.name} на animee`,
        url: `https://animee.club/dub/${dubber.code}`,
        type: 'article',
        images: dubber.thumbURL
      }
    }
  } catch (e) {
    return {
      title: `Команда озвучення не знайдена`,
      description: ''
    }
  }
}



export default async function RSC({ params }: IRSCProps<{ code: string }>) {
  // @ts-ignore
  let dubber: IDubber = {};

  try {
    const { data } = await $api.get<{ dubber: IDubber }>(`/dubber/${params.code}`);
    dubber = data.dubber
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
    <div className='w-full h-full min-h-screen bg-dark'>
      <DubberHeader dubber={dubber} />

      <div className="wrapper gap-[40px] !pt-[48px]">
        {/* Stats */}

        {/* About */}
        <div className='flex flex-col gap-[24px]'>
          <div className='flex items-stretch gap-[24px] justify-center max-[560px]:flex-col'>
            {dubber.socials && <div className='w-full flex items-center gap-[24px] justify-end max-[560px]:justify-center'>
              {dubber.socials.instagram && <Link href={dubber.socials.instagram} target='_blank'><IcoSocialInstagram width={40} height={40} /></Link>}
              {dubber.socials.telegram && <Link href={dubber.socials.telegram} target='_blank'><IcoSocialTelegram width={40} height={40} /></Link>}
              {dubber.socials.tiktok && <Link href={dubber.socials.tiktok} target='_blank'><IcoSocialTiktok width={40} height={40} /></Link>}
              {dubber.socials.youtube && <Link href={dubber.socials.youtube} target='_blank'><IcoSocialYoutube width={40} height={40} /></Link>}
            </div>}

            {dubber.socials && dubber.support && <span className='w-[2px] bg-grey shrink-0 block h-auto max-[560px]:w-full max-[560px]:h-[3px]'></span>}

            {dubber.support && <div className='w-full flex items-center gap-[24px] max-[560px]:justify-center'>
              {dubber.support.bymeacoffee && <Link href={dubber.support.bymeacoffee} target='_blank'><IcoSupportByMeACoffee width={40} height={40} /></Link>}
              {dubber.support.diaka && <Link href={dubber.support.diaka} target='_blank'><IcoSupportDiaka width={40} height={40} /></Link>}
              {dubber.support.monobank && <Link href={dubber.support.monobank} target='_blank'><IcoSupportMonobank width={40} height={40} /></Link>}
              {dubber.support.patreon && <Link href={dubber.support.patreon} target='_blank'><IcoSupportPatreon width={40} height={40} /></Link>}
              {dubber.support.privatbank && <Link href={dubber.support.privatbank} target='_blank'><IcoSupportPrivatbank width={40} height={40} /></Link>}
            </div>}
          </div>

          <p className={`${dubber.description ? 'text-white text-[24px]' : 'text-lightGrey'}`}>{dubber.description || 'Опис відсутній'}</p>
        </div>
      </div>
    </div>
  )
}