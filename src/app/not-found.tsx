import { ErrorNotFound } from '~/components/Errors';
import { metaObject } from '../config';



export const metadata = metaObject({
  title: '404',
  description: 'Те, що ви шукаєте, не існує',
  robots: ['nofollow', 'noindex']
})



export default async function RSC() {
  return <ErrorNotFound />
}