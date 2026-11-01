import { ILayoutProps } from '~/shared/types/PagesParams';
import siteMetadata from '~/utils/site-metadata';



// eslint-disable-next-line react-refresh/only-export-components
export const metadata = siteMetadata({
  title: 'Політика конфіденційності / Privacy policy'
});



export default function IPolicyLayout({ children }: ILayoutProps) {
  return children;
}
