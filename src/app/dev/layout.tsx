
import { notFound } from 'next/navigation';

import { DevelopmentMode } from '~/conf';
import { ILayoutProps } from '~/interfaces/IRSC';
import siteMetadata from '~/utils/site-metadata';



export const metadata = siteMetadata({ robots: ['nofollow', 'noindex'] });



// Layout
export default async function Layout({ children }: ILayoutProps) {
  if (!DevelopmentMode) return notFound();

  return children;
}
