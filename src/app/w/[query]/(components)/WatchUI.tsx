'use client';

import { NextPage } from 'next';
import { MaterialSymbol, SymbolCodepoints } from 'material-symbols-rc';

import StyledImage from '~/components/Styled/StyledImage';
import { UIReportButton } from '~/components/UI/Report';
import Tooltip from '~/components/UI/Tooltip';
import { H2, P } from '~/components/UI/Typography';
import { useAppSelector } from '~/hooks/redux';
import { DubberCompact } from '~/interfaces/DubberIntf';
import { AnimeFullType } from '~/services/api/anime/GetAnime.api';
import { cn } from '~/utils/classnames';
import { getUTC, timestampToDayMonth } from '~/utils/utils';



interface IWatchGenericProps {
  anime: AnimeFullType
}

interface WatchNextEpisodeProps {
  timestamp: number
}

interface WatchSectionLabelProps {
  label: string
  icon: SymbolCodepoints
}

interface WatchDubberProps {
  dubber: DubberCompact

  posterAdapt?: boolean
}

interface IWatchPlayerProps extends IWatchGenericProps {
  dubbers: DubberCompact[]
}







export const WatchNextEpisode: NextPage<WatchNextEpisodeProps> = ({ timestamp }) => {
  return <Tooltip className="w-full" content="Вказано час та дату виходу епізоду в Японії. Переклад та озвучення вийдуть пізніше.">
    <div className="watch-meta-detail_outlined">
      <MaterialSymbol icon="hourglass_bottom" size={24} className="text-grey-new max-sm:text-[20px]" />

      <div className="flex items-center gap-[8px] flex-wrap">
        <p className="text-grey-new font-manrope max-sm:text-[14px] whitespace-nowrap">Наступна серія вийде:</p>
        <p className="text-white font-manrope max-sm:text-[14px]">
          {`
          ${timestampToDayMonth(timestamp)},
          ${String(getUTC(timestamp).hrs).padStart(2, '0')}:${String(getUTC(timestamp).mins).padStart(2, '0')}
          `}
        </p>
      </div>
    </div>
  </Tooltip>;
};



export const WatchSectionLabel: NextPage<WatchSectionLabelProps> = ({ label, icon }) => {
  return <div className="flex items-center gap-[16px]">
    <MaterialSymbol icon={icon} size={24} className="text-white max-sm:text-[20px]" />

    <h3 className="text-white text-[24px] font-manrope font-bold max-sm:text-[20px]">{label}</h3>
  </div>;
};



export const WatchRating: NextPage<IWatchGenericProps> = ({ anime }) => {
  const scoredByFormatter = Intl.NumberFormat('en', { notation: 'compact' });

  return <>
    <div className="flex items-center gap-[8px]">
      <p className={cn('text-primary text-[24px] font-bold font-space-grotesk max-sm:text-[16px]')}>{anime.score.toFixed(2) ?? '―'}</p>

      <MaterialSymbol icon="star_half" size={24} className={cn(`text-primary max-sm:text-[20px]`)} />
    </div>

    <p className="text-grey-new font-manrope whitespace-nowrap">{anime.scored_by ? scoredByFormatter.format(anime.scored_by) : 'Немає'} оцінок</p>
  </>;
};



/** @deprecated */
export const WatchPlayer: NextPage<IWatchPlayerProps> = (props) => {
  const user = useAppSelector(state => state.user);

  const isDMCARestricted = props.anime.is_DMCA_restricted && !user.id;
  const haveEpisodes = true;

  return <div className="flex flex-col gap-[16px]">
    <div className="w-full h-[90svh] bg-black">
      {isDMCARestricted ? <div className="w-full h-full bg-dark-bright flex justify-center items-center">
        <div className="flex gap-[16px]">
          <MaterialSymbol icon="copyright" size={44} className="text-white" />

          <div className="flex flex-col gap-[8px] w-[300px]">
            <H2 text="DMCA RESTRICTED" bold size={32} />
            <P text="Selected content is infringing copyright and beeing removed from nekomi.club" className="!text-grey-new" />
          </div>
        </div>
      </div> : <>
        {/* {haveEpisodes && <Nekoplayer anime={anime.anime} dubbers={dubbers ?? []} />} */}
        {!haveEpisodes && <div className="w-full h-full bg-dark-bright flex gap-[32px] items-center justify-center px-[32px] py-[40px] rounded-[2px] max-lg:flex-col">
          <StyledImage src={'/assets/cat-standing.png'} width="100%" height="100%" className="shrink-0 rounded-[4px] overflow-hidden !w-[512px] !h-[512px] max-lg:!w-[386px] max-lg:!h-[386px] max-sm:!w-[256px] max-sm:!h-[256px]" />

          <div className="flex flex-col gap-[8px] items-center w-full">
            <p className="text-white text-[40px] font-manrope font-bold max-sm:text-[24px]">А серій нема</p>
            <p className="text-grey-new font-manrope">Отак бува, та...</p>
          </div>
        </div>}
      </>}
    </div>

    {haveEpisodes && !isDMCARestricted && <div className="wrapper items-start">
      <UIReportButton type="text" text="Епізоди завантажені неправильно?" />
    </div>}
  </div>;
};