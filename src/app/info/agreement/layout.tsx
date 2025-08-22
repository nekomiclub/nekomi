import { metaObject } from '~/config';
import { LayoutProps } from '~/interfaces/types';

export const metadata = metaObject({
  title: 'Угода користувача / Agreement'
});

export default function RootLayout({ children }: LayoutProps) {
  return children;
}
