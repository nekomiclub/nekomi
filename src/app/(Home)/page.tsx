import '~/styles/pages/home.scss';

import Link from 'next/link';
import { MaterialSymbol } from 'react-material-symbols';

import { IcoNekomiLogo } from '~/assets/Icons';
import { HandleServerError } from '~/components/Errors';
import API from '~/services/ApiService';
import { randomNumber } from '~/utils/handlers';
import { CONSTS, metaObject } from '../../config';

import { HomeCategory, HomeHeadliner } from './HomePage';




export const metadata = metaObject({
  title: 'nekomi',
  description: 'Nekomi - безкоштовний онлайн-кінотеатр аніме з великою кількістю озвучення на українській мові!'
})



export default async function RSC() {
  try {
    const featured = await API.getFeaturedAnime();
    const headliner = featured.headliners[randomNumber(0, featured.headliners.length - 1)]

    return <main className="w-full h-full bg-dark min-h-screen">
      <HomeHeadliner headliner={headliner} />

      {/* Categories */}
      <div className="wrapper gap-[32px]">
        <HomeCategory label="Популярні" icon={<MaterialSymbol icon="star" size={32} fill className="text-[#FF464E]" />} hydratedAnimes={featured.hot} />
      </div>

      <div className="wrapper bg-dark-bright !flex-row gap-[60px] py-[60px] !px-[16px] items-center !my-[60px] max-md:!flex-col">
        <IcoNekomiLogo width={256} height={256} className="shrink-0 max-md:w-[128px] max-md:h-[128px]" fill="#fff" />

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-white text-[40px] font-bold max-[650px]:text-[32px] font-manrope">А ти, підписаний на <span className="text-primary">телеграм nekomi?</span></h2>
            <p className="text-white text-[24px] max-[650px]:text-[16px] font-manrope">Тут то ти і попався. Там публікується багато цікавого. Новини, оновлення там, та всяке інше з аніме тематики.</p>
          </div>

          <div className="flex flex-col gap-[8px] w-fit max-[650px]:w-full">
            <Link href={CONSTS.social.telegram} target="_blank" className="px-[16px] py-[16px] rounded-[2px] bg-dark-medium border border-dark-light flex items-center justify-center gap-[16px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light active:scale-[.95]">
              <MaterialSymbol icon="ungroup" size={24} className="text-white" />
              <p className="text-white text-[24px] uppercase max-[650px]:text-[16px] font-manrope">підписатися</p>
            </Link>
            <p className="text-lightGrey max-[650px]:text-center font-manrope">Підпишись будь ласка, нам буде приємно 👉👈</p>
          </div>
        </div>
      </div>

      <div className="wrapper gap-[32px]">
        {featured.updatedRecently.length > 0 && <HomeCategory label="Оновлено нещодавно" icon={<MaterialSymbol icon="schedule" size={32} className="text-white max-md:!text-[24px]" />} hydratedAnimes={featured.updatedRecently} />}
        {featured.rated.length > 0 && <HomeCategory label="З високою оцінкою" icon={<MaterialSymbol icon="star_half" size={32} className="text-white max-md:!text-[24px]" />} hydratedAnimes={featured.rated} />}
      </div>
    </main>
  } catch (e) {
    return HandleServerError(e);
  }
}