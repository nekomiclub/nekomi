import { FC, useContext, useEffect, useId, useMemo, useState } from 'react';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import axios from 'axios';
import { MaterialSymbol, SymbolCodepoints } from 'react-material-symbols';

import { EpisodeQualityType } from '~/interfaces/Interfaces';
import { cn } from '../Components';
import { parseVideoQuality } from '../handlers';
import { NotifySuccess } from '../UI/NotifyToast';
import Tooltip from '../UI/Tooltip';

import { GetNekoplayerPreferences, SetNekoplayerPreferences } from './Nekoplayer';
import { NekoplayerContext, NekoplayerContextProps } from './NPTypes';



type SettingsMenuType = 'general' | 'quality' | 'speed' | 'settings';

interface SettingsProps {
  quality: EpisodeQualityType,
  setQuality: (state: EpisodeQualityType) => void,

  speed: number,
  isIdle: boolean

  stretch: boolean,
  setStretch: (state: boolean) => void,
}

interface SettingsButtonProps {
  menu: SettingsMenuType
  setMenu(val: SettingsMenuType): void
  title: string
  icon: SymbolCodepoints

  value?: string
  onclick?(): void
}

interface SettingsMenuProps {
  children: React.ReactNode | React.ReactNode[]
  menu: SettingsMenuType

  className?: string
}

interface SettingsBackProps {
  title: string
  icon: SymbolCodepoints

  setMenu(val: SettingsMenuType): void
}

interface SettingsSpeedSelectProps {
  amplifier: number

  setSpeed(val: number): void
  currentSpeed: number
}

interface SettingsQualitySelectProps {
  quality: EpisodeQualityType
  setQuality(val: EpisodeQualityType): void

  currentQuality: EpisodeQualityType
}



