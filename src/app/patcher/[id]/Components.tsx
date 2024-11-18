'use client'

import { memo, useContext, useEffect, useRef, useState } from 'react'
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu'
import gsap from 'gsap'

import { IcoArrow, IcoGhost, IcoLock } from '../../../assets/Icons'
import { cn,LoadingImage } from '../../../components/Components'
import { IDubber } from '../../../interfaces/IDubber'

import { IFieldStatus, PatcherMetaContext, TPatcherMetaKey } from './Patcher'



interface IPatcherFieldProps {
  label: string
  id: TPatcherMetaKey
  fieldsStatus: IFieldStatus[]

  symbolsLimited?: number
  locked?: boolean
  placeholder?: string

  /** @default Will be taken from ctx[key] */
  value?: any

  /** @default 'text'' */
  type?: 'text' | 'number' | 'textarea'

  /** Small text near the label */
  note?: string

  /** Disable pending changes state */
  disablePending?: boolean
}

export interface IPatcherSelectOption<T = any> {
  label: string
  code: T
}

interface ISelectProps {
  label: string
  id: TPatcherMetaKey
  options: IPatcherSelectOption[]
  fieldsStatus: IFieldStatus[]

  value?: any
  disablePending?: boolean
  dubbers?: IDubber[]
  locked?: boolean
}



/** Patcher inner component */
export const PatcherErrorWrapper = memo(function PatcherErrorWrapper({ errors, section }: { errors: string[], section: string }) {
  return <section className={cn(`px-[16px] py-[8px] rounded-[2px] border border-red bg-red/[.2] flex gap-[24px]`, errors.length === 1 && 'items-center', !errors.length && 'hidden')}>
    <IcoGhost width={32} height={32} />

    <div className="flex flex-col gap-4px h-fit">
      {errors.map((el, i) => {
        return <p className="text-white" key={`${section}-error--${i}`}>{el}</p>
      })}
    </div>
  </section>
})

/** Patcher inner component */
export const PatcherField = memo(function PatcherField({ label, type, disablePending, locked, note, placeholder, symbolsLimited, value, id, fieldsStatus }: IPatcherFieldProps) {
  const ctx = useContext(PatcherMetaContext);

  type = type !== undefined ? type : 'text';
  value = value !== undefined ? value : ctx.meta[id];
  value = value === 'null' ? '' : value;

  const initialValue = useRef(value);
  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const [val, setVal] = useState(value)
  const [isError, setIsError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isSaved, setIsSaved] = useState(false);



  useEffect(() => {
    const status = fieldsStatus.find(el => el.id === id);
    if (!status) {
      setIsSaved(false);
      setIsError(false);

      return;
    };

    if (status.status === 'saved') setIsSaved(true);
    if (status.status === 'errror') setIsError(true);
  }, [fieldsStatus])

  useEffect(() => {
    if (!isSaved) return;

    initialValue.current = val;
    setIsPending(false)

    setTimeout(() => {
      setIsSaved(false)
    }, 3000);
  }, [isSaved, val])

  useEffect(() => {
    const textarea = textareaRef.current;

    // Sync inner value with ctx
    (ctx.meta[id] as any) = val;

    // Set isPending
    setIsPending(val !== initialValue.current)

    // Check symbols length
    setIsError(Boolean(symbolsLimited && val.length > symbolsLimited))

    if (textarea) {
      gsap.to(textarea, {
        duration: 0,
        height: `${textarea.scrollHeight}px`
      })
    }
  }, [val])



  return <div className="patcher-field_wrapper flex flex-col gap-[8px] w-full" id={`patcher-field--${id}`}>
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
        placeholder={placeholder || '...'}
        autoComplete="off"
        ref={inputRef}
        value={val}
        onChange={e => setVal(e.target.value)}
        className={cn(`patcher-field `, locked && 'patcher-field--locked', isPending && 'patcher-field--pending', isError && 'patcher-field--error', isSaved && 'patcher-field--saved')}
      />
    </>}

    {type === 'textarea' && <>
      <textarea
        disabled={locked}
        placeholder={placeholder || '...'}
        autoComplete="off"
        ref={textareaRef}
        value={val}
        onChange={e => setVal(e.target.value)}
        className={cn(`patcher-field min-h-[120px]`, locked && 'patcher-field--locked', isPending && 'patcher-field--pending', isError && 'patcher-field--error', isSaved && 'patcher-field--saved')}
      ></textarea>
    </>}

    {symbolsLimited && <p className={cn(`text-[12px] w-full text-end`, String(val).length > symbolsLimited ? 'text-red' : 'text-lightGrey')}>{String(val).length} / {symbolsLimited}</p>}
  </div>
})

