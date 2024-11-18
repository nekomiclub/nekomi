import { AxiosError } from 'axios';

import { $upload } from '../../../components/http';
import { config } from '../../../config';
import { ITitle, ITitleEpisode } from '../../../interfaces/ITitle';

import { IPatcherEpisode, TEpisodeType } from './Patcher';

interface IPatcherProps {
  appendError: (emsg: string) => void
  patchEpisode: (episode: IPatcherEpisode) => void
  title: ITitle
  session: string
}

export class PactherStack {
  private isRunning = false;
  private stack: IPatcherEpisode[] = []
  private title: ITitle
  private session = ''
  private uploadStack: string[] = [];

  private appendError: (emsg: string) => void;
  private patchEpisode: (episode: IPatcherEpisode) => void;



  constructor({ appendError, title, session, patchEpisode }: IPatcherProps) {
    this.appendError = appendError;
    this.patchEpisode = patchEpisode;
    this.title = title;
    this.session = session;
  }



  append({ file, progress, type, episode, id }: IPatcherEpisode) {
    console.log(`[PatcherStack]: Item ${episode.order} in ${episode.dubberID} appended`)
    this.uploadStack.push(id);
    const uploadOrder = this.uploadStack.findIndex(el => el === id);

    this.stack.push({ file, progress, type, episode, id, uploadOrder })
    this.patch({ id, type: 'pending' })

    this.run();
  }

  remove(id: string) {
    this.stack = this.stack.filter(el => el.id !== id);
    this.uploadStack = this.uploadStack.filter(el => el !== id);
    console.log(`[PatcherStack]: Item ${id} removed`)

    this.run();
  }

  private patch({ progress, type, id, sourceURL }: { id: string, type?: TEpisodeType, progress?: number, sourceURL?: string }) {
    const item = this.stack.find(el => el.id === id)!;

    if (progress) item.progress = progress;
    if (type) item.type = type;
    if (sourceURL) item.episode.qualities.q1080 = sourceURL;

    this.patchEpisode(item);
  }

  async run() {
    if (this.isRunning) return console.log(`[PatcherStack]: Stack is already running`);
    if (!this.stack.filter(el => el.type !== 'uploaded').length) return console.log(`[PatcherStack]: Stack is empty`);

    this.isRunning = true;
    const item = this.stack.filter(el => el.type !== 'uploaded')[0];

    try {
      let percentage = 0;
      let interval;

      this.patch({ id: item.id, type: 'uploading' })
      console.log(`[PatcherStack]: Stack run ${item.id}`);

      // //! TESTING
      // await new Promise(res => {
      //   setTimeout(() => {
      //     res(1);
      //     this.patch({ id: item.id, type: 'uploaded' })
      //   }, 10000);
      // })

      // Upload
      const formData = new FormData()

      formData.append('file', item.file!);
      formData.append('type', 'upload_episode');
      formData.append('dubberID', item.episode.dubberID);
      formData.append('order', `${item.episode.order}`);
      formData.append('qualities', JSON.stringify([480]));

      interval = setInterval(() => {
        this.patch({ id: item.id, progress: percentage })
      }, 3000); // 3000

      const { data } = await $upload.patch<{ episode: ITitleEpisode }>(`${config.URL.apiProxy}/title/${this.title.id}`, formData, {
        onUploadProgress: (e) => {
          const { progress } = e;

          percentage = +((progress || 0) * 100).toFixed(2);

          if (progress === 1) {
            clearInterval(interval)
          }
        },
        headers: {
          Authorization: this.session
        }
      })

      this.patch({ id: item.id, type: 'uploaded', sourceURL: data.episode.qualities.q1080 })
    } catch (e) {
      if (e instanceof AxiosError) {
        this.appendError(`[PatcherStack]: Сталась помилка завантаження - ${e.code}. Будь ласка, не змінюйте файли які додані в чергу`);
      } else {
        this.appendError(`[PatcherStack]: Stack stopped due to error - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`);
      }
    }

    this.isRunning = false;
    this.remove(item.id)

    if (this.stack.filter(el => el.type !== 'uploaded').length) this.run();
  }
}