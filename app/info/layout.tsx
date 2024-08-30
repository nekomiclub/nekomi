import { Metadata, NextPage } from 'next';
import { ILayoutProps } from '../../interfaces/IRSC';

export const metadata: Metadata = {
  robots: 'none'
}

// Layout
export default async function Layout({ children }: ILayoutProps) {
  return children;
}
