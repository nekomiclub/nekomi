import { ILayoutProps } from '~/interfaces/IRSC';
import siteMetadata from '~/utils/site-metadata';

export const metadata = siteMetadata({ robots: ['nofollow', 'noindex'] });

// Layout
export default async function Layout({ children }: ILayoutProps) {
  return children;
}
