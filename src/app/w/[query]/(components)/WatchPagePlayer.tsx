'use client';

import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { MaterialSymbol, SymbolCodepoints } from 'material-symbols-rc';
import Skeleton from 'react-loading-skeleton';

import StyledAvatar from '~/components/Styled/StyledAvatar';
import StyledButton from '~/components/Styled/StyledButton';
import StyledImage from '~/components/Styled/StyledImage';
import StyledSelect, { IStyledSelectOption } from '~/components/Styled/StyledSelect';
import { StyledH3, StyledM, StyledS } from '~/components/Styled/StyledTypo';
import { NotifyWarn } from '~/components/UI/NotifyToast';
import { IAnimeEpisode, IAnimePlayer, IAnimePlayerTeam, IAnimePlayerVOD } from '~/interfaces/IAnime';
import { DubberCardType } from '~/interfaces/IDubber';
import cn from '~/utils/classnames';
import { isEmpty } from '~/utils/utils';



interface IProps {
  player: IAnimePlayer
  player_teams: DubberCardType[]
  episodes: IAnimeEpisode[]
}

interface IAnimePlayerDividerProps {
  icon: SymbolCodepoints
  title: string
}

interface IAnimePlayerTeamListProps {
  selectedTeamId: string | null
  setEpisode: (props: ISetEpisodeProps) => void

  teams: IPlayerTeam[]
}



interface IPlayerTeam {
  id: string
  name: string
  avatars: string[]
  vods: IAnimePlayerVOD[]
  subbed: boolean
  members: string[]
}

interface ISetEpisodeProps {
  teamId?: string
  episode?: number
  provider?: VODProviderType
}

type VODProviderType = keyof Pick<IAnimePlayerVOD, 'ashdi_vod' | 'moonanime_vod' | 'tortuga_vod'>



const VODProviderList: Record<VODProviderType, string> = {
  ashdi_vod: 'Ashdi',
  moonanime_vod: 'Moonanime',
  tortuga_vod: 'Tortuga'
};



