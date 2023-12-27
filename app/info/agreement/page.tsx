import { NextPage } from 'next';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const Agreement: NextPage = (props) => {
  return (
    <div className='flex flex-col gap-[160px] items-center bg-dark'>
      <Header />

      <div className="wrapper gap-[160px] items-center">
        <h2 className='text-[32px] text-white mt-[128px] text-center'>Угода користувача</h2>

        <div className='py-[24px] px-[40px] bg-grey rounded-[2px] flex flex-col gap-[24px] max-w-[1170px]'>
          <div className="flex flex-col gap-[16px]">
            <h4 className='text-[24px] text-white text-center'>Загальні відомості</h4>
            <p className='text-white text-[16px]'>
              Нижче зазначена Користувальницька угода (далі - Угода) регулює взаємини між адміністрацією сайту https://animee.club (надалі - Сайт) та користувачем сайту (надалі - Користувач). Використовуючи Сайт, ви погоджуєтесь з умовами цієї Угоди.

              <b className='font-bold text-white text-[16px]'>
                Якщо ви не згодні з умовами цієї Угоди, утримуйтесь від використання Сайту Animee.club.
              </b>
            </p>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h4 className='text-[24px] text-white text-center'>Предмет угоди</h4>
            <p className='text-white text-[16px]'>
              Адміністрація надає Користувачу право на розміщення на Сайті такої інформації:
            </p>

            <ul className='flex flex-col gap-[4px]'>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Текстової інформації</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Відеоматеріалів</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Фотоматеріалів</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h4 className='text-[24px] text-white text-center'>Права та обов`язки сторін</h4>
            <p className='text-white text-[16px]'>
              <b className='font-bold text-white text-[16px]'>
                Користувач має право:
              </b>
            </p>

            <ul className='flex flex-col gap-[4px]'>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Проводити пошук інформації на Сайті</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Отримувати інформацію з Сайту</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Створювати інформацію для Сайту</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Розповсюджувати інформацію на Сайті</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Коментувати контент, розміщений на Сайті</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Копіювати інформацію на інші сайти без вказання джерела</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Вимагати від Адміністрації приховання будь-якої інформації, переданої Користувачем на Сайт</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Використовувати інформацію з Сайту в особистих некомерційних цілях</p>
              </li>
            </ul>

            <p className='text-white text-[16px]'>
              <b className='font-bold text-white text-[16px]'>
                Адміністрація має право:
              </b>
            </p>

            <ul className='flex flex-col gap-[4px]'>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Змінювати та скасовувати правила без інформування Користувача</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Впроваджувати рішення без інформування та/чи обґрунтування їх</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Обмежувати доступ до будь-якої інформації на Сайті</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Створювати, змінювати, видаляти інформацію</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Видаляти облікові записи</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Відмовляти у реєстрації без пояснення причин</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h4 className='text-[24px] text-white text-center'>Користувач зобов`язується:</h4>
            <p className='text-white text-[24px]'></p>

            <ul className='flex flex-col gap-[4px]'>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Не розповсюджувати інформацію, що спрямована на пропаганду війни, розжигання національної, расової або релігійної ненависті та ворожнечі, а також іншу інформацію, за розповсюдження якої передбачена кримінальна чи адміністративна відповідальність (Виключення: війна Росії проти України розпочата у 2014 році.)</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Не порушувати працездатність Сайту</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Не створювати кілька облікових записів на Сайті, якщо фактично вони належать одній і тій же особі</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Не здійснювати дії, спрямовані на введення інших Користувачів у оману</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Не передавати у використання свій обліковий запис та/або логін та пароль свого облікового запису третім особам</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Не реєструвати обліковий запис від імені або замість іншої особи за винятком випадків, передбачених законодавством</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Не виставляти відверті матеріали в фотографії профілю Користувача та/або на його тлі. </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h4 className='text-[24px] text-white text-center'>Адміністрація зобов`язується:</h4>
            <p className='text-white text-[16px]'></p>

            <ul className='flex flex-col gap-[8px]'>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Підтримувати працездатність Сайту за винятком випадків, коли це неможливо з незалежних від Адміністрації причин</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Здійснювати різносторонню захист облікового запису Користувача</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Захищати інформацію, розповсюдження якої обмежено або заборонено законами, шляхом виносу попередження або видалення облікового запису Користувача, який порушив правила</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Надавати всю доступну інформацію про Користувача уповноваженим органам державної влади в випадках, передбачених законом</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h4 className='text-[24px] text-white text-center'>Відповідальність сторін</h4>
            <p className='text-white text-[16px]'></p>

            <ul className='flex flex-col gap-[8px]'>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Користувач особисто несе повну відповідальність за поширену ним інформацію</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Адміністрація не несе відповідальності за достовірність інформації, скопійованої з інших джерел</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Адміністрація не несе відповідальності за неспівпадіння очікуваного Користувачем та фактично отриманих послуг</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>Адміністрація не несе відповідальності за матеріали розміщені на сайті, такі як: Коментарі користувачів, вміст їх облікового запису, вміст відео від команд озвучування</p>
              </li>
              <li className='ml-[16px]'>
                <p className='text-white text-[16px]'>У разі виникнення форс-мажорної ситуації (бойові дії, надзвичайна ситуація, стихійне лихо тощо) Адміністрація не гарантує збереження інформації, розміщеної Користувачем, а також безперервну роботу інформаційного ресурсу</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h4 className='text-[24px] text-white text-center'>Умови дії</h4>
            <p className='text-white text-[16px]'>
              Ця Угода набирає чинності при реєстрації на сайті та припиняє свою дію при появі нової версії угоди. Адміністрація залишає за собою право односторонньо змінювати цю Угоду за власним бажанням. У разі змін умов Угоди, в окремих випадках Адміністрація може повідомляти користувачів зручним для себе способом.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Agreement;