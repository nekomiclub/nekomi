'use client'

import { useContext, useEffect, useRef, useState } from 'react'
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu'
import { NextPage } from 'next'
import Link from 'next/link'

import { IcoArrow, IcoCan, IcoLock, IcoPlay, IcoPlus, IcoUpdate } from '~/assets/Icons'
import { cn } from '~/components/Components'
import { getUTC } from '~/components/handlers'
import StyledImage from '~/components/UI/StyledImage'
import Tooltip from '~/components/UI/Tooltip'
import { IDubber } from '~/interfaces/IDubber'
import { ITitleEpisodeMeta } from '~/interfaces/ITitle'

import { IPatcherEpisode, IPatcherEpisodeGroup, IPatcherFieldStatus, PatcherMetaContext } from './Patcher'



export interface IPatcherSelectOption<T = any> {
  label: string
  code: T
}

interface IPatcherSelectProps {
  id: string
  label: string
  options: IPatcherSelectOption[]

  option: any
  setOption: (value: any | any[]) => void

  FieldsStatus: IPatcherFieldStatus[]

  disablePending?: boolean
  locked?: boolean
  dubbers?: IDubber[]
}

interface IPatcherFieldProps {
  id: string
  label: string

  value: any
  setValue: (value: any) => void

  FieldsStatus: IPatcherFieldStatus[]

  type?: 'text' | 'number' | 'textarea'
  locked?: boolean
  placeholder?: string
  disablePending?: boolean

  /** Small text near label */
  note?: string

  /** Specify max symbols length */
  symbolsLimited?: number
}

interface IPatcherEpisodeMetaProps {
  meta: ITitleEpisodeMeta

  selectedMeta: ITitleEpisodeMeta | null
  setSelectedMeta: (value: ITitleEpisodeMeta) => void
  deleteEpisodeMeta: (value: number) => void
}

interface IPatcherEpisodeGroupProps {
  group: IPatcherEpisodeGroup
  dubbingSelectedCode: string
  deleteEpisode: (specified: number, dubber: string) => void
}

interface IPatcherEpisodeProps {
  episode: IPatcherEpisode
  canSeriesDelete: boolean
  deleteEpisode: (specified: number, dubber: string) => void
}



export const PatcherSelect: NextPage<IPatcherSelectProps> = ({ options, label, disablePending, locked, id, option, FieldsStatus, setOption, dubbers }) => {
  const initialValue = useRef(option);
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isSaved, setIsSaved] = useState(false);



  // Handle field status
  useEffect(() => {
    const status = FieldsStatus.find(el => el.id === id);
    if (!status) {
      setIsSaved(false);

      return;
    };

    if (status.status === 'saved') setIsSaved(true);
  }, [FieldsStatus])

  // Handle saving
  useEffect(() => {
    if (!isSaved) return;

    initialValue.current = option;
    setIsPending(false)

    setTimeout(() => {
      setIsSaved(false)
    }, 3000);
  }, [isSaved, option])

  // Handle pending
  useEffect(() => {
    setIsPending(option !== initialValue.current && !disablePending);
  }, [option])



  function select(option: IPatcherSelectOption) {
    setOption(option.code);
  }


  return <div className="patcher-select_wrapper flex flex-col gap-[8px] !w-full" id={id} ref={wrapperRef}>
    <div className="flex items-center gap-[4px]">
      {locked && <IcoLock fill="#747474" width={16} height={16} />}

      <p className={cn(locked ? 'text-lightGrey' : 'text-white')}>{label}</p>
    </div>

    <Menu className="w-full" gap={16} settings={{ align: 'stretch', direction: 'bottom', animation: 'slide', closeOn: 'both' }} disabled={locked} state={isOpen} stateSetter={setIsOpen} id="patcher-menu-selectDubber">
      <MenuTrigger className={cn(`patcher-select px-[16px] py-[4px] bg-grey rounded-[2px] flex items-center gap-[16px] justify-between w-full`, isPending && 'patcher-select--pending', isSaved && 'patcher-select--saved')} anchor>
        {dubbers?.length ? <StyledImage src={dubbers.find(el => el.code === option)!.avatar!} width="32px" height="32px" className="overflow-hidden rounded-[32px]" /> : <></>}

        <p className={cn(`select-none`, locked ? 'text-lightGrey' : 'text-white')}>{options.find(el => el.code === option)?.label}</p>

        <IcoArrow className={cn(`duration-200`, isOpen && 'rotate-[180deg]')} fill={`${locked ? '#747474' : '#fff'}`} />
      </MenuTrigger>

      <MenuWrapper className="flex flex-col bg-grey w-full max-h-[50vh] overflow-x-hidden overflow-y-auto">
        {options.map(el => {
          return <button className={cn(`px-[16px] py-[6px] duration-200 hover:bg-purple focus-visible:bg-purple w-full flex items-center gap-[16px]`, option === el.code && 'bg-purple', el.code === initialValue.current && option !== el.code && !disablePending && 'bg-gradientSecondaryFallback')} key={`select-option--${el.code}`} onClick={() => select(el)}>
            {dubbers?.length ? <StyledImage src={dubbers.find(dubber => dubber.code === el.code)?.avatar ?? ''} width="32px" height="32px" className="overflow-hidden rounded-[32px]" /> : <></>}

            <p className="text-white">{el.label}</p>
          </button>
        })}
      </MenuWrapper>
    </Menu>
  </div>
}

