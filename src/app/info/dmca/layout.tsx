import { ILayoutProps } from '~/interfaces/IRSC';
import siteMetadata from '~/utils/site-metadata';

export const metadata = siteMetadata({
  title: 'DMCA'
});

export default function RootLayout({ children }: ILayoutProps) {
  return children;
}
