import { metaObject } from '~/config';
import { LayoutProps } from '~/interfaces/types';

export const metadata = metaObject({
  title: 'Політика конфіденційності / Privacy policy'
});

export default function RootLayout({ children }: LayoutProps) {
  return children;
}
