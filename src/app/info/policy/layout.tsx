import { ILayoutProps } from '~/interfaces/IRSC';
import siteMetadata from '~/utils/site-metadata';

export const metadata = siteMetadata({
  title: 'Політика конфіденційності / Privacy policy'
});

export default function RootLayout({ children }: ILayoutProps) {
  return children;
}
