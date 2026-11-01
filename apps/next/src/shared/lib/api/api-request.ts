'use server';

import conf from '~/conf';
import Log from '~/shared/utilities/console-utils';
import env from '~/shared/utilities/env';
import normalizeError from '~/shared/utilities/normalize-error';
import { IDv7 } from '~/shared/utilities/utilities';

import { APIOptionsType, APISchemaType, NormalizedResponseType } from './api-types';

import { getAuthorizationToken } from '../auth-lib';



type APIRequestPayloadType = Omit<APISchemaType, keyof Pick<APISchemaType, 'method' | 'response'>>



/** 
 * Invoke API handler
 * 
 * If error occured, will return it as response with success: false
 */
export default async function APIRequest<TSchema>(url: string, payload: APIRequestPayloadType, schema: APISchemaType, opts?: APIOptionsType): Promise<NormalizedResponseType<TSchema>> {
  const authToken = await getAuthorizationToken();
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

  headers['X-API-Key'] = env('API_KEY_SK');
  headers['Content-Type'] = 'application/json';
  headers['X-Trace-ID'] = traceId;

  if (authToken) headers['Authorization'] = `Bearer ${authToken}`;


  try {
    Log.debug(`[api]: Request ${schema.method.toUpperCase()} ${finalUrl}. traceId=${traceId}`);

    // Execute the request
    const request = await fetch(`${conf.URL.nekomiApi}${finalUrl}`, {
      method: schema.method.toUpperCase(),
      headers,
      body: payload.body ? JSON.stringify(payload.body) : undefined,
      next: opts?.next,
      cache: opts?.cache
    });

    if (!request.ok) throw request;

    // Implicit 204 handle
    if (request.status === 204) {
      return {
        success: true,
        response: {} as Required<TSchema>,
        error: undefined
      };
    }

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