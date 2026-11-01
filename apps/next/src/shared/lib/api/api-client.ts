import z, { ZodType } from 'zod';

import APIRequest from './api-request';
import { APIOptionsType, APISchemaType } from './api-types';



/** Create typed API schema options */
export function APIOptionsSchemaFactory<TSchema extends APISchemaType>(schema: TSchema) {
  if (!schema.response) schema.response = z.unknown().nullish();

  return schema;
}



export type APIMethodPayload<TSchema extends APISchemaType> =
  (TSchema['params'] extends ZodType
    ? { params: z.infer<TSchema['params']> }
    : {}) &
  (TSchema['searchParams'] extends ZodType
    ? { searchParams: z.infer<TSchema['searchParams']> }
    : {}) &
  (TSchema['body'] extends ZodType
    ? { body: z.infer<TSchema['body']> }
    : {}) &
  (TSchema['headers'] extends ZodType
    ? { headers: z.infer<TSchema['headers']> }
    : {});

/** Create typed API method */
export function APIMethodFactory<TSchema extends APISchemaType>(url: string, shape: TSchema, opts?: APIOptionsType) {
  return (payload: APIMethodPayload<TSchema>) => {
    return APIRequest<
      TSchema['response'] extends ZodType ? z.infer<TSchema['response']> : never
    >(url, payload as any, shape, opts);
  };
}