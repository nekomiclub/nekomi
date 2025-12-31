import './styles.scss';

import { Metadata } from 'next';
import { cache } from 'react';
import { MaterialSymbol } from 'react-material-symbols';

import { HandleServerError } from '~/components/Errors';
import UserLayout from '~/components/UserLayout';
import { DubberPageParams } from '~/interfaces/PagesParams';
import { RSCProps } from '~/interfaces/types';
import API from '~/services/api/API';
import siteMetadata from '~/utils/site-metadata';
import { getUTC, timestampToDayMonth } from '~/utils/utils';

import { DubberAbout, DubberTeam } from './DubberPage';



const getDubber = cache(async (query: string) => {
  return await API.getDubber({ query }, { view: 'full', get_members: true, get_timestamps: true });
});



export async function generateMetadata(
  props: RSCProps<DubberPageParams>,
): Promise<Metadata> {
  const { slug } = await props.params;

  try {
    const { dubber } = await getDubber(slug);
    const title = dubber.name;
    const description = dubber.about ?? 'Опис відсутній';

    return siteMetadata({
      title,
      description: description,
      keywords: [dubber.name],
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
    const { dubber } = await getDubber(slug);



    return <>
      {/* <DubberAnswerInvite dubber={dubber} invite={invite} /> */}

      <UserLayout type="dubber_profile" dubber={dubber} />

      <section className="wrapper gap-[40px] pt-[24px] relative">
        <DubberAbout dubber={dubber} />
        {/* {dubbedHydratedAnimes?.length ? <DubberAnimeDubbed dubber={dubber} hydratedAnimes={dubbedHydratedAnimes} /> : undefined} */}
        {dubber.members?.length ? <DubberTeam members={dubber.members} /> : undefined}

        <div className="flex items-center gap-[8px]">
          <MaterialSymbol icon="calendar_month" size={16} className="text-grey-new" />
          <p className="text-grey-new text-[12px] font-manrope">На nekomi з: {timestampToDayMonth(getUTC(dubber.created_at).timestamp)}</p>
        </div>
      </section>
    </>;
  } catch (e) {
    return HandleServerError(e);
  }
}