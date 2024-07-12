import axios, { AxiosError } from 'axios';
import { NextPage } from 'next';
import { config, devMode } from '../../config';
import Link from 'next/link';
import { HappenedWrongScreen, NotFoundScreen } from '../../components/OopsComponents';
import { getUTC } from '../../components/handlers';

export type TPollCode = 'fk-authority' | 'fk-userapi' | 'animee-site' | 'animee-core' | 'animee-media' | 'animee-uploads' | 'animee-bot'

/** Poll stamp */
export interface IStamp {
  id: string

  timestamp: number

  services: IStampService[]
}

export type TStampServiceStatus = 'online' | 'offline' | 'disabled' | 'development'

export interface IStampService {
  name: string

  code: TPollCode

  status: TStampServiceStatus
}



const ServerIco: NextPage<{ color?: string, height?: number, width?: number }> = ({ color, height, width }) => {
  return <svg width={width || 32} height={height || 32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.66667 14.6667H25.3333V6.66667H6.66667V14.6667ZM28 5.33333V26.6667C28 27.0203 27.8595 27.3594 27.6095 27.6095C27.3594 27.8595 27.0203 28 26.6667 28H5.33333C4.97971 28 4.64057 27.8595 4.39052 27.6095C4.14048 27.3594 4 27.0203 4 26.6667V5.33333C4 4.97971 4.14048 4.64057 4.39052 4.39052C4.64057 4.14048 4.97971 4 5.33333 4H26.6667C27.0203 4 27.3594 4.14048 27.6095 4.39052C27.8595 4.64057 28 4.97971 28 5.33333ZM25.3333 17.3333H6.66667V25.3333H25.3333V17.3333ZM9.33333 20H13.3333V22.6667H9.33333V20ZM9.33333 9.33333H13.3333V12H9.33333V9.33333Z" fill={color || 'white'} />
  </svg>

}


const Card: NextPage<{
  title: string,
  status: TStampServiceStatus
}> = ({ status, title }) => {
  let color = '';

  if (status === 'online') {
    color = '#2ECC71'
  } else if (status === 'development') {
    color = '#F39C12'
  } else {
    color = '#E74C3C'
  }

  return <div className='bg-grey px-[16px] py-[8px] rounded-[2px] flex gap-[16px] items-center max-[540px]:w-full'>
    <ServerIco color={color} height={64} width={64} />

    <div className='flex flex-col gap-[4px]'>
      <p className='text-[24px] text-white uppercase'>{title}</p>
      <p className={`text-[16px]`} style={{ color }}>
        {status === 'online' && 'Працює'}
        {status === 'offline' && 'Не працює'}
        {status === 'disabled' && 'Вимкнено'}
        {status === 'development' && 'В розробці'}
      </p>
    </div>
  </div>
}



const RSC: NextPage = async (props) => {
  let isUptimeUnavailable = false;
  let fkStamp: IStampService[] = []
  let animeeStamp: IStampService[] = [];
  let updated = 'Не оновлено';

  try {
    const { data } = await axios.get<{ snappedAt: string, stamp: IStamp }>(`${config.URL.uptime}`);

    data.stamp.services.forEach(service => {
      if (service.code.includes('fullkekw')) fkStamp.push(service);
      if (service.code.includes('animee')) animeeStamp.push(service);
    })

    updated = `${data.snappedAt} UTC-0`;
    isUptimeUnavailable = false;
  } catch (e) {
    if (e instanceof AxiosError) {
      isUptimeUnavailable = true;

      devMode ? console.error(e.response?.data) : null;
    } else {
      const date = `${getUTC().date} ${getUTC().time}`
      const at = `/RSC`;

      console.error(`[${date}]: Server error occured at ${at} - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`);
      return <HappenedWrongScreen cause={`Server error occured at ${at}. See logs at ${date}`} />;
    }
  }

  return (
    <main className='h-full min-h-screen bg-dark w-full flex justify-center items-center'>
      <div className="wrapper justify-center items-center">
        <div className='bg-darkGrey px-[24px] py-[16px] my-[40px] flex flex-col gap-[40px] w-full max-w-[1200px]'>
          {/* Fullkekw services */}
          <div className='flex flex-col gap-[24px]'>
            <div className='flex items-center gap-[16px]'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0001 14.6667C14.5267 14.6667 13.3334 15.86 13.3334 17.3333C13.3334 18.8067 14.5267 20 16.0001 20C17.4734 20 18.6667 18.8067 18.6667 17.3333C18.6667 15.86 17.4734 14.6667 16.0001 14.6667ZM24.0001 17.3333C24.0001 12.9133 20.4201 9.33333 16.0001 9.33333C11.5801 9.33333 8.00008 12.9133 8.00008 17.3333C8.00008 20.2933 9.60675 22.8667 11.9934 24.2533L13.3401 21.9333C11.7467 21.0067 10.6667 19.3067 10.6667 17.3333C10.6667 14.3867 13.0534 12 16.0001 12C18.9467 12 21.3334 14.3867 21.3334 17.3333C21.3334 19.3067 20.2534 21.0067 18.6601 21.9267L20.0067 24.2467C22.3934 22.8667 24.0001 20.2933 24.0001 17.3333ZM16.0001 4C8.63341 4 2.66675 9.96667 2.66675 17.3333C2.66675 22.26 5.34675 26.5533 9.32675 28.86L10.6601 26.5533C7.48008 24.7133 5.33341 21.2733 5.33341 17.3333C5.33341 11.44 10.1067 6.66667 16.0001 6.66667C21.8934 6.66667 26.6667 11.44 26.6667 17.3333C26.6667 21.2733 24.5201 24.7133 21.3401 26.56L22.6734 28.8667C26.6534 26.5533 29.3334 22.26 29.3334 17.3333C29.3334 9.96667 23.3601 4 16.0001 4Z" fill="white" />
              </svg>
              <h3 className='text-[24px] text-white'>Статус сервісів Fullkekw</h3>
            </div>

            <div className='flex gap-[8px] flex-wrap justify-center'>
              {fkStamp.map(serv => {
                return <Card status={serv.status} title={serv.name} key={`serv-${serv.code}`} />
              })}

              {isUptimeUnavailable && <p className='text-lightGrey'>Інформація недоступна</p>}
            </div>
          </div>

          {/* Animee services */}
          <div className='flex flex-col gap-[24px]'>
            <div className='flex items-center gap-[16px]'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0001 14.6667C14.5267 14.6667 13.3334 15.86 13.3334 17.3333C13.3334 18.8067 14.5267 20 16.0001 20C17.4734 20 18.6667 18.8067 18.6667 17.3333C18.6667 15.86 17.4734 14.6667 16.0001 14.6667ZM24.0001 17.3333C24.0001 12.9133 20.4201 9.33333 16.0001 9.33333C11.5801 9.33333 8.00008 12.9133 8.00008 17.3333C8.00008 20.2933 9.60675 22.8667 11.9934 24.2533L13.3401 21.9333C11.7467 21.0067 10.6667 19.3067 10.6667 17.3333C10.6667 14.3867 13.0534 12 16.0001 12C18.9467 12 21.3334 14.3867 21.3334 17.3333C21.3334 19.3067 20.2534 21.0067 18.6601 21.9267L20.0067 24.2467C22.3934 22.8667 24.0001 20.2933 24.0001 17.3333ZM16.0001 4C8.63341 4 2.66675 9.96667 2.66675 17.3333C2.66675 22.26 5.34675 26.5533 9.32675 28.86L10.6601 26.5533C7.48008 24.7133 5.33341 21.2733 5.33341 17.3333C5.33341 11.44 10.1067 6.66667 16.0001 6.66667C21.8934 6.66667 26.6667 11.44 26.6667 17.3333C26.6667 21.2733 24.5201 24.7133 21.3401 26.56L22.6734 28.8667C26.6534 26.5533 29.3334 22.26 29.3334 17.3333C29.3334 9.96667 23.3601 4 16.0001 4Z" fill="white" />
              </svg>
              <h3 className='text-[24px] text-white'>Статус сервісів Animee</h3>
            </div>

            <div className='flex gap-[8px] flex-wrap justify-center'>
              {animeeStamp.map(serv => {
                return <Card status={serv.status} title={serv.name} key={`serv-${serv.code}`} />
              })}

              {isUptimeUnavailable && <p className='text-lightGrey'>Інформація недоступна</p>}
            </div>
          </div>

          <div className='w-full flex flex-col gap-[8px]'>
            <p className='text-white text-center'>Якщо якийсь сервіс недоступний (не вимкнений) та в телеграмах <a href="https://t.me/an1meeClub" target='_blank' className='text-purple'>animee</a> чи <a href="https://t.me/fullkekw" target='_blank' className='text-purple'>fullkekw</a> нема сповіщення про роботи, будь ласка створіть тікет на <a href="https://discord.gg/UmDfKTpsh5" target='_blank' className='text-purple'>діскорд сервері</a></p>
            <p className='text-lightGrey text-center'>Оновлено в: {updated}</p>
            <Link href={'/'} className='text-purple'>На головну</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RSC;