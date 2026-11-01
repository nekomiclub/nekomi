'use client';

import { createContext, FC, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { MaterialSymbol, MaterialSymbolIconType } from 'material-symbols-rc';
import MediaQuery from 'react-responsive';

import conf from '~/conf';
import { NotifyWarn } from '~/shared/components/nofity/NotifyStatus';
import StyledAvatar from '~/shared/components/styled/StyledAvatar';
import StyledButton from '~/shared/components/styled/StyledButton';
import StyledSelect, { IStyledSelectOption, IStyledSelectOptionContentProps } from '~/shared/components/styled/StyledSelect';
import { StyledM, StyledS } from '~/shared/components/styled/StyledText';
import { AnimeVODProviderList, TAnimeEpisode, TAnimePlayer, TAnimePlayerTeam, TAnimePlayerVOD, TAnimeVODProvider, TTeamMinified } from '~/shared/lib/api/api-types';
import { AnimePlayerDataSchema } from '~/shared/schemas/LocalStorageSchemas';
import { IAnimePlayerData, LOCAL_STORAGE_KEY } from '~/shared/types/types';
import cn from '~/shared/utilities/classnames';
import { isEmpty } from '~/shared/utilities/utilities';

import { AnimePlayerGroupTitle } from './WatchUI';



interface IProps {
  anime_id: string
  player: TAnimePlayer
  player_teams: TTeamMinified[]

  episodes: TAnimeEpisode[]
  episodes_total: number | null
}

interface IAnimePlayerContextParams {
  teams: IPlayerTeam[]
  episodes: TAnimeEpisode[]
  selectedTeamId: string | undefined
  selectedEpisode: number | undefined
  selectedProvider: TAnimeVODProvider | undefined

  setEpisode: (params?: ISetEpisodeParams, synthetic?: boolean) => void
  nextEpisode(): void
  selectProvider(provider: TAnimeVODProvider): void
}

interface IAnimePlayerDividerProps {
  icon: MaterialSymbolIconType
  title: string
}

interface IAnimePlayerTeamsListProps {
  subbed: boolean
}

interface IAnimePlayerTeamAvatarsProps {
  team: IPlayerTeam
}

interface IAnimePlayerTeamItemProps {
  team: IPlayerTeam
  isSelected: boolean

  asSelectItem?: boolean
}

interface IAnimePLayerEpisodesListProps {
  className?: string
}

interface IAnimePlayerNextEpisodeProps {
  style: 'desktop' | 'mobile'
}



interface IPlayerTeam {
  id: TeamSlugType
  name: string
  avatars: string[]
  vods: TAnimePlayerVOD[]
  subbed: boolean
  members: string[]
}

interface ISetEpisodeParams {
  teamId?: string
  episode?: number
  provider?: TAnimeVODProvider
}

interface ISaveLocalDataParams {
  dubber_id: string | undefined
  episode: number | undefined
  provider: TAnimeVODProvider
}

/** First argument is id, second is "dubbed"/"subbed" */
type TeamSlugType = `${string}/${string}`



const AnimePlayerContext = createContext<IAnimePlayerContextParams>({} as IAnimePlayerContextParams);



const AnimePlayer: FC<IProps> = (props) => {
  const [teamOptions, setTeamOptions] = useState<IStyledSelectOption<TeamSlugType>[]>([]);
  const [providerOptions, setProviderOptions] = useState<IStyledSelectOption<TAnimeVODProvider>[]>([]);

  const [teams, setTeams] = useState<IPlayerTeam[]>([]);
  const [selectedTeamId, setSelectedTeamId] = useState<TeamSlugType>();
  const [selectedEpisode, setSelectedEpisode] = useState<number>();
  const [selectedProvider, setSelectedProvider] = useState<TAnimeVODProvider>();
  const [vodUrl, setVodUrl] = useState<string>();

  const videoRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);



  // Handle initial load
  useMemo(() => {
    const teams: IPlayerTeam[] = [];

    props.player.dubbed.forEach(pt => parseTeam(pt, false));
    props.player.subbed.forEach(pt => parseTeam(pt, true));

    setTeamOptions(teams.map(el => {
      return {
        slug: el.id,
        title: el.name
      };
    }));

    setTeams(teams);



    function parseTeam(pt: TAnimePlayerTeam, isSubbed: boolean) {
      const dubbers = props.player_teams.filter(dub => pt.dubber_ids.includes(dub.id));
      const names = dubbers.map(el => el.name);

      if (isEmpty(names)) names.push(pt.dubber_name);

      const team: IPlayerTeam = {
        id: pt.id as TeamSlugType,
        name: names.join(' & '),
        members: names,
        avatars: dubbers.map(el => el.avatar),
        subbed: isSubbed,
        vods: pt.vods,
      };

      team.id = createTeamId(team);

      teams.push(team);
    }
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
  }, []);

  // Handle initial state load
  useEffect(() => {
    const localData = retrieveLocalData();
    const item = localData.find(el => el.anime_id === props.anime_id) as IAnimePlayerData;

    if (item) {
      setEpisode({
        teamId: item.dubber_id ?? undefined,
        episode: item.episode ?? undefined,
        provider: item.provider ?? undefined
      });
    } else setEpisode();
  }, []);



  function retrieveLocalData(): IAnimePlayerData[] {
    if (typeof window === 'undefined') return [];
    const data: IAnimePlayerData[] = [];

    try {
      const preserved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.AnimePlayerData) ?? '[]') as IAnimePlayerData[];

      preserved.forEach(el => {
        const item = AnimePlayerDataSchema.safeParse(el);
        if (item.data) data.push(item.data);
      });
    } catch (e) { /*  */ }

    return data;
  }

  function saveLocalData(params?: ISaveLocalDataParams) {
    if (typeof window === 'undefined') return;
    let data = retrieveLocalData();

    const item: IAnimePlayerData = {
      anime_id: props.anime_id,
      dubber_id: params?.dubber_id ?? selectedTeamId ?? null,
      episode: params?.episode ?? selectedEpisode ?? null,
      provider: params?.provider ?? selectedProvider ?? null
    };

    data = [...data.filter(el => el.anime_id !== item.anime_id), item];

    localStorage.setItem(LOCAL_STORAGE_KEY.AnimePlayerData, JSON.stringify(data));
  }

  function setEpisode(params?: ISetEpisodeParams, synthetic = true) {
    let team = teams.find(el => el.id === (params?.teamId ?? selectedTeamId));
    if (!team) team = teams.find(el => el.id === teams[0].id)!;

    let episode = team.vods.find(el => el.episode === (params?.episode ?? selectedEpisode))!;
    if (!episode) episode = team.vods.find(el => el.episode === team.vods[0].episode)!;

    const providers: TAnimeVODProvider[] = [];

    if (episode?.ashdi_vod) providers.push('ashdi_vod');
    if (episode?.moonanime_vod) providers.push('moonanime_vod');
    if (episode?.tortuga_vod) providers.push('tortuga_vod');
    if (isEmpty(providers)) return NotifyWarn({ title: 'Немає доступних відео', message: 'Для цієї серії в цій озвучці нема доступних серій' });

    let provider = providers[0];

    if (params?.provider && providers.includes(params.provider)) provider = params.provider;
    else if (selectedProvider && providers.includes(selectedProvider)) provider = selectedProvider;



    setProviderOptions(providers.map(el => {
      return { slug: el, title: AnimeVODProviderList[el] };
    }));

    setSelectedTeamId(team.id);
    setSelectedEpisode(episode.episode);
    setSelectedProvider(provider);

    setVodUrl(episode[provider]);

    if (!synthetic) saveLocalData({ dubber_id: team.id, episode: episode.episode, provider });
  }

  function nextEpisode() {
    setEpisode({ episode: (selectedEpisode ?? 1) + 1 }, false);
  }

  function selectProvider(provider: TAnimeVODProvider) {
    setEpisode({ provider }, false);
  }

  function selectTeam(slug: string) {
    setEpisode({ teamId: slug }, false);
  }



  return <AnimePlayerContext.Provider value={{
    teams,
    episodes: props.episodes,
    selectedEpisode,
    selectedTeamId,
    selectedProvider,

    setEpisode,
    nextEpisode,
    selectProvider
  }}>
    <section className="ap-player_layer" id="player">
      <div className="ap-player">
        <div className="ap-player-video_layer" ref={videoRef}>
          {/* Mobile settings */}
          <MediaQuery maxWidth={conf.vars.breakpoints.breakLG}>
            <div className="wrapper ap-player-video-settings">
              <div className="ap-player-video-settings_group">
                <AnimePlayerGroupTitle icon="movie" title="Плеер:" size="h3" />
                <StyledSelect options={providerOptions} slug={selectedProvider ?? ''} setSlug={selectProvider} />
              </div>

              <div className="ap-player-video-settings_group">
                <AnimePlayerGroupTitle icon="adaptive_audio_mic" title="Команда:" size="h3" />
                <StyledSelect className="ap-player-video-settings_teams" options={teamOptions} slug={selectedTeamId ?? ''} setSlug={selectTeam} triggerContent={AnimePlayerTeamSelectTrigger} optionContent={AnimePlayerTeamSelectOption} />
              </div>
            </div>
          </MediaQuery>

          {/* Player */}
          <div className="ap-player-video">
            {vodUrl && <iframe src={vodUrl} width={'100%'} height={'100%'} allowFullScreen frameBorder={0} scrolling="no"></iframe>}
          </div>

          {/* Mid-size episodes under player */}
          <MediaQuery maxWidth={conf.vars.breakpoints.breakXXL - 1}>
            <AnimePLayerEpisodesList className="ap-player-video_episodes" />
          </MediaQuery>
        </div>

        {/* Settings */}
        <article className="ap-player_settings" ref={settingsRef}>
          <MediaQuery minWidth={conf.vars.breakpoints.breakLG}>
            <div className="ap-player_preferences">
              {/* Player select */}
              <div className="ap-player-selectProvider">
                <AnimePlayerGroupTitle icon="movie" title="Плеер:" size="h3" />
                <StyledSelect options={providerOptions} slug={selectedProvider ?? ''} setSlug={selectProvider} />
              </div>

              {/* Team select */}
              <div className="ap-player-selectTeam">
                {/* Divider */}
                <div className="ap-player-divider_line"></div>

                {/* Select dubber */}
                {!isEmpty(teams.filter(el => !el.subbed)) && <AnimePlayerTeamsList subbed={false} />}

                {/* Select subber */}
                {!isEmpty(teams.filter(el => el.subbed)) && <div className="ap-player-subs">
                  <AnimePlayerDivider icon="closed_caption" title="Субтитри" />
                  <AnimePlayerTeamsList subbed />
                </div>}
              </div>
            </div>

            <AnimePlayerNextEpisode style="desktop" />
          </MediaQuery>
        </article>
      </div>

      {/* Mobile next episode */}
      <MediaQuery maxWidth={conf.vars.breakpoints.breakLG}>
        <div className="wrapper">
          <AnimePlayerNextEpisode style="mobile" />
        </div>
      </MediaQuery>

      {/* Desktop episodes list */}
      <MediaQuery minWidth={conf.vars.breakpoints.breakXXL}>
        <AnimePLayerEpisodesList />
      </MediaQuery>

      {/* Mobile episodes list */}
      <MediaQuery maxWidth={conf.vars.breakpoints.breakLG}>
        <AnimePLayerEpisodesList />
      </MediaQuery>
    </section>
  </AnimePlayerContext.Provider>;
};

