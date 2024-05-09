import { headers } from 'next/headers'

import NotFound from './oops/404/page';
import { config } from '../config';
import { getRoute } from '../components/ServerComponents';
import Indev from './oops/indev/page';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const pathname = headers().get('x-url')!.replace(config.URL.baseURL, '')
  const route = getRoute(pathname)

  if (!route) {
    return <NotFound />
  }

  return <>
    {
      route.status === 'indev'
        ? <Indev />
        : <NotFound />
    }
  </>
}