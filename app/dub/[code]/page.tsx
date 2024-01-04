import { NextPage } from 'next';
import { env } from '../../../config';
import axios from 'axios';
import { IDubber } from '../../../interfaces/IDubber';
import NotFound from '@/oops/404/page';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { IcoRating, IcoClock, IcoSupportInstagram, IcoSocialYoutube, IcoSocialTelegram, IcoSupportTiktok, IcoSupportBymeacoffe, IcoSupportPatreon, IcoSupportPrivatbank } from '../../../assets/assets';
import { IcoCalendar, IcoCrown, IcoLibrary, IcoPen, IcoPeople } from '../../../assets/ico/Icos';
import Link from 'next/link';
import { routes } from '../../../routes';
import { IcoSupportDiaka, IcoSupportMonobank } from '../../../assets/watch';
import BorderGradient from '../../../components/BorderGradient';

import './styles.scss';

const Dubber: NextPage<{
  params: { code: string }
  searchParams: { [key: string]: string | string[] | undefined }
}> = async ({ params, searchParams }) => {
  // @ts-ignore
  let dubberData: IDubber = {};
  let isErrored = false

  try {
    const res = await axios.get<IDubber>(`${env.apiUrl}/v1/dubber/${params.code}`);
    dubberData = res.data
  } catch (e) {
    isErrored = true;
    console.error(e)
  }

  if (!dubberData.code) isErrored = true;

  return (
    <div className="w-full min-h-screen h-full bg-dark">
      {isErrored ? <NotFound /> : null}

      <Header />

      <div className='py-[200px]'>
        <div className="wrapper h-full items-center justify-center">
          <div className='flex flex-col gap-[32px] relative items-center rounded-[4px] bg-grey px-[32px] py-[24px] w-full'>
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
              <div className='flex gap-[8px] items-center'>
                <IcoRating width={24} height={24} />
                <p className='font-bold text-[16px] gradient--primary-text'>{dubberData.rating}</p>
              </div>

              <div className='flex gap-[8px] items-center'>
                <IcoCalendar width={24} height={24} />
                <p className='font-bold text-[16px] gradient--primary-text'>{new Date(dubberData.createdAt).toLocaleString('uk').split(',')[0]}</p>
              </div>

              <div className='flex gap-[8px] items-center'>
                <IcoClock width={24} height={24} />
                <p className='font-bold text-[16px] gradient--primary-text'>-</p>
              </div>
            </div>

            {/* Description * crew */}
            <div className='flex gap-[16px] items-stretch max-[770px]:flex-col-reverse'>
              <div className='w-full'>
                <p className='text-[16px] text-white font-extralight text-justify'>{dubberData.description}</p>
              </div>

              <span className='block w-[1px] rounded-[2px] bg-white/[.2] flex-shrink-0 max-[770px]:w-full max-[770px]:h-[1px]'></span>

              <div className='w-full flex flex-col gap-[8px]'>
                <div className='flex items-center gap-[8px]'>
                  <IcoCrown height={24} width={24} />
                  {dubberData.leader ? <Link href={`${routes.user.path.replace('/*', '')}/${dubberData.leader}`} target='_blank'>
                    <p className='text-[16px] text-white font-bold'>@{dubberData.leader}</p>
                  </Link> : <p className='text-[16px] text-white font-extralight'>Лідер відсутній</p>}
                </div>

                <div className='flex items-center gap-[8px]'>
                  <IcoPen height={24} width={24} />
                  {dubberData.editors?.length ? dubberData.editors.map((editor, i) => {
                    return <Link href={`${routes.user.path.replace('/*', '')}/${editor}`} target='_blank' key={`editor-${editor}`}>
                      <p className='text-[16px] text-white font-bold'>@{editor}{++i < dubberData.editors!.length ? ',' : ''}</p>
                    </Link>
                  }) : <p className='text-[16px] text-white font-extralight'>Редактори відсутні</p>}
                </div>

                <div className='flex items-center gap-[8px]'>
                  <IcoPeople height={24} width={24} />
                  {dubberData.members?.length ? dubberData.members.map((member, i) => {

                    return <Link href={`${routes.user.path.replace('/*', '')}/${member}`} target='_blank' key={`member-${member}`}>
                      <p className='text-[16px] text-white font-bold'>@{member}{++i < dubberData.members!.length ? ',' : ''}</p>
                    </Link>
                  }) : <p className='text-[16px] text-white font-extralight'>Команда відсутня</p>}
                </div>
              </div>
            </div>

            {/* Socials & support */}
            <div className='flex gap-[16px] items-stretch'>
              <div className='flex items-center gap-[16px]'>
                {dubberData.socials.instagram && <Link href={dubberData.socials.instagram} target='_blank'>
                  <IcoSupportInstagram width={32} height={32} />
                </Link>}
                {dubberData.socials.youtube && <Link href={dubberData.socials.youtube} target='_blank'>
                  <IcoSocialYoutube width={32} height={32} />
                </Link>}
                {dubberData.socials.telegram && <Link href={dubberData.socials.telegram} target='_blank'>
                  <IcoSocialTelegram width={32} height={32} />
                </Link>}
                {dubberData.socials.tiktok && <Link href={dubberData.socials.tiktok} target='_blank'>
                  <IcoSupportTiktok width={32} height={32} />
                </Link>}
              </div>

              <span className='block w-[1px] rounded-[2px] bg-white/[.2] flex-shrink-0'></span>

              <div className='flex items-center gap-[16px]'>
                {dubberData?.support.bymeacoffee && <>
                  <Link href={dubberData.support!.bymeacoffee} target='_blank'>
                    <IcoSupportBymeacoffe height={32} width={32} />
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
  );
}

export default Dubber;