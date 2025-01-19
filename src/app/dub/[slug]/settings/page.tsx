import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { HappenedWrongScreen, NotFoundScreen } from '~/components/Components';
import { getUTC } from '~/components/handlers';
import { config, devMode, metaObject } from '~/config';
import { CheckUserAccess } from '~/helpers/Authorization';
import { IDubber } from '~/interfaces/IDubber';
import { IRSCProps } from '~/interfaces/IRSC';
import { IUser } from '~/interfaces/IUser';
import API from '~/services/ApiService';

import { DubberSettingsBanner, DubberSettingsContent, DubberSettingsHeader } from './DubberSettings';



export const metadata = metaObject({ title: 'Налаштування команди озвучення', robots: ['nofollow', 'noindex'] })



export default async function RSC({ params }: IRSCProps) {
  const { slug } = await params as { slug: string };

  const { user, capabilities } = await CheckUserAccess({ session: cookies().get(config.vars.SessionCookie)?.value, capabilities: ['dubberEditProfile', 'admin', 'basic'], checkMode: 'OR' });
  if (!user) return redirect(config.URL.baseURL);

  let dubber: IDubber | undefined = undefined;
  let members: IUser[] | undefined = undefined



  try {
    const data = await API.getDubberByQuery({
      query: slug,
      detailed: true,
      parseMembers: true,
      useCache: false
    })

    dubber = data.dubber;
    members = data.parsedMembers!;
  } catch (e) {
    if (e instanceof AxiosError) {
      const code = e.response?.data?.code || 500;

      devMode ? console.error(e.response?.data) : null;

      if (code === 404) {
        return <NotFoundScreen />
      } else if (code === 400) {
        return <HappenedWrongScreen cause={`[${e.code}]: ${e.response?.data?.msg || e.response?.data?.message || 'No message provided'}`} />
      } else {
        return <HappenedWrongScreen cause={e.message} />
      }
    } else {
      const date = `${getUTC().date} ${getUTC().time}`
      console.error(`[${date}]: Server error occured at w/query - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`);
      return <HappenedWrongScreen cause={`Server error occured at w/query. See logs at ${date}`} />;
    }
  }

  // Skip checks if user is root or admin
  if (!capabilities?.includes('root') && !capabilities?.includes('admin')) {
    const member = dubber.members.find(el => el.id === user.id);
    // Redir if user is not a member or not a team leader
    if (!member || member.role !== 'leader') return redirect(config.URL.baseURL)
  }




  return user && <section className="wrapper pt-[92px] gap-[16px]">
    <DubberSettingsBanner dubber={dubber} />

    <div className="px-[16px] pt-[160px] max-md:pt-[224px] pb-[16px] rounded-[4px] bg-dark-bright flex flex-col gap-[40px] relative max-sm:px-[8px]">
      <DubberSettingsHeader dubber={dubber} />
      <DubberSettingsContent dubber={dubber} members={members} />
    </div>
  </section>
}