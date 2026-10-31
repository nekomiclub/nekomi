'use client';

import { NextPage } from 'next';
import { FC } from 'react';
import { MaterialSymbol, SymbolCodepoints } from 'material-symbols-rc';

import { StyledH2, StyledH3 } from '~/components/styled/StyledText';
import Tooltip from '~/components/Tooltip';
import { TAnime } from '~/shared/lib/api/api-types';
import { cn } from '~/utils/classnames';
import { getUTC, timestampToDayMonth } from '~/utils/utils';



interface IWatchGenericProps {
  anime: TAnime
}

interface WatchNextEpisodeProps {
  timestamp: number
}

interface WatchSectionLabelProps {
  label: string
  icon: SymbolCodepoints
}

interface IAnimeGroupTitleProps {
  title: string
  icon: SymbolCodepoints

  /** @default "h2" */
  size?: 'h2' | 'h3'
}



export const WatchNextEpisode: FC<WatchNextEpisodeProps> = ({ timestamp }) => {
  return <Tooltip className="w-full" content="Вказано час та дату виходу епізоду в Японії. Переклад та озвучення вийдуть пізніше.">
    <div className="watch-meta-detail_outlined">
      <MaterialSymbol icon="hourglass_bottom" size={24} className="text-grey-new max-sm:text-[20px]" />

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
    <MaterialSymbol icon={icon} size={24} className="text-white max-sm:text-[20px]" />

    <h3 className="text-white text-[24px]  font-bold max-sm:text-[20px]">{label}</h3>
  </div>;
};



export const WatchRating: NextPage<IWatchGenericProps> = ({ anime }) => {
  const scoredByFormatter = Intl.NumberFormat('en', { notation: 'compact' });

  return <>
    <div className="flex items-center gap-[8px]">
      <p className={cn('text-primary text-[24px] font-bold  max-sm:text-[16px]')}>{anime.score.toFixed(2) ?? '―'}</p>

      <MaterialSymbol icon="star_half" size={24} className={cn(`text-primary max-sm:text-[20px]`)} />
    </div>

    <p className="text-grey-new  whitespace-nowrap">{anime.scored_by ? scoredByFormatter.format(anime.scored_by) : 'Немає'} оцінок</p>
  </>;
};



export const AnimePlayerGroupTitle: FC<IAnimeGroupTitleProps> = (props) => {
  const size = props.size ?? 'h2';

  return <div className="ap-gt">
    <MaterialSymbol icon={props.icon} color="var(--color-text)" size={size === 'h2' ? 24 : 18} />

    {size === 'h2' && <StyledH2 text={props.title} color="text" />}
    {size === 'h3' && <StyledH3 text={props.title} color="text" />}
  </div>;
};
