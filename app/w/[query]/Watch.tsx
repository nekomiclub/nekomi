'use client'

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RaceBy } from '@uiball/loaders'
import { Swiper, SwiperSlide } from 'swiper/react';


import { ITitle, ITitleEpisodesDub, TAnimeGenres } from '../../../interfaces/ITitle';
import Header from '../../../components/Header';
import { IcoInfo, IcoNewClock, IcoNewHeart, IcoNewHeartFilled, IcoNewPlay, IcoNewStarRating, IcoWatching } from '../../../assets/ico/Icos';
import Tooltip from '../../../components/Tooltip';
import { getKeyByValue, parseTitleCountry, parseTitleDubbers, parseTitleStatus, parseTitleType } from '../../../components/handlers';
import { IDubber } from '../../../interfaces/IDubber';
import { animeGenres, config, genresDescription } from '../../../config';
import { LoadingImage, NewWatchButton } from '../../../components/GeneralComponents';
import Player from '../../../components/Player';
import { IcoSupportBymeacoffe, IcoSupportDiaka, IcoSocialInstagram, IcoSupportMonobank, IcoSupportPatreon, IcoSupportPrivatbank, IcoSocialTelegram, IcoSocialTiktok, IcoSocialYoutube } from '../../../assets/assets';
import Footer from '../../../components/Footer';

import './styles.scss';

import { useAppSelector } from '../../../hooks/redux';
import $api from '../../../components/http';
import { IUser } from '../../../interfaces/IUser';
import { IcoFilledClock, IcoFilledPlans } from '../../../assets/ico/eye/filled';
import { IcoEyeSuccess } from '../../../assets/ico/eye';
import { IcoFolderAdd } from '../../../assets/ico/folder';
import { IUserState } from '../../../store/reducers/userSlice';
import KekwPlayer from '../../../components/KekwPlayer';

interface IProps {
  title: ITitle,
  dubbers: IDubber[] | null,
  totalEps: number
}

type TitleLists = 'favorite' | 'watched' | 'watching' | 'delayed' | 'plans'