export const PatcherSelect = memo(function PatcherSelect({ options, label, disablePending, dubbers, locked, id, value, fieldsStatus }: ISelectProps) {
  const ctx = useContext(PatcherMetaContext);

  value = value !== undefined ? value : ctx.meta[id];

  const initialValue = useRef(value);
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [option, setOption] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isSaved, setIsSaved] = useState(false);



  useEffect(() => {
    const status = fieldsStatus.find(el => el.id === id);
    if (!status) {
      setIsSaved(false);

      return;
    };

    if (status.status === 'saved') setIsSaved(true);
  }, [fieldsStatus])

  useEffect(() => {
    if (!isSaved) return;

    initialValue.current = option;
    setIsPending(false)

    setTimeout(() => {
      setIsSaved(false)
    }, 3000);
  }, [isSaved, option])

  useEffect(() => {
    setIsPending(option !== initialValue.current);
  }, [option])



  function toggleClass(value: boolean, classType: 'error' | 'pending' | 'success') {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const select = wrapper.querySelector('.patcher-select') as HTMLButtonElement

    if (value) select.classList.add(`patcher-select--${classType}`)
    if (!value) select.classList.remove(`patcher-select--${classType}`)
  }

  function select(option: IPatcherSelectOption) {
    setOption(option.code);

    // Set pending
    toggleClass(option.code !== initialValue.current, 'pending')
  }


  return <div className="patcher-select_wrapper flex flex-col gap-[8px] !w-full" id={`patcher-select--${id}`} ref={wrapperRef}>
    <div className="flex items-center gap-[4px]">
      {locked && <IcoLock fill="#747474" width={16} height={16} />}

      <p className={cn(locked ? 'text-lightGrey' : 'text-white')}>{label}</p>
    </div>

    <Menu className="w-full" gap={16} settings={{ align: 'stretch', direction: 'bottom', animation: 'slide', closeOn: 'both' }} state={isOpen} stateSetter={setIsOpen}>
      <MenuTrigger className={cn(`patcher-select px-[16px] py-[4px] bg-grey rounded-[2px] flex items-center gap-[16px] justify-between w-full`, isPending && 'patcher-select--pending', isSaved && 'patcher-select--saved')} primary>
        {dubbers?.length && <LoadingImage src={dubbers.find(el => el.code === value)!.thumbURL!} width="24px" height="24px" parentClassName="overflow-hidden rounded-[32px]" />}

        <p className={cn(`select-none`, locked ? 'text-lightGrey' : 'text-white')}>{options.find(el => el.code === option)?.label}</p>

        <IcoArrow className={cn(`duration-200`, isOpen && 'rotate-[180deg]')} fill={`${locked ? '#747474' : '#fff'}`} />
      </MenuTrigger>

      <MenuWrapper className="flex flex-col bg-grey w-full max-h-[50vh] overflow-x-hidden overflow-y-auto">
        {options.map(el => {
          return <button className={cn(`px-[16px] py-[6px] duration-200 hover:bg-purple focus-visible:bg-purple w-full flex items-center gap-[16px]`, option === el.code && 'bg-purple', el.code === initialValue.current && option !== el.code && 'bg-gradientSecondaryFallback')} key={`select-option--${el.code}`} onClick={() => select(el)}>
            {dubbers?.length && <LoadingImage src={dubbers.find(el => el.code === el.code)!.thumbURL!} width="32px" height="32px" parentClassName="overflow-hidden rounded-[32px]" />}

            <p className="text-white">{el.label}</p>
          </button>
        })}
      </MenuWrapper>
    </Menu>
  </div>
})