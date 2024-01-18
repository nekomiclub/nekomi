'use client'

import { NextPage } from 'next';
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ITitle, ITitleEpisodesDub } from '@/../interfaces/ITitle';
import $api from '@/../components/http';
import { animeGenres, env, genresDescription } from '@/../config';
import Loading from '../../../components/Loading';
import { IcoSupportInstagram, Play, IcoRating, IcoSupportBymeacoffe, IcoSupportPatreon, IcoSupportPrivatbank, IcoSocialTelegram, IcoSupportTiktok, IcoClock, IcoSocialYoutube } from '../../../assets/assets';
import BorderGradient, { WatchButton } from '../../../components/BorderGradient';
import Link from 'next/link';

import './styles.scss'
import localizeTitle, { getDubberById } from '@/../components/localizeTitle';
import { useAppSelector } from '../../../hooks/redux';
import { IDubber } from '../../../interfaces/IDubber';
import Player from '../../../components/Player';

import SupportDiaka from '../../../assets/watch/supportDiaka.png'
import SupportMonobank from '../../../assets/watch/supportMonobank.png'
import NotFound from '@/oops/404/page';
import { AxiosError } from 'axios';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { routes } from '../../../routes';
import { IcoHeart, IcoWatching } from '../../../assets/ico/Icos';
import Tooltip from '../../../components/Tooltip';
import { IUser } from '../../../interfaces/IUser';
import { IcoFolderAdd } from '../../../assets/ico/folder';
import { IcoFilledCan, IcoFilledClock, IcoFilledHeart, IcoFilledPlans } from '../../../assets/ico/filled';
import { IcoEyeSuccess } from '../../../assets/ico/eye';
import { HashImage } from 'hash-image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

type TUserList = 'watched' | 'delayed' | 'plans' | 'watching' | 'favorite' | 'custom';

function getKeyByValue(object: Object, value: string): string | undefined {
  return Object.keys(object).find(key => object[key] === value);
}

