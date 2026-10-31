import { ReactElement } from 'react';
import { AxiosError } from 'axios';
import { notFound } from 'next/navigation';

import NotFoundRSC from '~/app/not-found';
import { IsDevelopment } from '~/conf';
import { getUTC } from '~/utils/utils';

import { ErrorWentWrong } from './Errors';



/** @deprecated */
export async function HandleServerError(e: unknown): Promise<ReactElement> {
  const date = getUTC().ISO;

  // Handle notFound nextjs directive
  if ('digest' in (e as any) && (e as any)?.digest === 'NEXT_NOT_FOUND') return notFound();

  if (e instanceof AxiosError) {
    const status = e.response?.status ?? 500;

    if (status === 401 || status === 403 || status === 404) {
      if (IsDevelopment) console.error(e.response?.data);
      return NotFoundRSC();
    } else {
      console.error(`[${date}]: HTTP error occured - ${JSON.stringify(e.response?.data ?? e, null, 2)}`);
      return <ErrorWentWrong />;
    }
  } else {
    console.error(`[${date}]: Server error occured - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`);

    return <ErrorWentWrong />;
  }
}