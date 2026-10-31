import { notFound } from 'next/navigation';

import { ErrorWentWrong } from '~/components/Errors';
import { IsDevelopment, IsProduction } from '~/conf';

import { NormalizedErrorType } from './normalize-error';



/** 
 * Handle server-side normalized errors
 * 
 * Push log on each error in development mode
 * Push log on fatal errors in production mode
 */
export async function HandleServerNormalizedError(e: NormalizedErrorType) {
  if (IsDevelopment) console.error(e);

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