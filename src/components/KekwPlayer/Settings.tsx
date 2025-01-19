import { memo, RefObject, useEffect, useRef, useState } from 'react';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import gsap from 'gsap';

import { IcoArrow, IcoSettings, IcoSpeed } from '~/assets/Icons';
import { IcoPlayerCenter, IcoPlayerQuality, IcoPlayerStretch } from '~/assets/Player';
import { TVideoQuality } from '~/interfaces/Interfaces';
import { ITitleEpisode } from '~/interfaces/ITitle';
import { cn } from '../Components';
import { parseVideoQuality } from '../handlers';


type TSettingPage = 'general' | 'quality' | 'speed';

interface IProps {
  quality: TVideoQuality,
  setQuality: (state: TVideoQuality) => void,
  speed: number,
  epData?: ITitleEpisode,
  isVideoProcessed: boolean,
  videoRef: RefObject<HTMLVideoElement>
  stretch: boolean,
  setStretch: (state: boolean) => void,
  isIdle: boolean
}

interface ISettingsPageProps {
  page: TSettingPage
  visible: boolean
  changePage: (page: TSettingPage) => void
}

interface IGeneralSettingsProps extends ISettingsPageProps {
  stretch: boolean
  setStretch: (val: boolean) => void
  speed: number
  quality: TVideoQuality
}

interface IQualitySettingsProps extends ISettingsPageProps {
  isVideoProcessed: boolean
  episode?: ITitleEpisode
  quality: TVideoQuality,
  setQuality: (state: TVideoQuality) => void,
}

interface ISpeedSettingsProps extends ISettingsPageProps {
  videoRef: RefObject<HTMLVideoElement>
  speed: number
}

interface IReturnButtonProps {
  label: string
  page: TSettingPage
  changePage: (page: TSettingPage) => void
}



