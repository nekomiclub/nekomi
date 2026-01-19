import { redirect, RedirectType } from 'next/navigation';

import { IDubberPageParams } from '~/interfaces/PagesParams';
import { IRSCProps } from '~/interfaces/types';
import routes from '~/routes';



export default async function DubberOldPageRSC({ params }: IRSCProps<IDubberPageParams>) {
  const { slug } = await params;

  return redirect(routes.team.path({ slug }), RedirectType.replace);
}