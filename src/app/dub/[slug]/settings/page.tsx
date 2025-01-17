import { AxiosError } from 'axios';

import { HappenedWrongScreen, NotFoundScreen } from '~/components/Components';
import { getUTC } from '~/components/handlers';
import { devMode } from '~/config';
import { IDubber } from '~/interfaces/IDubber';
import { IRSCProps } from '~/interfaces/IRSC';
import { IUser } from '~/interfaces/IUser';
import API from '~/services/ApiService';

import { DubberSettingsBanner, DubberSettingsContent, DubberSettingsHeader } from './DubberSettings';



export default async function RSC({ params }: IRSCProps) {
  const { slug } = await params as { slug: string };

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



  return <section className="wrapper pt-[92px] gap-[16px]">
    <DubberSettingsBanner dubber={dubber} />

    <div className="px-[16px] pt-[160px] max-md:pt-[224px] pb-[16px] rounded-[4px] bg-dark-bright flex flex-col gap-[40px] relative max-sm:px-[8px]">
      <DubberSettingsHeader dubber={dubber} />
      <DubberSettingsContent dubber={dubber} members={members} />
    </div>
  </section>
}