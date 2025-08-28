
import { notFound } from 'next/navigation';

import { DevelopmentMode, metaObject } from '~/config';
import { LayoutProps } from '~/interfaces/types';



export const metadata = metaObject({ robots: ['nofollow', 'noindex'] });



// Layout
export default async function Layout({ children }: LayoutProps) {
  if (!DevelopmentMode) return notFound();

  return children;
}
