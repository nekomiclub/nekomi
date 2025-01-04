'use client'

import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

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
      <div className="wrapper gap-[80px] max-w-[1170px] w-full">
        {lang === 'ukr' && <>
          <div className="flex items-center gap-[32px] justify-center w-full max-[880px]:flex-col">
            <h1 className="text-white text-[40px] text-center font-bold max-[1170px]:text-[24px]">Правила та умови nekomi</h1>
          </div>

          <div className="px-[24px] py-[40px] rounded-[2px] bg-darkGrey flex flex-col gap-[16px]">
            <h2 className="text-white text-[24px] font-bold text-center">Загальні відомості</h2>

            <p className="text-white text-[16px]">
              Нижче зазначені правила та умови регулюють взаємини між адміністрацією nekomi (надалі - Сайт) та користувачем (надалі - Користувач).
            </p>

            <p className="text-white text-[16px]">Коли ми говоримо {`"`}ваш контент{`"`}, ми маємо на увазі все, що ви додаєте (завантажуєте, публікуєте, ділитеся тощо) до наших сервісів. Сюди входять текст, аватар профілю, банер профілю, опис та інші медіа та текстові файли. Якщо ми запропонуємо вам інший спосіб додавання контенту до сервісів, він також буде врахований.</p>
            <p className="text-white text-[16px]">Ваш вміст належить вам, але ви надаєте нам ліцензію на нього, коли використовуєте Сайт. Ваш вміст може бути захищений певними правами інтелектуальної власності. Ми не володіємо цими правами. Але, користуючись нашими послугами, ви надаєте нам ліцензію, яка є формою дозволу на наступні дії з вашим контентом, відповідно до вимог чинного законодавства, у зв`язку з експлуатацією, розвитком і вдосконаленням наших послуг:</p>

            <ul className="flex flex-col gap-[4px] text-white">
              <li className="!list-decimal relative left-[16px]">
                <p className="text-white text-[16px]">Використовувати, копіювати, зберігати, поширювати та передавати ваш контент у спосіб, що відповідає вашому користуванню послугами. (Наприклад, щоб ми могли зберігати та відображати ваш контент.)</p>
              </li>
              <li className="!list-decimal relative left-[16px]">
                <p className="text-white text-[16px]">Публікувати, публічно виконувати або публічно демонструвати ваш контент, якщо ви вирішили зробити його видимим для інших. (Наприклад, щоб ми могли відображати ваші повідомлення, якщо ви розміщуєте їх на певних серверах або рекомендуєте цей вміст іншим.)</p>
              </li>
              <li className="!list-decimal relative left-[16px]">
                <p className="text-white text-[16px]">Відстежувати, змінювати, перекладати та переформатовувати ваш вміст. (Наприклад, щоб ми могли змінювати розмір зображення, яке ви публікуєте, відповідно до розміру мобільного пристрою).</p>
              </li>
            </ul>

            <b className="text-white text-[16px]">Попри те що ваш контент належить вам, ви не можете завантажувати нецензурні та/або ліцензійні матеріали у будь якому вигляді.</b>

            <h2 className="text-white text-[24px] font-bold text-center">Правила та умови завантаження епізодів аніме</h2>

            <p className="text-white text-[16px]">Якщо ви є представником команди озвучення аніме, ви можете подати заявку про публікацію свого озвучення на Сайті. Для цього ви повинні створити тікет в Discord сервері Сайту (Support {'>'} тікети {'>'} Створити тікет) або написати @unniiiverse в Telegram, надавши приклад свого озвучення та посилання на канал в Telegram. Якщо ваша команда підходить вимогам Сайту, які описані нижче, вона буде додана на Сайт як нова команда озвучення та акаунт представника буде доданий в неї як Лідер команди.</p>
            <p className="text-white text-[16px]">Завантажуючи своє озвучення ви погоджуєтесь з Правилами та умовами Сайту.</p>

            <p className="text-white text-[16px]">Команда озвучення повина виконувати наступні вимоги:</p>
            <ul className="flex flex-col gap-[4px] text-white">
              <li className="!list-decimal relative left-[16px]">
                <p className="text-white text-[16px]">Rx контент заборонений. Завантаження подібного контенту буде вважатись порушенням Правил та умов Сайту.</p>
              </li>
              <li className="!list-decimal relative left-[16px]">
                <p className="text-white text-[16px]">Задовільний рівень якості завантажуваних відео: Роздільна здатність епізодів повинна відповідати 1920x1080 (1080p) 24 fps, покращене відео (більша роздільна здатність та/або 60 fps) не відповідає вимозі.</p>
              </li>
              <li className="!list-decimal relative left-[16px]">
                <p className="text-white text-[16px]">Рекомендована багатоголосість озвучення: 2+.</p>
              </li>
              <li className="!list-decimal relative left-[16px]">
                <p className="text-white text-[16px]">Завантаження субтитрів у вигляді відео не дозволяється, проте ви можете завантажувати свої субтитри у вигляді .srt файлу</p>
              </li>
            </ul>

            <p className="text-white text-[16px]">Умови завантаження епізодів:</p>
            <ul className="flex flex-col gap-[4px] text-white">
              <li className="!list-decimal relative left-[16px]">
                <p className="text-white text-[16px]">Максимально дозволений віковий рейтинг контенту: R+</p>
              </li>
              <li className="!list-decimal relative left-[16px]">
                <p className="text-white text-[16px]">Підтримувані типи завантаження епізоду: mp4, m4v, webm, mkv та mov</p>
              </li>
              <li className="!list-decimal relative left-[16px]">
                <p className="text-white text-[16px]">Один файл не повинен перевищувати 500 мегабайтів для 24 хвилинного епізоду та 1500 мегабайтів для 90 хвилинного фільму. Якщо серія довша за 24 хвилини, вона буде розглядатись як фільм. Якщо файл виходить більшим за ліміт, ви можете конвертувати його в webm без втрати якості.</p>
              </li>
            </ul>

            <p className="text-white text-[16px]">Завантажуючи своє озвучення на сайт, ви (не повинні, але бажано) вставляти посилання на Сайт в постах про вихід озвучення.</p>
            <b className="text-white text-[16px]">У разі порушення правил завантаження епізодів, ваша команда озвучення та епізоди можуть бути видалені назавжди</b>

            <p className="text-white text-center font-extralight">Угода оновлена: 05.01.2025</p>
          </div>
        </>}

        {lang === 'eng' && <>
          <div className="flex items-center gap-[32px] justify-center w-full max-[880px]:flex-col">
            <h1 className="text-white text-[40px] text-center font-bold max-[1170px]:text-[24px]">TOS</h1>

            <button className="flex items-center gap-[16px] py-[8px] px-[16px] bg-darkGrey rounded-[2px] duration-200 hover:bg-purple focus-visible:bg-purple" onClick={() => setLang('ukr')}>
              <IcoTranslations />
              <p className="text-white font-extralight text-[24px]">Українськоюя</p>
            </button>
          </div>

          <div className="px-[24px] py-[40px] rounded-[2px] bg-darkGrey flex flex-col gap-[16px]">
            <p className="text-white text-[16px]">TOS available only in Ukranian language</p>
          </div>
        </>}
      </div>
    </div>
  );
}

export default Agreement;