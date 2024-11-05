import { ILayoutProps } from '../../interfaces/IRSC';
import { metaObject } from '../../config';

export const metadata = metaObject({ robots: ['nofollow', 'noindex'] })

// Layout
export default async function Layout({ children }: ILayoutProps) {
  return children;
}
