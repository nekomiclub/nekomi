'use client'

import { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MaterialSymbol } from 'react-material-symbols';
import { useDebounce } from 'use-debounce';

import { IcoSocialInstagram, IcoSocialTelegram, IcoSocialTiktok, IcoSocialYoutube } from '~/assets/Social';
import { IcoSupportByMeACoffee, IcoSupportDiaka, IcoSupportMonobank, IcoSupportPatreon } from '~/assets/Support';
import { cn } from '~/components/Components';
import { HandleClientError, wordDeclination } from '~/components/handlers';
import { IUInputState, UInput, UITextarea } from '~/components/UI/Input';
import { NotifySuccess, NotifyWarn } from '~/components/UI/NotifyToast';
import Tooltip from '~/components/UI/Tooltip';
import { IDubber } from '~/interfaces/IDubber';
import { IUser } from '~/interfaces/IUser';
import { IDubberPatchSettingsProps } from '~/interfaces/services/IApiService';
import { Routes } from '~/routes';
import API from '~/services/ApiService';



interface ISettingsGroupProps {
  title: string
  description: string
  children: React.ReactNode
}

interface ILinkItemProps {
  state: IUInputState
  setState: (val: IUInputState) => void
  type: keyof IDubber['socials'] | keyof IDubber['support']
}

interface IControlsProps {
  resetChanges: () => void
  saveChanges: () => void
  isSomethingChanged: boolean
}


export const DubberSettingsBanner: NextPage<{ dubber: IDubber }> = ({ dubber }) => {
  const [bannerURL, setBannerURL] = useState(dubber.banner);
  const [isActive, setIsActive] = useState(false);

  const bannerRef = useRef<HTMLDivElement>(null)
  const selectFileRef = useRef<HTMLInputElement>(null)



  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;



    function show() {
      setIsActive(true);
    }

    function hide() {
      setIsActive(false);
    }

    banner.addEventListener('mouseenter', show)
    banner.addEventListener('mouseleave', hide)
  }, [])



  async function uploadBanner() {
    const select = selectFileRef.current;
    if (!select) return;

    if (!select.files?.length) return NotifyWarn({ title: 'Файл відсутній', message: 'Неможливо оновити банер без файлу' })
    const file = select.files[0]

    try {
      NotifySuccess({ message: `Завантажуємо файл: ${file.name}`, title: 'Завантажуємо...' })

      const { url } = await API.putDubberBanner({ dubberId: dubber.id, file });
      setBannerURL(url);

      NotifySuccess({ message: `Завантажено: ${file.name}`, title: 'Банер оновлено!' })
    } catch (e) {
      HandleClientError(e);
    }
  }

  function selectFile() {
    const select = selectFileRef.current;
    if (!select) return;

    select.value = '';
    select.click();
  }



  return <div className="w-full h-fit aspect-[3.8] relative rounded-[4px] overflow-hidden max-h-[500px] min-h-[200px]" ref={bannerRef}>
    <Image src={bannerURL} fill alt={`Team banner`} />

    <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[32px] absolute top-[8px] right-[8px] opacity-[.5] bg-dark-primary">
      <MaterialSymbol icon="edit" size={16} color="#fff" />
    </div>

    <input type="file" className="hidden" accept=".png,.jpg,.webp" ref={selectFileRef} onChange={uploadBanner} />

    <button onClick={selectFile} className={cn('w-full h-full absolute top-0 left-0 bg-dark-primary/[.5] flex justify-center items-center duration-200', !isActive && 'opacity-0 invisible')}>
      <div className="flex flex-col items-center gap-[24px] max-[1400px]:gap-[16px]">
        <MaterialSymbol icon="backup" size={128} color="#fff" className="max-[1400px]:!text-[84px]" />

        <div className="flex flex-col gap-[8px]">
          <h3 className="text-white text-[40px] font-bold font-manrope text-center uppercase max-lg:text-[24px]">завантажити банер</h3>
          <p className="text-white text-[16px] font-manrope text-center">.png .jpg .webp, до 2х мегабайтів</p>
        </div>
      </div>
    </button>
  </div>
}