export default AnimePlayer;



const AnimePlayerDivider: FC<IAnimePlayerDividerProps> = (props) => {
  return <div className="ap-player-divider">
    <div className="ap-player-divider_line ap-player-divider_line--start"></div>

    <div className="ap-player-divider-title">
      <MaterialSymbol icon={props.icon} color="var(--color-text-muted)" size={18} />
      <StyledS text={props.title} color="text-muted" />
    </div>

    <div className="ap-player-divider_line"></div>
  </div>;
};



const AnimePlayerTeamsList: FC<IAnimePlayerTeamsListProps> = (props) => {
  const ctx = useContext(AnimePlayerContext);

  return <section className="ap-player_teams">
    {ctx.teams.filter(el => el.subbed === props.subbed).map(team => {
      const isSelected = ctx.selectedTeamId === team.id;

      return <AnimePlayerTeamItem team={team} isSelected={isSelected} key={`ap-player-team--${team.id}${team.subbed && '-subbed'}`} />;
    })}
  </section>;
};



const AnimePlayerTeamAvatars: FC<IAnimePlayerTeamAvatarsProps> = (props) => {
  return <div className="ap-player-team_avatars" style={{ width: props.team.members.length === 1 ? 28 : 44 }}>
    {props.team.members[0] && <StyledAvatar avatar={props.team.avatars[0]} width="28px" height="28px" initials={props.team.members[0]} />}
    {props.team.members[1] && <StyledAvatar avatar={props.team.avatars[1]} width="28px" height="28px" initials={props.team.members[1]} />}
  </div>;
};



