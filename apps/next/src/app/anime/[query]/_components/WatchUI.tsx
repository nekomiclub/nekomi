'use client';

import { NextPage } from 'next';
import { FC } from 'react';
import TMaterialSymbolName from '@nekomi/icons/types';

import StyledIcon from '~/shared/components/styled/StyledIcon';
import { StyledH2, StyledH3 } from '~/shared/components/styled/StyledText';
import Tooltip from '~/shared/components/Tooltip';
import { TAnime } from '~/shared/lib/api/api-types';
import { cn } from '~/shared/utilities/classnames';
import { getUTC, timestampToDayMonth } from '~/shared/utilities/utilities';



interface IWatchGenericProps {
  anime: TAnime
}

interface WatchNextEpisodeProps {
  timestamp: number
}

interface WatchSectionLabelProps {
  label: string
  icon: TMaterialSymbolName
}

interface IAnimeGroupTitleProps {
  title: string
  icon: TMaterialSymbolName

  /** @default "h2" */
  size?: 'h2' | 'h3'
}



export const WatchNextEpisode: FC<WatchNextEpisodeProps> = ({ timestamp }) => {
  return <Tooltip className="w-full" content="Вказано час та дату виходу епізоду в Японії. Переклад та озвучення вийдуть пізніше.">
    <div className="watch-meta-detail_outlined">
      <StyledIcon icon="HourglassBottom" size={24} color="#555 max-sm:w-[20px] max-sm:h-[20px]" />

      <div className="flex items-center gap-[8px] flex-wrap">
        <p className="text-grey-new  max-sm:text-[14px] whitespace-nowrap">Наступна серія вийде:</p>
        <p className="text-white  max-sm:text-[14px]">
          {`
          ${timestampToDayMonth(timestamp)},
          ${String(getUTC(timestamp).hrs).padStart(2, '0')}:${String(getUTC(timestamp).mins).padStart(2, '0')}
          `}
        </p>
      </div>
    </div>
  </Tooltip>;
};



export const WatchSectionLabel: FC<WatchSectionLabelProps> = ({ label, icon }) => {
  return <div className="flex items-center gap-[16px]">
    <StyledIcon icon={icon} size={24} color="#fff max-sm:w-[20px] max-sm:h-[20px]" />

    <h3 className="text-white text-[24px]  font-bold max-sm:text-[20px]">{label}</h3>
  </div>;
};



export const WatchRating: NextPage<IWatchGenericProps> = ({ anime }) => {
  const scoredByFormatter = Intl.NumberFormat('en', { notation: 'compact' });

  return <>
    <div className="flex items-center gap-[8px]">
      <p className={cn('text-primary text-[24px] font-bold  max-sm:text-[16px]')}>{anime.score.toFixed(2) ?? '―'}</p>

      <StyledIcon icon="StarHalf" size={24} color="#ff464e max-sm:w-[20px] max-sm:h-[20px]" />
    </div>

    <p className="text-grey-new  whitespace-nowrap">{anime.scored_by ? scoredByFormatter.format(anime.scored_by) : 'Немає'} оцінок</p>
  </>;
};



export const AnimePlayerGroupTitle: FC<IAnimeGroupTitleProps> = (props) => {
  const size = props.size ?? 'h2';

  return <div className="ap-gt">
    <StyledIcon icon={props.icon} size={size === 'h2' ? 24 : 18} color="#fff" />

    {size === 'h2' && <StyledH2 text={props.title} color="text" />}
    {size === 'h3' && <StyledH3 text={props.title} color="text" />}
  </div>;
};