export const PatcherField: NextPage<IPatcherFieldProps> = ({ value, type, setValue, id, locked, label, note, placeholder, symbolsLimited, FieldsStatus, disablePending }) => {
  type = type ?? 'text';
  placeholder = placeholder ?? '...';
  value = value === 'null' ? '' : value;

  const initialValue = useRef(value);
  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const [isPending, setIsPending] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isError, setIsError] = useState(false);


  // Handle field status
  useEffect(() => {
    const status = FieldsStatus.find(el => el.id === id);

    if (!status) {
      setIsSaved(false);
      setIsError(false);

      return;
    };


    if (status.status === 'saved') setIsSaved(true);
    if (status.status === 'errror') setIsError(true);
  }, [FieldsStatus])

  // Reset initial value on save
  useEffect(() => {
    if (!isSaved) return;

    initialValue.current = value;
    setIsPending(false)
  }, [isSaved, value])

  // Handle changes pending
  useEffect(() => {
    const textarea = textareaRef.current;

    // Set isPending
    setIsPending(value !== initialValue.current && !disablePending)

    // Check symbols length
    setIsError(Boolean(symbolsLimited && value?.length > symbolsLimited))

    if (textarea) {
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value])



  return <div className="patcher-field_wrapper flex flex-col gap-[8px] w-full" id={id}>
    <div className="flex items-end gap-[8px]">
      <div className="flex items-center gap-[4px]">
        {locked && <IcoLock fill="#747474" width={16} height={16} />}

        <p className={cn(locked ? 'text-lightGrey' : 'text-white')}>{label}</p>
      </div>

      {note && <p className="text-lightGrey text-[12px]">({note})</p>}
    </div>

    {(type === 'text' || type === 'number') && <>
      <input
        type={type}
        disabled={locked}
        placeholder={placeholder}
        autoComplete="off"
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
        className={cn(`patcher-field `, locked && 'patcher-field--locked', isPending && 'patcher-field--pending', isError && 'patcher-field--error', isSaved && 'patcher-field--saved')}
      />
    </>}

    {type === 'textarea' && <>
      <textarea
        disabled={locked}
        placeholder={placeholder}
        autoComplete="off"
        ref={textareaRef}
        value={value}
        onChange={e => setValue(e.target.value)}
        className={cn(`patcher-field `, locked && 'patcher-field--locked', isPending && 'patcher-field--pending', isError && 'patcher-field--error', isSaved && 'patcher-field--saved')}
      ></textarea>
    </>}

    {symbolsLimited && <p className={cn(`text-[12px] w-full text-end`, String(value).length > symbolsLimited ? 'text-red' : 'text-lightGrey')}>{String(value).length} / {symbolsLimited}</p>}
  </div>
}

export const PatcherEpisodeMeta: NextPage<IPatcherEpisodeMetaProps> = ({ meta, selectedMeta, setSelectedMeta, deleteEpisodeMeta }) => {
  return <div className={`w-full px-[12px] py-[8px] rounded-[4px] flex items-center justify-between gap-[24px] duration-200 ${selectedMeta?.order === meta.order ? 'bg-green/[.2]' : 'bg-grey'} max-[600px]:flex-col`}>
    <div className="flex gap-[16px]">
      <div className="flex flex-col gap-[4px]">
        <p className="text-white text-[24px] font-bold max-[880px]:text-[16px]">#{meta.order}</p>
        <p className="text-lightGrey">{getUTC(meta.dateOut).fulldate}</p>
      </div>

      <div className="flex flex-col gap-[4px]">
        <p className="text-white text-[24px] max-[880px]:text-[16px]">{meta.names.ukr}</p>
        <p className="text-lightGrey">{meta.names.eng}</p>
      </div>
    </div>

    <div className="flex gap-[4px]">
      <Tooltip content="Вибрати">
        <button className="patcher-episodeMeta p-[8px]" onClick={() => setSelectedMeta(meta)}>
          <IcoPlus width={32} height={32} className="patcher-episodeMeta_select" />
        </button>
      </Tooltip>

      <Tooltip content="Видалити">
        <button className="patcher-episodeMeta p-[8px]" onClick={() => deleteEpisodeMeta(meta.order)}>
          <IcoCan width={32} height={32} className="patcher-episodeMeta_delete" />
        </button>
      </Tooltip>
    </div>
  </div>
}



