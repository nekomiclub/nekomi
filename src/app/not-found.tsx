
import { ErrorNotFound } from '~/components/Errors';
import { metaObject } from '../config';

export const metadata = metaObject({
  title: '404',
  description: 'Те, що ви шукали, не існує. Ось так',
  robots: ['nofollow', 'noindex']
})



export default async function NotFound() {
  return <ErrorNotFound />
}