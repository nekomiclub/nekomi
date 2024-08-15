import { NextPage } from 'next';

const Policy: NextPage = (props) => {
  return (
    <div className='flex flex-col gap-[160px] items-center bg-dark'>
      <div className="wrapper gap-[160px] items-center">
        <h2 className='text-[32px] text-white mt-[128px] text-center'>Політика конфіденційності</h2>

        <div className='py-[24px] px-[40px] bg-darkGrey rounded-[2px] flex flex-col gap-[24px] max-w-[1170px]'>
          <div className="flex flex-col gap-[16px]">
            <h4 className='text-[24px] text-white text-center'>Загальні відомості</h4>
            <p className='text-white text-[16px]'>
              Політика обробки персональних даних (далі – Політика або Політика конфіденційності). Ця Політика визначає порядок обробки персональних даних та заходи щодо забезпечення безпеки цих даних у власника сайту https://animee.club (далі Animee або Оператор).

              Метою цієї політики конфіденційності є забезпечення захисту прав і свобод людини і громадянина при обробці його персональних даних, зокрема захист прав на недоторканість особистого життя, особисту та сімейну таємницю.

              <b className='font-bold text-white text-[16px]'>
                Якщо ви не згодні з умовами нашої Політики конфіденційності, будь ласка, не використовуйте сайт animee.club!
              </b>
            </p>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h4 className='text-[24px] text-white text-center'>Політика конфіденційності містить наступну інформацію:</h4>
            <p className='text-white text-[16px]'></p>

            <ul className='flex flex-col gap-[4px]'>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Мета обробки персональних даних;</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Перелік персональних даних, на обробку яких дає згоду суб`єкт персональних даних;</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Перелік дій з персональними даними, на які додається згода, загальний опис використовуваних Оператором методів обробки персональних даних;</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Термін, протягом якого діє згода суб`єкта персональних даних, а також спосіб її відкликання</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Інформацію про те, як можна відкликати свою згоду на обробку персональних даних.</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h4 className='text-[24px] text-white text-center'>Основні поняття, використані в цій політиці конфіденційності:</h4>
            <p className='text-white text-[16px]'></p>

            <ul className='flex flex-col gap-[4px]'>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Обробка персональних даних здійснюється на законній та справедливій основі.</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Обробка персональних даних обмежена досягненням конкретних, заздалегідь визначених та законних цілей.</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Не допускається об`єднання баз даних, що містять персональні дані, обробка яких здійснюється для несумісних між собою цілей.</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Обробці підлягають лише ті персональні дані, які відповідають цілям їх обробки.</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Вміст та обсяг оброблюваних персональних даних відповідають заявленим цілям обробки.</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>При обробці персональних даних забезпечується їх точність, достатність та, в необхідних випадках, актуальність у відношенні до цілей обробки персональних даних.</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Оператор приймає необхідні заходи або забезпечує їх прийняття для видалення чи уточнення неповних або неточних даних.</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Зберігання персональних даних здійснюється у формі, що дозволяє визначити суб`єкта персональних даних, не довше, ніж цього вимагають цілі обробки персональних даних.</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h4 className='text-[24px] text-white text-center'>Принципи збору персональних даних:</h4>
            <p className='text-white text-[24px]'></p>

            <ul className='flex flex-col gap-[4px]'>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Електронна адреса</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Ім`я в мережі</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Пароль</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Аватар</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Інша інформація</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h4 className='text-[24px] text-white text-center'>Перелік збираємих персональних даних:</h4>
            <p className='text-white text-[16px]'>
              Суб`єкт персональних даних може відкликати свою згоду на обробку персональних даних шляхом письмового запиту, надісланого на електронну адресу Оператора support@animee.club. Проте, в разі відкликання згоди чи видалення персональних даних, Оператор не може гарантувати повноцінного та всебічного надання інформації та/або послуг.
            </p>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h4 className='text-[24px] text-white text-center'>Використання інформації:</h4>
            <p className='text-white text-[16px]'></p>

            <ul className='flex flex-col gap-[8px]'>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Для внутрішньої звітності</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Для надання інформації та послуг, які запитує користувач</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Для відповідей на запити користувача</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Для поліпшення якості продуктів та послуг на сайті</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Для моніторингу роботи сайту</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h4 className='text-[24px] text-white text-center'>Розкриття інформації:</h4>
            <p className='text-white text-[16px]'>
              Оператор не продає особисті дані користувача та не передає їх третім особам без згоди користувача. Однак, персональна інформація може бути передана в органи спеціальних служб відповідно до вимог законодавства.
            </p>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h4 className='text-[24px] text-white text-center'>Додаткова інформація</h4>
            <p className='text-white text-[16px]'></p>

            <ul className='flex flex-col gap-[8px]'>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Ця Політика конфіденційності не має строку дії.</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Ця Політика конфіденційності втрачає чинність при появі нової версії, розміщеної на сайті animee.club.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policy;