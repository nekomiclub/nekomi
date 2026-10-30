import '~/styles/pages/team-page.scss';

import { Metadata } from 'next';
import { cache } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';

import { HandleServerError } from '~/components/handle-server-error';
import UserLayout from '~/components/UserLayout';
import { IDubberPageParams } from '~/interfaces/PagesParams';
import { IRSCProps } from '~/interfaces/types';
import API from '~/services/api/API';
import siteMetadata from '~/utils/site-metadata';
import { getUTC, isEmpty, timestampToDayMonth, wordDeclination } from '~/utils/utils';

import { TeamAboutLink, TeamMember } from './_components/TeamUI';



const getDubber = cache(async (query: string) => {
  return await API.getDubber({ query }, { view: 'full', get_members: true, get_timestamps: true });
});



export async function generateMetadata(
  props: IRSCProps<IDubberPageParams>,
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



export default async function TeamPageRSC({ params, searchParams }: IRSCProps<IDubberPageParams>) {
  const { slug } = await params;



  try {
    const { dubber } = await getDubber(slug);



    return <>
      <UserLayout type="dubber_profile" dubber={dubber} />

      <section className="wrapper gap-[40px] pt-[24px] relative">
        {/* About */}
        <div className="flex flex-col gap-[24px]">
          <ul className="w-full flex items-center justify-center flex-wrap gap-[8px]">
            {dubber.socials?.telegram && <TeamAboutLink link={dubber.socials.telegram} label="telegram" />}
            {dubber.socials?.tiktok && <TeamAboutLink link={dubber.socials.tiktok} label="tiktok" />}
            {dubber.socials?.youtube && <TeamAboutLink link={dubber.socials.youtube} label="youtube" />}
            {dubber.socials?.instagram && <TeamAboutLink link={dubber.socials.instagram} label="instagram" />}
            {dubber.support?.monobank && <TeamAboutLink link={dubber.support.monobank} label="monobank" />}
            {dubber.support?.diaka && <TeamAboutLink link={dubber.support.diaka} label="diaka" />}
            {dubber.support?.bymeacoffee && <TeamAboutLink link={dubber.support.bymeacoffee} label="bymeacoffee" />}
            {dubber.support?.patreon && <TeamAboutLink link={dubber.support.patreon} label="patreon" />}
          </ul>

          <div className="w-full h-[1px] bg-dark-light"></div>

          {dubber.about && <p className="w-full text-white text-[20px]  max-lg:text-[16px]">{dubber.about}</p>}
          {!dubber.about && <p className="w-full text-grey-new  italic">Опис відсутній</p>}
        </div>

        {/* {dubbedHydratedAnimes?.length ? <DubberAnimeDubbed dubber={dubber} hydratedAnimes={dubbedHydratedAnimes} /> : undefined} */}
        {dubber.members && !isEmpty(dubber.members) && <div className="flex flex-col gap-[16px]">
          <h3 className="text-white text-[32px] font-bold  max-lg:text-[24px]">Команда - {dubber.members.length} {wordDeclination(dubber.members.length, ['учасник', 'учасника', 'учасників'])}</h3>

          <div className="flex flex-wrap gap-[16px]">
            {dubber.members.filter(el => el.role === 'leader').map(member => {
              return <TeamMember member={member} key={`member--${member.id}`} />;
            })}

            {dubber.members.filter(el => el.role === 'editor').map(member => {
              return <TeamMember member={member} key={`member--${member.id}`} />;
            })}

            {dubber.members.filter(el => el.role === 'member').map(member => {
              return <TeamMember member={member} key={`member--${member.id}`} />;
            })}
          </div>
        </div>}

        <div className="flex items-center gap-[8px]">
          <MaterialSymbol icon="calendar_month" size={16} className="text-grey-new" />
          <p className="text-grey-new text-[12px] ">На nekomi з: {timestampToDayMonth(getUTC(dubber.created_at).timestamp)}</p>
        </div>
      </section>
    </>;
  } catch (e) {
    return HandleServerError(e);
  }
}