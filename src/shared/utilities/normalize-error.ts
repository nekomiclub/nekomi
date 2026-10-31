'use server';

import { AxiosError } from 'axios';
import z, { ZodError } from 'zod';

import { IsDevelopment } from '~/conf';
import { BaseResponseSchema } from '~/shared/lib/api/routes/@generated.schema';

import Log from './console-utils';
import { IDv7 } from './utilities';



export type NormalizedErrorType = {
  /** Public message that will be exposed to the client */
  message: string

  /** Trace id */
  traceId: string

  /** HTTP response status */
  status?: number

  /** HTTP response code */
  code?: string
}



export default async function normalizeError(e: any, traceId?: string): Promise<NormalizedErrorType> {
  traceId = traceId ?? IDv7();


  // Handle type errors
  if (e instanceof TypeError) {
    const cause = e.cause as NodeJS.ErrnoException;
    const message = `❌ Internal Client Error: TypeError`;

    Log.error(`[TypeError]: ❌ Internal Client Error: ${cause.message}\ntraceId=${traceId}`);

    return {
      traceId,
      message,
      code: cause.code
    };
  }



  // Handle zod error
  if (e instanceof ZodError) {
    const message = `❌ Internal Client Error: Server returned an unexpected data structure`;

    Log.error(`[ZodError]: ${message}\ntraceId=${traceId}`, z.prettifyError(e));

    return {
      traceId,
      message
    };
  }



  // Handle axios error
  if (e instanceof AxiosError) {
    const response = BaseResponseSchema.safeParse(e.response?.data);
    const message = `❌ Internal Client Error: Axios request failed`;

    if (response.success) {
      const data = response.data;

      if (IsDevelopment) console.log(e);
      Log.error(`[AxiosError]: ❌ Internal Client Error: Response failed with valid basic data structure: "${data.message ?? e.message}". traceId=${traceId}`, JSON.stringify(data.error, null, 2));

      return {
        traceId,
        message,
        status: e.status
      };
    }

    console.log(e);
    Log.error(`[AxiosError]: ❌ Internal Client Error: Response failed. Message: ${e.message}. traceId=${traceId}`, JSON.stringify(e, null, 2));

    return {
      traceId,
      message: e.message,
      status: e.status
    };
  }



  // Handle fetch error
  if (e instanceof Response) {
    const response = BaseResponseSchema.safeParse(await e.json());
    const message = `❌ Internal Client Error: Fetch failed`;
    const status = e.status;

    if (response.success) {
      const data = response.data;

      if (IsDevelopment) console.error(e, response.data);
      Log.error(`[FetchError]: ❌ Internal Client Error: Response failed with valid basic data structure: "${data.message ?? e.statusText}". traceId=${traceId}`, JSON.stringify(data.error, null, 2));

      return {
        traceId,
        message,
        status,
        code: data.code ?? undefined
      };
    }

    console.error(e, await e.json().catch(e => undefined));
    Log.error(`[FetchError]: ❌ Internal Client Error: Response failed. Message: ${e.statusText}. traceId=${traceId}`, JSON.stringify(e, null, 2));

    return {
      traceId,
      message,
      status,
    };
  }



  // Handle unexpected errors
  const message = `❌ Internal Client Error: Something went wrong, try again later`;

  console.error(e);
  Log.error(`[UnexpectedError]: ${message}\ntraceId=${traceId}`, JSON.stringify(e, null, 2));

  return {
    traceId,
    message
  };
}