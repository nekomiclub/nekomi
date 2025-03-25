import { AnimeEpisode } from '~/interfaces/AnimeIntf';



export type PatcherEpisodeStatusType = 'uploaded' | 'pending' | 'uploading'

export interface PatcherEpisode {
  id: string
  episode: AnimeEpisode
  File: File | null

  status: PatcherEpisodeStatusType
  progress: number
  order: number
  newUpload: boolean
}