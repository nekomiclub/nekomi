import { metaObject } from '~/config';
import { LayoutProps } from '~/interfaces/types';

export const metadata = metaObject({
  title: 'Правила та умови / TOS'
});

export default function RootLayout({ children }: LayoutProps) {
  return children;
}