const Watch: NextPage<IProps> = ({ title, dubbers, totalEps }) => {
  const [dubber, setDubber] = useState<IDubber>()
  const [titleLiked, setTitleLiked] = useState(false);
  const [titleLists, setTitleLists] = useState<TitleLists[]>([])
  const [isLibsSelectOpen, setIsLibsSelectOpen] = useState(false)

  const user = useAppSelector(state => state.user)

  useEffect(() => {
    if (user.username) {
      (async function () {
        try {
          const { data } = await $api.get<IUser>(`${config.services.apiURL}/v1/user/${user.username}`);
          let lists: TitleLists[] = []

          data.lists.forEach(list => {
            if (list.titles.includes(title.id)) {
              lists.push(list.id.split('-')[0] as TitleLists)
            }
          })

          setTitleLists(lists);
        } catch (e) {
          console.error(e)
        }
      })()
    }
  }, [user])

  function changeTitleList(list: TitleLists) {
    if (list === 'favorite') {
      setTitleLiked(!titleLiked)
    }

    let lists: TitleLists[] = []

    if (titleLists.includes(list)) {
      lists = titleLists.filter(el => el !== list);
    } else {
      lists = [...titleLists, list];
    }

    try {
      $api.get<IUser>(`${config.services.apiURL}/v1/user/${user.username}`).catch(e => console.error(e)).then(res => {
        const user = res!.data;

        user.lists.forEach(list => {
          if (lists.includes(list.id.split('-')[0] as TitleLists)) {
            list.titles.push(title.id)
          } else {
            list.titles = list.titles.filter(el => el !== title.id)
          }

          user.lists = [...user.lists.filter(el => el.id !== list.id), list]
        })

        $api.patch(`${config.services.apiURL}/v1/user`, user)
      })
    } catch (e) {
      console.error(e)
    }

    setTitleLists(lists);
  }

  return (
    <>
      <Header />

      <div className='bg-dark'>
        {/* Background */}
        <div className='absolute top-0 left-0 w-full h-screen z-[2]'>
          <div className='block w-full h-full absolute top-0 left-0 z-[2]' style={{ background: 'linear-gradient(180deg, rgba(18, 18, 18, .1), rgba(18, 18, 18, 1))', backdropFilter: 'blur(120px)' }}></div>
          <Image src={title.poster} alt='...' fill priority loading='eager' className='w-full h-full opacity-0 duration-200' onLoad={e => e.currentTarget.setAttribute('style', 'opacity: 1')} />
        </div>

        <div className='wrapperNew !pt-[192px]'>
          {/* Title heading */}
          <div className='flex max-[980px]:flex-col max-[980px]:items-center gap-[32px] z-[3] mb-[80px]'>
            <div className='w-[600px] h-[850px] max-[1260px]:w-[400px] max-[1260px]:h-[550px] flex-shrink-0 relative'>
              <LoadingImage src={title.poster} />
            </div>

            <div className='flex flex-col gap-[24px] w-full'>
              <div className='flex flex-col gap-[8px] max-[600px]:gap-[0px] w-full'>
                <div className='flex items-center gap-[16px] max-[600px]:flex-col-reverse justify-between w-full max-[600px]:gap-[24px]'>
                  <h1 className='text-white text-[40px] font-bold max-[600px]:text-center max-[600px]:text-[32px]'>{title.names.ukr}</h1>

                  <div className='flex items-center gap-[8px]'>
                    <IcoNewStarRating width={24} height={24} gradient='primary' className='max-[600px]:w-[32px] max-[600px]:h-[32px]' />
                    <p className='gradient--primary-text font-bold max-[600px]:text-[24px]'>{title.rating}</p>
                  </div>
                </div>
                <h3 className='text-white text-[32px] font-extralight max-[600px]:text-center max-[600px]:text-[24px]'>{title.names.eng}</h3>
              </div>

              {/* Description */}
              <div className='flex flex-col gap-[8px]'>
                {title.description.split('\n').map((p, i) => {
                  return <p className='text-white text-[16px]' key={`description-${i}`}>{p}</p>
                })}
              </div>

              {/* Play, save, like btns */}
              <div className='flex gap-[8px] max-[600px]:flex-col'>
                <NewWatchButton href='#player' gradient='primary' className='max-[600px]:w-full justify-center' />

                <div className='flex gap-[8px]'>
                  <AddToFavorite user={user} setTitleLiked={setTitleLiked} titleId={title.id} titleLiked={titleLiked} />

                  <div className='relative flex justify-center items w-full'>
                    <button className={`title-add px-[16px] py-[16px] rounded-[4px] max-[600px]:w-full flex justify-center relative ${user.isAuth ? 'title-add--auth' : 'bg-grey/[.3] title-add--notAuth'} ${titleLiked ? 'title-add--liked' : ''}`} disabled={!user.isAuth} onClick={() => setIsLibsSelectOpen(!isLibsSelectOpen)}>
                      <Tooltip content={user.isAuth ? `Додати тайтл в теки` : 'Авторизуйтесь, для того щоб додавати тайтли в теки'}>
                        <IcoFolderAdd width={40} height={40} />
                      </Tooltip>
                    </button>

                    <div className={`absolute right-0 top-[80px] max-[430px]:top-[170px] bg-grey rounded-[2px] flex flex-col gap-[8px] py-[8px] w-max duration-200 z-[7] ${isLibsSelectOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                      <button className='flex items-center gap-[8px] duration-200 px-[16px] py-[4px] hover:bg-white/[.2]' onClick={() => changeTitleList('favorite')}>
                        <IcoNewHeartFilled height={24} width={24} gradient='primary' className='flex-shrink-0' />
                        <p className='text-[16px] text-white'>{titleLiked ? 'Вилучити з улюблених' : 'Додати в улюблені'}</p>
                      </button>
                      <button className='flex items-center gap-[8px] duration-200 px-[16px] py-[4px] hover:bg-white/[.2]' onClick={() => changeTitleList('watching')}>
                        <IcoWatching height={24} width={24} className='flex-shrink-0' />
                        <p className='text-[16px] text-white'>{titleLists.includes('watching') ? 'Вилучити з переглядаємих' : 'Додати в переглядаємі'}</p>
                      </button>
                      <button className='flex items-center gap-[8px] duration-200 px-[16px] py-[4px] hover:bg-white/[.2]' onClick={() => changeTitleList('plans')}>
                        <IcoFilledPlans height={24} width={24} className='flex-shrink-0' />
                        <p className='text-[16px] text-white'>{titleLists.includes('plans') ? 'Вилучити з планів' : 'Додати в плани'}</p>
                      </button>
                      <button className='flex items-center gap-[8px] duration-200 px-[16px] py-[4px] hover:bg-white/[.2]' onClick={() => changeTitleList('watched')}>
                        <IcoEyeSuccess height={24} width={24} className='flex-shrink-0' />
                        <p className='text-[16px] text-white'>{titleLists.includes('watched') ? 'Вилучити з переглянутих' : 'Додати в переглянуті'}</p>
                      </button>
                      <button className='flex items-center gap-[8px] duration-200 px-[16px] py-[4px] hover:bg-white/[.2]' onClick={() => changeTitleList('delayed')}>
                        <IcoFilledClock height={24} width={24} className='flex-shrink-0' />
                        <p className='text-[16px] text-white'>{titleLists.includes('delayed') ? 'Вилучити з відкладених' : 'Додати в відкладені'}</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              {title.details && <Tooltip content='Деталі тайтлу (переклад посту, спільні релізи, тощо)' className='w-fit max-[980px]:w-full'>
                <div className='border border-orange bg-orange/[.2] flex gap-[16px] px-[8px] py-[8px] rounded-[2px] w-fit max-[980px]:w-full'>
                  <IcoInfo width={32} height={32} className='flex-shrink-0' />

                  <div className='flex flex-col gap-[8px]'>
                    {title.details.split('\n').map((p, i) => {
                      return <p className='text-white text-[16px]' key={`detail-${i}`}>{p}</p>
                    })}
                  </div>
                </div></Tooltip>}

              <h2 className='text-white text-[32px] font-bold'>Про серіал</h2>

              <ul className='flex flex-col gap-[8px] max-[600px]:gap-[16px]'>
                <li className='flex'>
                  <p className='text-white text-[24px] min-w-[180px]'>Статус:</p>

                  <div className=''>
                    <p className='text-white text-[24px]'>{parseTitleStatus(title.status)}</p>
                  </div>
                </li>

                <li className='flex'>
                  <p className='text-white text-[24px] min-w-[180px]'>Епізоди:</p>

                  <div className=''>
                    <Tooltip content={totalEps === title.estimatedEps ? 'Тайтл повністю озвучено' : 'Тайтл озвучено неповністю'}>
                      <p className={`text-white text-[24px] ${totalEps === title.estimatedEps ? 'font-bold gradientNew--secondary-text' : ''}`}>
                        {totalEps} / {title.estimatedEps}
                      </p>
                    </Tooltip>
                  </div>
                </li>

                <li className='flex max-[600px]:flex-col'>
                  <p className='text-white text-[24px] min-w-[180px]'>Жанри:</p>

                  <div className='flex gap-[8px] flex-wrap'>
                    {title.genres.map((genre, i) => {
                      let immutableI = i;

                      return <Tooltip content={genresDescription.find(el => el.genre === genre)?.description || 'Опис цього жанру ще не написаний.'} key={`genre-${i}`}>
                        <Link href={'#'}>
                          {/* LINK FOR GENRE */}
                          <p className='text-white text-[24px] font-bold'>{animeGenres[genre]}{++immutableI < title.genres.length ? ',' : ''}</p>
                        </Link>
                      </Tooltip>
                    })}
                  </div>
                </li>

                <li className='flex'>
                  <p className='text-white text-[24px] min-w-[180px]'>Рейтинг:</p>

                  <div className=''>
                    <Tooltip content={title.ageRate === 'G' ? 'Для всіх' : title.ageRate === 'PG' ? 'Для дітей' : title.ageRate === 'PG-13' ? 'Для дітей від 13 років' : title.ageRate === 'R+' ? '18+' : title.ageRate === 'R-17' ? 'Для підлітків від 17 років' : 'Як ти отримав цей рейтинг?'}>
                      <p className='text-white text-[24px] font-bold gradient--primary-text'>{title.ageRate}</p>
                    </Tooltip>
                  </div>
                </li>

                <li className='flex'>
                  <p className='text-white text-[24px] min-w-[180px]'>Тип:</p>

                  <div className=''>
                    <p className='text-white text-[24px]'>{parseTitleType(title.type)}</p>
                  </div>
                </li>

                <li className='flex max-[600px]:flex-col'>
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

                  <div className=''>
                    <p className='text-white text-[24px]'>{parseTitleCountry(title.country)}</p>
                  </div>
                </li>

                <li className='flex max-[600px]:flex-col'>
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
          {title.dubs?.length ? <div className='flex items-start max-[1020px]:flex-col gap-[40px] z-[4] mb-[80px]'>
            <div className='flex flex-col gap-[24px] items-center w-full'>
              <div className='h-[600px] w-full'>
                {/* <Player estimatedEps={title.estimatedEps} titleId={title.id} dubs={title.dubs} currentDubberHandler={setDubber} /> */}
                <KekwPlayer title={title} dubs={dubbers!} />
              </div>
            </div>

            {/* <DubberDetails dubber={dubber} /> */}
          </div> : <div className='w-full h-[400px] bg-grey flex justify-center items-center rounded-[4px]'>
            <h3 className='text-white text-[24px] font-bold'>Нажаль, для цього тайтлу озвучення не завантажені.</h3>
          </div>}

          {/* Linked */}
          <div>

          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export const AddToFavorite: NextPage<{ user: IUserState, titleLiked: boolean, setTitleLiked: (state: boolean) => void, titleId: string }> = ({ user, titleLiked, setTitleLiked, titleId }) => {
  async function changeTitleLiked() {
    setTitleLiked(!titleLiked)

    if (user.username) {
      try {
        $api.get<IUser>(`${config.services.apiURL}/v1/user/${user.username}`).catch(e => console.error(e)).then(res => {
          const user = res!.data;

          if (titleLiked) {
            const list = user.lists.find(el => el.id.match(/^favorite/gi))!;
            let tmpTitles = list.titles.filter(el => el !== titleId);

            list.titles = tmpTitles;
            user.lists.find(el => el.id.match(/^favorite/gi))!.titles = list.titles;
          } else {
            user.lists.find(el => el.id.match(/^favorite/gi))!.titles.push(titleId)
          }

          $api.patch(`${config.services.apiURL}/v1/user`, user)
        })
      } catch (e) {
        console.error(e)
      }
    }
  }

  return (
    <button className={`title-like px-[16px] py-[16px] rounded-[4px] max-[600px]:w-full flex justify-center ${user.isAuth ? 'title-like--auth' : 'bg-grey/[.3] title-like--notAuth'} ${titleLiked ? 'title-like--liked' : ''}`} disabled={!user.isAuth} onClick={() => changeTitleLiked()}>
      <Tooltip content={user.isAuth ? `${titleLiked ? 'Видалити тайтл з улюбленого' : 'Додати тайтл в улюблене'}` : 'Авторизуйтесь, для того щоб додавати тайтли в улюблене'}>
        <div className='relative'>
          <IcoNewHeart width={40} height={40} className='title-like-ico' gradient='primary' />
          <IcoNewHeartFilled width={40} height={40} className={`title-like-filled`} gradient='primary' />
        </div>
      </Tooltip>
    </button>
  )
}

const DubberDetails: NextPage<{ dubber?: IDubber, className?: string }> = ({ dubber, className }) => {
  return (
    <div className={`bg-grey px-[40px] py-[24px] flex flex-col gap-[24px] rounded-[4px] max-[600px]:w-full ${className ? className : ''}`}>
      {dubber ? <>
        <div className='flex items-center max-[600px]:flex-col gap-[40px]'>
          <div className='relative w-[128px] h-[128px] rounded-[128px] overflow-hidden flex-shrink-0'>
            <LoadingImage src={dubber.thumbURL} />
          </div>

          <div className='flex flex-col gap-[8px] items-center'>
            <p className='text-white text-[24px]'>Озвучено</p>
            <p className='text-white text-[24px] font-bold text-center whitespace-nowrap'>{dubber.name}</p>
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
  )
}

export default Watch;