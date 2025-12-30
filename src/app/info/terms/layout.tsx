import { LayoutProps } from '~/interfaces/types';
import siteMetadata from '~/utils/site-metadata';

export const metadata = siteMetadata({
  title: 'Правила та умови / TOS'
});

export default function RootLayout({ children }: LayoutProps) {
  return children;
}
