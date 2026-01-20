import { notFound } from 'next/navigation';

import { DevelopmentMode } from '~/conf';
import { ILayoutProps } from '~/interfaces/types';
import siteMetadata from '~/utils/site-metadata';



export const metadata = siteMetadata({ robots: ['nofollow', 'noindex'] });



export default async function DevLayout({ children }: ILayoutProps) {
  if (!DevelopmentMode) return notFound();

  return children;
}
