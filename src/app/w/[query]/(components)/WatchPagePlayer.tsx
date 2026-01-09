'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { MaterialSymbol, SymbolCodepoints } from 'material-symbols-rc';
import Skeleton from 'react-loading-skeleton';

import { HandleClientError } from '~/components/Errors';
import StyledButton from '~/components/Styled/StyledButton';
import StyledImage from '~/components/Styled/StyledImage';
import StyledSelect, { IStyledSelectOption } from '~/components/Styled/StyledSelect';
import { StyledH3, StyledM, StyledS } from '~/components/Styled/StyledTypo';
import { IAnimePlayer, IAnimePlayerTeam } from '~/interfaces/IAnime';
import { DubberCardType } from '~/interfaces/IDubber';
import { StateSetter } from '~/interfaces/types';
import API from '~/services/api/API';
import cn from '~/utils/classnames';



interface IProps {
  animeId: string
}

interface IAnimePlayerDividerProps {
  icon: SymbolCodepoints
  title: string
}

interface IAnimePlayerTeamListProps {
  selectedTeamId: string | null
  setSelectedTeamId: StateSetter<string | null>

  teams: IAnimePlayerTeam[]
  dubbers: DubberCardType[]
}

type AnimeProviderType = 'ashdi' | 'moonanime' | 'tortuga'



const WatchPagePlayer: FC<IProps> = (props) => {
  const [player, setPlayer] = useState<IAnimePlayer>();
  const [dubbers, setDubbers] = useState<DubberCardType[]>([]);
  const [providerOptions, setProviderOptions] = useState<IStyledSelectOption<AnimeProviderType>[]>([
    { slug: 'ashdi', title: 'Ashdi' },
    { slug: 'moonanime', title: 'Moonanime' },
    { slug: 'tortuga', title: 'Tortuga' },
  ]); // TODO: Define available providers at api load
  const [isLoading, setIsLoading] = useState(true);

  const [selectedProvider, setSelectedProvider] = useState<AnimeProviderType | null>('ashdi'); // TODO: Define selected provider at api load
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);



  const videoRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);



  // Handle API load
  useEffect(() => {
    (async function () {
      try {
        const { anime } = await API.getAnime({ query: props.animeId }, { view: 'empty', get_episodes: true });

        setPlayer(anime.player);
        setDubbers(anime.player_teams);

        setIsLoading(false);
      } catch (e) {
        HandleClientError(e);
      }
    })();
  }, []);

  // Handle settings max height
  useEffect(() => {
    const video = videoRef.current;
    const settings = settingsRef.current;
    if (!video || !settings) return;

    const observer = new ResizeObserver(() => {
      settings.style.maxHeight = `${video.offsetHeight}px`;
    });

    observer.observe(video);
  }, [isLoading]);

  useEffect(() => console.log(selectedTeamId), [selectedTeamId]);



  function nextEpisode() {

  }



  return isLoading ? <Skeleton width={'100%'} height={'80vh'} /> : <section className="wp-player_layer">
    <div className="wp-player">
      <div className="wp-player_video" ref={videoRef}></div>

      <article className="wp-player_settings" ref={settingsRef}>
        <div className="wp-player_preferences">
          {/* Player select */}
          <div className="wp-player-selectProvider">
            <div className="wp-player-selectProvider_legend">
              <MaterialSymbol icon="movie" color="var(--color-text)" size={20} />
              <StyledH3 text={`Плеер:`} color="text" />
            </div>

            {!selectedProvider && <Skeleton width={'100%'} height={38} />}
            {selectedProvider && <StyledSelect opts={providerOptions} slug={selectedProvider} setSlug={setSelectedProvider} />}
          </div>

          {/* Divider */}
          <div className="wp-player-divider_line"></div>

          {/* Select dubber */}
          {player?.dubbed && player?.dubbed.length > 0 && <AnimePlayerTeamList teams={player.dubbed} dubbers={dubbers} selectedTeamId={selectedTeamId} setSelectedTeamId={setSelectedTeamId} />}

          {/* Select subber */}
          {player?.subbed && player?.subbed.length > 0 && <div className="wp-player-subs">
            <AnimePlayerDivider icon="closed_caption" title="Субтитри" />

            <AnimePlayerTeamList teams={player.subbed} dubbers={dubbers} selectedTeamId={selectedTeamId} setSelectedTeamId={setSelectedTeamId} />
          </div>}
        </div>

        {/* Next episode */}
        <div className="wp-player-next_layer">
          <AnimePlayerDivider icon="autoplay" title="Наступний епізод" />

          <article className="wp-player-next">
            <button className="wp-player-next_screenshot" onClick={nextEpisode}>
              <StyledImage src="https://cdn.nekomi.club/26585c1e-e49d-46b0-a703-f9bee858f25a" width="200px" height="auto" className="wp-player-next_image" rounded={4} />
            </button>

            <div className="wp-player-next_content">
              <div className="wp-player-next_titles">
                <StyledM text={`Я одружуюся з дівчиною, яку ненавиджу в своєму класі`} color="text" lineClamp={3} />
              </div>

              <StyledButton icon="arrow_right_alt" text={`7 епізод`} style="secondary" iconProps={{ type: 'rounded' }} onClick={nextEpisode} />
            </div>
          </article>
        </div>
      </article>
    </div>

    <ul className="wrapper wp-player_episodes">
      <Episode />
    </ul>
  </section>;
};

