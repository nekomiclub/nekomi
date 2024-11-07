'use client'


import * as Menu from 'uvc-menu';
import Link from 'next/link';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import KekwPlayer from '../../../components/KekwPlayer';
import Tooltip from '../../../components/Tooltip';
import { $api } from '../../../components/http';
import { IDubber } from '../../../interfaces/IDubber';
import { ITitle } from '../../../interfaces/ITitle';
import { IUser, IUserLib, TUserLibType } from '../../../interfaces/IUser';
import { IcoCan, IcoExternalLink, IcoInfo, IcoStack, IcoStarRating, IcoUpdate, IcoWatched } from '../../../assets/Icons';
import { IcoClockFilled } from '../../../assets/Clock';
import { IcoFolderAdd } from '../../../assets/Folder';
import { IcoHeartFilled } from '../../../assets/Heart';
import { LoadingImage } from '../../../components/Components';
import { animeGenres, config, genresDescription } from '../../../config';
import { getUTC, parseTitleCountry, parseTitleSeason, parseTitleStatus, parseTitleType } from '../../../components/handlers';
import { routes } from '../../../routes';
import { useAppSelector } from '../../../hooks/redux';

import IndevCat from '../../../assets/img/oopsIndevCat.png';

import './styles.scss'



interface IProps {
  title: ITitle
  dubbers: IDubber[]

  episodesDubbed: number
}



