'use client'

import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { InfoArticle, InfoList, InfoWrapper } from '~/components/InfoComponents';
import { H1, H2, P } from '~/components/UI/Typography';
import { IcoTranslations } from '../../../assets/Icons';



const Agreement: NextPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [lang, setLang] = useState<'eng' | 'ukr'>(searchParams.get('lang') === 'ukr' ? 'ukr' : 'eng')

  useEffect(() => {
    router.replace(`${pathname}?lang=${lang}`)
  }, [lang])



  return (
    <div className="w-full min-h-screen items-center" style={{ paddingTop: `132px` }}>
      <InfoWrapper>
        {lang === 'ukr' && <>
          <div className="flex items-center gap-[32px] justify-center w-full max-[880px]:flex-col">
            <H1 text="Правила та умови nekomi" size={40} bold />
          </div>

          <InfoArticle>
            <H2 text="Загальні відомості" size={24} bold center />

            <P text="Нижче зазначені правила та умови регулюють взаємини між адміністрацією nekomi (надалі - Сайт) та користувачем (надалі - Користувач)." />

            <P text='Коли ми говоримо "ваш контент", ми маємо на увазі все, що ви додаєте (завантажуєте, публікуєте, ділитеся тощо) до наших сервісів. Сюди входять текст, аватар профілю, банер профілю, опис та інші медіа та текстові файли. Якщо ми запропонуємо вам інший спосіб додавання контенту до сервісів, він також буде врахований.' />
            <P text="Ваш вміст належить вам, але ви надаєте нам ліцензію на нього, коли використовуєте Сайт. Ваш вміст може бути захищений певними правами інтелектуальної власності. Ми не володіємо цими правами. Але, користуючись нашими послугами, ви надаєте нам ліцензію, яка є формою дозволу на наступні дії з вашим контентом, відповідно до вимог чинного законодавства, у зв`язку з експлуатацією, розвитком і вдосконаленням наших послуг:" />

            <InfoList>
              <P text="Використовувати, копіювати, зберігати, поширювати та передавати ваш контент у спосіб, що відповідає вашому користуванню послугами. (Наприклад, щоб ми могли зберігати та відображати ваш контент.)" />
              <P text="Публікувати, публічно виконувати або публічно демонструвати ваш контент, якщо ви вирішили зробити його видимим для інших. (Наприклад, щоб ми могли відображати ваші повідомлення, якщо ви розміщуєте їх на певних серверах або рекомендуєте цей вміст іншим.)" />
              <P text="Відстежувати, змінювати, перекладати та переформатовувати ваш вміст. (Наприклад, щоб ми могли змінювати розмір зображення, яке ви публікуєте, відповідно до розміру мобільного пристрою)." />
            </InfoList>

            <P text="Попри те що ваш контент належить вам, ви не можете завантажувати нецензурні та/або ліцензійні матеріали у будь якому вигляді." bold />

            <H2 text="Правила та умови завантаження епізодів аніме" size={24} bold center />

            <P text="Якщо ви є представником команди озвучення аніме, ви можете подати заявку про публікацію свого озвучення на Сайті. Для цього ви повинні створити тікет в Discord сервері Сайту (Support > тікети > Створити тікет) або написати @unniiiverse в Telegram, надавши приклад свого озвучення та посилання на канал в Telegram. Якщо ваша команда підходить вимогам Сайту, які описані нижче, вона буде додана на Сайт як нова команда озвучення та акаунт представника буде доданий в неї як Лідер команди." />
            <P text="Завантажуючи своє озвучення ви погоджуєтесь з Правилами та умовами Сайту." />

            <P text="Команда озвучення повина виконувати наступні вимоги:" />
            <InfoList>
              <P text="Rx контент заборонений. Завантаження подібного контенту буде вважатись порушенням Правил та умов Сайту." />
              <P text="Завантаження оригінального озвучення з субтитрами не дозволяється" />
            </InfoList>

            <P text="Умови завантаження епізодів:" />
            <InfoList>
              <P text="Максимально дозволений віковий рейтинг контенту: R+" />
              <P text="Підтримувані типи завантаження епізоду: mp4, m4v, webm, mkv та mov" />
              <P text="Максимальний розмір завантаженого файлу - ~2.5 гігабайта, рекомендований розмір - до 1.5 гігабайта" />
            </InfoList>

            <P text="Завантажуючи своє озвучення на сайт, ви (не повинні, але бажано) вставляти посилання на Сайт в постах про вихід озвучення." />
            <P text="У разі порушення правил завантаження епізодів, ваша команда озвучення та епізоди можуть бути видалені назавжди" bold />

            <P text="Оновлено: 24.05.2025" size={14} className="text-white text-center" />
          </InfoArticle>
        </>}

        {lang === 'eng' && <>
          <div className="flex items-center gap-[32px] justify-center w-full max-[880px]:flex-col">
            <h1 className="text-white text-[40px] text-center font-bold max-[1170px]:text-[24px]">TOS</h1>

            <button className="flex items-center gap-[16px] py-[8px] px-[16px] bg-darkGrey rounded-[2px] duration-200 hover:bg-purple focus-visible:bg-purple" onClick={() => setLang('ukr')}>
              <IcoTranslations />
              <p className="text-white font-extralight text-[24px]">Українською</p>
            </button>
          </div>

          <div className="px-[24px] py-[40px] rounded-[2px] bg-darkGrey flex flex-col gap-[16px]">
            <p className="text-white text-[16px]">TOS available only in Ukranian language</p>
          </div>
        </>}
      </InfoWrapper>
    </div>
  );
}

export default Agreement;