const NPSettings: FC<SettingsProps> = ({ quality, setQuality, speed, stretch, setStretch, isIdle }) => {
  const { videoRef, episode, DeleteWatchProgress, anime } = useContext(NekoplayerContext) as NekoplayerContextProps
  const menuId = useId().replaceAll(':', '');

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menu, setMenu] = useState<SettingsMenuType>('general')
  const [saveProgress, setSaveProgress] = useState(true);



  // Close menu on user idle
  useEffect(() => {
    if (isIdle) setIsMenuOpen(false)
  }, [isIdle])

  // Reset menu on close
  useEffect(() => {
    if (isMenuOpen) return

    setTimeout(() => {
      setMenu('general')
    }, 500);
  }, [isMenuOpen])

  useEffect(() => {
    calcMenusPosition()
  }, [menu])

  // Fetch prefereces
  useEffect(() => {
    const prefArray = GetNekoplayerPreferences()
    const preferences = prefArray.find(el => el.uuid === anime.uuid);
    if (!preferences) return

    setSaveProgress(Boolean(preferences.saveProgress))
  }, [])



  function calcMenusPosition() {
    const wrapper = document.querySelector('.nekoplayer-settings-menu_wrapper') as HTMLDivElement | undefined;
    if (!wrapper) return

    const menus = wrapper.querySelectorAll(`.nekoplayer-settings-menu`) as NodeListOf<HTMLDivElement> | undefined;
    const activeMenu = wrapper.querySelector(`.nekoplayer-settings-menu_${menu}`) as HTMLDivElement | undefined;
    if (!activeMenu || !menus?.length) return

    wrapper.style.height = `${activeMenu.offsetHeight}px`;

    menus.forEach(menu => {
      menu.style.translate = '105%'
      menu.style.opacity = '0'
    })

    activeMenu.style.translate = '0';
    activeMenu.style.opacity = '1';
  }

  function setSpeed(amplifier: number) {
    const video = videoRef.current;
    if (!video) return

    video.playbackRate = amplifier;
  }

  function toggleSaveProgress() {
    const to = !saveProgress;

    const prefArray = GetNekoplayerPreferences()
    const preferences = prefArray.find(el => el.uuid === anime.uuid) ?? {
      uuid: anime.uuid,
      saveProgress: true
    };

    preferences.saveProgress = to

    setSaveProgress(to)
    SetNekoplayerPreferences(preferences);

    NotifySuccess({ title: 'Налаштування оновлені', message: to ? 'Ми почнемо зберігати твій прогрес перегляду!' : 'Ми перестанемо збирати твій прогрес перегляду :(' })
    console.debug(`[nekoplayer]: Set settings:saveProgress to ${to}`)
  }



  return <div className="relative max-[460px]:opacity-0 max-[460px]:invisible max-[460px]:absolute">
    <Menu className="h-[32px]" settings={{ direction: 'top', align: 'end', animation: 'slide' }} gap={24} state={isMenuOpen} stateSetter={setIsMenuOpen} id={menuId}>
      <MenuTrigger anchor className={'kekwplayer-settings_button relative w-[32px] h-[32px]'} aria-label={'Налаштування'}>
        <MaterialSymbol className={cn(`kekwplayer-settings text-white`)} icon="settings" size={32} />
      </MenuTrigger>

      <MenuWrapper className={`nekoplayer-settings-menu_wrapper !w-[300px] rounded-[2px] bg-dark-primary flex flex-col border border-dark-light overflow-x-hidden overflow-y-auto max-h-[500px] !translate-x-[30px] duration-200`}>
        {/* General */}
        <SettingsMenu menu="general">
          <SettingsButton title="Якість" icon="hd" menu="quality" setMenu={setMenu} value={parseVideoQuality(quality)} />
          <SettingsButton title="Швидкість" icon="speed" menu="speed" setMenu={setMenu} value={`${speed}x`} />
          <SettingsButton title="Налаштування" icon="settings" menu="settings" setMenu={setMenu} />
        </SettingsMenu>

        {/* Quality */}
        <SettingsMenu menu="quality">
          <SettingsBack icon="hd" title="Якість" setMenu={setMenu} />

          {episode.qualities.q4k && <SettingsQualitySelect quality="q4k" currentQuality={quality} setQuality={setQuality} />}
          <SettingsQualitySelect quality="q1080" currentQuality={quality} setQuality={setQuality} />
          {episode.qualities.q720 && <SettingsQualitySelect quality="q720" currentQuality={quality} setQuality={setQuality} />}
          {episode.qualities.q480 && <SettingsQualitySelect quality="q480" currentQuality={quality} setQuality={setQuality} />}
          {episode.qualities.q240 && <SettingsQualitySelect quality="q240" currentQuality={quality} setQuality={setQuality} />}
        </SettingsMenu>

        {/* Speed */}
        <SettingsMenu menu="speed">
          <SettingsBack icon="speed" title="Швидкість" setMenu={setMenu} />

          <SettingsSpeedSelect amplifier={0.25} currentSpeed={speed} setSpeed={setSpeed} />
          <SettingsSpeedSelect amplifier={0.5} currentSpeed={speed} setSpeed={setSpeed} />
          <SettingsSpeedSelect amplifier={0.75} currentSpeed={speed} setSpeed={setSpeed} />
          <SettingsSpeedSelect amplifier={1} currentSpeed={speed} setSpeed={setSpeed} />
          <SettingsSpeedSelect amplifier={1.25} currentSpeed={speed} setSpeed={setSpeed} />
          <SettingsSpeedSelect amplifier={1.5} currentSpeed={speed} setSpeed={setSpeed} />
          <SettingsSpeedSelect amplifier={1.75} currentSpeed={speed} setSpeed={setSpeed} />
          <SettingsSpeedSelect amplifier={2} currentSpeed={speed} setSpeed={setSpeed} />
        </SettingsMenu>

        {/* Settings */}
        <SettingsMenu menu="settings">
          <SettingsBack icon="settings" title="Налаштування" setMenu={setMenu} />

          <SettingsButton title={stretch ? 'Центрувати відео' : 'Розтягнути відео'} icon={stretch ? 'collapse_content' : 'expand_content'} menu="settings" setMenu={setMenu} onclick={() => setStretch(!stretch)} />
          <SettingsButton title={'Видалити прогрес перегляду'} icon={'delete_sweep'} menu="settings" setMenu={setMenu} onclick={() => DeleteWatchProgress(true)} />

          <Tooltip content={saveProgress ? 'Вимикаючи це, у тебе також не буде нараховуватися загальний час перегляду' : ''} fitWrapper>
            <button className={cn(`px-[12px] py-[8px] flex justify-between items-center gap-[12px] relative z-[2] w-full duration-100 hover:bg-dark-light focus-visible:bg-dark-light`, saveProgress && 'bg-primary')} onClick={toggleSaveProgress}>
              <div className="flex items-center gap-[12px]">
                <MaterialSymbol icon={'cookie'} className="text-white" size={24} />
                <p className="text-white font-manrope">Зберігати прогрес перегляду</p>
              </div>
            </button>
          </Tooltip>

        </SettingsMenu>
      </MenuWrapper>
    </Menu>
  </div>
}



