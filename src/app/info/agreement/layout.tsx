import { ILayoutProps } from '~/interfaces/types';
import siteMetadata from '~/utils/site-metadata';



export const metadata = siteMetadata({
  title: 'Угода користувача / Agreement'
});



export default function IAgreementLayout({ children }: ILayoutProps) {
  return children;
}