export const DubberSettingsHeader: NextPage<{ dubber: IDubber }> = ({ dubber }) => {
  return <div className="flex gap-[24px] absolute top-0 w-full pr-[32px] max-md:sm-[16px] max-md:flex-col">
    {/* Avatar placeholder */}
    <div className="relative w-[256px] h-[128px] shrink-0 max-md:w-[128px] max-md:h-[64px]">
      <DubberSettingsAvatar dubber={dubber} />
    </div>

    <div className="w-full flex items-center justify-between gap-[24px]">
      <div className="flex flex-col gap-[8px]">
        <h2 className="text-white text-[32px] font-bold font-manrope max-lg:text-[24px]">{dubber.nameUkr}</h2>
        <h4 className="text-grey-new text-[24px] font-space-grotesk">@{dubber.slug}</h4>
      </div>

      <div className="flex gap-[4px] max-md:absolute max-md:top-[16px] max-md:right-[32px] max-sm:right-[16px]">
        <Tooltip content="На сторінку команди">
          <Link href={`${Routes.dubber_profile.path}/${dubber.slug}`} className={cn('p-[16px] rounded-[4px] flex justify-center items-center shrink-0 duration-200 bg-dark-medium border border-dark-light active:scale-[.95] hover:bg-primary-bright focus-visible:bg-primary-bright')}>
            <MaterialSymbol icon="account_box" size={24} color="#fff" />
          </Link>
        </Tooltip>
      </div>
    </div>
  </div>
}

