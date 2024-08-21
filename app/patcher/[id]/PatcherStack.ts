import { AxiosError } from "axios";
import { $api } from "../../../components/http";
import { config } from "../../../config";
import { ITitle, ITitleEpisode } from "../../../interfaces/ITitle";
import { TEpisodeType } from "./Patcher";

export interface IPatcherStackItem {
  type: TEpisodeType
  order: number
  dubberID: string
  progress: number | null
  file: File
  sourceURL: string
}

interface IPatcherStackItemExtended extends IPatcherStackItem {
  id: string
}

interface IPatcherProps {
  appendError: (emsg: string) => void
  setUploadsStack: (item: IPatcherStackItem[]) => void
  title: ITitle
}

export class PactherStack {
  private isRunning = false;
  private stack: IPatcherStackItemExtended[] = []
  private title: ITitle

  private appendError: (emsg: string) => void;
  private setUploadsStack: (item: IPatcherStackItem[]) => void;



  constructor({ appendError, setUploadsStack, title }: IPatcherProps) {
    this.appendError = appendError;
    this.setUploadsStack = setUploadsStack;
    this.title = title;
  }



  append({ dubberID, file, order, progress, type, sourceURL }: IPatcherStackItem) {
    const id = `${order}/${dubberID}`;
    console.log(`[PatcherStack]: Item ${order} in ${dubberID} appended`)

    this.stack.push({ dubberID, file, order, progress, type, id, sourceURL })
    this.patch({ id, type: 'pending' })

    this.run();
  }

  remove(id: string) {
    const item = this.stack.find(el => el.id === id);
    console.log(`[PatcherStack]: Item ${id} removed`)

    if (item) {
      item.type = 'uploaded';
    }

    this.run();
  }

  private patch({ progress, type, id, sourceURL }: { id: string, type?: TEpisodeType, progress?: number, sourceURL?: string }) {
    const item = this.stack.find(el => el.id === id)!;

    if (progress) item.progress = progress;
    if (type) item.type = type;
    if (sourceURL) item.sourceURL = sourceURL;

    this.setUploadsStack(this.stack.map(el => { return { ...el, id: undefined } }))
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

      // Upload
      const formData = new FormData()

      formData.append('file', item.file);
      formData.append('type', 'upload_episode');
      formData.append('dubID', item.dubberID);
      formData.append('episodeOrder', `${item.order}`);
      formData.append('qualities', JSON.stringify([480]));

      interval = setInterval(() => {
        this.patch({ id: item.id, progress: percentage })
      }, 3000); // 3000

      const { data } = await $api.patch<{ episode: ITitleEpisode }>(`${config.URL.apiProxy}/title/${this.title.id}`, formData, {
        onUploadProgress: (e) => {
          const { progress } = e;

          percentage = +((progress || 0) * 100).toFixed(2);

          if (progress === 1) {
            clearInterval(interval)
          }
        }
      })

      this.patch({ id: item.id, type: 'uploaded', sourceURL: data.episode.qualities.q1080 })
    } catch (e) {
      if (e instanceof AxiosError) {
        this.appendError(`[PatcherStack]: Stack stopped due to error - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`);
      } else {
        this.appendError(`[PatcherStack]: Stack stopped due to error - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`);
      }
    }

    this.isRunning = false;
    this.remove(item.id)

    if (this.stack.filter(el => el.type !== 'uploaded').length) this.run();
  }
}