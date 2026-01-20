import { ILayoutProps } from '~/interfaces/types';
import siteMetadata from '~/utils/site-metadata';



export const metadata = siteMetadata({
  title: 'DMCA'
});



export default function IDMCALayout({ children }: ILayoutProps) {
  return children;
}
