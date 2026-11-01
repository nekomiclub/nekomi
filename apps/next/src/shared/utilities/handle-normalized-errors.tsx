import { notFound } from 'next/navigation';

import { IsDevelopment, IsProduction } from '~/conf';
import { ErrorNoConnection, ErrorWentWrong } from '~/shared/components/Errors';
import { NotifyError } from '~/shared/components/nofity/NotifyStatus';
import { NoConnectionTypeErrorCodes, NotFoundErrorStatuses } from '~/shared/types/types';
import { ErrorWentWrongMetadata } from '~/shared/utilities/site-metadata';

import { NormalizedErrorType } from './normalize-error';



/** 
 * Handle server-side normalized errors
 * 
 * Emit server log on each error in development mode
 * Emit server log on fatal errors (>=500) only in production mode
 */
export async function HandleServerNormalizedError(e: NormalizedErrorType) {
  if (IsDevelopment) console.error(e);

  // Handle no connection errors
  if (e.code && NoConnectionTypeErrorCodes.includes(e.code)) {
    return <ErrorNoConnection code={e.code} />;
  }

  // Treat Unauthorized, Forbidden, Not Found as not found
  if (e.status && NotFoundErrorStatuses.includes(e.status)) {
    return notFound();
  }

  // Handle server errors
  if (e.status && e.status >= 500) {
    if (IsProduction) console.error(e);

    return <ErrorWentWrong code={e.code} />;
  }

  return <ErrorWentWrong />;
}



/** Handle client-side normalized errors */
export function HandleClientNormalizedError(e: NormalizedErrorType) {
  console.error(e);

  NotifyError({
    title: `Щось пішло не так ...`,
    message: e.message
  });
}



/** Handle metadata normalized errors */
export function HandleMetadataNormalizedError(e: NormalizedErrorType) {
  if (e.status && NotFoundErrorStatuses.includes(e.status)) return notFound();

  return ErrorWentWrongMetadata;
}