const AnimePlayerTeamItem: FC<IAnimePlayerTeamItemProps> = (props) => {
  const ctx = useContext(AnimePlayerContext);



  return <StyledButton className={cn(`ap-player-team`, props.isSelected && 'ap-player-team--selected')} onClick={() => ctx.setEpisode({ teamId: props.team.id }, false)}>
    <div className="ap-player-team_about">
      <AnimePlayerTeamAvatars team={props.team} />

      <StyledM text={props.team.name} color="text" lineClamp={1} title={props.team.name} className="ap-player-team_name" />
    </div>

    {/* Info */}
    <div className="ap-player-team-info">
      {props.asSelectItem && props.team.subbed && <StyledS text={`SUB`} fontWeight={600} color="accent" className="ap-player-team-info_item ap-player-team_subbed" />}

      {!isEmpty(props.team.vods) && <StyledS text={`${props.team.vods.length} еп.`} fontWeight={600} color="accent" className="ap-player-team-info_item ap-player-team_episodesReleased" />}

      {props.isSelected && <MaterialSymbol icon="stat_0" size={16} color="var(--color-accent)" />}
    </div>
  </StyledButton>;
};



const AnimePLayerEpisodesList: FC<IAnimePLayerEpisodesListProps> = (props) => {
  const ctx = useContext(AnimePlayerContext);

  const [episodes, setEpisodes] = useState<number[]>([]);



  useMemo(() => {
    const team = ctx.teams.find(el => el.id === ctx.selectedTeamId);

    if (team) setEpisodes(team.vods.map(el => el.episode));
  }, [ctx.selectedTeamId, ctx.selectedEpisode]);



  return episodes.length > 1 && <ul className={cn(`wrapper ap-player_episodes`, props.className)}>
    {episodes.map(episode => {
      return <li className="ap-player-episode" key={`ap-player-episode--${episode}`}>
        <StyledButton text={`${episode}`} className="ap-player-episode_button" color={episode === ctx.selectedEpisode ? 'primary' : 'default'} onClick={() => ctx.setEpisode({ episode }, false)} />
      </li>;
    })}
  </ul>;
};


