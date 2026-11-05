import '~/styles/pages/home-page.scss';

import { MaterialSymbol } from 'material-symbols-rc';
import Link from 'next/link';

import conf from '~/conf';
import { IcoNekomiLogoWhite } from '~/shared/components/Icons';
import API from '~/shared/lib/api';
import { HandleServerNormalizedError } from '~/shared/utilities/handle-normalized-errors';
import siteMetadata from '~/shared/utilities/site-metadata';
import { randomNumber } from '~/shared/utilities/utilities';

import { HomeCategory, HomeHero } from './HomePage';




// eslint-disable-next-line react-refresh/only-export-components
export const metadata = siteMetadata({
  title: 'nekomi',
  description: 'Nekomi - безкоштовний онлайн-кінотеатр аніме з великою кількістю озвучення на українській мові!'
});



export default async function HomePageRSC() {
  const homeFeedRes = await API.Generic.getFeed({});
  if (!homeFeedRes.success) return HandleServerNormalizedError(homeFeedRes.error);

  const feed = homeFeedRes.response.data;
  const hero = feed.hero[randomNumber(0, feed.hero.length - 1)];



  return <main className="w-full h-full bg-dark-primary min-h-screen">
    {hero && <HomeHero hero={hero} />}

    {/* Hot category */}
    {/* <div className="wrapper gap-[32px]">
      <HomeCategory label="Популярні" icon={<MaterialSymbol icon="star" size={32} fill className="text-[#FF464E]" />} animes={feed.hot} />
    </div> */}

    {/* Updated recently */}
    <div className="wrapper gap-[32px]">
      {feed.updated_recently.length > 0 && <HomeCategory label="Оновлено нещодавно" icon={<MaterialSymbol icon="schedule" size={32} className="text-white max-md:!text-[24px]" />} animes={feed.updated_recently} />}
    </div>

    {/* Telegram advertisment */}
    <div className="wrapper !flex-row gap-[60px] py-[60px] !px-[16px] items-center !my-[60px] max-md:!flex-col">
      <IcoNekomiLogoWhite width={256} height={256} className="shrink-0 max-md:w-[128px] max-md:h-[128px]" fill="#fff" />

      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px]">
          <h2 className="text-white text-[40px] font-bold max-[650px]:text-[32px] ">А ти, підписаний на <span className="text-primary">телеграм nekomi?</span></h2>
        </div>

        <div className="flex flex-col gap-[8px] w-fit max-[650px]:w-full">
          <Link href={conf.URL.telegram} target="_blank" className="px-[16px] py-[16px] rounded-[2px] bg-dark-medium border border-dark-light flex items-center justify-center gap-[16px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light active:scale-[.95]">
            <MaterialSymbol icon="ungroup" size={24} className="text-white" />
            <p className="text-white text-[24px] uppercase max-[650px]:text-[16px] ">підписатися</p>
          </Link>
        </div>
      </div>
    </div>

    {/* Hight rate */}
    <div className="wrapper gap-[32px]">
      {feed.highest_rate.length > 0 && <HomeCategory label="З високою оцінкою" icon={<MaterialSymbol icon="star_half" size={32} className="text-white max-md:!text-[24px]" />} animes={feed.highest_rate} />}
    </div>
  </main>;
}