import Anime from '~/interfaces/AnimeIntf';

import { PatcherEpisode, PatcherEpisodeStatusType } from './PatcherTypes';



interface PatchEpisodeProps {
  id: string
  status?: PatcherEpisodeStatusType
  stackOrder?: number
  progress?: number
  sourceURL?: string
}

interface PatcherStackProps {
  session: string,
  anime: Anime,
  episodes: PatcherEpisode[],

  patchEpisode: (episode: PatcherEpisode) => void,
  throwError: (e: any) => void,
}



export default class PatcherStack {
  /** Episodes IDs to upload */
  private uploadStack: string[] = []

  /** Contains current processing episode ID */
  private busy: string | null = null

  private session: string;
  private anime: Anime;
  private episodes: PatcherEpisode[];
  private patchEpisode: (episode: PatcherEpisode) => void;
  private throwError: (e: any, id?: string) => void;

  constructor({ anime, episodes, patchEpisode, session, throwError }: PatcherStackProps) {
    this.session = session;
    this.anime = anime;
    this.episodes = episodes;
    this.patchEpisode = patchEpisode;
    this.throwError = throwError;
  }



  /** Append item to stack */
  append(episode: PatcherEpisode) {
    this.episodes.push(episode);
    this.uploadStack.push(episode.id);

    const uploadOrder = this.uploadStack.findIndex(el => el === episode.id);

    this.patch({
      id: episode.id,
      status: 'pending',
      progress: 0,
      stackOrder: uploadOrder
    })

    console.debug(`[PatcherStack]: Episode appended. [id: ${episode.id}; dubber: ${episode.episode.dubberID}; order: ${episode.episode.order}]`)

    this.upload();
  }

  /** Remove item from stack */
  remove(id: string) {
    this.uploadStack = this.uploadStack.filter(el => el !== id);
    this.episodes = this.episodes.filter(el => el.id !== id);
    this.upload();
  }

  /** Patch episode props */
  private patch({ id, progress, sourceURL, status }: PatchEpisodeProps) {
    const episode = this.episodes.find(el => el.id === id);
    if (!episode) return;

    if (progress) episode.progress = +progress.toFixed(2);
    if (status) episode.status = status;
    if (sourceURL) episode.episode.qualities.q1080 = sourceURL;

    // Update orders
    this.episodes.forEach(stackEl => {
      stackEl.stackOrder = this.uploadStack.findIndex(el => el === stackEl.id);
      this.patchEpisode(stackEl);
    })

    this.patchEpisode(episode);
  }

  /** Upload episode */
  private async upload() {
    if (this.busy) return;

    const episode = this.episodes.find(el => el.id === this.uploadStack[0])
    if (!episode) return;

    this.busy = episode.id;

    console.debug(`[PatcherStack]: Start uploading episode. [id: ${episode.id}; dubber: ${episode.episode.dubberID}; order: ${episode.episode.order}]`)

    this.patch({
      id: episode.id,
      status: 'uploading',
      progress: 0
    })

    let sourceURL = ''
    let progress = 0
    let interval;

    try {
      //* TESTING
      await new Promise((res) => {
        setTimeout(() => {
          this.patch({
            id: episode.id,
            progress: 20
          })
        }, 500);

        setTimeout(() => {
          this.patch({
            id: episode.id,
            progress: 48
          })
        }, 1500);

        setTimeout(() => {
          this.patch({
            id: episode.id,
            progress: 95
          })
        }, 3200);

        setTimeout(() => {
          this.patch({
            id: episode.id,
            progress: 100
          })

          res(1)
        }, 4000);
      })

      // const qualities: TEpisodeQuality[] = [1080, 480];
      // if (episode.q2160) qualities.push(2160);

      // // Patch progress
      // interval = setInterval(() => {
      //   this.patch({ id: episode.id, progress })
      // }, 500);

      // const { episode: upload } = await API.postAnimeEpisode({
      //   dubberId: episode.episode.dubberID,
      //   file: episode.File!,
      //   order: episode.episode.order,
      //   qualities,
      //   uuid: this.anime.uuid
      // }, {
      //   session: this.session,
      //   onUploadProgress: (e) => {
      //     const perc = e.progress ?? 0;

      //     progress = +(perc * 100).toFixed(2);
      //   }
      // })

      // clearInterval(interval);
      // sourceURL = upload.qualities.q1080;

      this.patch({
        id: episode.id,
        status: 'uploaded',
        sourceURL,
      })
    } catch (e) {
      this.throwError(e, episode.id);
    }

    console.debug(`[PatcherStack]: Episode uploaded. [id: ${episode.id}]`)

    this.remove(episode.id)
    this.busy = null;
    this.upload();
  }
}