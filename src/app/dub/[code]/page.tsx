import './styles.scss';

import { AxiosError } from 'axios';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import Link from 'next/link';

import { IcoSocialInstagram, IcoSocialTelegram, IcoSocialTiktok, IcoSocialYoutube } from '../../../assets/Social';
import { IcoSupportByMeACoffee, IcoSupportDiaka, IcoSupportMonobank, IcoSupportPatreon, IcoSupportPrivatbank } from '../../../assets/Support';
import { HappenedWrongScreen, NotFoundScreen } from '../../../components/Components';
import { getUTC } from '../../../components/handlers';
import { $api } from '../../../components/http';
import { config, CONSTS, devMode, metaObject } from '../../../config';
import { IDubber } from '../../../interfaces/IDubber';
import { IRSCProps } from '../../../interfaces/IRSC';
import { routes } from '../../../routes';

import { DubberAnswerInvite, DubberHeader, DubberMembers } from './ClientComponents';



export async function generateMetadata(
  props: IRSCProps,
): Promise<Metadata> {
  const params = await props.params;

  try {
    const { data } = await $api.get<{ dubber: IDubber }>(`/dubber/${params.code}`);
    const { dubber } = data;

    const description = dubber.description ?? `Сторінка команди озвучення ${dubber.nameUkr}`

    return metaObject({
      title: dubber.nameUkr,
      keywords: [dubber.nameUkr],
      description,
      openGraph: {
        title: `${dubber.nameUkr} ― nekomi`,
        type: 'profile',
        url: `${config.URL.baseURL}${routes.dubber_profile.path}/${dubber.nameUkr}`,
        images: dubber.avatar,
        locale: 'uk_UA',
        siteName: CONSTS.Domains.nekomi.split('.')[0],
        description,
        username: dubber.slug,
      }
    })
  } catch (e) {
    return metaObject({
      title: 'Команда озвучення не знайдена',
      robots: ['nofollow', 'noindex']
    })
  }
}



export default async function RSC(props: IRSCProps) {
  const params = await props.params;
  const searchParams = await props.searchParams as { invite?: 'accept' | 'decline' };

  // @ts-ignore
  let dubber: IDubber = {};
  let inviteVerified = false;

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

  if (searchParams.invite) {
    const res = await $api.get<{ verified: boolean }>(`/dubber/invite/${dubber.id}`, {
      headers: {
        Cookie: cookies().toString(),
      }
    })

    inviteVerified = res.data.verified;
  }

  return (
    <>
      {inviteVerified && <DubberAnswerInvite dubber={dubber} invite={searchParams.invite!} />}

      <div className="w-full h-full min-h-screen bg-dark">
        <DubberHeader dubber={dubber} />

        <div className="wrapper gap-[40px] !pt-[48px]">
          {/* About */}
          <div className="flex flex-col gap-[24px]">
            <div className="flex items-stretch gap-[24px] justify-center max-[560px]:flex-col">
              {dubber.socials && <div className="w-full flex items-center gap-[24px] justify-end max-[560px]:justify-center">
                {dubber.socials.instagram && <Link href={dubber.socials.instagram} target="_blank"><IcoSocialInstagram width={40} height={40} /></Link>}
                {dubber.socials.telegram && <Link href={dubber.socials.telegram} target="_blank"><IcoSocialTelegram width={40} height={40} /></Link>}
                {dubber.socials.tiktok && <Link href={dubber.socials.tiktok} target="_blank"><IcoSocialTiktok width={40} height={40} /></Link>}
                {dubber.socials.youtube && <Link href={dubber.socials.youtube} target="_blank"><IcoSocialYoutube width={40} height={40} /></Link>}
              </div>}

              {dubber.socials && dubber.support && <span className="w-[2px] bg-grey shrink-0 block h-auto max-[560px]:w-full max-[560px]:h-[3px]"></span>}

              {dubber.support && <div className="w-full flex items-center gap-[24px] max-[560px]:justify-center">
                {dubber.support.bymeacoffee && <Link href={dubber.support.bymeacoffee} target="_blank"><IcoSupportByMeACoffee width={40} height={40} /></Link>}
                {dubber.support.diaka && <Link href={dubber.support.diaka} target="_blank"><IcoSupportDiaka width={40} height={40} /></Link>}
                {dubber.support.monobank && <Link href={dubber.support.monobank} target="_blank"><IcoSupportMonobank width={40} height={40} /></Link>}
                {dubber.support.patreon && <Link href={dubber.support.patreon} target="_blank"><IcoSupportPatreon width={40} height={40} /></Link>}
                {dubber.support.privatbank && <Link href={dubber.support.privatbank} target="_blank"><IcoSupportPrivatbank width={40} height={40} /></Link>}
              </div>}
            </div>

            <p className={`${dubber.description ? 'text-white text-[24px]' : 'text-lightGrey'}`}>{dubber.description || 'Опис відсутній'}</p>
          </div>

          <DubberMembers dubber={dubber} />
        </div>
      </div>
    </>
  )
}