export const DubberSettingsContent: NextPage<{ dubber: IDubber, members: IUser[] }> = ({ dubber, members }) => {
  const [nameUkr, setNameUkr] = useState<IUInputState>({ value: dubber.nameUkr });
  const [nameEng, setNameEng] = useState<IUInputState>({ value: dubber.nameEng });
  const [description, setDescription] = useState<IUInputState>({ value: dubber.description ?? '' });

  const [telegramLink, setTelegramLink] = useState<IUInputState>({ value: dubber.socials.telegram ?? '' });
  const [instagramLink, setInstagramLink] = useState<IUInputState>({ value: dubber.socials.instagram ?? '' });
  const [tiktokLink, setTiktokLink] = useState<IUInputState>({ value: dubber.socials.tiktok ?? '' });
  const [youtubeLink, setYoutubeLink] = useState<IUInputState>({ value: dubber.socials.youtube ?? '' });

  const [patreonLink, setPatreonLink] = useState<IUInputState>({ value: dubber.support.patreon ?? '' });
  const [bmcLink, setBmcLink] = useState<IUInputState>({ value: dubber.support.bymeacoffee ?? '' });
  const [monobankLink, setMonobankLink] = useState<IUInputState>({ value: dubber.support.monobank ?? '' });
  const [diakaLink, setDiakaLink] = useState<IUInputState>({ value: dubber.support.diaka ?? '' });

  const [isSomethingChanged, setIsSomethingChanged] = useState(false);

  //! MUST INCLUDE ALL OF THE CHANGING STATES
  const DubberParams = [nameUkr, nameEng, description, telegramLink, instagramLink, tiktokLink, youtubeLink, patreonLink, bmcLink, monobankLink, diakaLink];
  const DubberParamsSetters = [setNameUkr, setNameEng, setDescription, setTelegramLink, setInstagramLink, setTiktokLink, setYoutubeLink, setPatreonLink, setBmcLink, setMonobankLink, setDiakaLink]


  // Handle isSomethingChanged
  useEffect(() => {
    setIsSomethingChanged(DubberParams.some(el => el.status === 'changes_pending'))
  }, [DubberParams])



  function resetChanges() {
    NotifySuccess({ title: 'Відміняємо зміни...', message: 'Сторінка повинна перезавантажитись' })
    window.location.reload();
  }

  async function saveChanges() {
    if (!isSomethingChanged) return NotifyWarn({ title: 'Нема що зберігати', message: 'Ніяких змін не сталося' })

    try {
      NotifySuccess({ title: 'Зберігаємо...', message: 'Зберігаємо зміни...' })

      const patchBody: IDubberPatchSettingsProps = {
        dubberId: dubber.id,
        nameUkr: compareChanges(dubber.nameUkr, nameUkr.value),
        nameEng: compareChanges(dubber.nameEng, nameEng.value),
        description: compareChanges(dubber.description, description.value),
        socialLinks: {
          telegram: compareChanges(dubber.socials.telegram, telegramLink.value),
          instagram: compareChanges(dubber.socials.instagram, instagramLink.value),
          tiktok: compareChanges(dubber.socials.tiktok, tiktokLink.value),
          youtube: compareChanges(dubber.socials.youtube, youtubeLink.value),
        },
        supportLinks: {
          patreon: compareChanges(dubber.support.patreon, patreonLink.value),
          bymeacoffee: compareChanges(dubber.support.bymeacoffee, bmcLink.value),
          monobank: compareChanges(dubber.support.monobank, monobankLink.value),
          diaka: compareChanges(dubber.support.diaka, diakaLink.value),
        }
      };

      await API.patchDubberSettings(patchBody);

      DubberParamsSetters.forEach(el => el(prev => {
        if (prev.status === 'changes_pending') {
          return {
            value: prev.value,
            status: 'success'
          }
        } else return prev
      }));

      NotifySuccess({ title: 'Збережено!', message: 'Зміни збережені' })

      setTimeout(() => {
        DubberParamsSetters.forEach(el => el(prev => {
          return {
            value: prev.value,
            status: 'waiting'
          }
        }));
      }, 3000);
    } catch (e) {
      HandleClientError(e)

      DubberParamsSetters.forEach(el => el(prev => {
        if (prev.status === 'changes_pending') {
          return {
            value: prev.value,
            status: 'error'
          }
        } else return prev
      }));
    }
  }



  return <div className="flex flex-col gap-[16px]">
    <div className="w-full flex justify-between items-center pb-[16px] border-b border-dark-light">
      <h2 className="text-white text-[32px] font-bold font-manrope max-md:text-[24px]">Налаштування команди</h2>

      <Controls resetChanges={resetChanges} saveChanges={saveChanges} isSomethingChanged={isSomethingChanged} />
    </div>

    <SettingsGroup title="Назва та опис" description="Розкажіть світу хто ви є">
      <div className="flex gap-[32px] w-full max-md:flex-col">
        <div className="flex flex-col gap-[8px] w-full">
          <div className="flex flex-col gap-[4px] w-full">
            <p className="text-grey-new font-manrope"><span className="text-info-error font-bold">*</span> Українська назва</p>
            <UInput state={nameUkr} stateSetter={setNameUkr} symbolsLimited={32} required />
          </div>

          <div className="flex flex-col gap-[4px] w-full">
            <p className="text-grey-new font-manrope"><span className="text-info-error font-bold">*</span> Англійська назва</p>
            <UInput state={nameEng} stateSetter={setNameEng} symbolsLimited={32} className="font-space-grotesk" required />
          </div>
        </div>

        <div className="flex flex-col gap-[4px] w-full h-full">
          <p className="text-grey-new font-manrope">Опис</p>
          <UITextarea state={description} stateSetter={setDescription} symbolsLimited={500} className="min-h-[42px] h-fit max-h-[500px] outline-none grow" parentClassName="h-full grow" />
        </div>
      </div>
    </SettingsGroup>

    <SettingsGroup title="Посилання" description="Мережі команди та підтримка (без www.)">
      <div className="flex gap-[4px] w-full max-md:flex-col max-md:gap-[16px]">
        <div className="flex flex-col gap-[4px] w-full">
          <LinkItem state={telegramLink} setState={setTelegramLink} type="telegram" />
          <LinkItem state={instagramLink} setState={setInstagramLink} type="instagram" />
          <LinkItem state={tiktokLink} setState={setTiktokLink} type="tiktok" />
          <LinkItem state={youtubeLink} setState={setYoutubeLink} type="youtube" />
        </div>

        <div className="flex flex-col gap-[4px] w-full">
          <LinkItem state={patreonLink} setState={setPatreonLink} type="patreon" />
          <LinkItem state={bmcLink} setState={setBmcLink} type="bymeacoffee" />
          <LinkItem state={monobankLink} setState={setMonobankLink} type="monobank" />
          <LinkItem state={diakaLink} setState={setDiakaLink} type="diaka" />
        </div>
      </div>
    </SettingsGroup>

    <SettingsGroup title={`Команда (${members.length} ${wordDeclination(members.length, ['учасник', 'учасника', 'учасників'])})`} description="Керування складом команди">
      <InviteMembers />
    </SettingsGroup>

    <div className="w-full flex justify-end">
      <Controls resetChanges={resetChanges} saveChanges={saveChanges} isSomethingChanged={isSomethingChanged} />
    </div>
  </div>
}



