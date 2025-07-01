import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { HandleServerError } from '~/components/Errors';
import { config, metaObject } from '~/config';
import { Dubber } from '~/interfaces/DubberIntf';
import { RSCProps } from '~/interfaces/types';
import { User } from '~/interfaces/UserIntf';
import API from '~/services/ApiService';
import CheckUserAccess from '~/utils/check-user-access';

import { DubberSettingsBanner, DubberSettingsContent, DubberSettingsHeader } from './DubberSettingsPage';



export const metadata = metaObject({ title: 'Налаштування команди озвучення', robots: ['nofollow', 'noindex'] })



export default async function RSC({ params }: RSCProps) {
  const { slug } = await params as { slug: string };

  const { user, capabilities } = await CheckUserAccess({ session: cookies().get(config.vars.SessionCookie)?.value, capabilities: ['dubberEditProfile', 'admin', 'basic'], checkMode: 'OR' });
  if (!user) return redirect(config.URL.nekomi_site);

  let dubber: Dubber | undefined = undefined;
  let members: User[] | undefined = undefined



  try {
    const data = await API.getDubberByQuery({
      query: slug,
      detailed: true,
      parseMembers: true,
      useCache: false
    })

    dubber = data.dubber!;
    members = data.parsedMembers!;
  } catch (e) {
    return HandleServerError(e)
  }

  // Skip checks if user is root or admin
  if (!capabilities?.includes('root') && !capabilities?.includes('admin')) {
    const member = dubber.members.find(el => el.id === user.id);
    // Redir if user is not a member or not a team leader
    if (!member || member.role !== 'leader') return redirect(config.URL.nekomi_site)
  }




  return user && <section className="wrapper pt-[16px] sm:pt-[var(--header-height)] gap-[16px]">
    <DubberSettingsBanner dubber={dubber} />

    <div className="px-[16px] pt-[160px] max-md:pt-[224px] pb-[16px] rounded-[4px] bg-dark-bright flex flex-col gap-[40px] relative max-sm:px-[8px]">
      <DubberSettingsHeader dubber={dubber} />
      <DubberSettingsContent dubber={dubber} members={members} />
    </div>
  </section>
}