const SettingsButton: FC<SettingsButtonProps> = ({ icon, menu, setMenu, title, onclick, value }) => {
  function onClick() {
    setMenu(menu)

    onclick && onclick();
  }

  return <button className="px-[12px] py-[8px] flex justify-between items-center gap-[12px] relative z-[2] w-full duration-100 hover:bg-dark-light focus-visible:bg-dark-light" onClick={onClick}>
    <div className="flex items-center gap-[12px]">
      <MaterialSymbol icon={icon} className="text-white" size={24} />
      <p className="text-white font-manrope">{title}</p>
    </div>

    {value && <p className={cn(`text-white font-space-grotesk font-bold`, value === '2160p' && 'font-bold !text-primary')}>{value}</p>}
  </button>
}

const SettingsMenu: FC<SettingsMenuProps> = ({ children, menu, className }) => {
  return <div className={cn(`nekoplayer-settings-menu w-full absolute bottom-0 left-0 duration-[350ms]`, `nekoplayer-settings-menu_${menu}`, className)}>
    {children}
  </div>
}

const SettingsBack: FC<SettingsBackProps> = ({ icon, title, setMenu }) => {
  return <button className="w-full flex justify-center items-center gap-[12px] px-[12px] py-[8px] duration-100 hover:bg-dark-light focus-visible:bg-dark-light" onClick={() => setMenu('general')}>
    <MaterialSymbol icon="arrow_back_ios_new" size={16} className="text-grey-new absolute left-[12px]" />

    <MaterialSymbol icon={icon} className="text-white" size={24} />
    <p className="text-white font-manrope">{title}</p>
  </button>
}

const SettingsSpeedSelect: FC<SettingsSpeedSelectProps> = ({ amplifier, currentSpeed, setSpeed }) => {
  return <button className={cn(`px-[12px] py-[8px] flex justify-center bg-dark-medium duration-100 hover:bg-dark-light focus-visible:bg-dark-light w-full`, currentSpeed === amplifier && 'bg-primary')} onClick={() => setSpeed(amplifier)}>
    <p className="text-white font-manrope">
      {amplifier === 1 && '1x (Нормальна)'}
      {amplifier !== 1 && `${amplifier}x`}
    </p>
  </button>
}

const SettingsQualitySelect: FC<SettingsQualitySelectProps> = ({ currentQuality, quality, setQuality }) => {
  const { episode } = useContext(NekoplayerContext) as NekoplayerContextProps
  const isQ2160 = quality === 'q4k'

  const [isQualityAvailable, setIsQualityAvailable] = useState(false);
  const [isQualitySelected, setIsQualitySelected] = useState(false)



  // Check if quality available
  useMemo(() => {
    (async function () {
      try {
        const url = episode.qualities[quality];
        if (!url) return

        await axios.head(url)
        setIsQualityAvailable(true);
      } catch (e) {
        setIsQualityAvailable(false)
      }
    })()
  }, [episode])

  // Handle isSelected
  useEffect(() => {
    setIsQualitySelected(currentQuality === quality)
  }, [currentQuality])



  return <button className={cn(`px-[12px] py-[8px] flex justify-center bg-dark-medium duration-100 relative hover:bg-dark-light focus-visible:bg-dark-light w-full`, isQualitySelected && 'bg-primary', !isQualityAvailable && 'cursor-not-allowed')} onClick={() => setQuality(quality)} disabled={!isQualityAvailable}>
    {!isQualityAvailable && <Tooltip content="Ця якість тимчасово недоступна" className="!absolute w-[20px] h-[20px] left-[12px] top-[50%] translate-y-[-50%]">
      <MaterialSymbol className={cn(`text-grey-new`, isQualitySelected && '!text-white')} icon="signal_disconnected" size={20} />
    </Tooltip>}

    <p className={cn(`text-white font-space-grotesk`, isQ2160 && 'font-bold !text-primary', currentQuality === 'q4k' && '!text-white')}>{parseVideoQuality(quality)}</p>
  </button>
}



export default NPSettings