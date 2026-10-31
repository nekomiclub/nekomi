import { notFound } from 'next/navigation';

import { ErrorNoConnection, ErrorWentWrong } from '~/components/Errors';
import { NotifyError } from '~/components/nofity/NotifyStatus';
import { IsDevelopment, IsProduction } from '~/conf';
import { NoConnectionTypeErrorCodes } from '~/interfaces/types';

import { NormalizedErrorType } from './normalize-error';



/** 
 * Handle server-side normalized errors
 * 
 * Emit server log on each error in development mode
 * Emit server log on fatal errors (>=500) only in production mode
 */
export async function HandleServerNormalizedError(e: NormalizedErrorType) {
  if (IsDevelopment) console.error(e);

  // Handle type errors
  if (e.code && NoConnectionTypeErrorCodes.includes(e.code)) {
    return <ErrorNoConnection code={e.code} />;
  }

  // Treat Unauthorized, Forbidden, Not Found as not found
  if (e.status && [401, 403, 404].includes(e.status)) {
    return notFound();
  }

  // Handle server errors
  if (e.status && e.status >= 500) {
    if (IsProduction) console.error(e);

    return <ErrorWentWrong />;
  }

  return <ErrorWentWrong />;
}



/**
 * Handle client-side normalized errors
 */
export function HandleClientNormalizedError(e: NormalizedErrorType) {
  console.error(e);

  NotifyError({
    title: `Щось пішло не так ...`,
    message: e.message
  });
}