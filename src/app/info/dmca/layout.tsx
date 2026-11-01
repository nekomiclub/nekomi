import { ILayoutProps } from '~/shared/types/PagesParams';
import siteMetadata from '~/shared/utilities/site-metadata';



// eslint-disable-next-line react-refresh/only-export-components
export const metadata = siteMetadata({
  title: 'DMCA'
});



export default function IDMCALayout({ children }: ILayoutProps) {
  return children;
}
