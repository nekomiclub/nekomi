import { TEpisodeType } from "./Patcher";

export interface IPatcherStackItem {
  type: TEpisodeType
  order: number
  dubberID: string
  progress: number | null
  file: File
}

interface IPatcherStackItemExtended extends IPatcherStackItem {
  id: string
}

interface IPatcherProps {
  appendError: (emsg: string) => void
  setUploadsStack: (item: IPatcherStackItem[]) => void
}

export class PactherStack {
  private isRunning = false;
  private stack: IPatcherStackItemExtended[] = []

  private appendError: (emsg: string) => void;
  private setUploadsStack: (item: IPatcherStackItem[]) => void;



  constructor({ appendError, setUploadsStack }: IPatcherProps) {
    this.appendError = appendError;
    this.setUploadsStack = setUploadsStack;
  }



  append({ dubberID, file, order, progress, type }: IPatcherStackItem) {
    const id = `${order}/${dubberID}`;
    console.log(`[PatcherStack]: Item ${order} in ${dubberID} appended`)

    this.stack.push({ dubberID, file, order, progress, type, id })
    // this.patch({ id, type: 'pending' });

    this.run();
  }

  remove(id: string) {
    console.log(`[PatcherStack]: Item ${id} removed`)
    this.stack = this.stack.filter(el => el.id !== id);

    this.run();
  }

  private patch({ progress, type, id }: { id: string, type?: TEpisodeType, progress?: number }) {
    const item = this.stack.find(el => el.id === id)!;

    if (progress) item.progress = progress;
    if (type) item.type = type;

    this.setUploadsStack([...this.stack])
  }

  async run() {
    if (this.isRunning) return console.log(`[PatcherStack]: Stack is already running`);
    if (!this.stack.length) return console.log(`[PatcherStack]: Stack is empty`);

    this.isRunning = true;
    const item = this.stack[0];

    try {
      this.patch({ id: item.id, type: 'uploading' })
      console.log(`[PatcherStack]: Stack run ${item.id}`);

      // Upload
      await new Promise(res => {
        setTimeout(() => {
          console.log('Uploaded')
          console.log(item)
          this.patch({ id: item.id, type: 'uploaded' })
          res(1)
        }, 10000);
      })
    } catch (e) {
      this.appendError(`[PatcherStack]: Stack stopped due to error - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`);
    }

    this.isRunning = false;
    this.remove(item.id)

    if (this.stack.length) this.run();
  }
}