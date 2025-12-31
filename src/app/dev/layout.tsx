
import { notFound } from 'next/navigation';

import { DevelopmentMode } from '~/conf';
import { LayoutProps } from '~/interfaces/types';
import siteMetadata from '~/utils/site-metadata';



export const metadata = siteMetadata({ robots: ['nofollow', 'noindex'] });



// Layout
export default async function Layout({ children }: LayoutProps) {
  if (!DevelopmentMode) return notFound();

  return children;
}
