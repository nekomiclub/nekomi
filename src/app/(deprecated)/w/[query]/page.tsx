import { redirect, RedirectType } from 'next/navigation';

import { IAnimePageParams } from '~/interfaces/PagesParams';
import { IRSCProps } from '~/interfaces/types';
import routes from '~/routes';



export default async function WatchPageRSC({ params }: IRSCProps<IAnimePageParams>) {
  const { query } = await params;

  return redirect(routes.anime.path({ query }), RedirectType.replace);
}