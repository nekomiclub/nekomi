'use client'

import { NextPage } from 'next';
import { IRSCProps } from '../../../interfaces/IRSC';
import { IcoTranslations } from '../../../assets/Icons';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';


{/* <ul className='flex flex-col gap-[4px] text-white'>
  <li className='!list-disc relative left-[16px]'>
    <p className='text-white text-[16px]'></p>
  </li>

  <li className='!list-disc relative left-[16px]'>
    <p className='text-white text-[16px]'></p>
  </li>

  <li className='!list-disc relative left-[16px]'>
    <p className='text-white text-[16px]'></p>
  </li>

  <li className='!list-disc relative left-[16px]'>
    <p className='text-white text-[16px]'></p>
  </li>

  <li className='!list-disc relative left-[16px]'>
    <p className='text-white text-[16px]'></p>
  </li>
</ul> */}

const Agreement: NextPage<IRSCProps> = ({ searchParams }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [lang, setLang] = useState<'eng' | 'ukr'>(searchParams.lang === 'ukr' ? 'ukr' : 'eng')

  useEffect(() => {
    router.replace(`${pathname}?lang=${lang}`)
  }, [lang])

  return (
    <div className='w-full min-h-screen items-center' style={{ paddingTop: `132px` }}>
      <div className="wrapper gap-[80px]">
        {lang === 'ukr' && <>
          <div className='flex items-center gap-[32px] justify-center w-full max-[880px]:flex-col'>
            <h1 className='text-white text-[40px] text-center font-bold max-[1170px]:text-[24px]'>Угода користувача</h1>

            <button className='flex items-center gap-[16px] py-[8px] px-[16px] bg-darkGrey rounded-[2px] duration-200 hover:bg-purple focus-visible:bg-purple' onClick={() => setLang('eng')}>
              <IcoTranslations />
              <p className='text-white font-extralight text-[24px]'>English</p>
            </button>
          </div>

          <div className='px-[24px] py-[40px] rounded-[2px] bg-darkGrey flex flex-col gap-[16px]'>
            <h2 className='text-white text-[24px] font-bold text-center'>Загальні відомості</h2>

            <p className='text-white text-[16px]'>
              Нижче зазначена Користувальницька угода (далі - Угода) регулює взаємини між адміністрацією nekomi (надалі - Сайт) та користувачем (надалі - Користувач). Використовуючи Сайт, ви погоджуєтесь з умовами цієї Угоди.
            </p>

            <b className='text-white text-[16px]'>Якщо ви не згодні з умовами цієї Угоди, утримуйтесь від використання Сайту.</b>

            <h2 className='text-white text-[24px] font-bold text-center'>Предмет угоди</h2>
            <p className='text-white text-[16px]'>Адміністрація надає Користувачу право на розміщення на Сайті такої інформації:</p>
            <ul className='flex flex-col gap-[4px] text-white'>
              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Текстової інформації</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Відеоматеріалів</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Фотоматеріалів</p>
              </li>
            </ul>

            <h2 className='text-white text-[24px] font-bold text-center'>Права та обов`язки сторін</h2>
            <p className='text-white text-[16px]'>Користувач має право:</p>
            <ul className='flex flex-col gap-[4px] text-white'>
              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Проводити пошук інформації на Сайті</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Отримувати інформацію з Сайту</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Створювати інформацію для Сайту</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Розповсюджувати інформацію на Сайті</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Коментувати контент, розміщений на Сайті</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Копіювати інформацію на інші сайти з вказанням джерела</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Використовувати інформацію з Сайту в особистих некомерційних цілях</p>
              </li>
            </ul>

            <p className='text-white text-[16px]'>Адміністрація має право:</p>
            <ul className='flex flex-col gap-[4px] text-white'>
              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Змінювати та скасовувати правила без інформування Користувача</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Впроваджувати рішення без інформування та/чи обґрунтування їх</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Обмежувати доступ до будь-якої інформації на Сайті</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Створювати, змінювати, видаляти інформацію</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Видаляти облікові записи</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Відмовляти у реєстрації без пояснення причин</p>
              </li>
            </ul>

            <h2 className='text-white text-[24px] font-bold text-center'>Користувач зобов`язується:</h2>
            <ul className='flex flex-col gap-[4px] text-white'>
              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Не розповсюджувати інформацію, що спрямована на пропаганду війни, розжигання національної, расової або релігійної ненависті та ворожнечі, а також іншу інформацію, за розповсюдження якої передбачена кримінальна чи адміністративна відповідальність (Виключення: війна Росії проти України розпочата у 2014 році.)</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Не порушувати працездатність Сайту</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Не здійснювати дії, спрямовані на введення інших Користувачів у оману</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Не передавати у використання свій обліковий запис та/або логін та пароль свого облікового запису третім особам</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Не реєструвати обліковий запис від імені або замість іншої особи за винятком випадків, передбачених законодавством</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Не виставляти нецензурні матеріали в фотографії профілю Користувача та/або на його тлі. </p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Не використовувати матеріали створені Сайтом та/або іншими проектами екслюзивно для Користувачів Сайту (2K якість, субтитри, ексклюзивне озвучення) в своїх цілях без дозволу адміністрації сайту.</p>
              </li>
            </ul>

            <h2 className='text-white text-[24px] font-bold text-center'>Адміністрація зобов`язується:</h2>
            <ul className='flex flex-col gap-[4px] text-white'>
              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Підтримувати працездатність Сайту за винятком випадків, коли це неможливо з незалежних від Адміністрації причин</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Здійснювати різносторонню захист облікового запису Користувача</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Захищати інформацію, розповсюдження якої обмежено або заборонено законами, шляхом виносу попередження або видалення облікового запису Користувача, який порушив правила</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Надавати всю доступну інформацію про Користувача уповноваженим органам державної влади в випадках, передбачених законом</p>
              </li>
            </ul>

            <h2 className='text-white text-[24px] font-bold text-center'>Відповідальність сторін</h2>
            <ul className='flex flex-col gap-[4px] text-white'>
              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Користувач особисто несе повну відповідальність за поширену ним інформацію</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Адміністрація не несе відповідальності за достовірність інформації, скопійованої з інших джерел</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Адміністрація не несе відповідальності за неспівпадіння очікуваного Користувачем та фактично отриманих послуг</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>Адміністрація не несе відповідальності за матеріали розміщені на сайті, такі як: Коментарі користувачів, вміст їх облікового запису, вміст відео від команд озвучування</p>
              </li>

              <li className='!list-disc relative left-[16px]'>
                <p className='text-white text-[16px]'>У разі виникнення форс-мажорної ситуації (бойові дії, надзвичайна ситуація, стихійне лихо тощо) Адміністрація не гарантує збереження інформації, розміщеної Користувачем, а також безперервну роботу інформаційного ресурсу</p>
              </li>
            </ul>

            <h2 className='text-white text-[24px] font-bold text-center'>Умови дії</h2>
            <p className='text-white text-[16px]'>
              Ця Угода набирає чинності при реєстрації на Сайті та припиняє свою дію при появі нової версії угоди. Адміністрація залишає за собою право односторонньо змінювати цю Угоду за власним бажанням. У разі змін умов Угоди, в окремих випадках Адміністрація може повідомляти користувачів зручним для себе способом.
            </p>

            <p className='text-white text-center font-extralight'>Політика конфіденційності оновлена: 31.10.2024</p>
          </div>
        </>}

        {lang === 'eng' && <>
          <div className='flex items-center gap-[32px] justify-center w-full max-[880px]:flex-col'>
            <h1 className='text-white text-[40px] text-center font-bold max-[1170px]:text-[24px]'>Agreement</h1>

            <button className='flex items-center gap-[16px] py-[8px] px-[16px] bg-darkGrey rounded-[2px] duration-200 hover:bg-purple focus-visible:bg-purple' onClick={() => setLang('ukr')}>
              <IcoTranslations />
              <p className='text-white font-extralight text-[24px]'>Українською</p>
            </button>
          </div>
        </>}
      </div>
    </div>
  );
}

export default Agreement;