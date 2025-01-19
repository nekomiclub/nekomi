import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { NextPage } from 'next'

import { cn } from '../Components'

import Tooltip from './Tooltip'



interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  state: any
  stateSetter: (prop: any) => void
}

export interface IUInputState {
  value: string
  status?: 'waiting' | 'changes_pending' | 'success' | 'error'
}

interface IUInputProps<E = any> extends React.InputHTMLAttributes<E> {
  state: IUInputState
  stateSetter: (prop: IUInputState) => void

  disablePending?: boolean
  symbolsLimited?: number
  parentClassName?: string
}



const Input: NextPage<IInputProps> = ({ state, stateSetter, className, placeholder, ...props }) => {
  return <input {...props} className={cn('px-[12px] py-[8px] bg-grey text-white text-[16px] placeholder:text-lightGrey placeholder:text-[16px]', className)} value={state} onChange={e => stateSetter(e.target.value)} placeholder={placeholder ?? '...'} />
}

export const UInput: NextPage<IUInputProps<HTMLInputElement>> = ({ state, stateSetter, className, placeholder, disablePending, symbolsLimited, ...props }) => {
  const [value, setValue] = useState<string>(state.value);
  const [status, setStatus] = useState(state.status)

  const inputRef = useRef<HTMLInputElement>(null)
  const symbolsLimitedRef = useRef<HTMLParagraphElement>(null)
  const initialValue = useRef(value);



  useEffect(() => {
    const input = inputRef.current;
    const symbolsLimitedParent = symbolsLimitedRef.current;
    if (!input || !symbolsLimitedParent) return;

    if (symbolsLimited !== undefined) {
      input.style.paddingRight = `${24 + symbolsLimitedParent.offsetWidth}px`;
    }
  }, [])

  useEffect(() => {
    setValue(state.value)
    setStatus(state.status)
  }, [state])



  function handleTyping(e: ChangeEvent) {
    const value = (e.target as HTMLInputElement).value;
    let Status = status;

    setValue(value)

    if (value === initialValue.current) {
      Status = 'waiting';
      stateSetter({
        value,
        status: Status,
      })

      return;
    }

    if (symbolsLimited && value.length > symbolsLimited) {
      Status = 'error';
      stateSetter({
        value,
        status: Status,
      })

      return;
    }

    if (!disablePending) {
      Status = 'changes_pending';
      setStatus(Status);
    }

    stateSetter({
      value,
      status: Status,
    })
  }



  return <Tooltip content={status === 'changes_pending' ? `Значення змінено з: ${initialValue.current}` : ''} className="w-full">
    <input className={cn('ui-input', status === 'changes_pending' && 'ui-input--pending', status === 'success' && 'ui-input--success', status === 'error' && 'ui-input--error', className)} value={value} onChange={handleTyping} placeholder={placeholder ?? '...'} ref={inputRef} {...props} />

    {symbolsLimited !== undefined && <p className="absolute right-[8px] top-[50%] translate-y-[-50%] text-grey-new font-space-grotesk text-[12px]" ref={symbolsLimitedRef}>{value?.length} / {symbolsLimited}</p>}
  </Tooltip>
}

export const UITextarea: NextPage<IUInputProps<HTMLTextAreaElement>> = ({ state, stateSetter, className, placeholder, disablePending, symbolsLimited, parentClassName, ...props }) => {
  const [value, setValue] = useState(state.value);
  const [status, setStatus] = useState(state.status)

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const initialValue = useRef(value);



  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = ``;
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value])

  useEffect(() => {
    setValue(state.value)
    setStatus(state.status)
  }, [state])



  function handleTyping(e: ChangeEvent) {
    const value = (e.target as HTMLTextAreaElement).value;
    let Status = status;

    setValue(value)

    if (value === initialValue.current) {
      Status = 'waiting';
      stateSetter({
        value,
        status: Status,
      })

      return;
    }

    if (symbolsLimited && value.length > symbolsLimited) {
      Status = 'error';
      stateSetter({
        value,
        status: Status,
      })

      return;
    }

    if (!disablePending) {
      Status = 'changes_pending';
      setStatus(Status);
    }

    stateSetter({
      value,
      status: Status,
    })
  }

  return <Tooltip content={status === 'changes_pending' ? `Значення змінено з: ${initialValue.current}` : ''} className={cn('flex flex-col gap-[4px] items-end', parentClassName)}>
    <textarea className={cn('ui-input', status === 'changes_pending' && 'ui-input--pending', status === 'success' && 'ui-input--success', status === 'error' && 'ui-input--error', className)} value={value} onChange={handleTyping} placeholder={placeholder ?? '...'} ref={textareaRef} {...props} />
    {symbolsLimited !== undefined && <p className="text-grey-new font-space-grotesk text-[12px]">{value?.length} / {symbolsLimited}</p>}
  </Tooltip>
}

export default Input;