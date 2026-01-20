import { redirect, RedirectType } from 'next/navigation';

import { IUserPageProps } from '~/interfaces/PagesParams';
import { IRSCProps } from '~/interfaces/types';
import routes from '~/routes';



export default async function UserOldPageRSC({ params }: IRSCProps<IUserPageProps>) {
  const { username } = await params;

  return redirect(routes.user.path({ username }), RedirectType.replace);
}