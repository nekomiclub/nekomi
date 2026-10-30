import { notFound } from 'next/navigation';

import { IsDevelopment } from '~/conf';
import { ILayoutProps } from '~/interfaces/types';
import siteMetadata from '~/utils/site-metadata';



export const metadata = siteMetadata({ robots: ['nofollow', 'noindex'] });



export default async function DevLayout({ children }: ILayoutProps) {
  if (!IsDevelopment) return notFound();

  return children;
}
