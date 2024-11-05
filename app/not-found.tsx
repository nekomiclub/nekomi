import { headers } from 'next/headers'

import { config } from '../config';
import { getRoute } from '../components/ServerComponents';
import { IndevScreen, NotFoundScreen } from '../components/Components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Йой, сталась якась помилка',
  description: '',
  robots: 'none',
  openGraph: {
    title: `Йой, сталась якась помилка`,
    description: '',
  }
}

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