import { ILayoutProps } from '~/interfaces/IRSC';
import siteMetadata from '~/utils/site-metadata';



export const metadata = siteMetadata({
  title: 'Правила та умови / TOS'
});



export default function ITermsLayout({ children }: ILayoutProps) {
  return children;
}
