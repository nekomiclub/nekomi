import type { NextPage, Metadata, ResolvingMetadata } from 'next';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import DefaultBg from '../../../assets/defaultLargeImages/1.webp'
import NotFound from '@/oops/404/page';
import axios from 'axios';
import { env } from '../../../config';
import { IUser } from '../../../interfaces/IUser';
import UserContent from './content';

import './styles.scss'

interface IProps {
  params: { username: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: IProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const { data } = await axios.get<IUser>(`${env.apiUrl}/v1/user/${params.username}`);

    return {
      title: `@${data.username} - animee`,
      description: `Сторінка @${data.username}`,
    }
  } catch (e) {
    return {
      title: `Користувач не знайдений`
    }
  }
}

const UserPage: NextPage<IProps> = async ({ params, searchParams }) => {
  // @ts-ignore
  let userData: IUser = {}
  let isErrored = false;

  try {
    const res = await axios.get<IUser>(`${env.apiUrl}/v1/user/${params.username}`)
    userData = res.data
  } catch (e) {
    isErrored = true
  }

  return isErrored ? <NotFound /> : <>
    <Header />

    <main className='w-full min-h-screen h-full bg-dark flex flex-col justify-center items-center'>

      <div className='fixed w-full h-full top-0 left-0'>
        <img src={DefaultBg.src} alt="..." className='w-full h-full' />
      </div>

      <div className="wrapper max-w-[1170px]">
        <div className='bg-dark/[.2] backdrop-blur-[128px] px-[32px] py-[24px] rounded-[4px]'>
          <UserContent user={userData} />
        </div>
      </div>

    </main>

    <Footer />
  </>
}

export default UserPage;