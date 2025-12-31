import { cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';

import { HandleServerError } from '~/components/Errors';
import UserLayout from '~/components/UserLayout';
import { conf } from '~/conf';
import { RSCProps } from '~/interfaces/types';
import API from '~/services/api/API';
import { DubberFullType, IDubberMemberCard } from '~/services/api/dubber/GetDubber.api';
import CheckUserAccess from '~/utils/check-user-access';
import siteMetadata from '~/utils/site-metadata';

import { DubberSettingsContent } from './DubberSettingsPage';



export const metadata = siteMetadata({ title: 'Налаштування команди озвучення', robots: ['nofollow', 'noindex'] });



export default async function RSC({ params }: RSCProps) {
  const { slug } = await params as { slug: string };

  const { user, capabilities } = await CheckUserAccess({ session: cookies().get(conf.vars.SessionCookie)?.value, capabilities: ['dubberEditProfile', 'admin', 'basic'], checkMode: 'OR' });
  if (!user) return notFound();

  let dubber: DubberFullType | undefined;
  let members: IDubberMemberCard[] | undefined;



  try {
    const data = await API.getDubber({ query: slug }, { view: 'full', get_members: true });

    dubber = data.dubber;
    members = data.dubber.members ?? [];
  } catch (e) {
    return HandleServerError(e);
  }

  // Skip checks if user is root or admin
  if (!capabilities?.includes('root') && !capabilities?.includes('admin')) {
    const member = members.find(el => el.id === user.id);
    // Redir if user is not a member or not a team leader
    if (!member || member.role !== 'leader') return redirect(conf.URL.nekomiSite);
  }



  return user && <>
    <UserLayout type="dubber_settings" dubber={dubber} />

    <section className="wrapper gap-[40px] pt-[24px] relative">
      <DubberSettingsContent dubber={dubber} members={members} />
    </section>
  </>;
}