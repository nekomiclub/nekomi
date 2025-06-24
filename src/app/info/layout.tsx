import { LayoutProps } from '~/interfaces/types';
import { metaObject } from '../../config';

export const metadata = metaObject({ robots: ['nofollow', 'noindex'] })

// Layout
export default async function Layout({ children }: LayoutProps) {
  return children;
}
