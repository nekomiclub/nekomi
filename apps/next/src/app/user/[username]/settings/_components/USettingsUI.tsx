'use client';

import { FC } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';

import { USettingsLinkSocialStatusType } from '~/app/user/[username]/settings/USettingsPageData';
import { StyledH3, StyledM } from '~/shared/components/styled/StyledText';
import Tooltip from '~/shared/components/Tooltip';
import cn from '~/shared/utilities/classnames';



interface IUSettingsLinkProps {
  name: string
  status: USettingsLinkSocialStatusType
  onLink(): Promise<void>
  onUnlink(): Promise<void>
}

interface ISettingsGroupProps {
  title: string
  children: React.ReactNode

  description?: string
}

interface IControlsProps {
  resetChanges: () => void
  saveChanges: () => void
  isSomethingChanged: boolean
  isSaving: boolean
}



export const USettingsGroup: FC<ISettingsGroupProps> = (props) => {
  return <div className="w-full flex justify-between pt-[16px] border-t border-dark-light gap-[16px] max-lg:flex-col">
    <div className="w-[300px] flex flex-col gap-[4px] shrink-0 max-lg:w-auto">
      <StyledH3 text={props.title} className="text-[24px]" bold />
      {props.description && <StyledM text={props.description} color="text-muted" />}
    </div>

    {props.children}
  </div>;
};



export const USettingsControls: FC<IControlsProps> = (props) => {
  const isDisabled = props.isSaving || !props.isSomethingChanged;

  return <Tooltip content={!props.isSomethingChanged ? 'Відсутні зміни' : props.isSaving ? 'Зберігаємо..' : ''} className="flex gap-[8px] max-md:w-full">
    <button className={cn('p-[8px] border border-dark-light duration-200 rounded-[4px] hover:bg-dark-light focus-visible:bg-dark-light max-md:w-full', isDisabled && 'cursor-not-allowed')} disabled={isDisabled} onClick={props.resetChanges}>
      <p className={cn(' duration-200 whitespace-nowrap', !isDisabled ? 'text-white' : 'text-grey-new')}>Відхилити</p>
    </button>

    <button className={cn('flex gap-[16px] items-center justify-center w-[190px] shrink-0 px-[16px] py-[8px] border border-dark-light bg-dark-medium duration-200 rounded-[4px] hover:bg-dark-light focus-visible:bg-dark-light', isDisabled && 'cursor-not-allowed', props.isSaving && '!cursor-wait')} disabled={isDisabled} onClick={props.saveChanges}>
      <div className="w-[20px] h-[20px] relative max-md:w-full">
        <MaterialSymbol icon="update" size={20} className={cn(`absolute top-0 left-0 duration-200`, !isDisabled ? 'text-white' : 'text-grey-new', props.isSaving && 'opacity-0')} />
        <MaterialSymbol icon="clock_loader_40" size={20} className={cn(`absolute top-0 left-0 duration-200`, !props.isSaving && 'opacity-0')} color="#555" />
      </div>

      <p className={cn(' duration-200 whitespace-nowrap', !isDisabled ? 'text-white' : 'text-grey-new')}>
        {props.isSaving && 'Зберігаємо...'}
        {!props.isSaving && 'Зберегти зміни'}
      </p>
    </button>
  </Tooltip>;
};