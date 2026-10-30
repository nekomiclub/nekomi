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

  /** API errors by fieldname */
  api_errors?: Record<string, string[]> | null

  /** HTTP response status */
  status?: number
}



export default async function normalizeError(e: any, traceId?: string): Promise<NormalizedErrorType> {
  traceId = traceId ?? IDv7();

  const detailsMessage = `Detailed message is sent to the productuion logs.`;



  // Handle zod error
  if (e instanceof ZodError) {
    const message = `❌ Internal Client Error: Server returned an unexpected data structure. ${detailsMessage}`;

    Log.error(`[ZodError]: ${message}\ntraceId=${traceId}`, z.prettifyError(e));

    return {
      traceId,
      message
    };
  }



  // Handle axios error
  if (e instanceof AxiosError) {
    const response = BaseResponseSchema.safeParse(e.response?.data);
    const message = `❌ Internal Client Error: Fetch failed`;

    if (response.success) {
      const data = response.data;

      if (IsDevelopment) console.log(e);
      Log.error(`[AxiosError]: Response failed with valid basic data structure: "${data.message ?? e.message}". traceId=${traceId}`, JSON.stringify(data.error, null, 2));

      return {
        traceId,
        message,
        api_errors: data.errors as any,
        status: e.status
      };
    }

    console.log(e);
    Log.error(`[AxiosError]: Response failed. Message: ${e.message}. traceId=${traceId}`, JSON.stringify(e, null, 2));

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

    if (response.success) {
      const data = response.data;

      if (IsDevelopment) console.error(e, response.data);
      Log.error(`[FetchError]: Response failed with valid basic data structure: "${data.message ?? e.statusText}". traceId=${traceId}`, JSON.stringify(data.error, null, 2));

      return {
        traceId,
        message,
        api_errors: data.errors as any,
        status: e.status
      };
    }

    console.error(e, await e.json());
    Log.error(`[FetchError]: Response failed. Message: ${e.statusText}. traceId=${traceId}`, JSON.stringify(e, null, 2));

    return {
      traceId,
      message,
      status: e.status,
    };
  }



  // Handle unexpected errors
  const message = `❌ Internal Client Error: Something went wrong, try again later. ${detailsMessage}`;

  console.error(e);
  Log.error(`[UnexpectedError]: ${message}\ntraceId=${traceId}`, JSON.stringify(e, null, 2));

  return {
    traceId,
    message
  };
}