export const KekwPlayerSettings = memo<IProps>(function KekwPlayerSettings({ quality, setQuality, speed, epData, isVideoProcessed, videoRef, stretch, setStretch, isIdle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [settingsPage, setSettingsPage] = useState<TSettingPage>('general')

  const settingsRef = useRef<HTMLDivElement>(null)
  const settingsPlaceholderRef = useRef<HTMLDivElement>(null)



  useEffect(() => {
    changePage('general')
  }, [])



  function changePage(page: TSettingPage) {
    const wrapper = settingsRef.current;
    if (!wrapper) return console.debug(`settingsRef is undefined`);

    const placeholder = settingsPlaceholderRef.current;
    if (!placeholder) return console.debug(`settingsPlaceholderRef is undefined`);

    const pageEl = wrapper.querySelector(`#kekwplayer-settings-page--${page}`) as HTMLDivElement | undefined;
    if (!pageEl) return console.error(`#kekwplayer-settings-page--${page} is not found as page el`);

    gsap.to(placeholder, {
      height: `${pageEl.offsetHeight}px`,
      duration: .2
    })

    setSettingsPage(page)
  }



  return <div className="relative max-[460px]:opacity-0 max-[460px]:invisible max-[460px]:absolute" ref={settingsRef}>
    <Menu settings={{ direction: 'top', align: 'end', animation: 'fade' }} gap={24} state={isMenuOpen} stateSetter={setIsMenuOpen} id="kekwplayer-settings_menu">
      <MenuTrigger anchor className={'kekwplayer-settings_button relative w-[32px] h-[32px]'} aria-label={'Налаштування'}>
        <IcoSettings width={40} height={40} className={`kekwplayer-settings`} />
      </MenuTrigger>

      <MenuWrapper className={`!w-[260px] rounded-[2px] bg-dark flex flex-col translate-x-[15%] overflow-hidden`}>
        <div className="w-full h-0" ref={settingsPlaceholderRef}></div>

        <GeneralSettings visible={settingsPage === 'general'} page="general" changePage={changePage} stretch={stretch} setStretch={setStretch} speed={speed} quality={quality} />
        <QualitySettings visible={settingsPage === 'quality'} page="quality" changePage={changePage} isVideoProcessed={isVideoProcessed} episode={epData} quality={quality} setQuality={setQuality} />
        <SpeedSettings visible={settingsPage === 'speed'} page="speed" changePage={changePage} videoRef={videoRef} speed={speed} />
      </MenuWrapper>
    </Menu>
  </div>
})



//* -------------- COMPONENTS



const ReturnButton = ({ label, page, changePage }: IReturnButtonProps) => {
  return <button className={`flex items-center gap-[8px] w-full`} onClick={() => changePage('general')}>
    <IcoArrow width={24} height={24} className="rotate-[90deg] shrink-0" />

    <div className="w-full flex items-center justify-center gap-[8px]">
      {page === 'quality' && <IcoPlayerQuality width={16} height={16} className="shrink-0" />}
      {page === 'speed' && <IcoSpeed width={16} height={16} className="shrink-0" />}

      <p className="text-white">{label}</p>
    </div>
  </button>
}

const GeneralSettings = memo<IGeneralSettingsProps>(function GeneralSettings({ visible, page, changePage, setStretch, stretch, speed, quality }) {
  return <div className={cn('kekwplayer-settings-page ', visible && 'kekwplayer-settings-page--active')} id={`kekwplayer-settings-page--${page}`}>
    <div className="flex flex-col">
      <button className={`flex items-center justify-between kekwplayer-menu_item`} onClick={() => changePage('quality')}>
        <div className="flex items-center gap-[16px]">
          <IcoPlayerQuality width={24} height={24} />
          <p className="text-white">Якість</p>
        </div>

        <div>
          <p className="text-white">{parseVideoQuality(quality)}</p>
        </div>
      </button>

      <button className={`flex items-center gap-[16px] w-full bg-darkGrey kekwplayer-menu_item px-[8px] py-[4px] rounded-[2px]`} onClick={() => setStretch(!stretch)}>
        <div className="relative w-[24px] h-[24px]">
          <IcoPlayerStretch width={24} height={24} className={`absolute top-0 left-0 duration-200 ${stretch ? 'opacity-0 invisible' : 'opacity-100 visible'}`} />
          <IcoPlayerCenter width={24} height={24} className={`absolute top-0 left-0 duration-200 ${stretch ? 'opacity-100 visible' : 'opacity-0 invisible'}`} />
        </div>

        <p className="text-white">{stretch ? 'Центрувати' : 'Розтягнути'} відео</p>
      </button>

      <button className={`flex items-center justify-between w-full bg-darkGrey duration-200 kekwplayer-menu_item px-[8px] py-[4px] rounded-[2px]`} onClick={() => changePage('speed')}>
        <div className="flex items-center gap-[16px]">
          <IcoSpeed width={24} height={24} />
          <p className="text-white">Швидкість</p>
        </div>

        <div>
          <p className="text-white">{speed}х</p>
        </div>
      </button>
    </div>
  </div>
})

const QualitySettings = memo<IQualitySettingsProps>(function QualitySettings({ visible, page, changePage, episode, isVideoProcessed, quality, setQuality }) {
  return <div className={cn('kekwplayer-settings-page', visible && 'kekwplayer-settings-page--active')} id={`kekwplayer-settings-page--${page}`}>
    <ReturnButton label="Якість" page={page} changePage={changePage} />

    <div className="flex flex-col">
      {episode?.qualities.q4k && <SelectQuality to="q4k" />}
      {episode?.qualities.q1080 && <SelectQuality to="q1080" />}
      {episode?.qualities.q720 && <SelectQuality to="q720" />}
      {episode?.qualities.q480 && <SelectQuality to="q480" />}
      {episode?.qualities.q240 && <SelectQuality to="q240" />}
    </div>
  </div>

  function SelectQuality({ to }: { to: TVideoQuality }) {
    return <button className={cn((isVideoProcessed || to === 'q1080') && 'kekwplayer-menu_item', quality === to && 'kekwplayer-menu_item--active')} onClick={() => setQuality(to)} disabled={!isVideoProcessed}>
      <p className={`${isVideoProcessed ? 'text-white' : 'text-lightGrey'}`}>{parseVideoQuality(to)}</p>
    </button>
  }
})

const SpeedSettings = memo<ISpeedSettingsProps>(function SpeedSettings({ visible, page, changePage, videoRef, speed }) {
  function setSpeed(to: number) {
    const video = videoRef.current;
    if (!video) return console.debug(`Video ref is not found at speed settings`);

    video.playbackRate = to;
  }

  return <div className={cn('kekwplayer-settings-page', visible && 'kekwplayer-settings-page--active')} id={`kekwplayer-settings-page--${page}`}>
    <ReturnButton label="Швидкісь" page={page} changePage={changePage} />

    <div className="flex flex-col">
      <SelectSpeed to={0.25} />
      <SelectSpeed to={0.5} />
      <SelectSpeed to={0.75} />
      <SelectSpeed to={1} />
      <SelectSpeed to={1.25} />
      <SelectSpeed to={1.5} />
      <SelectSpeed to={1.75} />
      <SelectSpeed to={2} />
    </div>
  </div>

  function SelectSpeed({ to }: { to: number }) {
    return <button className={cn(`kekwplayer-menu_item`, speed === to && 'kekwplayer-menu_item--active')} onClick={() => setSpeed(to)}>
      <p className="text-white">{to === 1 ? `Нормальна (${to})` : `${to}x`}</p>
    </button>
  }
})