export default WatchPagePlayer;





const AnimePlayerDivider: FC<IAnimePlayerDividerProps> = (props) => {
  return <div className="wp-player-divider">
    <div className="wp-player-divider_line wp-player-divider_line--start"></div>

    <div className="wp-player-divider-title">
      <MaterialSymbol icon={props.icon} color="var(--color-text-muted)" size={18} />
      <StyledS text={props.title} color="text-muted" />
    </div>

    <div className="wp-player-divider_line"></div>
  </div>;
};



const AnimePlayerTeamList: FC<IAnimePlayerTeamListProps> = (props) => {
  return <section className="wp-player_teams">
    {props.teams.map((team, i) => {
      const isSelected = false;

      return <StyledButton className={cn(`wp-player-team`, isSelected && 'wp-player-team--selected')} onClick={() => props.setSelectedTeamId(team.id)} key={`wp-player-teams--${team.id}-team--${i}`}>
        <div className="wp-player-team_info">
          {/* Avatars */}
          <div></div>

          <StyledM text={team.dubber_name} color="text" lineClamp={1} title={team.dubber_name} />
        </div>

        {/* Info */}
        <div className="wp-player-team_info">
          {team.vods.length && <StyledS text={`${team.vods.length} еп.`} fontWeight={600} color="accent" className="wp-player-team_episodesReleased" />}

          {isSelected && <MaterialSymbol icon="stat_0" size={16} color="var(--color-accent)" />}
        </div>
      </StyledButton>;
    })}
  </section>;
};



const Episode: FC = () => {
  return <li>1</li>;
};


// {/* Player */}
// {player && <></>}

// {/* Finished without player */}
// {isFinished && !player && <div className="w-full h-full bg-dark-bright flex gap-[32px] items-center justify-center px-[32px] py-[40px] rounded-[2px] max-lg:flex-col">
//   <StyledImage src={'/assets/cat-standing.png'} width="100%" height="100%" className="shrink-0 rounded-[4px] overflow-hidden !w-[512px] !h-[512px] max-lg:!w-[386px] max-lg:!h-[386px] max-sm:!w-[256px] max-sm:!h-[256px]" />

//   <div className="flex flex-col gap-[8px] items-center w-full">
//     <p className="text-white text-[40px] font-manrope font-bold max-sm:text-[24px]">Серії відсутні</p>
//     <p className="text-grey-new font-manrope">Або при завантаженні плеера сталась помилка</p>
//   </div>
// </div>}

// {/* Loading ... */}
// {!isFinished && <Skeleton width={'100%'} height={'100%'} />}