function InviteMembers() {
  const [searchQuery, setSearchQuery] = useState<IUInputState>({ status: 'waiting', value: '' });
  const [debouncedSearchQuery] = useDebounce(searchQuery.value.replace('@', ''), 500)
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  // useEffect(() => {
  //   console.log(debouncedSearchQuery)
  // }, [debouncedSearchQuery])



  return <div className="flex flex-col gap-[4px] w-full">
    <p className="text-grey-new font-manrope">Запросити нового учасника</p>
    <UInput state={searchQuery} stateSetter={setSearchQuery} placeholder="@username" disablePending />
  </div>
}

function LinkItem({ setState, state, type }: ILinkItemProps) {
  let placeholder: string | undefined = undefined;



  if (type === 'telegram') placeholder = 't.me';
  if (type === 'instagram') placeholder = 'instagram.com';
  if (type === 'tiktok') placeholder = 'tiktok.com';
  if (type === 'youtube') placeholder = 'youtube.com';
  if (type === 'patreon') placeholder = 'patreon.com';
  if (type === 'bymeacoffee') placeholder = 'bymeacoffee.com';
  if (type === 'monobank') placeholder = 'send.monobank.ua';
  if (type === 'diaka') placeholder = 'diaka.ua';



  return <div className="flex w-full">
    <div className="w-[42px] h-[42px] flex justify-center items-center bg-dark-medium shrink-0 rounded-l-[4px]">
      {type === 'telegram' && <IcoSocialTelegram width={24} height={24} fill="#fff" />}
      {type === 'instagram' && <IcoSocialInstagram width={24} height={24} fill="#fff" />}
      {type === 'tiktok' && <IcoSocialTiktok width={24} height={24} fill="#fff" />}
      {type === 'youtube' && <IcoSocialYoutube width={24} height={24} fill="#fff" />}

      {type === 'patreon' && <IcoSupportPatreon width={24} height={24} fill="#fff" />}
      {type === 'bymeacoffee' && <IcoSupportByMeACoffee width={24} height={24} fill="#fff" />}
      {type === 'monobank' && <IcoSupportMonobank width={24} height={24} />}
      {type === 'diaka' && <IcoSupportDiaka width={24} height={24} />}
    </div>

    <UInput state={state} stateSetter={setState} className="rounded-l-none border-dark-medium" placeholder={placeholder} type="url" />
  </div>
}

function Controls({ resetChanges, saveChanges, isSomethingChanged }: IControlsProps) {
  return <Tooltip content={!isSomethingChanged ? 'Нічого не було змінено' : ''} className="flex gap-[8px]">
    <button className={cn('p-[8px] border border-dark-light duration-200 rounded-[4px] hover:bg-dark-light focus-visible:bg-dark-light', !isSomethingChanged && 'cursor-not-allowed')} disabled={!isSomethingChanged} onClick={resetChanges}>
      <p className={cn('font-manrope duration-200', isSomethingChanged ? 'text-white' : 'text-grey-new')}>Відхилити</p>
    </button>

    <button className={cn('flex gap-[16px] items-center px-[16px] py-[8px] border border-dark-light bg-dark-medium duration-200 rounded-[4px] hover:bg-dark-light focus-visible:bg-dark-light', !isSomethingChanged && 'cursor-not-allowed')} disabled={!isSomethingChanged} onClick={saveChanges}>
      <MaterialSymbol icon="update" size={16} className={cn(`duration-200`, isSomethingChanged ? 'text-white' : 'text-grey-new')} />
      <p className={cn('font-manrope duration-200', isSomethingChanged ? 'text-white' : 'text-grey-new')}>Зберегти зміни</p>
    </button>
  </Tooltip>
}

