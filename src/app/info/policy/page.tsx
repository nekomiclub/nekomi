'use client';

import { FC, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { InfoArticle, InfoHeader, InfoLangType, InfoWrapper } from '~/app/info/(components)/InfoUI';
import { H2 } from '~/components/UI/Typography';



const IPolicyPage: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [lang, setLang] = useState<InfoLangType>(searchParams.get('lang') === 'ukr' ? 'ukr' : 'eng');



  useEffect(() => {
    router.replace(`${pathname}?lang=${lang}`);
  }, [lang]);



  return <InfoWrapper>
    {lang === 'ukr' && <>
      <InfoHeader heading="Політика конфіденційності Fullkekw" lang="eng" setLang={setLang} />

      <InfoArticle>
        <H2 text="Загальні відомості" size={24} bold center />

        <p className="text-white text-[16px]">
          Політика обробки персональних даних (далі – Політика або Політика конфіденційності). Ця Політика визначає порядок обробки персональних даних та заходи щодо забезпечення безпеки цих даних у Fullkekw (далі Fullkekw або Оператор). Метою цієї політики конфіденційності є забезпечення захисту прав і свобод людини при обробці його персональних даних, зокрема захист прав на недоторканість особистого життя, особисту та сімейну таємницю.
        </p>

        <b className="text-white text-[16px]">
          Проектами Fullkekw є
        </b>

        <ul className="flex flex-col gap-[4px] text-white">
          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Внутрішні сервіси (User API)</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">nekomi.club (був animee.club)</p>
          </li>
        </ul>

        <b className="text-white text-[16px]">Якщо ви не згодні з умовами ціїє Політики конфіденційності, будь ласка, не користуйтеся проектами Fullkekw!</b>

        <H2 text="Політика конфіденційності містить наступну інформацію:" size={24} bold center />
        <ul className="flex flex-col gap-[4px] text-white">
          <li className="!list-decimal relative left-[16px]">
            <p className="text-white text-[16px]">Мета обробки персональних даних;</p>
          </li>

          <li className="!list-decimal relative left-[16px]">
            <p className="text-white text-[16px]">Перелік персональних даних, на обробку яких дає згоду суб`єкт персональних даних;</p>
          </li>

          <li className="!list-decimal relative left-[16px]">
            <p className="text-white text-[16px]">Перелік дій з персональними даними, на які додається згода, загальний опис використовуваних Оператором методів обробки персональних даних;</p>
          </li>

          <li className="!list-decimal relative left-[16px]">
            <p className="text-white text-[16px]">Термін, протягом якого діє згода суб`єкта персональних даних, а також спосіб її відкликання</p>
          </li>

          <li className="!list-decimal relative left-[16px]">
            <p className="text-white text-[16px]">Інформацію про те, як можна відкликати свою згоду на обробку персональних даних.</p>
          </li>
        </ul>

        <H2 text="Основні поняття, використані в цій політиці конфіденційності:" size={24} bold center />
        <p className="text-white text-[16px]">
          <b>Персональні дані</b> - будь-яка інформація, яка безпосередньо чи опосередковано стосується певної фізичної особи (суб`єкта персональних даних); <br />
          <b>Оператор</b> - громадський орган, муніципальний орган, юридична чи фізична особа, що самостійно або спільно з іншими особами організує та (або) здійснює обробку персональних даних; <br />
          <b>Обробка персональних даних</b> - будь-яке діяння (операція) чи сукупність дій (операцій), які здійснюються з використанням засобів автоматизації або без такого в /икористання з персональними даними. <br />
        </p>

        <h2 className="text-white text-[24px] font-bold text-center">Принципи збору персональних даних:</h2>
        <ul className="flex flex-col gap-[4px] text-white">
          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Обробка персональних даних здійснюється на законній та справедливій основі.</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Обробка персональних даних обмежена досягненням конкретних, заздалегідь визначених та законних цілей.</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Обробці підлягають лише ті персональні дані, які відповідають цілям їх обробки.</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Вміст та обсяг оброблюваних персональних даних відповідають заявленим цілям обробки.</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">При обробці персональних даних забезпечується їх точність, достатність та, в необхідних випадках, актуальність у відношенні до цілей обробки персональних даних.</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Оператор приймає необхідні заходи або забезпечує їх прийняття для видалення чи уточнення неповних або неточних даних.</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Зберігання персональних даних здійснюється у формі, що дозволяє визначити суб`єкта персональних даних, не довше, ніж цього вимагають цілі обробки персональних даних.</p>
          </li>
        </ul>

        <H2 text="Перелік збираємих персональних даних:" size={24} bold center />
        <ul className="flex flex-col gap-[4px] text-white">
          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Електронна адреса</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Пароль</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Аватар профілю</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">IP адреса</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Інша інформація</p>
          </li>
        </ul>

        <H2 text="Управління персональними даними користувача:" size={24} bold center />
        <p className="text-white text-[16px]">
          Суб`єкт персональних даних може відкликати свою згоду на обробку персональних даних шляхом письмового запиту, надісланого на електронну адресу Оператора help@nekomi.club. Проте, в разі відкликання згоди чи видалення персональних даних, Оператор не може гарантувати повноцінного та всебічного надання інформації та/або послуг.
        </p>

        <H2 text="Використання інформації:" size={24} bold center />
        <ul className="flex flex-col gap-[4px] text-white">
          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Для внутрішньої звітності</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Для надання інформації та послуг, які запитує користувач</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Для відповідей на запити користувача</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Для поліпшення якості продуктів та послуг на сайті</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Для моніторингу роботи сайту</p>
          </li>
        </ul>

        <h2 className="text-white text-[24px] font-bold text-center">Розкриття інформації:</h2>
        <p className="text-white text-[16px]">
          Оператор не продає особисті дані користувача та не передає їх третім особам без згоди користувача. Вся надана користувачем інформація може бути використана проектами Оператора без відома користувача для поліпшення досвіду від проектів Оператора. Персональна інформація може бути передана в органи спеціальних служб відповідно до вимог законодавства.
        </p>

        <H2 text="Додаткова інформація" size={24} bold center />
        <ul className="flex flex-col gap-[4px] text-white">
          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Ця Політика конфіденційності не має строку дії.</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Ця Політика конфіденційності втрачає чинність при з`явленні нової версії, розміщеної на сайті nekomi.club.</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Ця Політика конфіденційності розповсюджується на всі проекти Fullkekw</p>
          </li>
        </ul>

        <p className="text-white text-center font-extralight">Політика конфіденційності оновлена: 31.10.2024</p>
      </InfoArticle>
    </>}

    {lang === 'eng' && <>
      <InfoHeader heading="Privacy policy of the Fullkekw" lang="ukr" setLang={setLang} />

      <InfoArticle>
        <h2 className="text-white text-[24px] font-bold text-center">General statements</h2>

        <p className="text-white text-[16px]">
          Personal data processing policy (hereinafter referred to as the Policy or Privacy Policy). This Policy defines the procedure for processing personal data and measures to ensure the security of this data collected by Fullkekw (hereinafter Fullkekw or the Operator).

          The purpose of this privacy policy is to ensure the protection of a person`s rights and freedoms in the processing of his personal data, in particular, the protection of the rights to privacy, personal and family secrets.

        </p>

        <b className="text-white text-[16px]">
          Fullkekw projects are:
        </b>

        <ul className="flex flex-col gap-[4px] text-white">
          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Internal services (User API)</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">nekomi.club (was animee.club)</p>
          </li>
        </ul>

        <b className="text-white text-[16px]">If you do not agree with the terms of our Privacy Policy, please do not use Fullkekw projects!</b>

        <h2 className="text-white text-[24px] font-bold text-center">The privacy policy contains the following information:</h2>
        <ul className="flex flex-col gap-[4px] text-white">
          <li className="!list-decimal relative left-[16px]">
            <p className="text-white text-[16px]">Purpose of personal data processing;</p>
          </li>

          <li className="!list-decimal relative left-[16px]">
            <p className="text-white text-[16px]">List of personal data, to the processing of which the subject of personal data consents;</p>
          </li>

          <li className="!list-decimal relative left-[16px]">
            <p className="text-white text-[16px]">A list of actions with personal data to which consent is attached, a general description of personal data processing methods used by the Operator;</p>
          </li>

          <li className="!list-decimal relative left-[16px]">
            <p className="text-white text-[16px]">The term during which the consent of the subject of personal data is valid, as well as the method of its withdrawal</p>
          </li>

          <li className="!list-decimal relative left-[16px]">
            <p className="text-white text-[16px]">Information on how you can withdraw your consent to the processing of personal data.</p>
          </li>
        </ul>

        <h2 className="text-white text-[24px] font-bold text-center">Basic concepts used in this privacy policy:</h2>
        <p className="text-white text-[16px]">
          <b>Personal data</b> - any information that directly or indirectly concerns a certain natural person (subject of personal data); <br />
          <b>Operator</b> - public body, municipal body, legal entity or natural person, which independently or jointly with other persons organizes and (or) carries out the processing of personal data; <br />
          <b>Processing of personal data</b> - any action (operation) or set of actions (operations) that are carried out with the use of automation tools or without such use with personal data. <br />
        </p>

        <h2 className="text-white text-[24px] font-bold text-center">Principles of personal data collection:</h2>
        <ul className="flex flex-col gap-[4px] text-white">
          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Processing of personal data is carried out on a legal and fair basis.</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">The processing of personal data is limited to the achievement of specific, predetermined and lawful purposes.</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Only those personal data that correspond to the purposes of their processing are subject to processing.</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">The content and volume of processed personal data correspond to the stated purposes of processing.</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">When processing personal data, their accuracy, adequacy and, in necessary cases, relevance in relation to the purposes of personal data processing are ensured.</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">The operator takes the necessary measures or ensures that they are taken to remove or clarify incomplete or inaccurate data.</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">The storage of personal data is carried out in a form that allows identification of the subject of personal data, no longer than the purposes of personal data processing require.</p>
          </li>
        </ul>

        <h2 className="text-white text-[24px] font-bold text-center">List of collected personal data:</h2>
        <ul className="flex flex-col gap-[4px] text-white">
          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">E-mail address</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Password</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Profile avatar</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">IP address</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">Other information</p>
          </li>
        </ul>

        <h2 className="text-white text-[24px] font-bold text-center">Management of user personal data:</h2>
        <p className="text-white text-[16px]">
          The subject of personal data may withdraw his consent to the processing of personal data by means of a written request sent to the Operator`s e-mail address <b>help@nekomi</b>.club. However, in case of withdrawal of consent or deletion of personal data, the Operator cannot guarantee full and comprehensive provision of information and/or services.
        </p>

        <h2 className="text-white text-[24px] font-bold text-center">Use of information:</h2>
        <ul className="flex flex-col gap-[4px] text-white">
          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">For internal reporting</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">To provide information and services requested by the user</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">To respond to user requests</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">To improve the quality of products and services on the site</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">To monitor the operation of the site</p>
          </li>
        </ul>

        <h2 className="text-white text-[24px] font-bold text-center">Disclosure:</h2>
        <p className="text-white text-[16px]">
          The operator does not sell the user`s personal data and does not transfer it to third parties without the user`s consent. All information provided by the user may be used by the Fullkekw parent project without the user`s knowledge to improve the experience of the site and Fullkekw projects. Personal information may be transferred to the bodies of special services in accordance with the requirements of the law.
        </p>

        <h2 className="text-white text-[24px] font-bold text-center">Additional Information</h2>
        <ul className="flex flex-col gap-[4px] text-white">
          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">This Privacy Policy has no expiration date.</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">This Privacy Policy becomes invalid upon the appearance of a new version posted on the fullkekw.nekomi.club website.</p>
          </li>

          <li className="!list-disc relative left-[16px]">
            <p className="text-white text-[16px]">This Provacy Policy applies for all Fullkekw projects.</p>
          </li>
        </ul>

        <p className="text-white text-center font-extralight">Privacy policy last updated at: 31.10.2024</p>
      </InfoArticle>
    </>}
  </InfoWrapper>;
};

export default IPolicyPage;