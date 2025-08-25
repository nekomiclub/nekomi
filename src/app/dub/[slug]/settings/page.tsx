import { cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';

import { HandleServerError } from '~/components/Errors';
import UserLayout from '~/components/UserLayout';
import { config, metaObject } from '~/config';
import { Dubber } from '~/interfaces/DubberIntf';
import { RSCProps } from '~/interfaces/types';
import { User } from '~/interfaces/UserIntf';
import API from '~/services/ApiService';
import CheckUserAccess from '~/utils/check-user-access';

import { DubberSettingsContent } from './DubberSettingsPage';



export const metadata = metaObject({ title: 'Налаштування команди озвучення', robots: ['nofollow', 'noindex'] });



export default async function RSC({ params }: RSCProps) {
  const { slug } = await params as { slug: string };

  const { user, capabilities } = await CheckUserAccess({ session: cookies().get(config.vars.SessionCookie)?.value, capabilities: ['dubberEditProfile', 'admin', 'basic'], checkMode: 'OR' });
  if (!user) return notFound();

  let dubber: Dubber | undefined = undefined;
  let members: User[] | undefined = undefined;



  try {
    const data = await API.getDubberByQuery({
      query: slug,
      detailed: true,
      parseMembers: true,
      useCache: false
    });

    dubber = data.dubber!;
    members = data.parsedMembers!;
  } catch (e) {
    return HandleServerError(e);
  }

  // Skip checks if user is root or admin
  if (!capabilities?.includes('root') && !capabilities?.includes('admin')) {
    const member = dubber.members.find(el => el.id === user.id);
    // Redir if user is not a member or not a team leader
    if (!member || member.role !== 'leader') return redirect(config.URL.nekomi_site);
  }



  return user && <>
    <UserLayout type="dubber_settings" dubber={dubber} />

    <section className="wrapper gap-[40px] pt-[24px] relative">
      <DubberSettingsContent dubber={dubber} members={members} />
    </section>
  </>;
}