import Link from 'next/link';

import { metaObject } from '~/config';



export const metadata = metaObject({
  title: 'Спільний перегляд аніме',
  description: 'Дивись аніме на українській мові з друзями разом, без втрати якості!'
})

export default async function RSC() {
  return <main>
    <div className="wrapper h-full min-h-screen pb-[32px] max-sm:!p-0 max-sm:rounded-0" style={{ paddingTop: 'calc(var(--header-height) + 8px)' }}>
      <section className="w-full h-full grow rounded-[4px] relative bg-dark-light flex items-center justify-center overflow-hidden px-[24px]">
        {/* backdrop */}
        <div className="w-full h-full absolute top-0 left-0">
          <div className="w-full h-full absolute top-0 left-0 bg-dark/[.2]"></div>
          <video src="/assets/together-video.mp4" className="w-full h-full object-cover" autoPlay muted preload="metadata" loop controls={false}></video>
        </div>

        <div className="flex flex-col gap-0 items-center z-[2]">
          <h1 className="text-white text-[40px] text-center font-manrope font-bold max-md:text-[32px]">ДИВИТИСЬ АНІМЕ З ДРУЗЯМИ — ПРОСТО</h1>
          <h3 className="text-white/[.6] text-[24px] text-center font-manrope max-md:text-[16px]">Знайди аніме {'>'} Створи кімнату {'>'} Запроси друга!</h3>
        </div>

        <div className="w-full h-[100px] absolute left-0 bottom-0 px-[32px] py-[24px] flex items-end z-[2]" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0), rgba(18, 18, 18, .5))' }}>
          <p className="text-white/[.4] font-space-grotesk">Source video: <Link className="font-bold underline underline-offset-2" href={'https://www.youtube.com/watch?v=0s9h5r9vpIE&ab_channel=Sota'} target="_blank">YouTube</Link></p>
        </div>
      </section>
    </div>
  </main>
}