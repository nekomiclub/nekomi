import './styles.scss';

import { Metadata } from 'next';
import { cache } from 'react';
import { MaterialSymbol } from 'react-material-symbols';

import { HandleServerError } from '~/components/Errors';
import UserLayout from '~/components/UserLayout';
import { DubberPageParams } from '~/interfaces/PagesParams';
import { RSCProps } from '~/interfaces/types';
import APIOld from '~/services/ApiService.old';
import siteMetadata from '~/utils/site-metadata';
import { timestampToDayMonth } from '~/utils/utils';

import { DubberAbout, DubberAnimeDubbed, DubberAnswerInvite, DubberTeam } from './DubberPage';



const getDubber = cache(async (query: string) => {
  return await APIOld.getDubberByQuery({ query, detailed: true, fetchDubbedAnime: true, parseMembers: true });
});



export async function generateMetadata(
  props: RSCProps<DubberPageParams>,
): Promise<Metadata> {
  const { slug } = await props.params;

  try {
    const { dubber } = await getDubber(slug);
    const title = dubber.nameUkr;
    const description = dubber.description ?? 'Опис відсутній';

    return siteMetadata({
      title,
      description: description,
      keywords: [dubber.nameUkr, dubber.nameEng],
      openGraph: {
        title,
        description: description,
        images: dubber.avatar,
        type: 'profile'
      }
    });
  } catch (e) {
    return siteMetadata({ title: 'Команда озвучення не знайдена', robots: ['nofollow', 'noindex'] });
  }
}



export default async function RSC({ params, searchParams }: RSCProps<DubberPageParams>) {
  const { slug } = await params;
  const { invite } = await searchParams as { invite?: 'accept' | 'decline' };



  try {
    const { dubber, dubbedHydratedAnimes, parsedMembers } = await getDubber(slug);

    return <>
      <DubberAnswerInvite dubber={dubber} invite={invite} />

      <UserLayout type="dubber_profile" dubber={dubber} />

      <section className="wrapper gap-[40px] pt-[24px] relative">
        <DubberAbout dubber={dubber} />
        {dubbedHydratedAnimes?.length ? <DubberAnimeDubbed dubber={dubber} hydratedAnimes={dubbedHydratedAnimes} /> : undefined}
        {parsedMembers?.length ? <DubberTeam dubber={dubber} members={parsedMembers} /> : undefined}

        <div className="flex items-center gap-[8px]">
          <MaterialSymbol icon="calendar_month" size={16} className="text-grey-new" />
          <p className="text-grey-new text-[12px] font-manrope">На nekomi з: {timestampToDayMonth(dubber.statistics.createdAt)}</p>
        </div>
      </section>
    </>;
  } catch (e) {
    return HandleServerError(e);
  }
}