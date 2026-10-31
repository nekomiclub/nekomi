import { notFound, redirect } from 'next/navigation';

import UserLayout from '~/components/UserLayout';
import { conf } from '~/conf';
import { ROLE_PERMISSION } from '~/interfaces/IRole';
import { IRSCProps } from '~/interfaces/types';
import API from '~/shared/lib/api';
import { HandleServerNormalizedError } from '~/shared/utilities/handle-normalized-errors';
import CheckUserAccess from '~/utils/check-user-access';
import { getSessionToken } from '~/utils/server-utils';
import siteMetadata from '~/utils/site-metadata';

import TSettingsPage from './TSettingsPage';




// eslint-disable-next-line react-refresh/only-export-components
export const metadata = siteMetadata({ title: 'Налаштування команди озвучення', robots: ['nofollow', 'noindex'] });



export default async function TSettingsRSC({ params }: IRSCProps) {
  const { slug } = await params as { slug: string };

  // const { user, capabilities } = await CheckUserAccess({ session: cookies().get(conf.vars.SessionCookie)?.value, permissions: ['dubberEditProfile', 'admin', 'basic'], checkMode: 'OR' });
  const { user, permissions: capabilities } = await CheckUserAccess({ session: await getSessionToken(), permissions: [ROLE_PERMISSION.ABSOLUTE], checkMode: 'OR' });
  if (!user) return notFound();

  const teamRes = await API.Team.getTeam({
    params: {
      qr: slug
    },
    searchParams: {
      is_extended: true
    }
  });
  if (!teamRes.success) return HandleServerNormalizedError(teamRes.error);

  let team = teamRes.response.data.team;
  let members = teamRes.response.data.team_members!;



  // Skip checks if user is root or admin
  if (!capabilities?.includes(ROLE_PERMISSION.ABSOLUTE) /* && !capabilities?.includes('admin') */) {
    const member = members.find(el => el.id === user.id);
    // Redir if user is not a member or not a team leader
    if (!member || member.role !== 'leader') return redirect(conf.URL.nekomiSite);
  }



  return user && <>
    <UserLayout type="dubber_settings" dubber={team} />

    <section className="wrapper gap-[40px] pt-[24px] relative">
      <TSettingsPage dubber={team} members={members} />
    </section>
  </>;
}