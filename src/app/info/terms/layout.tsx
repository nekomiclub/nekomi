import { ILayoutProps } from '~/interfaces/types';
import siteMetadata from '~/utils/site-metadata';



// eslint-disable-next-line react-refresh/only-export-components
export const metadata = siteMetadata({
  title: 'Правила та умови / TOS'
});



export default function ITermsLayout({ children }: ILayoutProps) {
  return children;
}
