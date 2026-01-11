import { ILayoutProps } from '~/interfaces/IRSC';
import siteMetadata from '~/utils/site-metadata';



export const metadata = siteMetadata({ robots: ['nofollow', 'noindex'] });



export default async function InfoLayout({ children }: ILayoutProps) {
  return children;
}
