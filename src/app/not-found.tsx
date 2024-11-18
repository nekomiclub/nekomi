import { headers } from 'next/headers'

import { IndevScreen, NotFoundScreen } from '../components/Components';
import { getRoute } from '../components/ServerComponents';
import { config, metaObject } from '../config';

export const metadata = metaObject({
  title: '404',
  description: 'Те, що ви шукали, не існує. Ось так',
  robots: ['nofollow', 'noindex']
})



export default async function NotFound() {
  const pathname = (await headers()).get('x-url')!.replace(config.URL.baseURL, '')
  const route = getRoute(pathname)

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