import { metaObject } from '~/config';
import { LayoutProps } from '~/interfaces/types';

export const metadata = metaObject({ robots: ['nofollow', 'noindex'] });

// Layout
export default async function Layout({ children }: LayoutProps) {
  return children;
}
