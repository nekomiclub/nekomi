'use client';

import { FC, useId, useState } from 'react';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import { MaterialSymbol } from 'material-symbols-rc';

import { StateSetter } from '~/interfaces/types';
import cn from '~/utils/classnames';

import StyledButton from './StyledButton';
import { StyledM } from './StyledTypo';



export interface IStyledSelectOption<T extends string> {
  slug: T
  title: string
}

interface IProps {
  slug: string
  setSlug: StateSetter<any>

  options: IStyledSelectOption<string>[]

  disabled?: boolean
}



const StyledSelect: FC<IProps> = (props) => {
  const id = useId();

  const [isExpanded, setIsExpanded] = useState(false);

  const disabled = props.disabled || !props.options.length || props.options.length === 1;



  return <Menu id={id} className="styled-select_menu" settings={{ animation: 'slide', align: 'stretch' }
  } state={isExpanded} stateSetter={setIsExpanded} disabled={disabled} >
    <MenuTrigger className="styled-select-trigger" anchor>
      <StyledButton as="div" className="styled-select_button" disabled={disabled}>
        <StyledM text={props.options.find(el => el.slug === props.slug)?.title ?? 'N/A'} color={disabled ? 'text-muted' : 'text'} lineClamp={1} />

        <MaterialSymbol icon="expand_all" size={16} color="var(--color-text-muted)" className={cn(`styled-select-trigger_arrow`)} />
      </StyledButton>
    </MenuTrigger>

    <MenuWrapper className="styled-select-menu">
      {props.options.map((opt, i) => {
        const isSelected = opt.slug === props.slug;

        return <StyledButton text={opt.title} className={cn(`styled-select-menu_option`, isSelected && 'styled-select-menu_option--selected')} key={`styled-select--${id}-opt--${i}`} onClick={() => props.setSlug(opt.slug)} textProps={{ lineClamp: 1 }} />;
      })}
    </MenuWrapper>
  </ Menu>;
};

export default StyledSelect;