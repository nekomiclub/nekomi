'use client';

import { FC, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { InfoHeader } from '~/app/info/(components)/InfoUI';
import { conf } from '~/conf';



const IAgreementPage: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [lang, setLang] = useState<'eng' | 'ukr'>(searchParams.get('lang') === 'ukr' ? 'ukr' : 'eng');

  useEffect(() => {
    router.replace(`${pathname}?lang=${lang}`);
  }, [lang]);

  return (
    <div className="w-full min-h-screen items-center" style={{ paddingTop: `132px` }}>
      <div className="wrapper gap-[80px] max-w-[1170px] w-full">
        {lang === 'ukr' && <>
          <InfoHeader heading="Угода користувача" lang="eng" setLang={setLang} />

          <div className="px-[24px] py-[40px] rounded-[2px] bg-dark-medium flex flex-col gap-[16px]">
            <h2 className="text-white text-[24px] font-bold text-center">Загальні відомості</h2>

            <p className="text-white text-[16px]">
              Нижче зазначена Користувальницька угода (далі - Угода) регулює взаємини між адміністрацією nekomi (надалі - Сайт) та користувачем (надалі - Користувач). Використовуючи Сайт, ви погоджуєтесь з умовами цієї Угоди.
            </p>

            <b className="text-white text-[16px]">Якщо ви не згодні з умовами цієї Угоди, утримуйтесь від використання Сайту.</b>

            <h2 className="text-white text-[24px] font-bold text-center">Предмет угоди</h2>
            <p className="text-white text-[16px]">Адміністрація надає Користувачу право на розміщення на Сайті такої інформації:</p>
            <ul className="flex flex-col gap-[4px] text-white">
              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Текстової інформації</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Відеоматеріалів</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Фотоматеріалів</p>
              </li>
            </ul>

            <h2 className="text-white text-[24px] font-bold text-center">Права та обов`язки сторін</h2>
            <p className="text-white text-[16px]">Користувач має право:</p>
            <ul className="flex flex-col gap-[4px] text-white">
              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Проводити пошук інформації на Сайті</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Отримувати інформацію з Сайту</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Створювати інформацію для Сайту</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Розповсюджувати інформацію на Сайті</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Коментувати контент, розміщений на Сайті</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Копіювати інформацію на інші сайти з вказанням джерела</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Використовувати інформацію з Сайту в особистих некомерційних цілях</p>
              </li>
            </ul>

            <p className="text-white text-[16px]">Адміністрація має право:</p>
            <ul className="flex flex-col gap-[4px] text-white">
              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Змінювати та скасовувати правила без інформування Користувача</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Впроваджувати рішення без інформування та/чи обґрунтування їх</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Обмежувати доступ до будь-якої інформації на Сайті</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Створювати, змінювати, видаляти інформацію</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Видаляти облікові записи</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Відмовляти у реєстрації без пояснення причин</p>
              </li>
            </ul>

            <h2 className="text-white text-[24px] font-bold text-center">Користувач зобов`язується:</h2>
            <ul className="flex flex-col gap-[4px] text-white">
              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Не розповсюджувати інформацію, що спрямована на пропаганду війни, розжигання національної, расової або релігійної ненависті та ворожнечі, а також іншу інформацію, за розповсюдження якої передбачена кримінальна чи адміністративна відповідальність (Виключення: війна Росії проти України розпочата у 2014 році.)</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Не порушувати працездатність Сайту</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Не здійснювати дії, спрямовані на введення інших Користувачів у оману</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Не передавати у використання свій обліковий запис та/або логін та пароль свого облікового запису третім особам</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Не реєструвати обліковий запис від імені або замість іншої особи за винятком випадків, передбачених законодавством</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Не виставляти нецензурні матеріали в фотографії профілю Користувача та/або на його тлі. </p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Не використовувати матеріали створені Сайтом та/або іншими проектами екслюзивно для Користувачів Сайту (покращена якість, субтитри, ексклюзивне озвучення) в своїх цілях без дозволу адміністрації сайту.</p>
              </li>
            </ul>

            <h2 className="text-white text-[24px] font-bold text-center">Адміністрація зобов`язується:</h2>
            <ul className="flex flex-col gap-[4px] text-white">
              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Підтримувати працездатність Сайту за винятком випадків, коли це неможливо з незалежних від Адміністрації причин</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Здійснювати різносторонню захист облікового запису Користувача</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Захищати інформацію, розповсюдження якої обмежено або заборонено законами, шляхом виносу попередження або видалення облікового запису Користувача, який порушив правила</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Надавати всю доступну інформацію про Користувача уповноваженим органам державної влади в випадках, передбачених законом</p>
              </li>
            </ul>

            <h2 className="text-white text-[24px] font-bold text-center">Відповідальність сторін</h2>
            <ul className="flex flex-col gap-[4px] text-white">
              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Користувач особисто несе повну відповідальність за поширену ним інформацію</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Адміністрація не несе відповідальності за достовірність інформації, скопійованої з інших джерел</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Адміністрація не несе відповідальності за неспівпадіння очікуваного Користувачем та фактично отриманих послуг</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Адміністрація не несе відповідальності за матеріали розміщені на сайті, такі як: Коментарі користувачів, вміст їх облікового запису, вміст відео від команд озвучування</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">У разі виникнення форс-мажорної ситуації (бойові дії, надзвичайна ситуація, стихійне лихо тощо) Адміністрація не гарантує збереження інформації, розміщеної Користувачем, а також безперервну роботу інформаційного ресурсу</p>
              </li>
            </ul>

            <h2 className="text-white text-[24px] font-bold text-center">Умови дії</h2>
            <p className="text-white text-[16px]">
              Ця Угода набирає чинності при реєстрації на Сайті та припиняє свою дію при появі нової версії угоди. Адміністрація залишає за собою право односторонньо змінювати цю Угоду за власним бажанням. У разі змін умов Угоди, в окремих випадках Адміністрація може повідомляти користувачів зручним для себе способом.
            </p>

            <p className="text-white text-center font-extralight">Угода оновлена: 06.11.2024</p>
          </div>
        </>}

        {lang === 'eng' && <>
          <InfoHeader heading="Agreement" lang="ukr" setLang={setLang} />

          <div className="px-[24px] py-[40px] rounded-[2px] bg-dark-medium flex flex-col gap-[16px]">
            <h2 className="text-white text-[24px] font-bold text-center">General statements</h2>

            <p className="text-white text-[16px]">
              The following User Agreement (hereinafter - the Agreement) regulates the relationship between the administration of the site https://nekomi.club (hereinafter - the Site) and the user of the site (hereinafter - the User). By using the Site, you agree to the terms of this Agreement.
            </p>

            <b className="text-white text-[16px]">If you do not agree to the terms of this Agreement, please refrain from using the Site.</b>

            <h2 className="text-white text-[24px] font-bold text-center">Предмет угоди</h2>
            <p className="text-white text-[16px]">The Administration grants the User the right to post the following information on the Site:</p>
            <ul className="flex flex-col gap-[4px] text-white">
              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Text information</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Video materials</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Photo materials</p>
              </li>
            </ul>

            <h2 className="text-white text-[24px] font-bold text-center">Rights and duties</h2>
            <p className="text-white text-[16px]">The user has the right to:</p>
            <ul className="flex flex-col gap-[4px] text-white">
              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Search for information on the Site</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Receive information from the Site</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Create information for the Site</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Distribute information on the Site</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Comment on the content posted on the Site</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Copy information to other sites without indicating the source</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Demand from the Administration to hide any information transferred by the User to the Site</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Use information from the Site for personal non-commercial purposes</p>
              </li>
            </ul>

            <p className="text-white text-[16px]">The administration has the right to:</p>
            <ul className="flex flex-col gap-[4px] text-white">
              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Change and cancel the rules without informing the User</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Implement decisions without informing and/or justifying them</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Restrict access to any information on the Site</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Create, change, delete information</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Delete accounts</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Refuse registration without explaining the reasons</p>
              </li>
            </ul>

            <h2 className="text-white text-[24px] font-bold text-center">The user undertakes</h2>
            <ul className="flex flex-col gap-[4px] text-white">
              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Not to distribute information aimed at propaganda of war, incitement of national, racial or religious hatred and enmity, as well as other information for the dissemination of which criminal or administrative liability is provided (Exception: Russia`s war against Ukraine began in 2014.)</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Do not disrupt the functionality of the Site</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Do not take actions aimed at misleading other Users</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Do not share your account and/or account login and password with third parties</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Do not register an account on behalf of or on behalf of another person, except as required by law</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Do not display explicit materials in the User`s profile photo and/or in its background.</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Not to use materials created by the Fullkekw project ({conf.domain}) and/or other projects exclusively for the site (enchanced quality, subtitles, exclusive voiceover) for your own purposesundefined without the permission of the site administration. undefined</p>
              </li>
            </ul>

            <h2 className="text-white text-[24px] font-bold text-center">The administration undertakes</h2>
            <ul className="flex flex-col gap-[4px] text-white">
              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Maintain the functionality of the Site, except for cases when this is impossible for reasons beyond the control of the Administration</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Provide comprehensive protection of the User`s account</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Protect information, the distribution of which is restricted or prohibited by law, by issuing a warning or deleting the account of the User who violated the rules</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">Provide all available information about the User to authorized state authorities in cases provided for by law</p>
              </li>
            </ul>

            <h2 className="text-white text-[24px] font-bold text-center">Responsibilities of the parties</h2>
            <ul className="flex flex-col gap-[4px] text-white">
              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">The user personally bears full responsibility for the information distributed by him</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">The administration is not responsible for the reliability of information copied from other sources</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">The Administration is not responsible for the discrepancy between the User`s expectations and actually received services</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">The administration is not responsible for the materials posted on the site, such as: User comments, the content of their account, the content of the video from the voiceover teams</p>
              </li>

              <li className="!list-disc relative left-[16px]">
                <p className="text-white text-[16px]">In the event of a force majeure situation (military action, emergency situation, natural disaster, etc.), the Administration does not guarantee the preservation of the information posted by the User, as well as the uninterrupted operation of the information resource</p>
              </li>
            </ul>

            <h2 className="text-white text-[24px] font-bold text-center">Terms of action</h2>
            <p className="text-white text-[16px]">
              This Agreement enters into force upon registration on the site and ceases to be effective upon the appearance of a new version of the Agreement. The Administration reserves the right to unilaterally change this Agreement at its own discretion. In case of changes to the terms of the Agreement, in some cases, the Administration may notify users in a convenient way.
            </p>

            <p className="text-white text-center font-extralight">Agreement updated at: 06.11.2024</p>
          </div>
        </>}
      </div>
    </div>
  );
};

export default IAgreementPage;