const AnimePlayerNextEpisode: FC<IAnimePlayerNextEpisodeProps> = (props) => {
  const ctx = useContext(AnimePlayerContext);

  const [episodeMeta, setEpisodeMeta] = useState<TAnimeEpisode>();
  const [hasNextEpisode, setHasNextEpisode] = useState(false);



  useMemo(() => {
    const { selectedEpisode } = ctx;
    if (selectedEpisode === undefined) return setEpisodeMeta(undefined);

    setEpisodeMeta(ctx.episodes.find(el => el.episode === selectedEpisode + 1) ?? undefined);
    setHasNextEpisode(Boolean(ctx.teams.find(el => el.id === ctx.selectedTeamId)?.vods.some(el => el.episode === selectedEpisode + 1)));
  }, [ctx.selectedEpisode, ctx.selectedTeamId]);



  return hasNextEpisode && <div className="ap-player-next_layer">
    <AnimePlayerDivider icon="autoplay" title="Наступний епізод" />

    {/* Episode meta is present */}
    {episodeMeta && <article className={cn(`ap-player-next ap-player-next--${props.style}`)}>
      <button className="ap-player-next_screenshot" onClick={ctx.nextEpisode}>
        {/* Screenshot exist */}
        {/* {false && <>
          <StyledImage src="https://cdn.nekomi.club/26585c1e-e49d-46b0-a703-f9bee858f25a" width="100%" height="100%" borderRadius={4} />
        </>} */}

        {/* Screenshot does not exist fallback */}
        <div className="ap-player-next_rate ap-player-next_rate--large">
          <MaterialSymbol icon="star_half" color="var(--color-text)" size={20} />
          <StyledM text={Number(episodeMeta?.score).toFixed(2)} color="text" bold />
        </div>
      </button>

      <div className="ap-player-next_content">
        <div className="ap-player-next_titles">
          <StyledS text={episodeMeta?.title} color="text" lineClamp={3} />
        </div>

        <StyledButton icon="arrow_right_alt" text={`${(ctx.selectedEpisode ?? 1) + 1} епізод`} className="ap-player-next_button" color="secondary" iconProps={{ type: 'rounded' }} onClick={ctx.nextEpisode} />
      </div>
    </article>}

    {/* Episode meta is missing, but next episode exist */}
    {!episodeMeta && <StyledButton icon="arrow_right_alt" text={`${(ctx.selectedEpisode ?? 1) + 1} епізод`} className="ap-player-next_button" color="secondary" iconProps={{ type: 'rounded' }} onClick={ctx.nextEpisode} />}
  </div>;
};



