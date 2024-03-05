'use client'

import { NextPage } from 'next';
import { ITitle, TAnimeGenres } from '../../../interfaces/ITitle';
import Header from '../../../components/Header';
import { HashImage } from 'hash-image';
import Image from 'next/image';
import { IcoInfo } from '../../../assets/ico/Icos';
import Tooltip from '../../../components/Tooltip';
import { getKeyByValue, parseTitleCountry, parseTitleDubbers, parseTitleStatus, parseTitleType } from '../../../components/handlers';
import { useEffect } from 'react';
import { IDubber } from '../../../interfaces/IDubber';
import Link from 'next/link';
import { animeGenres, config, genresDescription } from '../../../config';
import Skeleton from 'react-loading-skeleton';

interface IProps {
  title: ITitle,
  dubbers: IDubber[] | null,
  totalEps: number
}

const Watch: NextPage<IProps> = ({ title, dubbers, totalEps }) => {
  return (
    <>
      <Header />

      <div className='bg-dark pb-[180px]'>
        {/* Background */}
        <div className='absolute top-0 left-0 w-full h-screen z-[2]'>
          <div className='block w-full h-full absolute top-0 left-0 z-[2]' style={{ background: 'linear-gradient(180deg, rgba(18, 18, 18, .1), rgba(18, 18, 18, 1))', backdropFilter: 'blur(120px)' }}></div>
          <Image src={title.poster} alt='...' fill loading='eager' className='w-full h-full opacity-0 duration-200' onLoad={e => e.currentTarget.setAttribute('style', 'opacity: 1')} />
        </div>

        <div className='wrapperNew pt-[192px]'>
          <div className='flex gap-[32px] z-[3]'>
            <div className='w-[600px] h-[850px] flex-shrink-0 relative'>
              <Image src={title.poster} alt='...' fill loading='eager' className='w-full h-full rounded-[4px] opacity-0 duration-200 relative z-[4]' onLoad={e => e.currentTarget.setAttribute('style', 'opacity: 1')} />
              <Skeleton width={'100%'} height={'100%'} baseColor='#181818' highlightColor='#222' className='absolute top-0 left-0 z-[2]' />
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
        </div>
      </div>
    </>
  );
}

export default Watch;