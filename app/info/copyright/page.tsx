'use client'

import { NextPage } from 'next';
import { IRSCProps } from '../../../interfaces/IRSC';
import { IcoTranslations } from '../../../assets/Icons';
import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';



const Copyright: NextPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [lang, setLang] = useState<'eng' | 'ukr'>(searchParams.get('lang') === 'ukr' ? 'ukr' : 'eng')

  useEffect(() => {
    router.replace(`${pathname}?lang=${lang}`)
  }, [lang])

  return (
    <div className='w-full min-h-screen items-center' style={{ paddingTop: `132px` }}>
      <div className="wrapper gap-[80px]">
        {lang === 'ukr' && <>
          <div className='flex items-center gap-[32px] justify-center w-full max-[880px]:flex-col'>
            <h1 className='text-white text-[40px] text-center font-bold max-[1170px]:text-[24px]'>DMCA</h1>

            <button className='flex items-center gap-[16px] py-[8px] px-[16px] bg-darkGrey rounded-[2px] duration-200 hover:bg-purple focus-visible:bg-purple' onClick={() => setLang('eng')}>
              <IcoTranslations />
              <p className='text-white font-extralight text-[24px]'>English</p>
            </button>
          </div>

          <div className='px-[24px] py-[40px] rounded-[2px] bg-darkGrey flex flex-col gap-[16px]'>
            <p className='text-white text-[16px]'>
              Якщо Ви виявили матеріал на сайті <b>https://nekomi.club</b> який, на Вашу думку, порушує Ваші авторські права або шкодить Вашій компанії, поширюючи недостовірну або викривлену інформацію, ми закликаємо Вас зв`язатися з нами для вирішення цього питання.

              Для цього, надішліть електронний лист на адресу <b>dmca@nekomi.club</b> з вашої зареєстрованої адреси, включивши такі документи:
            </p>

            <ul className='flex flex-col gap-[4px] text-white'>
              <li className='!list-decimal relative left-[16px]'>
                <p className='text-white text-[16px]'>Контактні дані та реквізити Вашої компанії.</p>
              </li>

              <li className='!list-decimal relative left-[16px]'>
                <p className='text-white text-[16px]'>Пряме посилання на спірний матеріал.</p>
              </li>

              <li className='!list-decimal relative left-[16px]'>
                <p className='text-white text-[16px]'>Підтверджені скановані копії документів, які підтверджують Ваші виняткові права на матеріал.</p>
              </li>

              <li className='!list-decimal relative left-[16px]'>
                <p className='text-white text-[16px]'>У разі представництва іншої компанії - копії документів про посередницькі послуги.</p>
              </li>
            </ul>

            <p className='text-white text-[16px]'>
              Вся надана інформація буде перевірена, і адміністрація сайту зв`яжеться з Вами найближчим часом для вирішення спірного питання.

              Увесь контент на сайті надається для безкоштовного домашнього перегляду, ознайомлення та поширення матеріалу серед людей.
            </p>
          </div>
        </>}

        {lang === 'eng' && <>
          <div className='flex items-center gap-[32px] justify-center w-full max-[880px]:flex-col'>
            <h1 className='text-white text-[40px] text-center font-bold max-[1170px]:text-[24px]'>DMCA</h1>

            <button className='flex items-center gap-[16px] py-[8px] px-[16px] bg-darkGrey rounded-[2px] duration-200 hover:bg-purple focus-visible:bg-purple' onClick={() => setLang('ukr')}>
              <IcoTranslations />
              <p className='text-white font-extralight text-[24px]'>Українською</p>
            </button>
          </div>

          <div className='px-[24px] py-[40px] rounded-[2px] bg-darkGrey flex flex-col gap-[16px]'>
            <p className='text-white text-[16px]'>
              If you have discovered material on <b>https://nekomi.club</b> that you believe infringes your copyright or harms your company by spreading false or misleading information, we encourage you to contact us to resolve the matter.

              To do so, send an email to <b>dmca@nekomi.club</b> from your registered address, including the following documents:
            </p>

            <ul className='flex flex-col gap-[4px] text-white'>
              <li className='!list-decimal relative left-[16px]'>
                <p className='text-white text-[16px]'>Contact data and details of your company. </p>
              </li>

              <li className='!list-decimal relative left-[16px]'>
                <p className='text-white text-[16px]'>Direct link to disputed material. </p>
              </li>

              <li className='!list-decimal relative left-[16px]'>
                <p className='text-white text-[16px]'>Certified scanned copies of documents that confirm your exclusive rights to the material. </p>
              </li>

              <li className='!list-decimal relative left-[16px]'>
                <p className='text-white text-[16px]'>In case of representation of another company - copies of documents on intermediary services. .</p>
              </li>
            </ul>

            <p className='text-white text-[16px]'>
              All the information provided will be checked, and the site administration will contact you in the near future to resolve the disputed issue.

              All content on the site is provided for free home viewing, perusal and distribution to the public.
            </p>
          </div>
        </>}
      </div>
    </div>
  );
}

export default Copyright;