const AnimePlayerTeamSelectTrigger: FC = () => {
  const ctx = useContext(AnimePlayerContext);

  const team = useMemo(() => ctx.teams.find(el => el.id === ctx.selectedTeamId), [ctx.teams, ctx.selectedTeamId]);



  return team && <div className="ap-player-tst">
    <div className="ap-player-tst_info">
      <AnimePlayerTeamAvatars team={team} />

      <StyledM text={team.name} />
    </div>

    <StyledS text={team.subbed ? 'SUB' : 'DUB'} fontWeight={600} color="accent" className="ap-player-team-info_item ap-player-team_subbed" />
  </div>;
};



const AnimePlayerTeamSelectOption: FC<IStyledSelectOptionContentProps> = (props) => {
  const ctx = useContext(AnimePlayerContext);

  const [isSelected, setIsSelected] = useState(false);

  const team = useMemo(() => ctx.teams.find(el => el.id === props.option.slug), [ctx.teams]);



  useMemo(() => {
    setIsSelected(ctx.selectedTeamId === team?.id);
  }, [ctx.selectedTeamId]);



  return team && <AnimePlayerTeamItem isSelected={isSelected} team={team} asSelectItem />;
};



function createTeamId(team: IPlayerTeam): TeamSlugType {
  const { id, subbed } = team;

  return `${id}/${subbed ? 'subbed' : 'dubbed'}` satisfies TeamSlugType;
}