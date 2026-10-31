import '~/styles/pages/team-page.scss';

import { Metadata } from 'next';
import { cache } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';

import UserLayout from '~/components/UserLayout';
import { ITeamPageParams } from '~/interfaces/PagesParams';
import { IRSCProps } from '~/interfaces/types';
import API from '~/shared/lib/api';
import { HandleServerNormalizedError } from '~/shared/utilities/handle-normalized-errors';
import siteMetadata from '~/utils/site-metadata';
import { getUTC, isEmpty, timestampToDayMonth, wordDeclination } from '~/utils/utils';

import { TeamAboutLink, TeamMember } from './_components/TeamUI';



const getCachedTeam = cache(async (query: string) => {
  return await API.Team.getTeam({
    params: {
      qr: query
    },
    searchParams: {
      is_extended: true
    }
  });
});



// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(
  props: IRSCProps<ITeamPageParams>,
): Promise<Metadata> {
  const { slug } = await props.params;

  const teamRes = await getCachedTeam(slug);
  if (!teamRes.success) {
    if (teamRes.error.status === 404) return siteMetadata({ title: 'Команда озвучення не знайдена', robots: ['nofollow', 'noindex'] });

    return siteMetadata({ title: 'Щось пішло не так ...', robots: ['nofollow', 'noindex'] });
  }

  const team = teamRes.response.data.team;
  const title = team.name;
  const description = team.about ?? 'Опис відсутній';

  return siteMetadata({
    title,
    description: description,
    keywords: [team.name],
    openGraph: {
      title,
      description: description,
      images: team.avatar,
      type: 'profile'
    }
  });
}



export default async function TeamPageRSC({ params, searchParams }: IRSCProps<ITeamPageParams>) {
  const { slug } = await params;

  const teamRes = await getCachedTeam(slug);
  if (!teamRes.success) return HandleServerNormalizedError(teamRes.error);

  const team = teamRes.response.data.team;
  const team_members = teamRes.response.data.team_members!;



  return <>
    <UserLayout type="dubber_profile" dubber={team} />

    <section className="wrapper gap-[40px] pt-[24px] relative">
      {/* About */}
      <div className="flex flex-col gap-[24px]">
        <ul className="w-full flex items-center justify-center flex-wrap gap-[8px]">
          {team.socials?.telegram && <TeamAboutLink link={team.socials.telegram} label="telegram" />}
          {team.socials?.tiktok && <TeamAboutLink link={team.socials.tiktok} label="tiktok" />}
          {team.socials?.youtube && <TeamAboutLink link={team.socials.youtube} label="youtube" />}
          {team.socials?.instagram && <TeamAboutLink link={team.socials.instagram} label="instagram" />}
          {team.support?.monobank && <TeamAboutLink link={team.support.monobank} label="monobank" />}
          {team.support?.diaka && <TeamAboutLink link={team.support.diaka} label="diaka" />}
          {team.support?.bymeacoffee && <TeamAboutLink link={team.support.bymeacoffee} label="bymeacoffee" />}
          {team.support?.patreon && <TeamAboutLink link={team.support.patreon} label="patreon" />}
        </ul>

        <div className="w-full h-[1px] bg-dark-light"></div>

        {team.about && <p className="w-full text-white text-[20px]  max-lg:text-[16px]">{team.about}</p>}
        {!team.about && <p className="w-full text-grey-new  italic">Опис відсутній</p>}
      </div>

      {/* {dubbedHydratedAnimes?.length ? <DubberAnimeDubbed dubber={dubber} hydratedAnimes={dubbedHydratedAnimes} /> : undefined} */}
      {team_members && !isEmpty(team_members) && <div className="flex flex-col gap-[16px]">
        <h3 className="text-white text-[32px] font-bold  max-lg:text-[24px]">Команда - {team_members.length} {wordDeclination(team_members.length, ['учасник', 'учасника', 'учасників'])}</h3>

        <div className="flex flex-wrap gap-[16px]">
          {/* Show leaders */}
          {team_members.filter(el => el.role === 'leader').map(member => {
            return <TeamMember member={member} key={`member--${member.id}`} />;
          })}

          {/* Show editors */}
          {team_members.filter(el => el.role === 'editor').map(member => {
            return <TeamMember member={member} key={`member--${member.id}`} />;
          })}

          {/* Show members */}
          {team_members.filter(el => el.role === 'member').map(member => {
            return <TeamMember member={member} key={`member--${member.id}`} />;
          })}
        </div>
      </div>}

      <div className="flex items-center gap-[8px]">
        <MaterialSymbol icon="calendar_month" size={16} className="text-grey-new" />
        <p className="text-grey-new text-[12px] ">На nekomi з: {timestampToDayMonth(getUTC(team.created_at).timestamp)}</p>
      </div>
    </section>
  </>;
}