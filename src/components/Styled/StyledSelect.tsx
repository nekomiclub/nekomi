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

  opts: IStyledSelectOption<string>[]
}



const StyledSelect: FC<IProps> = (props) => {
  const id = useId();

  const [isExpanded, setIsExpanded] = useState(false);



  return <Menu id={id} className="styled-select_menu" settings={{ animation: 'slide', align: 'stretch', closeOn: 'both' }} state={isExpanded} stateSetter={setIsExpanded}>
    <MenuTrigger className="styled-select-trigger" anchor>
      <StyledButton as="div" className="styled-select_button">
        <StyledM text={props.opts.find(el => el.slug === props.slug)?.title ?? '~~~'} color="text" lineClamp={1} />

        <MaterialSymbol icon="keyboard_arrow_down" size={16} color="var(--color-text-muted)" className={cn(`styled-select-trigger_arrow`, isExpanded && 'styled-select-trigger_arrow--expanded')} />
      </StyledButton>
    </MenuTrigger>

    <MenuWrapper className="styled-select-menu">
      {props.opts.map((opt, i) => {
        return <StyledButton text={opt.title} className="styled-select-menu_option" key={`styled-select--${id}-opt--${i}`} onClick={() => props.setSlug(opt.slug)} textProps={{ lineClamp: 1 }} />;
      })}
    </MenuWrapper>
  </Menu>;
};

export default StyledSelect;