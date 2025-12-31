import { LayoutProps } from '~/interfaces/types';
import siteMetadata from '~/utils/site-metadata';

export const metadata = siteMetadata({ robots: ['nofollow', 'noindex'] });

// Layout
export default async function Layout({ children }: LayoutProps) {
  return children;
}
