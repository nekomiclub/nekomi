import { LayoutProps } from '~/interfaces/types';
import siteMetadata from '~/utils/site-metadata';

export const metadata = siteMetadata({
  title: 'Політика конфіденційності / Privacy policy'
});

export default function RootLayout({ children }: LayoutProps) {
  return children;
}
