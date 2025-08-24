import './styles.scss';

import { Metadata } from 'next';
import { cache } from 'react';
import { MaterialSymbol } from 'react-material-symbols';

import { HandleServerError } from '~/components/Errors';
import UserBanner from '~/components/UserBanner';
import { metaObject } from '~/config';
import { DubberPageParams } from '~/interfaces/PagesParams';
import { RSCProps } from '~/interfaces/types';
import API from '~/services/ApiService';
import { timestampToDayMonth } from '~/utils/utils';

import { DubberAbout, DubberAnimeDubbed, DubberAnswerInvite, DubberHeader, DubberTeam } from './DubberPage';



const getDubber = cache(async (query: string) => {
  return await API.getDubberByQuery({ query, detailed: true, fetchDubbedAnime: true, parseMembers: true });
});



export async function generateMetadata(
  props: RSCProps<DubberPageParams>,
): Promise<Metadata> {
  const { slug } = await props.params;

  try {
    const { dubber } = await getDubber(slug);
    const title = dubber.nameUkr;
    const description = dubber.description ?? 'Опис відсутній';

    return metaObject({
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
    return metaObject({ title: 'Команда озвучення не знайдена', robots: ['nofollow', 'noindex'] });
  }
}



export default async function RSC({ params, searchParams }: RSCProps<DubberPageParams>) {
  const { slug } = await params;
  const { invite } = await searchParams as { invite?: 'accept' | 'decline' };



  try {
    const { dubber, dubbedHydratedAnimes, parsedMembers } = await getDubber(slug);

    dubber.banner = '/assets/footer-bg.png'; // !TMP
    return <section className="wrapper gap-[16px] pt-[16px] sm:pt-[var(--header-height)]">
      <UserBanner bannerUrl={dubber.banner} />

      <div className="px-[16px] pt-[160px] max-md:pt-[224px] pb-[16px] rounded-[4px] bg-dark-bright flex flex-col gap-[40px] relative max-sm:px-[8px]">
        <DubberAnswerInvite dubber={dubber} invite={invite} />
        <DubberHeader dubber={dubber} />
        <DubberAbout dubber={dubber} />
        {dubbedHydratedAnimes?.length ? <DubberAnimeDubbed dubber={dubber} hydratedAnimes={dubbedHydratedAnimes} /> : undefined}
        {parsedMembers?.length ? <DubberTeam dubber={dubber} members={parsedMembers} /> : undefined}

        <div className="flex items-center gap-[8px]">
          <MaterialSymbol icon="calendar_month" size={16} className="text-grey-new" />
          <p className="text-grey-new text-[12px] font-manrope">На nekomi з: {timestampToDayMonth(dubber.statistics.createdAt)}</p>
        </div>
      </div>
    </section>;
  } catch (e) {
    return HandleServerError(e);
  }
}