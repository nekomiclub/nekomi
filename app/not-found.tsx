import { headers } from 'next/headers'

import { config } from '../config';
import { getRoute } from '../components/ServerComponents';
import { IndevScreen, NotFoundScreen } from '../components/Components';

export default function NotFound({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const pathname = headers().get('x-url')!.replace(config.URL.baseURL, '')
  const route = getRoute(pathname)

  console.log(error)

  console.log('NOT FOUND')
  console.log(headers().get('x-url'))
  console.log(route)

  if (!route) {
    return <NotFoundScreen />
  }

  return <>
    {
      route.status === 'indev'
        ? <IndevScreen />
        : <NotFoundScreen />
    }
  </>
}