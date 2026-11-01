import { ILayoutProps } from '~/shared/types/PagesParams';
import siteMetadata from '~/utils/site-metadata';



// eslint-disable-next-line react-refresh/only-export-components
export const metadata = siteMetadata({
  title: 'Угода користувача / Agreement'
});



export default function IAgreementLayout({ children }: ILayoutProps) {
  return children;
}
