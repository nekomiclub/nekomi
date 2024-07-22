'use client'

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RaceBy } from '@uiball/loaders'
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Menu from 'uvc-menu';


import { ITitle } from '../../../interfaces/ITitle';
import Header from '../../../components/Header';
import Tooltip from '../../../components/Tooltip';
import { getKeyByValue, parseTitleCountry, parseTitleSeason, parseTitleStatus, parseTitleType } from '../../../components/handlers';
import { IDubber } from '../../../interfaces/IDubber';
import { animeGenres, config, genresDescription } from '../../../config';
import { LoadingImage, WatchButton } from '../../../components/Components';
import Footer from '../../../components/Footer';
import { useAppSelector } from '../../../hooks/redux';
import { IUser } from '../../../interfaces/IUser';
import { IUserState } from '../../../store/reducers/userSlice';
import KekwPlayer from '../../../components/KekwPlayer';

import './styles.scss';
import { $api } from '../../../components/http';
import { IcoCan, IcoInfo, IcoStack, IcoStarRating, IcoWatched } from '../../../assets/Icons';
import { IcoHeartFilled, IcoHeartOutlined } from '../../../assets/Heart';
import { IcoFolderAdd } from '../../../assets/Folder';
import { IcoClockFilled } from '../../../assets/Clock';
import { IcoSupportByMeACoffee, IcoSupportDiaka, IcoSupportMonobank, IcoSupportPatreon, IcoSupportPrivatbank } from '../../../assets/Support';
import { IcoSocialInstagram, IcoSocialTelegram, IcoSocialTiktok, IcoSocialYoutube } from '../../../assets/Social';

interface IProps {
  title: ITitle,
  dubbers: IDubber[],
  totalEps: number
}

type TitleLists = 'favorite' | 'watched' | 'watching' | 'delayed' | 'plans'

