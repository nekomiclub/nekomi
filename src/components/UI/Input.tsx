import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { NextPage } from 'next'

import { cn } from '../Components'

import Tooltip from './Tooltip'



interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  state: any
  stateSetter: (prop: any) => void
}

export interface IUInputState {
  initialValue: string | null
  value?: string
  status?: 'waiting' | 'changes_pending' | 'success' | 'error'

  /** @readonly */
  mutated?: boolean

  /** @readonly */
  newValue?: string
}

interface IUIFieldProps<E = any> extends React.InputHTMLAttributes<E> {
  state: IUInputState
  stateSetter: (prop: IUInputState) => void
  fieldType: 'input' | 'textarea'

  disablePending?: boolean
  symbolsLimited?: number
  parentClassName?: string
}



const Input: NextPage<IInputProps> = ({ state, stateSetter, className, placeholder, ...props }) => {
  return <input {...props} className={cn('px-[12px] py-[8px] bg-grey text-white text-[16px] placeholder:text-lightGrey placeholder:text-[16px]', className)} value={state} onChange={e => stateSetter(e.target.value)} placeholder={placeholder ?? '...'} />
}

export const UIField: NextPage<IUIFieldProps<any>> = ({ state, stateSetter, className, placeholder, disablePending, symbolsLimited, fieldType, parentClassName, ...props }) => {
  const [initialValue, setInitialValue] = useState(state.initialValue ?? '');
  const [value, setValue] = useState<string>(initialValue);
  const [status, setStatus] = useState(state.status)

  const inputRef = useRef<HTMLInputElement>(null)
  const symbolsLimitedRef = useRef<HTMLParagraphElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)



  // Field type: input
  useEffect(() => {
    if (fieldType !== 'input') return;

    const input = inputRef.current;
    const symbolsLimitedParent = symbolsLimitedRef.current;
    if (!input || !symbolsLimitedParent) return;

    if (symbolsLimited !== undefined) {
      input.style.paddingRight = `${24 + symbolsLimitedParent.offsetWidth}px`;
    }
  }, [])

  // Field type: textarea
  useEffect(() => {
    if (fieldType !== 'textarea') return;

    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = ``;
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value])

  useEffect(() => {
    setValue(state.value ?? state.initialValue ?? '')
    setStatus(state.status)

    if (state.status === 'success') {
      setInitialValue(state.value!)
    }
  }, [state])



  function handleTyping(e: ChangeEvent) {
    if (status === 'success') return;

    const value = (e.target as HTMLInputElement).value;
    const mutated = value !== initialValue;

    setValue(value)

    if (value === initialValue) {
      return stateSetter({
        value,
        mutated,
        newValue: mutated ? value : undefined,
        initialValue,
        status: 'waiting',
      })
    }

    if (symbolsLimited && value.length > symbolsLimited) {
      return stateSetter({
        value,
        mutated,
        newValue: mutated ? value : undefined,
        initialValue,
        status: 'error',
      })
    }

    if (!disablePending) {
      return stateSetter({
        value,
        mutated,
        newValue: mutated ? value : undefined,
        initialValue,
        status: 'changes_pending',
      })
    }
  }



  return <>
    {fieldType === 'input' && <Tooltip content={status === 'changes_pending' ? `Значення змінено з: ${initialValue}` : ''} className="w-full">
      <input className={cn('ui-input', status === 'changes_pending' && 'ui-input--pending', status === 'success' && 'ui-input--success', status === 'error' && 'ui-input--error', className)} value={value} onChange={handleTyping} placeholder={placeholder ?? '...'} ref={inputRef} {...props} />

      {symbolsLimited !== undefined && <p className="absolute right-[8px] top-[50%] translate-y-[-50%] text-grey-new font-space-grotesk text-[12px]" ref={symbolsLimitedRef}>{value?.length} / {symbolsLimited}</p>}
    </Tooltip>}

    {fieldType === 'textarea' && <Tooltip content={status === 'changes_pending' ? `Значення змінено з: ${initialValue}` : ''} className={cn('flex flex-col gap-[4px] items-end', parentClassName)}>
      <textarea className={cn('ui-input', status === 'changes_pending' && 'ui-input--pending', status === 'success' && 'ui-input--success', status === 'error' && 'ui-input--error', className)} value={value} onChange={handleTyping} placeholder={placeholder ?? '...'} ref={textareaRef} {...props} />
      {symbolsLimited !== undefined && <p className="text-grey-new font-space-grotesk text-[12px]">{value?.length} / {symbolsLimited}</p>}
    </Tooltip>}
  </>
}



export default Input;