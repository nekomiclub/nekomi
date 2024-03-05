'use client'

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RaceBy } from '@uiball/loaders'


import { ITitle, ITitleEpisodesDub, TAnimeGenres } from '../../../interfaces/ITitle';
import Header from '../../../components/Header';
import { IcoInfo, IcoNewClock, IcoNewStarRating } from '../../../assets/ico/Icos';
import Tooltip from '../../../components/Tooltip';
import { getKeyByValue, parseTitleCountry, parseTitleDubbers, parseTitleStatus, parseTitleType } from '../../../components/handlers';
import { IDubber } from '../../../interfaces/IDubber';
import { animeGenres, config, genresDescription } from '../../../config';
import { LoadingImage } from '../../../components/GeneralComponents';
import Player from '../../../components/Player';
import { IcoSupportBymeacoffe, IcoSupportDiaka, IcoSocialInstagram, IcoSupportMonobank, IcoSupportPatreon, IcoSupportPrivatbank, IcoSocialTelegram, IcoSocialTiktok, IcoSocialYoutube } from '../../../assets/assets';
import Footer from '../../../components/Footer';

interface IProps {
  title: ITitle,
  dubbers: IDubber[] | null,
  totalEps: number
}

const Watch: NextPage<IProps> = ({ title, dubbers, totalEps }) => {
  const [dubber, setDubber] = useState<IDubber>()

  return (
    <>
      <Header />

      <div className='bg-dark'>
        {/* Background */}
        <div className='absolute top-0 left-0 w-full h-screen z-[2]'>
          <div className='block w-full h-full absolute top-0 left-0 z-[2]' style={{ background: 'linear-gradient(180deg, rgba(18, 18, 18, .1), rgba(18, 18, 18, 1))', backdropFilter: 'blur(120px)' }}></div>
          <Image src={title.poster} alt='...' fill loading='eager' className='w-full h-full opacity-0 duration-200' onLoad={e => e.currentTarget.setAttribute('style', 'opacity: 1')} />
        </div>

        <div className='wrapperNew pt-[192px]'>
          {/* Title heading */}
          <div className='flex gap-[32px] z-[3] mb-[80px]'>
            <div className='w-[600px] h-[850px] flex-shrink-0 relative'>
              <LoadingImage src={title.poster} />
            </div>

            <div className='flex flex-col gap-[24px]'>
              <div className='flex flex-col gap-[8px]'>
                <h1 className='text-white text-[40px] font-bold'>{title.names.ukr}</h1>
                <h3 className='text-white text-[32px] font-extralight'>{title.names.eng}</h3>
              </div>

              {/* Description */}
              <div className='flex flex-col gap-[8px]'>
                {title.description.split('\n').map((p, i) => {
                  return <p className='text-white text-[16px]' key={`description-${i}`}>{p}</p>
                })}
              </div>

              {/* Play, save, like btns */}
              <div className='flex gap-[8px]'>

              </div>

              {/* Details */}
              {title.details && <Tooltip content='Деталі тайтлу (переклад посту, спільні релізи, тощо)' className='w-fit'>
                <div className='border border-orange bg-orange/[.2] flex gap-[16px] px-[8px] py-[8px] rounded-[2px] w-fit'>
                  <IcoInfo width={32} height={32} className='flex-shrink-0' />

                  <div className='flex flex-col gap-[8px]'>
                    {title.details.split('\n').map((p, i) => {
                      return <p className='text-white text-[16px]' key={`detail-${i}`}>{p}</p>
                    })}
                  </div>
                </div></Tooltip>}

              <h2 className='text-white text-[32px] font-bold'>Про серіал</h2>

              <ul className='flex flex-col gap-[8px]'>
                <li className='flex'>
                  <p className='text-white text-[24px] min-w-[180px]'>Статус:</p>

                  <div>
                    <p className='text-white text-[24px]'>{parseTitleStatus(title.status)}</p>
                  </div>
                </li>

                <li className='flex'>
                  <p className='text-white text-[24px] min-w-[180px]'>Епізоди:</p>

                  <div>

                    <Tooltip content={totalEps === title.estimatedEps ? 'Тайтл повністю озвучено' : 'Тайтл озвучено неповністю'}>
                      <p className={`text-white text-[24px] ${totalEps === title.estimatedEps ? 'font-bold gradientNew--secondary-text' : ''}`}>
                        {totalEps} / {title.estimatedEps}
                      </p>
                    </Tooltip>
                  </div>
                </li>

                <li className='flex'>
                  <p className='text-white text-[24px] min-w-[180px]'>Жанри:</p>

                  <div className='flex gap-[8px] flex-wrap'>
                    {title.genres.map((genre, i) => {
                      let immutableI = i;

                      return <Tooltip content={genresDescription.find(el => el.genre === genre)?.description || 'Опис цього жанру ще не написаний.'} key={`genre-${i}`}>
                        <Link href={'#'}>
                          {/* LINK FOR GENRE */}
                          <p className='text-white text-[24px] max-[600px]:text-[16px] font-bold'>{animeGenres[genre]}{++immutableI < title.genres.length ? ',' : ''}</p>
                        </Link>
                      </Tooltip>
                    })}
                  </div>
                </li>

                <li className='flex'>
                  <p className='text-white text-[24px] min-w-[180px]'>Рейтинг:</p>

                  <div>
                    <Tooltip content={title.ageRate === 'G' ? 'Для всіх' : title.ageRate === 'PG' ? 'Для дітей' : title.ageRate === 'PG-13' ? 'Для дітей від 13 років' : title.ageRate === 'R+' ? '18+' : title.ageRate === 'R-17' ? 'Для підлітків від 17 років' : 'Як ти отримав цей рейтинг?'}>
                      <p className='text-white text-[24px] max-[600px]:text-[16px] font-bold gradient--primary-text'>{title.ageRate}</p>
                    </Tooltip>
                  </div>
                </li>

                <li className='flex'>
                  <p className='text-white text-[24px] min-w-[180px]'>Тип:</p>

                  <div>
                    <p className='text-white text-[24px]'>{parseTitleType(title.type)}</p>
                  </div>
                </li>

                <li className='flex'>
                  <p className='text-white text-[24px] min-w-[180px]'>Студії:</p>

                  <div className='flex gap-[8px] flex-wrap'>
                    {title.studios.map((studio, i) => {
                      let immutableI = i;

                      // TODO navigate to lib with that studio
                      return <Tooltip content='Це посилання поки що нікуди не веде' key={`stu-${i}`}>
                        <Link href={'#'} target='_blank'>
                          <p className='text-white text-[24px] font-bold'>{studio}{++immutableI < title.studios.length ? ',' : ''}</p>
                        </Link>
                      </Tooltip>
                    })}
                  </div>
                </li>

                <li className='flex'>
                  <p className='text-white text-[24px] min-w-[180px]'>Країна:</p>

                  <div>
                    <p className='text-white text-[24px]'>{parseTitleCountry(title.country)}</p>
                  </div>
                </li>

                <li className='flex'>
                  <p className='text-white text-[24px] min-w-[180px]'>Озвучено:</p>

                  <div className='flex gap-[8px] flex-wrap'>
                    {dubbers && dubbers.map((dub, i) => {
                      let immutableI = i;

                      return <Link href={`${config.services.siteURL}/dub/${dub.code}`} target='_blank' key={`dubber-${dub.code}`}>
                        <p className='text-white text-[24px] font-bold'>{dub.name}{++immutableI < title.genres.length ? ',' : ''}</p>
                      </Link>
                    })}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Player & ep meta */}
          {title.dubs?.length ? <div className='flex items-start gap-[40px]'>
            <div className='flex flex-col gap-[24px] items-center w-full flex-1'>
              <div className='h-[600px] w-full'>
                <Player estimatedEps={title.estimatedEps} titleId={title.id} dubs={title.dubs} currentDubberHandler={setDubber} />
              </div>

              <div>

              </div>
            </div>

            <div className='bg-grey px-[40px] py-[24px] flex flex-col gap-[24px] rounded-[4px]'>
              {dubber ? <>
                <div className='flex items-center gap-[40px]'>
                  <div className='relative w-[128px] h-[128px] rounded-[128px] overflow-hidden'>
                    <LoadingImage src={dubber.thumbURL} />
                    <div className='bg-red-400 w-full h-full block'></div>
                  </div>

                  <div className='flex flex-col gap-[8px] items-center'>
                    <p className='text-white text-[24px]'>Озвучено</p>
                    <p className='text-white text-[24px] font-bold'>{dubber.name}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className='flex gap-[24px] justify-center'>
                  <Tooltip content={`Рейтинг ${dubber.name}`}>
                    <div className='flex items-center gap-[8px]'>
                      <IcoNewStarRating width={24} height={24} gradient='primary' />
                      <p className='gradient--primary-text text-[24px] font-bold'>{dubber.rating}</p>
                    </div>
                  </Tooltip>

                  {/* // TODO */}
                  {/* <Tooltip content={`Відсоток переваги ${dubber.name}`}>
                    <div className='flex items-center gap-[8px]'>
                      <IcoNewClock width={24} height={24} gradient='primary' />
                      <p className='gradient--primary-text text-[24px] font-bold'>0</p>
                    </div>
                  </Tooltip> */}
                </div>

                {/* Support */}
                {(dubber?.support.bymeacoffee || dubber?.support.diaka || dubber?.support.monobank || dubber?.support.patreon || dubber?.support.privatbank) && <div className='flex flex-col items-center gap-[24px]'>
                  <p className='text-white text-[24px] font-bold'>Дяка</p>
                  <ul className='flex items-center gap-[8px]'>
                    {dubber?.support.bymeacoffee && <>
                      <Link href={dubber.support!.bymeacoffee} target='_blank'>
                        <IcoSupportBymeacoffe height={40} width={40} />
                      </Link>
                    </>}
                    {dubber?.support.patreon && <>
                      <Link href={dubber.support!.patreon} target='_blank'>
                        <IcoSupportPatreon height={40} width={40} />
                      </Link>
                    </>}
                    {dubber?.support.privatbank && <>
                      <Link href={dubber.support!.privatbank} target='_blank'>
                        <IcoSupportPrivatbank height={40} width={40} />
                      </Link>
                    </>}
                    {dubber?.support.monobank && <>
                      <Link href={dubber.support!.monobank} target='_blank'>
                        <IcoSupportMonobank height={40} width={40} />
                      </Link>
                    </>}
                    {dubber?.support.diaka && <>
                      <Link href={dubber.support!.diaka} target='_blank'>
                        <IcoSupportDiaka height={40} width={40} />
                      </Link>
                    </>}
                  </ul>
                </div>}

                {/* Socials */}
                {(dubber?.socials.instagram || dubber?.socials.telegram || dubber?.socials.tiktok || dubber?.socials.youtube) && <div className='flex flex-col items-center gap-[24px]'>
                  <p className='text-white text-[24px] font-bold'>Мережі</p>
                  <ul className='flex items-center gap-[8px]'>
                    {dubber?.socials.instagram && <>
                      <Link href={dubber.socials!.instagram} target='_blank'>
                        <IcoSocialInstagram height={40} width={40} />
                      </Link>
                    </>}
                    {dubber?.socials.telegram && <>
                      <Link href={dubber.socials!.telegram} target='_blank'>
                        <IcoSocialTelegram height={40} width={40} />
                      </Link>
                    </>}
                    {dubber?.socials.tiktok && <>
                      <Link href={dubber.socials!.tiktok} target='_blank'>
                        <IcoSocialTiktok height={40} width={40} />
                      </Link>
                    </>}
                    {dubber?.socials.youtube && <>
                      <Link href={dubber.socials!.youtube} target='_blank'>
                        <IcoSocialYoutube height={40} width={40} />
                      </Link>
                    </>}
                  </ul>
                </div>}
              </> : <div className='w-[300px] h-[200px] bg-grey flex justify-center items-center'>
                <RaceBy color='#fff' size={128} />
              </div>}
            </div>
          </div> : <div className='w-full h-[400px] bg-grey flex justify-center items-center rounded-[4px]'>
            <h3 className='text-white text-[24px] font-bold'>Нажаль, для цього тайтлу озвучення не завантажені.</h3>
          </div>}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Watch;