const Watch: NextPage<IProps> = ({ title, dubbers, totalEps }) => {
  const [dubber, setDubber] = useState<IDubber>()
  const [titleLiked, setTitleLiked] = useState(false);
  const [titleLists, setTitleLists] = useState<TitleLists[]>([])
  const [isLibsSelectOpen, setIsLibsSelectOpen] = useState(false)

  const state = useAppSelector(state => state.user)
  const [user, setUser] = useState<IUser>()
  useEffect(() => {
    // Pass if user if not authorized
    if (!state.id) return

    // Define titles that already in user lists
    (async function () {
      try {
        const { data } = await $api.get<{ user: IUser }>(`/user/${state.id}?detailed=true`);
        setUser(data.user);

        let libs: TitleLists[] = []

        data.user.libs.forEach(list => {
          if (list.titles.includes(title.id)) {
            libs.push(list.id.split('-')[0] as TitleLists)

            if (list.id.includes('favorite')) {
              setTitleLiked(true)
            }
          }
        })

        setTitleLists(libs);
      } catch (e) {
        console.error(e)
      }
    })()
  }, [state])

  async function changeTitleList(list: TitleLists) {
    if (!user) {
      console.error(`User is undefined`)
      return
    }

    if (list === 'favorite') {
      setTitleLiked(!titleLiked)
    }

    let libs: TitleLists[] = []

    if (titleLists.includes(list)) {
      libs = titleLists.filter(el => el !== list);
    } else {
      libs = [...titleLists, list];
    }

    try {
      await $api.patch('/user', {
        method: 'editFolderItem',
        titleId: title.id,
        folderId: user.libs.find(el => el.id.includes(list))!.id
      })
    } catch (e) {
      console.error(e)
    }

    setTitleLists(libs);
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

        <div className='wrapper !pt-[192px]'>
          {/* Title heading */}
          <div className='flex max-[980px]:flex-col max-[980px]:items-center gap-[32px] z-[3] mb-[80px]'>
            <LoadingImage src={title.poster} width='650px' height='850px' parentClassName='max-[1260px]:!w-[400px] max-[1260px]:!h-[550px] shrink-0' />

            <div className='flex flex-col gap-[24px] w-full'>
              <div className='flex flex-col gap-[8px] max-[600px]:gap-[0px] w-full'>
                <div className='flex items-center gap-[16px] max-[600px]:flex-col-reverse justify-between w-full max-[600px]:gap-[24px]'>
                  <h1 className='text-white text-[40px] font-bold max-[600px]:text-center max-[600px]:text-[32px] text-ellipsis line-clamp-[3]' title={title.names.ukr}>{title.names.ukr}</h1>

                  <div className='flex items-center gap-[8px]'>
                    <IcoStarRating width={24} height={24} fill='#FF464E' className='max-[600px]:w-[32px] max-[600px]:h-[32px]' />
                    <p className='gradient--primary-text font-bold max-[600px]:text-[24px]'>{title.rating.IMDB || '—'}</p>
                  </div>
                </div>
                <h3 className='text-white text-[32px] font-extralight max-[600px]:text-center max-[600px]:text-[24px] text-ellipsis line-clamp-[2]' title={title.names.eng}>{title.names.eng}</h3>
              </div>

              {/* Description */}
              <div className='flex flex-col gap-[8px]'>
                {title.description.split('\n').map((p, i) => {
                  return <p className='text-white text-[16px]' key={`description-${i}`}>{p}</p>
                })}
              </div>

              {/* Play, save, like btns */}
              <div className='flex gap-[8px] max-[600px]:flex-col'>
                <WatchButton href='#player' gradient='primary' className='max-[600px]:w-full justify-center' />

                <div className='flex gap-[8px]'>
                  <Menu.Menu trigger={
                    <div className={`title-add px-[16px] py-[16px] rounded-[4px] max-[600px]:w-full flex justify-center relative ${state.id ? 'title-add--auth' : 'bg-darkGrey/[.3] title-add--notAuth'} ${titleLiked ? 'title-add--liked' : ''}`} onClick={() => state.id ? setIsLibsSelectOpen(!isLibsSelectOpen) : null}>
                      <Tooltip content={state.id ? `Додати тайтл в теки` : 'Авторизуйтесь, для того щоб додавати тайтли в теки'}>
                        <IcoFolderAdd width={40} height={40} fill='#FF464E' />
                      </Tooltip>
                    </div>
                  } align='center' direction='bottom' className='rounded-[2px] overflow-hidden' closeAfter='outMenu' disabled={!state.id} animation='slide'>
                    <Menu.MenuList className={`flex flex-col bg-darkGrey`}>
                      <MenuEditInLists changeTo='watching' textIn='В Переглядаємі' textOut='З Переглядаємих' />
                      <MenuEditInLists changeTo='favorite' textIn='В Улюблені' textOut='З Улюблених' />
                      <MenuEditInLists changeTo='plans' textIn='В Плани' textOut='З Планів' />
                      <MenuEditInLists changeTo='watched' textIn='В Переглянуті' textOut='З Переглянутих' />
                      <MenuEditInLists changeTo='delayed' textIn='В Відкладені' textOut='З Відкладених' />
                    </Menu.MenuList>
                  </Menu.Menu>

                  <button className={`title-like px-[16px] py-[16px] rounded-[4px] max-[600px]:w-full flex justify-center ${state.id ? 'title-like--auth' : 'bg-darkGrey/[.3] title-like--notAuth'} ${titleLiked ? 'title-like--liked' : ''}`} disabled={!state.id} onClick={() => changeTitleList('favorite')}>
                    <Tooltip content={state.id ? `${titleLiked ? 'Видалити тайтл з улюбленого' : 'Додати тайтл в улюблене'}` : 'Авторизуйтесь, для того щоб додавати тайтли в улюблене'}>
                      <div className='relative'>
                        <IcoHeartOutlined width={40} height={40} className='title-like-ico' fill='#FF464E' />
                        <IcoHeartFilled width={40} height={40} className={`title-like-filled`} fill='#FF464E' />
                      </div>
                    </Tooltip>
                  </button>
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
                    <Tooltip content={(totalEps > 0 && Number(title.episodesCount) > 0) && (totalEps >= Number(title.episodesCount)) ? 'Тайтл повністю озвучено' : 'Тайтл озвучено неповністю'}>
                      <p className={`text-white text-[24px] ${totalEps === Number(title.episodesCount) ? 'font-bold gradient--secondary-text' : ''}`}>
                        {totalEps || '—'} / {Number(title.episodesCount) || '—'}
                      </p>
                    </Tooltip>
                  </div>
                </li>

                <li className='flex max-[600px]:flex-col'>
                  <p className='text-white text-[24px] min-w-[180px]'>Жанри:</p>

                  <div className='flex gap-[8px] flex-wrap'>
                    {title.genres.length ? title.genres?.map((genre, i) => {
                      let immutableI = i;

                      return <p className='text-white text-[24px]' key={`genre-${i}`}>{animeGenres[genre]}{++immutableI < title.genres?.length! ? ',' : ''}</p>
                    }) : <p className='text-white text-[24px]'>—</p>}
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
                  <p className='text-white text-[24px] min-w-[180px]'>Сезон:</p>

                  <div className=''>
                    <p className='text-white text-[24px]'>{parseTitleSeason(title.season)} {title.year}</p>
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
                    {title.studios.length ? title.studios.map((studio, i) => {
                      let immutableI = i;

                      // TODO navigate to lib with that studio
                      return <p className='text-white text-[24px]' key={`stu-${i}`}>{studio}{++immutableI < title.studios.length ? ',' : ''}</p>
                    }) : <p className='text-white text-[24px]'>—</p>}
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
                    {dubbers.length ? dubbers.map((dub, i) => {
                      let immutableI = i;

                      return <Link href={`${config.URL.baseURL}/dub/${dub.code}`} target='_blank' key={`dubber-${dub.code}`}>
                        <p className='text-white text-[24px] font-bold'>{dub.name}{++immutableI < dubbers.length ? ',' : ''}</p>
                      </Link>
                    }) : <p className='text-white text-[24px]'>—</p>}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Player*/}
          {title.episodes.length ? <div className='flex items-start gap-[40px] z-[4] mb-[80px]'>
            <div className='h-[600px] w-full'>
              <KekwPlayer title={title} dubbers={dubbers!} setOutDubber={setDubber} />
            </div>
          </div> : <div className='w-full h-[400px] bg-darkGrey flex justify-center items-center rounded-[4px]'>
            <h3 className='text-white text-[24px] font-bold'>Нажаль, для цього тайтлу озвучення не завантажені.</h3>
          </div>}
        </div>

        <Footer />
      </div>
    </>
  );

  // Components
  /** Menu edit in lists component
   * @param textIn Text to add title in list
   * @param textOut Text to remove title from list
   */
  function MenuEditInLists({ changeTo, textIn, textOut }: { changeTo: TitleLists, textIn: string, textOut: string }) {
    const state = titleLists.includes(changeTo);

    return <Menu.MenuItem onClick={() => changeTitleList(changeTo)} className='shrink-0 flex gap-[16px] px-[8px] py-[4px] duration-200 hover:bg-grey focus-visible:bg-grey cursor-pointer'>
      {changeTo === 'watched' && <IcoWatched width={24} height={24} />}
      {changeTo === 'watching' && <IcoStack width={24} height={24} />}
      {changeTo === 'delayed' && <IcoCan width={24} height={24} />}
      {changeTo === 'favorite' && <IcoHeartFilled width={24} height={24} />}
      {changeTo === 'plans' && <IcoClockFilled width={24} height={24} />}

      <p className='text-white whitespace-nowrap'>{state ? textOut : textIn}</p>
    </Menu.MenuItem>
  }
}

export default Watch;