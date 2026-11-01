import { ErrorNotFound } from '~/shared/components/Errors';
import siteMetadata from '~/utils/site-metadata';



// eslint-disable-next-line react-refresh/only-export-components
export const metadata = siteMetadata({
  title: '404',
  description: 'Те, що ви шукаєте, не існує',
  robots: ['nofollow', 'noindex']
});



export default async function NotFoundRSC() {
  return <ErrorNotFound />;
}