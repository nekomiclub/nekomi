import { redirect, RedirectType } from 'next/navigation';

import { UserPageLibProps } from '~/interfaces/PagesParams';
import { RSCProps } from '~/interfaces/types';
import { Routes } from '~/routes';



/** @deprecated */
export default async function RSC({ params }: RSCProps<UserPageLibProps>) {
  const { libId, username } = await params;

  return redirect(Routes.userLib.path({ libId, username }), RedirectType.replace);
}