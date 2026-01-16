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
  episodes_total: number | null
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

interface IEpisodeProps {
  episode: number
  selectedEpisode: number
  setEpisode: (props: ISetEpisodeProps) => void
}

interface INextEpisodeProps {
  selectedTeamId: string | null
  selectedEpisode: number | null
  teams: IPlayerTeam[]
  episodes: IAnimeEpisode[]
  nextEpisode(): void
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
  const [totalEpisodes, setTotalEpisodes] = useState<number[]>([]);
  const [hasEpisodes, setHasEpisodes] = useState(false);



  const videoRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);



  // Handle initial load
  useMemo(() => {
    const teams: IPlayerTeam[] = [];

    // Testing only
    // props.player.dubbed[0].dubber_ids = ['057fe719-50ff-46cb-b0d4-dd052c0cd563', 'd979d465-1407-452f-8955-a7692480f9ac'];
    // props.player.dubbed[0].dubber_name = 'Amanogawa & РГ';

    props.player.dubbed.forEach(pt => parseTeam(pt, false));
    props.player.subbed.forEach(pt => parseTeam(pt, true));

    setHasEpisodes(teams.some(el => !isEmpty(el.vods)));
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



  function setEpisode(params?: ISetEpisodeProps) {
    const team = teams.find(el => el.id === (params?.teamId ?? selectedTeamId ?? teams[0].id))!;
    let episode = team.vods.find(el => el.episode === (params?.episode ?? selectedEpisode))!;
    if (!episode) episode = team.vods.find(el => el.episode === team.vods[0].episode)!;

    const providers: VODProviderType[] = [];

    if (episode?.ashdi_vod) providers.push('ashdi_vod');
    if (episode?.moonanime_vod) providers.push('moonanime_vod');
    if (episode?.tortuga_vod) providers.push('tortuga_vod');
    if (isEmpty(providers)) return NotifyWarn({ title: 'Немає доступних відео', message: 'Для цієї серії в цій озвучці нема доступних серій' });

    let provider = providers[0];
    if (params?.provider && providers.includes(params.provider)) provider = params.provider;
    else if (selectedProvider && providers.includes(selectedProvider)) provider = selectedProvider;



    setProviderOptions(providers.map(el => {
      return { slug: el, title: VODProviderList[el] };
    }));

    setSelectedTeamId(team.id);
    setSelectedEpisode(episode.episode);
    setSelectedProvider(provider);

    setTotalEpisodes(team.vods.map(el => el.episode));
    setVodUrl(episode[provider] ?? null);
  }

  function nextEpisode() {
    setEpisode({ episode: (selectedEpisode ?? 1) + 1 });
  }

  function selectProvider(slug: VODProviderType) {
    setEpisode({ provider: slug });
  }



  return hasEpisodes && <section className="wp-player_layer" id="player">
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
        <NextEpisode episodes={props.episodes} teams={teams} selectedTeamId={selectedTeamId} selectedEpisode={selectedEpisode} nextEpisode={nextEpisode} />
      </article>
    </div>

    <ul className="wrapper wp-player_episodes">
      {totalEpisodes.map((episode, i) => {
        return <Episode episode={episode} selectedEpisode={selectedEpisode ?? 1} setEpisode={setEpisode} key={`episode--${i}`} />;
      })}
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



const Episode: FC<IEpisodeProps> = (props) => {
  return <li className="wp-player-episode">
    <StyledButton text={`${props.episode}`} className="wp-player-episode_button" style={props.episode === props.selectedEpisode ? 'primary' : 'default'} onClick={() => props.setEpisode({ episode: props.episode })} />
  </li>;
};



const NextEpisode: FC<INextEpisodeProps> = (props) => {
  const [episodeMeta, setEpisodeMeta] = useState<IAnimeEpisode | null>(null);
  const [hasNextEpisode, setHasNextEpisode] = useState(false);



  useMemo(() => {
    const { selectedEpisode } = props;
    if (selectedEpisode === null) return setEpisodeMeta(null);

    // setEpisodeMeta(props.episodes.find(el => el.episode === selectedEpisode + 1) ?? null);

    if (props.selectedTeamId !== null) setHasNextEpisode(Boolean(props.teams.find(el => el.id === props.selectedTeamId)?.vods.some(el => el.episode === selectedEpisode + 1)));
  }, [props.selectedEpisode, props.selectedTeamId]);



  return (episodeMeta || hasNextEpisode) && <div className="wp-player-next_layer">
    <AnimePlayerDivider icon="autoplay" title="Наступний епізод" />

    {/* Episode meta is present */}
    {episodeMeta && <article className="wp-player-next">
      <button className="wp-player-next_screenshot" onClick={props.nextEpisode}>
        {/* Screenshot exist */}
        {false && <>
          <StyledImage src="https://cdn.nekomi.club/26585c1e-e49d-46b0-a703-f9bee858f25a" width="200px" height="auto" rounded={4} />
        </>}

        {/* Screenshot does not exist fallback */}
        {true && <>
          <div className="wp-player-next_rate wp-player-next_rate--large">
            <MaterialSymbol icon="star_half" color="var(--color-text)" size={20} />
            <StyledM text={Number(episodeMeta?.score).toFixed(2)} color="text" fontFamily="space-grotesk" bold />
          </div>
        </>}
      </button>

      <div className="wp-player-next_content">
        <div className="wp-player-next_titles">
          <StyledS text={episodeMeta?.title} color="text" lineClamp={3} />
        </div>

        <StyledButton icon="arrow_right_alt" text={`${(props.selectedEpisode ?? 1) + 1} епізод`} className="wp-player-next_button" style="secondary" iconProps={{ type: 'rounded' }} onClick={props.nextEpisode} />
      </div>
    </article>}

    {/* Episode meta is missing, but next episode exist */}
    {!episodeMeta && hasNextEpisode && <StyledButton icon="arrow_right_alt" text={`${(props.selectedEpisode ?? 1) + 1} епізод`} className="wp-player-next_button" style="secondary" iconProps={{ type: 'rounded' }} onClick={props.nextEpisode} />}
  </div>;
};