const WatchPagePlayer: FC<IProps> = (props) => {
  const [providerOptions, setProviderOptions] = useState<IStyledSelectOption<VODProviderType>[]>([]);
  const [teams, setTeams] = useState<IPlayerTeam[]>([]);
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<VODProviderType | null>(null);
  const [vodUrl, setVodUrl] = useState<string | null>(null);



  const videoRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);



  // Handle initial load
  useMemo(() => {
    const teams: IPlayerTeam[] = [];

    props.player.dubbed[0].dubber_ids = ['057fe719-50ff-46cb-b0d4-dd052c0cd563', 'd979d465-1407-452f-8955-a7692480f9ac'];
    props.player.dubbed[0].dubber_name = 'Amanogawa & РГ';

    props.player.dubbed.forEach(pt => parseTeam(pt, false));
    props.player.subbed.forEach(pt => parseTeam(pt, true));

    setTeams(teams);



    function parseTeam(pt: IAnimePlayerTeam, subbed: boolean) {
      const dubbers = props.player_teams.filter(dub => pt.dubber_ids.includes(dub.id));
      const names = dubbers.map(el => el.name);

      if (isEmpty(names)) names.push(pt.dubber_name);

      const team: IPlayerTeam = {
        id: `${pt.id}${subbed ? '-subbed' : ''}`,
        name: names.join(' & '),
        members: names,
        avatars: dubbers.map(el => el.avatar),
        subbed,
        vods: pt.vods,
      };

      teams.push(team);
    }
  }, []);

  // Handle initial player state
  useMemo(() => {
    if (isEmpty(teams)) return;

    setEpisode();
  }, [teams]);



  // Handle settings max height
  useEffect(() => {
    const video = videoRef.current;
    const settings = settingsRef.current;
    if (!video || !settings) return;

    const observer = new ResizeObserver(() => {
      settings.style.maxHeight = `${video.offsetHeight}px`;
    });

    observer.observe(video);
  }, []);



  function setEpisode(props?: ISetEpisodeProps) {
    const team = teams.find(el => el.id === (props?.teamId ?? selectedTeamId ?? teams[0].id))!;
    const episode = team.vods.find(el => el.episode === (props?.episode ?? selectedEpisode ?? team.vods[0].episode))!;
    const providers: VODProviderType[] = [];

    if (episode?.ashdi_vod) providers.push('ashdi_vod');
    if (episode?.moonanime_vod) providers.push('moonanime_vod');
    if (episode?.tortuga_vod) providers.push('tortuga_vod');
    if (isEmpty(providers)) return NotifyWarn({ title: 'Нема доступних відео', message: 'Для цієї серії в цій озвучці нема доступних серій' });

    let provider = providers[0];
    if (props?.provider && providers.includes(props.provider)) provider = props.provider;
    else if (selectedProvider && providers.includes(selectedProvider)) provider = selectedProvider;



    setProviderOptions(providers.map(el => {
      return { slug: el, title: VODProviderList[el] };
    }));

    setSelectedTeamId(team.id);
    setSelectedEpisode(episode.episode);
    setSelectedProvider(provider);

    setVodUrl(episode[provider] ?? null);
  }

  function nextEpisode() {
    setEpisode({ episode: (selectedEpisode ?? 1) + 1 });
  }

  function selectProvider(slug: VODProviderType) {
    setEpisode({ provider: slug });
  }



  return <section className="wp-player_layer">
    <div className="wp-player">
      <div className="wp-player_video" ref={videoRef}>
        {vodUrl && <iframe src={vodUrl} width={'100%'} height={'100%'} allowFullScreen frameBorder={0} scrolling="no"></iframe>}
      </div>

      <article className="wp-player_settings" ref={settingsRef}>
        <div className="wp-player_preferences">
          {/* Player select */}
          <div className="wp-player-selectProvider">
            <div className="wp-player-selectProvider_legend">
              <MaterialSymbol icon="movie" color="var(--color-text)" size={20} />
              <StyledH3 text={`Плеер:`} color="text" />
            </div>

            {!selectedProvider && <Skeleton width={'100%'} height={38} />}
            {selectedProvider && <StyledSelect options={providerOptions} slug={selectedProvider} setSlug={selectProvider} />}
          </div>

          <div className="wp-player-selectTeam">
            {/* Divider */}
            <div className="wp-player-divider_line"></div>

            {/* Select dubber */}
            {!isEmpty(teams.filter(el => !el.subbed)) && <AnimePlayerTeamList teams={teams.filter(el => !el.subbed)} selectedTeamId={selectedTeamId} setEpisode={setEpisode} />}

            {/* Select subber */}
            {!isEmpty(teams.filter(el => el.subbed)) && <div className="wp-player-subs">
              <AnimePlayerDivider icon="closed_caption" title="Субтитри" />

              <AnimePlayerTeamList teams={teams.filter(el => el.subbed)} selectedTeamId={selectedTeamId} setEpisode={setEpisode} />
            </div>}
          </div>
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
                <StyledM text={props.episodes.find(el => el.episode === selectedEpisode)?.title} color="text" lineClamp={2} />
              </div>

              <StyledButton icon="arrow_right_alt" text={`${(selectedEpisode ?? 1) + 1} епізод`} style="secondary" iconProps={{ type: 'rounded' }} onClick={nextEpisode} />
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
      const teamId = team.id;
      const isSelected = props.selectedTeamId === teamId;

      return <StyledButton className={cn(`wp-player-team`, isSelected && 'wp-player-team--selected')} onClick={() => props.setEpisode({ teamId: team.id })} key={`wp-player-teams--${team.id}-team--${i}`}>
        <div className="wp-player-team_about">
          {/* Avatars */}
          <div className="wp-player-team_avatars" style={{ width: team.members.length === 1 ? 28 : 44 }}>
            {team.members[0] && <StyledAvatar avatar={team.avatars[0]} width="28px" height="28px" initials={team.members[0]} />}
            {team.members[1] && <StyledAvatar avatar={team.avatars[1]} width="28px" height="28px" initials={team.members[1]} />}
          </div>

          <StyledM text={team.name} color="text" lineClamp={1} title={team.name} className="wp-player-team_name" />
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