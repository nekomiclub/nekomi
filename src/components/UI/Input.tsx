import { NextPage } from 'next';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

import Tooltip from '~/components/Tooltip';
import { cn } from '~/utils/classnames';



export interface UIFieldState {
  readonly initialValue: string | null

  value?: string
  status?: 'waiting' | 'changes_pending' | 'success' | 'error'

  /** Indicates if value has been changed */
  readonly mutated?: boolean
  /** Contain value if it is different from initial or undefined if not  */
  readonly newValue?: string
}

export interface UIFieldProps extends React.InputHTMLAttributes<HTMLElement> {
  state: UIFieldState
  stateSetter(prop: UIFieldState): void
  fieldType?: 'input' | 'textarea'

  /** Disable pending status when field value has been changed */
  disablePending?: boolean
  /** Limit symbols count */
  symbolsLimited?: number
  parentClassName?: string
}



export const UIField: NextPage<UIFieldProps> = ({ state, stateSetter, className, placeholder, disablePending, symbolsLimited, fieldType, parentClassName, disabled, ...props }) => {
  fieldType = fieldType ?? 'input';

  const [initialValue, setInitialValue] = useState<string>(state.value ?? state.initialValue ?? '');
  const [value, setValue] = useState<string>(initialValue);
  const [status, setStatus] = useState<UIFieldState['status']>(state.status);

  const inputRef = useRef<HTMLInputElement>(null);
  const symbolsLimitedRef = useRef<HTMLParagraphElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);



  // Field type: input
  useEffect(() => {
    if (fieldType !== 'input') return;

    const input = inputRef.current;
    const symbolsLimitedParent = symbolsLimitedRef.current;
    if (!input || !symbolsLimitedParent) return;

    if (symbolsLimited !== undefined) {
      input.style.paddingRight = `${24 + symbolsLimitedParent.offsetWidth}px`;
    }
  }, []);

  // Field type: textarea
  useEffect(() => {
    if (fieldType !== 'textarea') return;

    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = ``;
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);

  useEffect(() => {
    setValue(state.value ?? state.initialValue ?? '');
    setStatus(state.status);

    if (state.status === 'success') {
      setInitialValue(state.value ?? '');
    }
  }, [state]);



  function handleTyping(e: ChangeEvent) {
    if (status === 'success') return;

    const value = (e.target as HTMLInputElement).value;
    const mutated = value !== initialValue;

    setValue(value);

    if (value === initialValue) {
      return stateSetter({
        value,
        mutated,
        newValue: mutated ? value : undefined,
        initialValue,
        status: 'waiting',
      });
    }

    if (symbolsLimited && value.length > symbolsLimited) {
      return stateSetter({
        value,
        mutated,
        newValue: mutated ? value : undefined,
        initialValue,
        status: 'error',
      });
    }

    if (!disablePending) {
      return stateSetter({
        value,
        mutated,
        newValue: mutated ? value : undefined,
        initialValue,
        status: 'changes_pending',
      });
    } else {
      return stateSetter({
        value,
        mutated,
        newValue: mutated ? value : undefined,
        initialValue,
        status: 'waiting',
      });
    }
  }

  function handleMousewheel(e: React.WheelEvent) {
    // Prevent the input value change
    // @ts-ignore
    e.target.blur();

    // Prevent the page/container scrolling
    e.stopPropagation();

    // Refocus immediately, on the next tick (after the current function is done)
    setTimeout(() => {
      // @ts-ignore
      e.target.focus();
    }, 0);
  }



  return <>
    {fieldType === 'input' && <Tooltip content={status === 'changes_pending' ? `Значення змінено з: ${initialValue}` : ''} className="w-full">
      <input
        className={cn(
          'ui-input',
          status === 'changes_pending' && 'ui-input--pending',
          status === 'success' && 'ui-input--success',
          status === 'error' && 'ui-input--error',
          disabled && 'ui-input--disabled',
          className
        )}
        value={value}
        onChange={handleTyping}
        onWheel={handleMousewheel}
        placeholder={placeholder ?? '...'}
        disabled={disabled}
        ref={inputRef}
        {...props}
      />

      {symbolsLimited !== undefined && <p className={cn('duration-200 absolute right-[8px] top-[50%] translate-y-[-50%] text-[12px]', value?.length > symbolsLimited ? 'text-info-error' : 'text-grey-new')} ref={symbolsLimitedRef}>{value?.length} / {symbolsLimited}</p>}
    </Tooltip>}

    {fieldType === 'textarea' && <Tooltip content={status === 'changes_pending' ? `Значення змінено з: ${initialValue}` : ''} className={cn('flex flex-col gap-[4px] items-end', parentClassName)}>
      <textarea
        className={cn(
          'ui-input',
          status === 'changes_pending' && 'ui-input--pending',
          status === 'success' && 'ui-input--success',
          status === 'error' && 'ui-input--error',
          disabled && 'ui-input--disabled',
          className
        )}
        value={value}
        onChange={handleTyping}
        placeholder={placeholder ?? '...'}
        disabled={disabled}
        ref={textareaRef}
        {...props}
      />
      {symbolsLimited !== undefined && <p className={cn('duration-200 text-[12px]', value?.length > symbolsLimited ? 'text-info-error' : 'text-grey-new')}>{value?.length} / {symbolsLimited}</p>}
    </Tooltip>}
  </>;
};