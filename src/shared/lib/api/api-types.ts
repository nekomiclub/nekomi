import { Method } from 'axios';
import { ZodAny, ZodObject, ZodOptional } from 'zod';

import { NormalizedErrorType } from '~/shared/utilities/normalize-error';



// =======================================================
// API types
// =======================================================
export type APISchemaType = {
  method: Method;

  /** Path params (/:id) */
  params?: ZodObject | ZodOptional | ZodAny;

  /** Query params (?abc=123) */
  searchParams?: ZodObject | ZodOptional | ZodAny;

  /** Body params */
  body?: ZodObject | ZodOptional | ZodAny;

  /** Headers */
  headers?: ZodObject | ZodOptional | ZodAny;

  /** Response body */
  response?: any;
}

export type APIPayloadType = Pick<APISchemaType, 'body' | 'headers' | 'params' | 'searchParams'>

export type APIOptionsType = {
  cache?: RequestCache
  next?: NextFetchRequestConfig
}



// =======================================================
// Normalized error
// =======================================================
export type NormalizedSuccessResponseType<T> = {
  success: true
  response: Required<T>
  error?: never
}

export type NormalizedErrorResponseType = {
  success: false
  response?: never
  error: NormalizedErrorType
}

export type NormalizedResponseType<TSchema> = NormalizedSuccessResponseType<TSchema> | NormalizedErrorResponseType