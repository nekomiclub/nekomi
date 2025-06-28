import './styles.scss';

import { Metadata } from 'next';
import { MaterialSymbol } from 'react-material-symbols';

import { HandleServerError } from '~/components/Errors';
import { metaObject } from '~/config';
import { DubberPageParams } from '~/interfaces/PagesParams';
import { RSCProps } from '~/interfaces/types';
import API from '~/services/ApiService';
import { timestampToDayMonth } from '~/utils/utils';

import { DubberAbout, DubberAnimeDubbed, DubberAnswerInvite, DubberBanner, DubberHeader, DubberTeam } from './DubberPage';



export async function generateMetadata(
  props: RSCProps<DubberPageParams>,
): Promise<Metadata> {
  const { slug } = await props.params;

  try {
    const { metadata } = await API.getDubberByQuery({
      query: slug,
      metadataOnly: true
    })

    return metaObject({
      title: metadata?.title,
      description: metadata?.description,
      keywords: metadata?.keywords,
      openGraph: {
        title: metadata?.title,
        description: metadata?.description,
        images: metadata?.photo,
        type: 'profile'
      }
    })
  } catch (e) {
    return metaObject({ title: 'Команда озвучення не знайдена', robots: ['nofollow', 'noindex'] })
  }
}



export default async function RSC({ params, searchParams }: RSCProps<DubberPageParams>) {
  const { slug } = await params;
  const { invite } = await searchParams as { invite?: 'accept' | 'decline' };



  try {
    const { dubber, dubbedHydratedAnimes, parsedMembers } = await API.getDubberByQuery({
      query: slug,
      detailed: true,
      fetchDubbedAnime: true,
      parseMembers: true
    })

    return <section className="wrapper gap-[16px] pt-[16px] sm:pt-[var(--header-height)]">
      <DubberBanner dubber={dubber} />

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
    </section>
  } catch (e) {
    return HandleServerError(e)
  }
}