const TitleItem: NextPage = (props) => {
  const { name } = useParams<{ name: string }>()
  const [title, setTitle] = useState<ITitle>()
  const [titleNotFound, setTitleNotFound] = useState(false)
  const [totalEps, setTotalEps] = useState(0)
  const [selectedDub, setSelectedDub] = useState<ITitleEpisodesDub>()
  const [selectedDubber, setSelectedDubber] = useState<IDubber>()
  const state = useAppSelector(state => state.user)
  const [userData, setUserData] = useState(useAppSelector(state => state.user))

  const [isTitleFavorite, setIsTitleFavorite] = useState(false)
  const [isLibsSelectOpen, setIsLibsSelectOpen] = useState(false)
  const [titleInLibs, setTitleInLibs] = useState<TUserList[]>([])

  useEffect(() => {
    (async function () {
      try {
        const res = await $api.get<ITitle>(`${env.apiUrl}/v1/title/${name}`);
        setTitle(localizeTitle(res.data!))

        let maxEps = 0
        res.data.dubs?.forEach(dub => {
          if (dub.eps.length > maxEps) maxEps = dub.eps.length;
        })

        setTotalEps(maxEps)
      } catch (e) {
        setTitleNotFound(true)
      }
    })()
  }, [])

  useEffect(() => {
    if (!state.uid) return;

    setUserData(state)
  }, [state])

  useEffect(() => {
    if (!title) return;

    let tmp: any = title!.details?.split('\n') || []
    if (title.country === 'null') {
      tmp.unshift('Тайтл не оновлений, тому інформація може бути неактуальна та/або неточна. Якщо ви вважаєте цей тайтл важливим, напишіть про це адміністрації.')
    }

    title!.details = tmp.join('\n');

    if (userData.username) {
      $api.get<IUser>(`${env.apiUrl}/v1/user/${userData.username}`).catch(e => console.error(e)).then(res => {
        const user = res!.data;
        const titleInLibs: TUserList[] = []

        if (user.lists.find(el => el.id.match(/^favorite/gi))!.titles.includes(title!.id)) {
          setIsTitleFavorite(true)
        }

        if (user.lists.find(el => el.id.match(/^watched/gi))!.titles.includes(title!.id)) {
          titleInLibs.push('watched')
        }

        if (user.lists.find(el => el.id.match(/^watching/gi))!.titles.includes(title!.id)) {
          titleInLibs.push('watching')
        }

        if (user.lists.find(el => el.id.match(/^plans/gi))!.titles.includes(title!.id)) {
          titleInLibs.push('plans')
        }

        if (user.lists.find(el => el.id.match(/^delayed/gi))!.titles.includes(title!.id)) {
          titleInLibs.push('delayed')
        }

        setTitleInLibs(titleInLibs)
      })
    }
  }, [title])

  useEffect(() => {
    if (!selectedDub?.id) return

    (async function () {
      const res = await $api.get<IDubber>(`${env.apiUrl}/v1/dubber/${selectedDub.id}`)
      setSelectedDubber(res.data)
    })()
  }, [selectedDub])

  const currentDubHandler = (dub: ITitleEpisodesDub) => {
    setSelectedDub(dub)
  }

  function makeTitleFavorite() {
    setIsTitleFavorite(!isTitleFavorite);

    if (userData.username) {
      $api.get<IUser>(`${env.apiUrl}/v1/user/${userData.username}`).catch(e => console.error(e)).then(res => {
        const user = res!.data;

        if (isTitleFavorite) {
          const list = user.lists.find(el => el.id.match(/^favorite/gi))!;
          let tmpTitles = list.titles.filter(el => el !== title!.id);

          list.titles = tmpTitles;
          user.lists.find(el => el.id.match(/^favorite/gi))!.titles = list.titles;
        } else {
          user.lists.find(el => el.id.match(/^favorite/gi))!.titles.push(title!.id)
        }

        $api.patch(`${env.apiUrl}/v1/user`, user)
      })
    }
  }

  function changeInLibrary(type: TUserList) {
    if (userData.username) {
      $api.get<IUser>(`${env.apiUrl}/v1/user/${userData.username}`).catch(e => console.error(e)).then(res => {
        const user = res!.data;

        if (titleInLibs.includes(type)) {
          setTitleInLibs(prev => prev.filter(el => el !== type))
          let tmpTitles = user.lists.find(el => el.id.includes(type))!.titles.filter(el => el !== title!.id)

          user.lists.find(el => el.id.includes(type))!.titles = tmpTitles;
        } else {
          user.lists.find(el => el.id.includes(type))!.titles.push(title!.id)

          setTitleInLibs(prev => [...prev, type])
        }

        $api.patch(`${env.apiUrl}/v1/user`, user)
      })
    }
  }

  return (
    <div className='w-screen min-h-screen h-full bg-dark'>
      {title ? <>
        <Header />
        <div className='h-screen w-full absolute top-0 left-0'>
          <div className='block w-full h-full absolute top-0 left-0 z-[2]' style={{ background: 'linear-gradient(180deg, rgba(18, 18, 18, 0.40) 0%, #121212 90.21%), linear-gradient(227deg, rgba(255, 242, 242, 0.03) 25.7%, rgba(255, 250, 250, 0.07) 94.73%)', backdropFilter: 'blur(35px)' }}></div>
          <HashImage src={title.background} fill alt="..." parentClassName='!z-[1] !h-screen' initialHash='L025[Uj[fQj[j[fQfQfQfQfQfQfQ' />
        </div>

        <div className="wrapper z-[3] gap-[40px] mb-[40px] max-[1140px]:flex-col max-[1140px]:items-center" id='title-about'>
          <div className='h-auto w-fit shrink-0'>
            <HashImage src={title.poster} alt="..." fill parentClassName='min-w-[380px] max-w-[500px] max-[545px]:w-full max-[545px]:min-w-[300px] !w-full rounded-[4px]' />
          </div>

          <div className='flex flex-col justify-between gap-[24px] w-full'>
            <div className='flex flex-col gap-[24px]'>
              <div className='flex justify-between max-[500px]:gap-[16px] max-[500px]:items-center'>
                <div className='flex flex-col gap-[4px] w-full'>
                  <h2 className='text-white text-[40px] font-bold max-[600px]:text-[32px] max-[500px]:text-[24px]'>{title.names?.ukr || title.code}</h2>
                  <h3 className='text-[24px] font-extralight text-white max-[600px]:text-[16px]'>{title.names?.eng || title.code} {userData.roles.includes('editor' || 'root') ? `/ ${title.id}` : null}</h3>
                </div>

                <div className='flex gap-[8px] items-center'>
                  <IcoRating className='max-[500px]:opacity-0' />
                  <p className='gradient--primary-text text-[24px] font-bold'>{title.rating || '-'}</p>
                </div>
              </div>

              <p className='text-white text-[16px]'>{title.description}</p>

              <div className='flex gap-[8px] items-stretch relative w-fit max-[430px]:flex-col'>
                <WatchButton href='#player' />

                <div className='flex items-stretch gap-[8px]'>
                  <BorderGradient h='stretch'>
                    <button className={`h-full watch-btn ${isTitleFavorite ? 'watch-btn--activated' : ''} ${userData.isAuth ? '' : 'watch-btn--disabled'} relative`} disabled={!userData.isAuth} onClick={() => userData.isAuth ? makeTitleFavorite() : null}>
                      <Tooltip content={userData.isAuth ? `${isTitleFavorite ? 'Прибрати вподобання' : 'Вподобати тайтл'}` : 'Ви не можете вподобати тайтл. Спочатку увійдіть в акаунт'}>
                        <div className='px-[16px] py-[12px]'>
                          <div className='w-[40px] h-[40px] relative'>
                            <IcoHeart width={40} height={40} solid className='white' />
                            <IcoHeart width={40} height={40} className='red' />
                          </div>
                        </div>
                      </Tooltip>
                    </button>
                  </BorderGradient>

                  <BorderGradient h='stretch'>
                    <button className={`h-full watch-btn ${userData.isAuth ? '' : 'watch-btn--disabled'} relative`} disabled={!userData.isAuth} onClick={() => userData.isAuth ? setIsLibsSelectOpen(!isLibsSelectOpen) : null}>
                      <Tooltip content={userData.isAuth ? `Додати тайтл в теку` : 'Ви не можете додавати тайтли в теки. Спочатку увійдіть в акаунт'}>
                        <div className='px-[16px] py-[12px]'>
                          <div className='w-[40px] h-[40px] relative'>
                            <IcoFolderAdd width={40} height={40} solid className='white' />
                            <IcoFolderAdd width={40} height={40} className='red' />
                          </div>
                        </div>
                      </Tooltip>
                    </button>
                  </BorderGradient>
                </div>

                <div className={`absolute right-0 top-[80px] max-[430px]:top-[170px] bg-grey rounded-[2px] flex flex-col gap-[8px] py-[8px] duration-200 ${isLibsSelectOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  <button className='flex items-center gap-[8px] duration-200 px-[16px] py-[4px] hover:bg-white/[.2]' onClick={() => makeTitleFavorite()}>
                    <IcoFilledHeart height={24} width={24} className='flex-shrink-0' />
                    <p className='text-[16px] text-white'>{isTitleFavorite ? 'Вилучити з улюблених' : 'Додати в улюблені'}</p>
                  </button>

                  <button className='flex items-center gap-[8px] duration-200 px-[16px] py-[4px] hover:bg-white/[.2]' onClick={() => changeInLibrary('watching')}>
                    <IcoWatching height={24} width={24} className='flex-shrink-0' />
                    <p className='text-[16px] text-white'>{titleInLibs.includes('watching') ? 'Вилучити з переглядаємих' : 'Додати в переглядаємі'}</p>
                  </button>

                  <button className='flex items-center gap-[8px] duration-200 px-[16px] py-[4px] hover:bg-white/[.2]' onClick={() => changeInLibrary('plans')}>
                    <IcoFilledPlans height={24} width={24} className='flex-shrink-0' />
                    <p className='text-[16px] text-white'>{titleInLibs.includes('plans') ? 'Вилучити з планів' : 'Додати в плани'}</p>
                  </button>

                  <button className='flex items-center gap-[8px] duration-200 px-[16px] py-[4px] hover:bg-white/[.2]' onClick={() => changeInLibrary('watched')}>
                    <IcoEyeSuccess height={24} width={24} className='flex-shrink-0' />
                    <p className='text-[16px] text-white'>{titleInLibs.includes('watched') ? 'Вилучити з переглянутих' : 'Додати в переглянуті'}</p>
                  </button>

                  <button className='flex items-center gap-[8px] duration-200 px-[16px] py-[4px] hover:bg-white/[.2]' onClick={() => changeInLibrary('delayed')}>
                    <IcoFilledClock height={24} width={24} className='flex-shrink-0' />
                    <p className='text-[16px] text-white'>{titleInLibs.includes('delayed') ? 'Вилучити з відкладених' : 'Додати в відкладені'}</p>
                  </button>
                </div>
              </div>

              {title.details ? <>
                <div className='px-[24px] py-[16px] rounded-[2px] border border-[#f39c12] bg-[#f1c40f]/[.1] flex flex-col gap-[16px]'>
                  {title.details.split('\n').map(detail => {
                    return <p className='text-white' key={detail}>{detail}</p>
                  })}
                </div>
              </> : null}

              <div className='flex flex-col gap-[24px]'>
                <h3 className='text-[32px] font-bold text-white max-[600px]:text-[24px]'>Про серіал</h3>

                <ul className='flex flex-col gap-[8px]'>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Статус:</p>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-normal'>{title.status}</p>
                  </li>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Епізоди:</p>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-normal'>{totalEps}/{title.estimatedEps}</p>
                  </li>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Жанри:</p>
                    <div className='flex flex-wrap gap-[8px]'>
                      {title.genres.map((genre, i) => {
                        return <Tooltip content={genresDescription.find(el => el.genre === getKeyByValue(animeGenres, genre))?.description || 'Опис цього жанру ще не написаний.'} key={genre}>
                          <Link href={'#'}>
                            {/* //! LINK FOR GENRE */}
                            <p className='text-white text-[24px] max-[600px]:text-[16px] font-bold'>{genre}{++i < title.genres.length ? ',' : ''}</p>
                          </Link>
                        </Tooltip>
                      })}
                    </div>
                  </li>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Рейтинг:</p>
                    <Tooltip content={title.ageRate === 'G' ? 'Для всіх' : title.ageRate === 'PG' ? 'Для дітей' : title.ageRate === 'PG-13' ? 'Для дітей від 13 років' : title.ageRate === 'R+' ? '18+' : title.ageRate === 'R-17' ? 'Для підлітків від 17 років' : 'Як ти отримав цей рейтинг?'}>
                      <p className='text-white text-[24px] max-[600px]:text-[16px] font-bold gradient--primary-text'>{title.ageRate}</p>
                    </Tooltip>
                  </li>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Сезон:</p>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-normal'>{title.season}, {title.year}</p>
                  </li>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Тип:</p>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-normal'>{title.type}</p>
                  </li>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Студія:</p>
                    <div className='flex flex-wrap gap-[8px]'>
                      {title.studios.map((studio, i) => {
                        return <Link href={'#'} key={studio}>
                          {/* //! LINK FOR STUDIO */}
                          <p className='text-white text-[24px] max-[600px]:text-[16px] font-bold'>{studio}{++i < title.studios.length ? ',' : ''}</p>
                        </Link>
                      })}
                    </div>
                  </li>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Країна:</p>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-normal'>{title.country === 'null' ? 'Країне ще не оновлена 😥' : title.country}</p>
                  </li>
                  <li className='flex gap-[40px] max-[600px]:gap-[24px]'>
                    <p className='text-white text-[24px] max-[600px]:text-[16px] font-extralight min-w-[110px]'>Озвучка:</p>
                    <div className='flex flex-wrap gap-[8px]'>
                      {title.dubs?.length ? title.dubs?.map((dub, i) => {
                        return <Link href={`${routes.dubber.path.replace('/*', '')}/${dub.id}`} key={dub.id}>
                          {/* @ts-ignore */}
                          <p className='text-white text-[24px] max-[600px]:text-[16px] font-bold'>{dub.name}{++i < title.dubs.length ? ',' : ''}</p>
                        </Link>
                      }) : <p className='text-white text-[24px] max-[600px]:text-[16px] font-normal'>Озвучки не додані 😥</p>}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-[100px] flex flex-col gap-[40px]'>
          <div className="wrapper gap-[40px] pb-[40px]">
            <div className='flex gap-[32px] items-start max-[1032px]:flex-col max-[1032px]:items-center'>
              {title.dubs!.some(el => el.eps.length !== 0) ? <>
                <SkeletonTheme baseColor='#121212' highlightColor='#181818'>
                  <div className='w-full h-[600px] bg-grey rounded-[2px] mb-[40px]'>
                    <Player dubs={title.dubs || []} currentDubHandler={currentDubHandler} estimatedEps={title.estimatedEps} titleId={title.id} />
                  </div>

                  <div className='bg-grey flex flex-col gap-[32px] rounded-[2px] px-[24px] py-[16px] max-[600px]:w-full'>
                    <div className='flex justify-between items-center gap-[32px] max-[500px]:flex-col'>
                      <div className='block w-[128px] h-[128px] flex-shrink-0'>
                        {selectedDubber ? <>
                          <HashImage src={selectedDubber?.thumbURL} alt="..." fill parentClassName='rounded-[2px] overflow-hidden' />
                        </> : <>
                          <Skeleton height={'100%'} className='rounded-[2px]' />
                        </>}
                      </div>

                      <div className='flex flex-col justify-center items-center px-[32px] w-full'>
                        <p className='text-white text-[24px] font-extralight whitespace-nowrap text-center'>Озвучили</p>
                        {selectedDubber ? <>
                          <Link href={routes.dubber.path.replace('*', selectedDubber!.code)}>
                            <p className='text-white text-[24px] font-bold text-center'>{selectedDubber?.name}</p>
                          </Link>
                        </> : <>
                          <div className='w-full'>
                            <Skeleton count={1} height={24} />
                          </div>
                        </>}
                      </div>
                    </div>

                    <div className='flex justify-center gap-[32px]'>
                      <Tooltip content='Рейтинг команди'>
                        <div className='flex items-center gap-[8px]'>
                          <IcoRating width={24} height={24} />
                          <p className="gradient--primary-text text-[24px] font-bold">
                            {selectedDubber ? selectedDubber?.rating : <Skeleton width={24} />}
                          </p>
                        </div>
                      </Tooltip>

                      <Tooltip content='Перевага команди серед інших'>
                        <div className='flex items-center gap-[8px]'>
                          <IcoClock width={24} height={24} />
                          <p className="gradient--primary-text text-[24px] font-bold">
                            {selectedDubber ? <>
                              -
                            </> : <Skeleton width={24} />}
                          </p>
                        </div>
                      </Tooltip>
                    </div>

                    {selectedDubber?.support.bymeacoffee || selectedDubber?.support.diaka || selectedDubber?.support.monobank || selectedDubber?.support.patreon || selectedDubber?.support.privatbank ? <>
                      <div className='flex items-center flex-col gap-[16px]'>
                        <h4 className='text-white text-[24px] font-extralight'>Дяка</h4>

                        <div className='flex gap-[8px] max-[600px]:gap-[16px] items-center'>
                          {selectedDubber?.support.bymeacoffee && <>
                            <Link href={selectedDubber.support!.bymeacoffee} target='_blank'>
                              <IcoSupportBymeacoffe height={40} width={40} />
                            </Link>
                          </>}

                          {selectedDubber?.support.patreon && <>
                            <Link href={selectedDubber.support!.patreon} target='_blank'>
                              <IcoSupportPatreon height={40} width={40} />
                            </Link>
                          </>}

                          {selectedDubber?.support.privatbank && <>
                            <Link href={selectedDubber.support!.privatbank} target='_blank'>
                              <IcoSupportPrivatbank height={40} width={40} />
                            </Link>
                          </>}

                          {selectedDubber?.support.monobank && <>
                            <Link href={selectedDubber.support!.monobank} target='_blank'>
                              <img src={SupportMonobank.src} alt="monobank" loading='lazy' />
                            </Link>
                          </>}

                          {selectedDubber?.support.diaka && <>
                            <Link href={selectedDubber.support!.diaka} target='_blank'>
                              <img src={SupportDiaka.src} alt="diaka" loading='lazy' />
                            </Link>
                          </>}
                        </div>
                      </div>
                    </> : null}

                    {selectedDubber?.socials.instagram || selectedDubber?.socials.telegram || selectedDubber?.socials.tiktok || selectedDubber?.socials.youtube ? <>
                      <div className='flex items-center flex-col gap-[16px]'>
                        <h4 className='text-white text-[24px] font-extralight'>Мережі</h4>

                        <div className='flex gap-[8px] max-[600px]:gap-[16px] items-center'>
                          {selectedDubber?.socials.instagram && <>
                            <Link href={selectedDubber.socials!.instagram} target='_blank'>
                              <IcoSupportInstagram height={40} width={40} />
                            </Link>
                          </>}

                          {selectedDubber?.socials.telegram && <>
                            <Link href={selectedDubber.socials!.telegram} target='_blank'>
                              <IcoSocialTelegram height={40} width={40} />
                            </Link>
                          </>}

                          {selectedDubber?.socials.tiktok && <>
                            <Link href={selectedDubber.socials!.tiktok} target='_blank'>
                              <IcoSupportTiktok height={40} width={40} />
                            </Link>
                          </>}

                          {selectedDubber?.socials.youtube && <>
                            <Link href={selectedDubber.socials!.youtube} target='_blank'>
                              <IcoSocialYoutube height={40} width={40} />
                            </Link>
                          </>}
                        </div>
                      </div>
                    </> : null}
                  </div>
                </SkeletonTheme>
              </> : <>
                <h3 className='text-[24px] text-white gradient--primary-text font-bold'>Нажаль, озвучок нема</h3>
              </>}
            </div>
          </div>
        </div>
      </> : titleNotFound ? <NotFound /> : <Loading />}

      <Footer />
    </div>
  );
}

export default TitleItem;