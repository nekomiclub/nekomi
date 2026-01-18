'use client';

import { FC, Fragment, useId, useMemo, useState } from 'react';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import { MaterialSymbol } from 'material-symbols-rc';

import { StateSetter } from '~/interfaces/types';
import cn from '~/utils/classnames';

import StyledButton from './StyledButton';
import { StyledM } from './StyledTypo';



interface IProps {
  slug: string
  setSlug: StateSetter<any>

  options: IStyledSelectOption<string>[]

  disabled?: boolean
  className?: string

  triggerContent?: FC
  optionContent?: FC<IStyledSelectOptionContentProps>
}



export interface IStyledSelectOption<T = string> {
  slug: T
  title: string
}

export interface IStyledSelectOptionContentProps {
  option: IStyledSelectOption
}



const StyledSelect: FC<IProps> = (props) => {
  const id = useId();

  const [isExpanded, setIsExpanded] = useState(false);

  const disabled = useMemo(() => {
    return props.disabled || !props.options.length || props.options.length === 1;
  }, [props.disabled, props.options]);



  return <Menu id={id} className={cn(`styled-select_menu`, props.className)} settings={{ animation: 'slide', align: 'stretch' }
  } state={isExpanded} stateSetter={setIsExpanded} disabled={disabled} >
    <MenuTrigger className="styled-select-trigger" anchor>
      <StyledButton as="div" className="styled-select_button" disabled={disabled}>
        {props.triggerContent && <props.triggerContent />}
        {!props.triggerContent && <StyledM text={props.options.find(el => el.slug === props.slug)?.title ?? 'N/A'} color={disabled ? 'text-muted' : 'text'} lineClamp={1} />}

        <MaterialSymbol icon="expand_all" size={16} color="var(--color-text-muted)" className={cn(`styled-select-trigger_arrow`)} />
      </StyledButton>
    </MenuTrigger>

    <MenuWrapper className="styled-select-menu">
      {props.options.map((option, i) => {
        const isSelected = option.slug === props.slug;

        return <Fragment key={`styled-select--${id}-opt--${i}`}>
          {props.optionContent && <props.optionContent option={option} />}
          {!props.optionContent && <StyledButton className={cn(`styled-select-menu_option`, isSelected && 'styled-select-menu_option--selected')} onClick={() => props.setSlug(option.slug)}>
            <StyledM text={option.title} lineClamp={1} color="text" />
          </StyledButton>}
        </Fragment>;
      })}
    </MenuWrapper>
  </ Menu>;
};

export default StyledSelect;