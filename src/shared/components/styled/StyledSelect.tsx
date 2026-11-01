'use client';

import { FC, Fragment, useId, useMemo, useState } from 'react';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import { MaterialSymbol } from 'material-symbols-rc';

import { StateSetter } from '~/shared/types/types';
import cn from '~/utils/classnames';
import { isEmpty } from '~/utils/utils';

import StyledButton from './StyledButton';
import { StyledM } from './StyledText';



export interface IStyledSelectProps {
  slug: string
  setSlug: StateSetter<any>

  options: IStyledSelectOption<string>[]

  disabled?: boolean
  className?: string

  triggerContent?: FC
  optionContent?: FC<IStyledSelectOptionContentProps>
}

export interface IStyledSelectOptionContentProps {
  option: IStyledSelectOption
}



export interface IStyledSelectOption<T = string> {
  slug: T
  title: string
}



/**
 * Styled select component
 * Will force disabled when: disabled prop specified, empty options array or options length equals 1
 */
const StyledSelect: FC<IStyledSelectProps> = (props) => {
  const id = useId();

  const [isExpanded, setIsExpanded] = useState(false);

  const disabled = useMemo(() => {
    return props.disabled || isEmpty(props.options) || props.options.length === 1;
  }, [props.disabled, props.options]);



  return <Menu id={id} className={cn(`sui-select_menu`, props.className)} settings={{ animation: 'slide', align: 'stretch' }
  } state={isExpanded} stateSetter={setIsExpanded} disabled={disabled} >
    <MenuTrigger className="sui-select-trigger" anchor>
      <StyledButton as="div" className="sui-select_button" disabled={disabled}>
        {props.triggerContent && <props.triggerContent />}
        {!props.triggerContent && <StyledM text={props.options.find(el => el.slug === props.slug)?.title ?? 'N/A'} color={disabled ? 'text-muted' : 'text'} lineClamp={1} />}

        <MaterialSymbol icon="expand_all" size={16} color="var(--color-text-muted)" className={cn(`sui-select-trigger_arrow`)} />
      </StyledButton>
    </MenuTrigger>

    <MenuWrapper className="sui-select-menu">
      {props.options.map((option, i) => {
        const isSelected = option.slug === props.slug;

        return <Fragment key={`sui-select--${id}-opt--${i}`}>
          {props.optionContent && <props.optionContent option={option} />}
          {!props.optionContent && <StyledButton className={cn(`sui-select-menu_option`, isSelected && 'sui-select-menu_option--selected')} onClick={() => props.setSlug(option.slug)}>
            <StyledM text={option.title} lineClamp={1} color="text" />
          </StyledButton>}
        </Fragment>;
      })}
    </MenuWrapper>
  </ Menu>;
};

export default StyledSelect;