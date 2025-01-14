import './styles.scss';

import { AxiosError } from 'axios';

import { HappenedWrongScreen, NotFoundScreen } from '~/components/Components';
import { getUTC } from '~/components/handlers';
import { devMode } from '~/config';
import { IDubber } from '~/interfaces/IDubber';
import { IRSCProps } from '~/interfaces/IRSC';
import { ITitle } from '~/interfaces/ITitle';
import { IUser } from '~/interfaces/IUser';
import API from '~/services/ApiService';

import { DubberAbout, DubberAnimeDubbed, DubberBanner, DubberHeader, DubberTeam } from './Dubber';



export default async function RSC({ params }: IRSCProps) {
  const { slug } = await params as { slug: string };

  let dubber: IDubber | null = null;
  let dubbedAnime: ITitle[] | null = null
  let parsedMembers: IUser[] | null = null



  try {
    const data = await API.getDubberByQuery({
      query: slug,
      detailed: true,
      fetchDubbedAnime: true,
      parseMembers: true
    })

    dubber = data.dubber;
    dubbedAnime = data.dubbedAnime as ITitle[];
    parsedMembers = data.parsedMembers as IUser[];
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



  return <section className="wrapper gap-[16px] pt-[92px]">
    <DubberBanner dubber={dubber} />

    <div className="px-[16px] pt-[160px] pb-[16px] rounded-[4px] bg-dark-bright flex flex-col gap-[40px] relative">
      <DubberHeader dubber={dubber} />
      <DubberAbout dubber={dubber} />
      {dubbedAnime?.length && <DubberAnimeDubbed dubber={dubber} dubbedAnime={dubbedAnime} />}
      {parsedMembers?.length && <DubberTeam dubber={dubber} members={parsedMembers} />}
    </div>
  </section>
}