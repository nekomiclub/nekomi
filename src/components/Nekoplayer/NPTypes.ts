import { createContext, RefObject } from 'react'

import Anime, { AnimeEpisode } from '~/interfaces/AnimeIntf'
import { DubberCompact } from '~/interfaces/DubberIntf'



export type NekoplayerScreenType = 'none'
  | 'progress_continue'
  | 'continue_watch'
  | 'last_dubbed_episode'
  | 'anime_end'

export interface NekoplayerLocalstorageRecord {
  id: string,
  dub: string,
  ep: number,
  moment: number
}

export interface NekoplayerContextProps {
  //* CONSTS
  anime: Anime
  dubbers: DubberCompact[]
  duration: number
  isMobile: boolean

  //* POSSIBLE UNDEFINED CONSTS
  watchProgress?: NekoplayerLocalstorageRecord

  //* VIDEO STATES
  isMuted: boolean
  isPlaying: boolean
  isFullscreen: boolean
  isPiP: boolean
  isPreviewOld: boolean
  isVideoProcessed: boolean

  //* REFS
  videoRef: RefObject<HTMLVideoElement>
  playerRef: RefObject<HTMLDivElement>

  //* HANDLERS
  loadProgress: () => void
  passProgress: () => void

  //* STATES
  currentScreen: NekoplayerScreenType
  setCurrentScreen: (val: NekoplayerScreenType) => void

  episode: AnimeEpisode
  /** DO NOT RECOMMEND. USE changeEpsiode INSTEAD
   * set new episode directly into state
   */
  setEpisode: (episode: AnimeEpisode) => void
  changeEpisode: (episode: AnimeEpisode, moment?: number, stopPlayback?: boolean) => void

  volume: number
  setVolume: (val: number) => void

  moment: number
  /** DO NOT RECOMMEND. USE changeMoment INSTEAD
   * set new moment directly into state
   */
  setMoment: (val: number) => void
  changeMoment: (val: number, synthetic?: boolean) => void
}

export const NekoplayerContext = createContext<Partial<NekoplayerContextProps>>({})

export enum NekoplayerIDs {
  Timeline = 'nekoplayer-timeline',
  TimelineTrack = 'nekoplayer-timeline_track',
  TimelineThumb = 'nekoplayer-timeline_thumb',
  Preview = 'nekoplayer-preview',
}