export const PatcherEpisodeGroup: NextPage<IPatcherEpisodeGroupProps> = ({ group, dubbingSelectedCode, deleteEpisode }) => {
  const MetaCtx = useContext(PatcherMetaContext);
  const { title, dubberTeamMember } = MetaCtx;
  const { isRoot } = MetaCtx.capability;

  const canSeriesDelete = isRoot ? true : dubberTeamMember ? dubberTeamMember === group.dubber.id : MetaCtx.capability.canSeriesDelete;

  const [isCollapsed, setIsCollapsed] = useState(!(group.dubber?.slug === dubbingSelectedCode))

  return <div className="flex flex-col gap-[16px]">
    {/* Label */}
    <div className="flex items-center gap-[16px]">
      <StyledImage src={group.dubber?.avatar} height="32px" width="32px" className="overflow-hidden rounded-[32px] shrink-0" />

      <h3 className="text-white text-[24px] uppercase shrink-0 font-bold">{group.dubber?.name} ({group.episodes.length} / {title.episodesCount || 0})</h3>

      <span className="w-full h-[3px] bg-grey"></span>

      <Tooltip content={isCollapsed ? 'Розгорнути' : 'Згорунти'}>
        <button className="p-[8px] rounded-[2px] bg-grey duration-200 hover:bg-purple focus-visible:bg-purple" onClick={() => setIsCollapsed(!isCollapsed)}>
          <IcoArrow className={`duration-200 ${isCollapsed ? 'rotate-0' : 'rotate-[180deg]'}`} />
        </button>
      </Tooltip>
    </div>

    {/* Episodes */}
    <div className={`flex flex-col gap-[4px] duration-300 ${isCollapsed ? 'max-h-0' : 'max-h-[600px]'} overflow-x-hidden overflow-y-auto`}>
      {group.episodes.toReversed().map(episode => {
        return <PatcherEpisode episode={episode} canSeriesDelete={canSeriesDelete} deleteEpisode={deleteEpisode} key={`patcher-episodeGroup-${group.dubber?.id}--${episode.episode.order}`} />
      })}
    </div>
  </div>
}

const PatcherEpisode = ({ episode, canSeriesDelete, deleteEpisode }: IPatcherEpisodeProps) => {
  let order = 1;
  let progress = 0;
  let source = episode.episode.qualities.q1080;
  let type = episode.type;

  if (episode.type !== 'uploaded') {
    order = episode.uploadOrder || 1
    progress = episode.progress || 0;
    episode.type = episode.type;
    source = episode.episode.qualities.q1080;
  }

  return <div className="px-[24px] py-[16px] flex items-center gap-[16px] rounded-[2px] bg-grey">
    {/* Order */}
    <p className="text-white text-[24px] font-bold w-[100px] shrink-0">#{episode.episode.order}</p>

    {/* Content */}
    <div className="flex items-center gap-[16px] w-full">
      {type === 'uploaded' && <Link href={source} target="_blank" className="flex items-center gap-[16px]">
        <IcoPlay width={32} height={32} fill="#6C5CE7" />

        <p className="text-purple">Переглянути</p>
        {episode.file && <p className="text-lightGrey">Завантажено!</p>}
      </Link>}

      {type === 'pending' && <>
        <IcoUpdate width={32} height={32} fill="#F39C12" />
        <p className="text-white">В черзі на завантаження</p>
        <p className="text-lightGrey">{'>'}{order}</p>
      </>}

      {type === 'uploading' && <>
        <IcoUpdate width={32} height={32} fill="#2ECC71" />
        <p className="text-white">Завантажується...</p>
        <p className="text-lightGrey">{progress}%</p>
      </>}
    </div>

    {/* Delete */}
    {canSeriesDelete && type !== 'uploading' && <Tooltip content="Видалити">
      <button className="shrink-0 patcher-episodeMeta" onClick={() => deleteEpisode(episode.episode.order, episode.episode.dubberID)}>
        <IcoCan width={32} height={32} className="patcher-episodeMeta_delete" />
      </button>
    </Tooltip>}
  </div>
}