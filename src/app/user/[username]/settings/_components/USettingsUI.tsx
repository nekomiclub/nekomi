'use client';

import { FC } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';

import { USettingsLinkSocialStatusType } from '~/app/user/[username]/settings/USettingsPageData';
import StyledButtonOld from '~/components/styled/StyledButton.old';
import Tooltip from '~/components/Tooltip';
import { H3, P } from '~/components/UI/Typography';
import cn from '~/utils/classnames';



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



/** @deprecated */
export const USettingsLink: FC<IUSettingsLinkProps> = (props) => {
  let statusText = `~~~`;

  if (props.status === 'not_connected') statusText = `${props.name} не прив'язано`;
  if (props.status === 'connecting') statusText = `Продовжуйте в ${props.name}`;
  if (props.status === 'error') statusText = `Помилка з'єднання з ${props.name}`;
  if (props.status === 'connected') statusText = `${props.name} прив'язано`;



  return <div className={cn(`flex items-center gap-[8px]`)}>
    <div className={cn(`p-[12px] rounded-[4px] duration-200`, props.status === 'not_connected' && 'bg-dark-medium', props.status === 'connecting' && 'bg-info-warn', props.status === 'error' && 'bg-info-error', props.status === 'connected' && 'bg-info-success')}>
      <P text={statusText} />
    </div>

    {/* Link */}
    {props.status === 'not_connected' && <StyledButtonOld onClick={props.onLink} className="w-[48px] h-[48px]">
      <MaterialSymbol icon="add_link" size={20} className="text-white" />
    </StyledButtonOld>}

    {/* Unlink */}
    {props.status === 'connected' && <StyledButtonOld onClick={props.onUnlink} className="w-[48px] h-[48px]">
      <MaterialSymbol icon="link_off" size={20} className="text-white" />
    </StyledButtonOld>}
  </div>;
};



export const USettingsGroup: FC<ISettingsGroupProps> = (props) => {
  return <div className="w-full flex justify-between pt-[16px] border-t border-dark-light gap-[16px] max-lg:flex-col">
    <div className="w-[300px] flex flex-col gap-[4px] shrink-0 max-lg:w-auto">
      <H3 text={props.title} size={24} className="text-white" bold />
      {props.description && <P text={props.description} className="text-grey-new" />}
    </div>

    {props.children}
  </div>;
};



export const USettingsControls: FC<IControlsProps> = (props) => {
  const isDisabled = props.isSaving || !props.isSomethingChanged;

  return <Tooltip content={!props.isSomethingChanged ? 'Відсутні зміни' : props.isSaving ? 'Зберігаємо..' : ''} className="flex gap-[8px] max-md:w-full">
    <button className={cn('p-[8px] border border-dark-light duration-200 rounded-[4px] hover:bg-dark-light focus-visible:bg-dark-light max-md:w-full', isDisabled && 'cursor-not-allowed')} disabled={isDisabled} onClick={props.resetChanges}>
      <p className={cn('font-manrope duration-200 whitespace-nowrap', !isDisabled ? 'text-white' : 'text-grey-new')}>Відхилити</p>
    </button>

    <button className={cn('flex gap-[16px] items-center justify-center w-[190px] shrink-0 px-[16px] py-[8px] border border-dark-light bg-dark-medium duration-200 rounded-[4px] hover:bg-dark-light focus-visible:bg-dark-light', isDisabled && 'cursor-not-allowed', props.isSaving && '!cursor-wait')} disabled={isDisabled} onClick={props.saveChanges}>
      <div className="w-[20px] h-[20px] relative max-md:w-full">
        <MaterialSymbol icon="update" size={20} className={cn(`absolute top-0 left-0 duration-200`, !isDisabled ? 'text-white' : 'text-grey-new', props.isSaving && 'opacity-0')} />
        <MaterialSymbol icon="clock_loader_40" size={20} className={cn(`absolute top-0 left-0 duration-200`, !props.isSaving && 'opacity-0')} color="#555" />
      </div>

      <p className={cn('font-manrope duration-200 whitespace-nowrap', !isDisabled ? 'text-white' : 'text-grey-new')}>
        {props.isSaving && 'Зберігаємо...'}
        {!props.isSaving && 'Зберегти зміни'}
      </p>
    </button>
  </Tooltip>;
};