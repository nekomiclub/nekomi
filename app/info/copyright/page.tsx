import { NextPage } from 'next';

const Copyright: NextPage = (props) => {
  return (
    <div className='flex flex-col gap-[160px] items-center bg-dark'>
      <div className="wrapper gap-[160px] items-center">
        <h2 className='text-[32px] text-white mt-[128px] text-center'>Правовласникам</h2>

        <div className='py-[24px] px-[40px] bg-darkGrey rounded-[2px] flex flex-col gap-[24px] max-w-[1170px]'>
          <div className="flex flex-col gap-[16px]">
            <h4 className='text-[24px] text-white text-center'>Загальні відомості</h4>
            <p className='text-white text-[16px]'>
              Якщо Ви виявили матеріал на сайті https://animee.club який, на Вашу думку, порушує Ваші авторські права або шкодить Вашій компанії, поширюючи недостовірну або викривлену інформацію, ми закликаємо Вас зв`язатися з нами для вирішення цього питання.
            </p>

            <p className='text-white text-[16px]'>
              Для цього, надішліть електронний лист на адресу support@animee.club з вашої зареєстрованої адреси, включивши такі документи:
            </p>

            <p className='text-white text-[16px]'>
              1. Контактні дані та реквізити Вашої компанії.
            </p>

            <p className='text-white text-[16px]'>
              2. Пряме посилання на спірний матеріал.
            </p>

            <p className='text-white text-[16px]'>
              3. Підтверджені скановані копії документів, які підтверджують Ваші виняткові права на матеріал.
            </p>

            <p className='text-white text-[16px]'>
              4. У разі представництва іншої компанії - копії документів про посередницькі послуги.
            </p>

            <p className='text-white text-[16px]'>
              Будь ласка, надішліть цю інформацію на адресу support@animee.club. Вся надана інформація буде перевірена, і адміністрація сайту зв`яжеться з Вами найближчим часом для вирішення спірного питання.
            </p>

            <p className='text-white text-[16px]'>
              Увесь контент на сайті надається для безкоштовного домашнього перегляду та ознайомлення.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Copyright;