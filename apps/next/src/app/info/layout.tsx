import { ILayoutProps } from '~/shared/types/PagesParams';
import siteMetadata from '~/shared/utilities/site-metadata';



// eslint-disable-next-line react-refresh/only-export-components
export const metadata = siteMetadata({ robots: ['nofollow', 'noindex'] });



export default async function InfoLayout({ children }: ILayoutProps) {
  return children;
}
