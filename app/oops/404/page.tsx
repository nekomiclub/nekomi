import { NextPage } from 'next';
import { OopsNotFound } from '@/../assets/assets';
import { ReturnToHome } from '../components';
import Header from '../../../components/Header';

const NotFound: NextPage = (props) => {
  return (
    <div className="bg-dark h-screen">
      <Header />
      <div className="wrapper h-full w-full justify-center items-center">
        <OopsNotFound width={256} height={256} className='oops-notFound mb-[50px]' />
        <h1 className='uppercase text-[40px] text-white mb-[100px] text-center'>СТОРІНКА НЕ ЗНАЙДЕНА</h1>
        <ReturnToHome />
      </div>
    </div>
  );
}

export default NotFound;