function SettingsGroup({ title, description, children }: ISettingsGroupProps) {
  return <div className="w-full flex justify-between pb-[16px] border-b border-dark-light gap-[16px] max-lg:flex-col">
    <div className="w-[300px] flex flex-col gap-[4px] shrink-0 max-lg:w-auto">
      <h4 className="text-white text-[24px] font-bold font-manrope">{title}</h4>
      <h4 className="text-grey-new font-manrope">{description}</h4>
    </div>

    {children}
  </div>
}

function DubberSettingsAvatar({ dubber }: { dubber: IDubber }) {
  const [isActive, setIsActive] = useState(false);
  const [avatarURL, setAvatarURL] = useState(dubber.avatar);

  const avatarRef = useRef<HTMLDivElement>(null)
  const selectFileRef = useRef<HTMLInputElement>(null)



  useEffect(() => {
    const avatar = avatarRef.current;
    if (!avatar) return;



    function show() {
      setIsActive(true);
    }

    function hide() {
      setIsActive(false);
    }

    avatar.addEventListener('mouseenter', show)
    avatar.addEventListener('mouseleave', hide)
  }, [])



  async function uploadAvatar() {
    const select = selectFileRef.current;
    if (!select) return;

    if (!select.files?.length) return NotifyWarn({ title: 'Файл відсутній', message: 'Неможливо оновити аватар без файлу' })
    const file = select.files[0]

    try {
      NotifySuccess({ message: `Завантажуємо файл: ${file.name}`, title: 'Завантажуємо...' })

      const { url } = await API.putDubberAvatar({ dubberId: dubber.id, file });

      setAvatarURL(url);
      NotifySuccess({ message: `Файл завантажено`, title: 'Аватар оновлено!' })
    } catch (e) {
      HandleClientError(e);
    }
  }

  function selectFile() {
    const select = selectFileRef.current;
    if (!select) return;

    select.value = '';
    select.click();
  }



  return <div className="w-[256px] h-[256px] absolute left-0 bottom-0 rounded-[4px] overflow-hidden -top-[128px] max-md:w-[128px] max-md:h-[128px] max-md:top-[-64px]" ref={avatarRef}>
    <Image src={avatarURL} fill alt="Dubber avatar" />

    <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[32px] absolute top-[8px] right-[8px] opacity-[.5] bg-dark-primary">
      <MaterialSymbol icon="edit" size={16} color="#fff" />
    </div>

    <input type="file" className="hidden" accept=".png,.jpg,.webp" ref={selectFileRef} onChange={uploadAvatar} />

    <button onClick={selectFile} className={cn('w-full h-full absolute top-0 left-0 bg-dark-primary/[.5] flex justify-center items-center duration-200', !isActive && 'opacity-0 invisible')}>
      <div className="flex flex-col items-center gap-[16px] max-md:gap-[8px]">
        <MaterialSymbol icon="backup" size={64} color="#fff" className="max-md:!text-[24px]" />

        <div className="flex flex-col gap-[8px]">
          <h3 className="text-white text-[24px] font-bold font-manrope text-center uppercase max-md:text-[16px]">завантажити аватар</h3>
          <p className="text-white text-[16px] font-manrope text-center max-md:text-[12px]">.png .jpg .webp <br /> до 1го мегабайта</p>
        </div>
      </div>
    </button>
  </div>
}

function compareChanges(oldData: any, newData: any): any | undefined {
  if (typeof newData === 'string' && newData.length === 0) return undefined;
  if (oldData !== newData) return newData;
}