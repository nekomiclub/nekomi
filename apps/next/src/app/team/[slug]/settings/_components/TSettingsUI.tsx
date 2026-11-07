'use client';

import { FC } from 'react';

import { IcoSocialInstagram, IcoSocialTelegram, IcoSocialTiktok, IcoSocialYoutube, IcoSupportByMeACoffee, IcoSupportDiaka, IcoSupportMonobank, IcoSupportPatreon } from '~/shared/components/Icons';
import StyledIcon from '~/shared/components/styled/StyledIcon';
import { StyledH3, StyledM } from '~/shared/components/styled/StyledText';
import Tooltip from '~/shared/components/Tooltip';
import { UIField, UIFieldState } from '~/shared/components/UI/Input';
import { TTeam } from '~/shared/lib/api/api-types';
import { cn } from '~/shared/utilities/classnames';



interface ITSettingsLinkProps {
  state: UIFieldState
  setState: (val: UIFieldState) => void
  type: keyof TTeam['socials'] | keyof TTeam['support']
}

interface ITSettingsControlsProps {
  resetChanges: () => void
  saveChanges: () => void
  isSomethingChanged: boolean
  isSaving: boolean
}

interface ITSettingsGroupProps {
  title: string
  description: string
  children: React.ReactNode
}







export const TSettingLink: FC<ITSettingsLinkProps> = (props) => {
  let placeholder: string | undefined = undefined;



  if (props.type === 'telegram') placeholder = 't.me';
  if (props.type === 'instagram') placeholder = 'instagram.com';
  if (props.type === 'tiktok') placeholder = 'tiktok.com';
  if (props.type === 'youtube') placeholder = 'youtube.com';
  if (props.type === 'patreon') placeholder = 'patreon.com';
  if (props.type === 'bymeacoffee') placeholder = 'buymeacoffee.com';
  if (props.type === 'monobank') placeholder = 'send.monobank.ua';
  if (props.type === 'diaka') placeholder = 'diaka.ua';



  return <div className="flex w-full">
    <div className="w-[42px] h-[42px] flex justify-center items-center bg-dark-medium shrink-0 rounded-l-[4px]">
      {props.type === 'telegram' && <IcoSocialTelegram width={24} height={24} fill="#fff" />}
      {props.type === 'instagram' && <IcoSocialInstagram width={24} height={24} fill="#fff" />}
      {props.type === 'tiktok' && <IcoSocialTiktok width={24} height={24} fill="#fff" />}
      {props.type === 'youtube' && <IcoSocialYoutube width={24} height={24} fill="#fff" />}

      {props.type === 'patreon' && <IcoSupportPatreon width={24} height={24} fill="#fff" />}
      {props.type === 'bymeacoffee' && <IcoSupportByMeACoffee width={24} height={24} fill="#fff" />}
      {props.type === 'monobank' && <IcoSupportMonobank width={24} height={24} />}
      {props.type === 'diaka' && <IcoSupportDiaka width={24} height={24} />}
    </div>

    <UIField fieldType="input" state={props.state} stateSetter={props.setState} className="rounded-l-none border-dark-medium " placeholder={placeholder} type="url" />
  </div>;
};



export const TSettingsControls: FC<ITSettingsControlsProps> = (props) => {
  const isDisabled = props.isSaving || !props.isSomethingChanged;

  return <Tooltip content={!props.isSomethingChanged ? 'Відсутні зміни' : props.isSaving ? 'Зберігаємо..' : ''} className="flex gap-[8px] max-md:w-full">
    <button className={cn('p-[8px] border border-dark-light duration-200 rounded-[4px] hover:bg-dark-light focus-visible:bg-dark-light max-md:w-full', isDisabled && 'cursor-not-allowed')} disabled={isDisabled} onClick={props.resetChanges}>
      <p className={cn(' duration-200 whitespace-nowrap', !isDisabled ? 'text-white' : 'text-grey-new')}>Відхилити</p>
    </button>

    <button className={cn('flex gap-[16px] items-center justify-center w-[190px] shrink-0 px-[16px] py-[8px] border border-dark-light bg-dark-medium duration-200 rounded-[4px] hover:bg-dark-light focus-visible:bg-dark-light', isDisabled && 'cursor-not-allowed', props.isSaving && '!cursor-wait')} disabled={isDisabled} onClick={props.saveChanges}>
      <div className="w-[20px] h-[20px] relative max-md:w-full">
        <StyledIcon icon="Update" size={20} color={!isDisabled ? '#fff' : '#555'} className={cn(`absolute inset-0 duration-200`, props.isSaving && 'opacity-0')} />
        <StyledIcon icon="ClockLoader40" size={20} color="#555" className={cn(`absolute inset-0 duration-200`, !props.isSaving && 'opacity-0')} />
      </div>

      <p className={cn(' duration-200 whitespace-nowrap', !isDisabled ? 'text-white' : 'text-grey-new')}>
        {props.isSaving && 'Зберігаємо...'}
        {!props.isSaving && 'Зберегти зміни'}
      </p>
    </button>
  </Tooltip>;
};



export const TSettingsGroup: FC<ITSettingsGroupProps> = (props) => {
  return <div className="w-full flex justify-between pt-[24px] border-t border-dark-light gap-[16px] max-lg:flex-col">
    <div className="w-[300px] flex flex-col gap-[4px] shrink-0 max-lg:w-auto">
      <StyledH3 text={props.title} className="text-[24px]" bold />
      <StyledM text={props.description} color="text-muted" />
    </div>

    {props.children}
  </div>;
};