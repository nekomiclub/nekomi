'use server';

import conf from '~/conf';
import Log from '~/shared/utilities/console-utils';
import normalizeError from '~/shared/utilities/normalize-error';
import { IDv7 } from '~/shared/utilities/utilities';
import signCSRF from '~/utils/signCSRF';

import { APIOptionsType, APISchemaType, NormalizedResponseType } from './api-types';



type APIRequestPayloadType = Omit<APISchemaType, keyof Pick<APISchemaType, 'method' | 'response'>>



/** 
 * Invoke API handler
 * 
 * If error occured, will return it as response with success: false
 */
export default async function APIRequest<TSchema>(url: string, payload: APIRequestPayloadType, schema: APISchemaType, opts?: APIOptionsType): Promise<NormalizedResponseType<TSchema>> {
  const traceId = IDv7();

  // Replace dynamic path tokens (e.g., /api/agents/:id -> /api/agents/123)
  let finalUrl = url;

  if (payload.params) {
    Object.entries(payload.params).forEach(([key, value]) => {
      finalUrl = finalUrl.replace(`:${key}`, encodeURIComponent(value));
    });
  }

  if (payload.searchParams) {
    const searchParams = new URLSearchParams();

    Object.entries(payload.searchParams).forEach(([key, value]) => {
      if (value === undefined) return;

      searchParams.set(key, String(value));
    });

    if (searchParams.size) finalUrl = `${finalUrl}?${searchParams.toString()}`;
  }

  // Append headers
  let headers = payload.headers ?? {};

  headers['X-CSRF-Token'] = await signCSRF();
  headers['Content-Type'] = 'application/json';
  headers['X-Trace-ID'] = traceId;



  try {
    Log.debug(`[api]: Request ${schema.method.toUpperCase()} ${finalUrl}. traceId=${traceId}`);

    // Execute the request
    const request = await fetch(`${conf.URL.nekomiApi}${finalUrl}`, {
      method: schema.method,
      headers,
      body: JSON.stringify(payload.body),
      next: opts?.next,
      cache: opts?.cache
    });

    if (!request.ok) throw request;

    // Runtime validation
    const validation = schema.response.safeParse(await request.json());

    if (!validation.success) {
      return {
        success: false,
        error: await normalizeError(validation.error, traceId)
      };
    }

    return {
      success: true,
      response: validation.data,
    };
  } catch (e) {
    return {
      success: false,
      error: await normalizeError(e, traceId),
    };
  }
}