const WatchTitle: NextPage<IProps> = ({ dubbers, title, episodesDubbed }) => {
  const state = useAppSelector(state => state.user);
  const [userLibs, setUserLibs] = useState<IUserLib[]>([])
  const [inLibs, setInLibs] = useState<TUserLibType[]>([])
  const [isAuth, setIsAuth] = useState(false);
  const [isEditor, setIsEditor] = useState(false);

  // Initial
  useEffect(() => {

  }, [])

  // Fetch user libs
  useEffect(() => {
    if (!isAuth) return;

    (async function () {
      // Set user libs
      const { data } = await $api.get<{ user: IUser }>(`/user/${state.id}`, {
        params: {
          detailed: true
        }
      })

      const user = data.user
      setUserLibs(user.libs);
    })()
  }, [isAuth])

  // Define is user authorized
  useEffect(() => {
    setIsAuth(Boolean(state.id))

    const { capabilities } = state;
    if (capabilities.includes('editor') || capabilities.includes('dubber') || capabilities.includes('root')) setIsEditor(true);
  }, [state])

  // Set in which libs title is
  useEffect(() => {
    const tmpInLibs: TUserLibType[] = []

    userLibs.forEach(el => {
      el.titles.includes(title.id) ? tmpInLibs.push(el.type) : null
    })

    setInLibs(tmpInLibs)
  }, [userLibs])

  return (
    <>
      <main className='w-full h-full min-h-screen bg-dark'>
        {/* Top */}
        <div className="wrapper !mb-[60px]">
          {/* Background */}
          <div className='w-full h-full absolute top-0 left-0 z-[1]'>
            <LoadingImage src={title.poster} width='100%' height='100%' loading='eager' />
            <div className='absolute top-0 left-0 w-full h-full z-[2] bg-dark/[.8] backdrop-blur-[200px]'></div>
          </div>

          <div className='relative z-[3] flex flex-row gap-[24px] max-[890px]:!flex-col max-[890px]:items-center pt-[132px] pb-[40px]'>
            <div className='watch-poster_wrapper flex flex-col gap-[8px] max-[472px]:w-full'>
              <div className='watch-poster relative w-[500px] h-[700px] shrink-0 max-[1200px]:w-[350px] max-[1200px]:h-[500px] max-[472px]:w-full'>
                <LoadingImage src={title.poster} width='100%' height='100%' loading='eager' priority parentClassName='rounded-[4px] overflow-hidden' />

                <Link href={title.poster} target='_blank' className='watch-poster_link opacity-0 invisible duration-200 w-full h-full bg-dark/[.4] absolute top-0 left-0 flex justify-center items-center z-[3]'>
                  <Tooltip content='Відкрити повний постер'>
                    <IcoExternalLink width={128} height={128} />
                  </Tooltip>
                </Link>
              </div>

              <Menu.Menu trigger={<ManageLibTrigger isAuth={isAuth} libs={userLibs} inLibs={inLibs} />} menuClassName='!w-full' disabled={!isAuth} className='!w-full bg-darkGrey' triggerClassName='!w-full' align='stretch'>
                <Menu.MenuList className='flex flex-col'>
                  <ManageLib type='favorite' lib={userLibs.find(el => el.type === 'favorite')!} isInLib={inLibs.includes('favorite')} />
                  <ManageLib type='watched' lib={userLibs.find(el => el.type === 'watched')!} isInLib={inLibs.includes('watched')} />
                  <ManageLib type='watching' lib={userLibs.find(el => el.type === 'watching')!} isInLib={inLibs.includes('watching')}
                    hint={state.isTelegramLinked ? 'Ти отримаєш сповіщення про нові серії в телеграм' : 'Підключи телеграм в налаштуваннях щоб отримувати сповіщення про нові серії'} />
                  <ManageLib type='plans' lib={userLibs.find(el => el.type === 'plans')!} isInLib={inLibs.includes('plans')}
                    hint={state.isTelegramLinked ? title.status === 'announcement' && title.year === getUTC().y ? 'Ти отримаєш сповіщення про початок трансляції в телеграм' : undefined : 'Підключи телеграм в налаштуваннях щоб отримувати сповіщення про початок трансляції'} />
                  <ManageLib type='delayed' lib={userLibs.find(el => el.type === 'delayed')!} isInLib={inLibs.includes('delayed')} />
                </Menu.MenuList>
              </Menu.Menu>

              {isEditor && <Link href={`${config.URL.baseURL}${routes.title_patcher.path}/${title.id}`} className={`px-[16px] py-[12px] flex gap-[16px] justify-center rounded-[2px] bg-darkGrey hover:bg-grey duration-200`}>
                <IcoUpdate width={24} height={24} />
                <p className='text-white font-bold uppercase'>оновити</p>
              </Link>}
            </div>

            <div className='flex flex-col gap-[60px] w-full'>
              <div className='flex flex-col gap-[32px]'>
                <div className='flex gap-[16px] justify-between'>
                  <div className='flex flex-col gap-[8px] w-full'>
                    <h1 className='text-white text-[32px] line-clamp-2 font-bold max-[650px]:text-[24px]' title={title.names.ukr}>{title.names.ukr}</h1>
                    <h2 className='text-lightGrey text-[24px] line-clamp-2 max-[650px]:text-[16px]' title={title.names.eng}>{title.names.eng}</h2>
                  </div>

                  <div className='flex items-center gap-[8px] shrink-0'>
                    <IcoStarRating width={24} height={24} fill='#FF464E' />
                    <p className='text-gradientPrimaryFallback font-bold'>{title.rating.IMDB ? title.rating.IMDB.toFixed(1) : '—'}</p>
                  </div>
                </div>

                <div className='flex flex-col gap-[16px]'>
                  <div className='flex flex-col gap-[8px]'>
                    <div className='flex flex-wrap gap-[8px]'>
                      <MetaCard label='епізоди' value={`${episodesDubbed || '—'} / ${title.episodesCount || '—'}`} className='' />
                      <MetaCard label='статус' value={parseTitleStatus(title.status)} className='' />
                      <MetaCard label='рейтниг' specialType='ageRate' value={'NULL'} className='' />
                      <MetaCard label='сезон' value={`${parseTitleSeason(title.season)} ${title.year}`} className='' />
                      <MetaCard label='тип' value={parseTitleType(title.type)} className='' />
                      <MetaCard label='країна' value={parseTitleCountry(title.country)} className='max-[1568px]:col-span-2 max-[1084px]:col-span-1 max-[890px]:col-span-2 max-[726px]:col-span-1' />
                      <MetaCard label='студії' value={title.studios.join(', ')} className='max-[1568px]:col-span-3 max-[1084px]:col-span-3 max-[890px]:col-span-3 max-[726px]:col-span-3 max-[530px]:col-span-2 max-[490px]:col-span-1' />
                    </div>

                    <div className='grid grid-cols-2 max-[1210px]:grid-cols-1 gap-[8px]'>
                      <MetaCard label='жанри' specialType='genres' value={'NULL'} />
                      <MetaCard label='озвучено' specialType='dubbers' value={'NULL'} />
                    </div>
                  </div>

                  {title.details?.length && <div className={`flex gap-[16px] bg-orange/[.2] border border-orange p-[8px] rounded-[2px]`}>
                    <IcoInfo width={24} height={24} />
                    <div className='flex flex-col gap-[8px]'>
                      {title.details.split('\n').map((el, i) => {
                        return <p className='text-white' key={`details-line--${i}`}>{el}</p>
                      })}
                    </div>
                  </div>}
                </div>
              </div>

              {title.description.length ? <div className='flex flex-col gap-[8px]'>
                {title.description.split('\n').map((el, i) => {
                  return <p className='text-white text-[16px]' key={`description-line--${i}`}>{el}</p>
                })}
              </div> : <p className='text-lightGrey text-[16px]'>Опис відсутній</p>}
            </div>
          </div>
        </div>

        {/* Player */}
        {title.episodes.length ? <div className='wrapper h-[800px] relative z-0'>
          <KekwPlayer title={title} dubbers={dubbers} />
        </div> : <div className='w-full bg-darkGrey flex gap-[32px] items-center px-[32px] py-[40px] rounded-[2px] max-[934px]:flex-col'>
          <LoadingImage src={IndevCat.src} width='100%' height='100%' parentClassName='shrink-0 rounded-[4px] overflow-hidden !w-[512px] !h-[512px] max-[1096px]:!w-[386px] max-[1096px]:!h-[386px] max-[560px]:!w-[256px] max-[560px]:!h-[256px]' />

          <div className='flex flex-col gap-[8px] items-center w-full'>
            <p className='text-white text-[40px] font-bold max-[560px]:text-[24px]'>А серій нема</p>
            <p className='text-lightGrey'>Отак бува, та...</p>
          </div>
        </div>}
      </main>
    </>
  );



  function ManageLibTrigger({ isAuth, inLibs }: { isAuth: boolean, libs: IUserLib[], inLibs: TUserLibType[] }) {
    const pathname = usePathname();
    const [label, setLabel] = useState('теки')

    useEffect(() => {
      if (inLibs.includes('watching')) {
        setLabel('переглядаємих')
      } else if (inLibs.includes('watched')) {
        setLabel('переглянутих')
      } else if (inLibs.includes('favorite')) {
        setLabel('улюблених')
      } else if (inLibs.includes('plans')) {
        setLabel('планах')
      } else if (inLibs.includes('custom')) {
        setLabel('своїй теці')
      } else if (inLibs.includes('delayed')) {
        setLabel('відкладених')
      }
    }, [inLibs])

    return (
      <div className={`px-[16px] py-[12px] flex gap-[16px] justify-center rounded-[2px] w-full ${inLibs.length ? 'bg-green' : 'bg-darkGrey'} hover:bg-grey duration-200`}>
        {isAuth ? <>
          <IcoFolderAdd width={24} height={24} />
          <p className='text-white font-bold uppercase'>в {label}</p>
        </> : <Link href={`${config.URL.fkAccount}/login?ref=${config.URL.baseURL}${pathname}`} className='flex gap-[16px]'>
          <IcoFolderAdd width={24} height={24} fill='#747474' />
          <p className='text-lightGrey font-bold uppercase'>увійдіть в акаунт</p>
        </Link>}
      </div>
    )
  }

  function ManageLib({ type, isInLib, lib, hint }: { type: TUserLibType, isInLib: boolean, lib: IUserLib, hint?: string }) {
    const [label, setLabel] = useState('—')

    useEffect(() => {
      switch (type) {
        case 'custom': {
          setLabel(isInLib ? 'Видалити з Своїх тек' : 'Додати в Свої теки')
          break;
        }

        case 'delayed': {
          setLabel(isInLib ? 'Видалити з Відкладених' : 'Додати в Відкладені')
          break;
        }

        case 'favorite': {
          setLabel(isInLib ? 'Видалити з Улюблених' : 'Додати в Улюблені')
          break;
        }

        case 'plans': {
          setLabel(isInLib ? 'Видалити з Планів' : 'Додати в Плани')
          break;
        }

        case 'watched': {
          setLabel(isInLib ? 'Видалити з Переглянутих' : 'Додати в Переглянуті')
          break;
        }

        case 'watching': {
          setLabel(isInLib ? 'Видалити з Переглядаємих' : 'Додати в Переглядаємі')
          break;
        }
      }
    }, [isInLib])

    async function changeLib() {
      try {
        await $api.patch('/user', {
          method: 'editFolderItem',
          titleId: title.id,
          folderId: lib.id
        })

        if (inLibs.includes(type)) {
          setInLibs(inLibs.filter(el => el !== type))
        } else {
          setInLibs([...inLibs, type])
        }
      } catch (e) {
        console.error(e)
      }
    }

    return (
      <Menu.MenuItem className={`flex flex-col gap-[8px] px-[16px] py-[8px] hover:bg-grey focus-visible:bg-grey duration-200 cursor-pointer outline-none ${isInLib ? 'bg-grey' : ''}`} onClick={changeLib}>
        <div className='flex gap-[8px]'>
          {type === 'favorite' && <IcoHeartFilled width={24} height={24} />}
          {type === 'watched' && <IcoWatched width={24} height={24} />}
          {type === 'watching' && <IcoClockFilled width={24} height={24} />}
          {type === 'plans' && <IcoStack width={24} height={24} />}
          {type === 'delayed' && <IcoCan width={24} height={24} />}

          <p className='text-white'>{label}</p>
        </div>

        {hint && <div className='flex gap-[8px] items-center'>
          <IcoInfo width={16} height={16} fill='#747474' className='shrink-0' />
          <p className='text-[12px] text-lightGrey'>{hint}</p>
        </div>}
      </Menu.MenuItem>
    )
  }

  function MetaCard({ label, value, className, specialType }: { label: string, value: string, className?: string, specialType?: 'genres' | 'dubbers' | 'ageRate' }) {
    return (
      <div className={`grow basis-[140px] flex flex-col items-center justify-center gap-[8px] px-[16px] py-[8px] rounded-[4px] bg-darkGrey ${className ? className : ''}`}>
        {specialType ? <>
          {specialType === 'ageRate' && <Tooltip content={title.ageRate === 'G' ? 'Для всіх' : title.ageRate === 'PG' ? 'Для дітей' : title.ageRate === 'PG-13' ? 'Для дітей від 13 років' : title.ageRate === 'R+' ? '18+' : title.ageRate === 'R-17' ? 'Для підлітків від 17 років' : '—'}>
            <p className={`uppercase text-center ${title.ageRate === 'R-17' || title.ageRate === 'R+' || title.ageRate === 'Rx' ? 'font-bold text-gradientPrimaryFallback' : 'text-white'}`}>{title.ageRate}</p>
          </Tooltip>}

          {specialType === 'genres' && <div className='flex gap-[8px] justify-center flex-wrap'>
            {title.genres.length ? <>
              {title.genres.map((genre, i) => {
                let immutableI = i;

                return <Tooltip content={genresDescription.find(el => el.genre === genre)?.description || 'Опис цього жанру ще не написаний.'} key={`genre-${i}`}>
                  <p className='text-white font-bold uppercase'>
                    {animeGenres[genre]}
                    {++immutableI < title.genres.length ? ',' : ''}
                  </p>
                </Tooltip>
              })}
            </> : <p className='text-lightGrey text-center'>—</p>}
          </div>}

          {specialType === 'dubbers' && <div className='flex gap-[8px] justify-center flex-wrap'>
            {dubbers.length ? <>
              {dubbers.map((dubber, i) => {
                let immutableI = i;

                return <Link href={`${config.URL.baseURL}/dub/${dubber.code}`} target='_blank' className='text-white font-bold uppercase' key={`dubber-${dubber.code}`}>
                  {dubber.name}
                  {++immutableI < dubbers.length ? ',' : ''}
                </Link>
              })}
            </> : <p className='text-lightGrey text-center'>—</p>}
          </div>}
        </> : <>
          <p className='text-white uppercase text-center'>{value}</p>
        </>}

        <p className='text-lightGrey text-[12px] uppercase'>{label}</p>
      </div>
    )
  }
}

export default WatchTitle;