import axios from "axios";
import { IUser } from "../../../interfaces/IUser";
import { env } from "../../../config";
import { Metadata, ResolvingMetadata } from "next";
import NotFound from "@/oops/404/page";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { UserHeader, UserContent } from "./content";
import { headers } from 'next/headers'


import DefaultBg from '../../../assets/defaultLargeImages/1.webp'
import './styles.scss'
import { getRoute } from "../../../components/PageRouter";

interface IProps {
  children: React.ReactNode,
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

export default async function Layout({ children, params }: IProps) {
  // @ts-ignore
  let userData: IUser = {};
  let isErrored = false;

  try {
    const { data } = await axios.get<IUser>(`${env.apiUrl}/v1/user/${params.username}`);
    userData = data;
  } catch (e) {
    isErrored = true
  }

  return isErrored ? <NotFound /> : <>
    <Header />

    <main className='w-full min-h-screen h-full bg-dark flex flex-col justify-center items-center py-[120px]'>

      <div className='fixed w-full h-full top-0 left-0'>
        <img src={DefaultBg.src} alt="..." className='w-full h-full' />
      </div>

      <div className="wrapper max-w-[1170px]">
        <div className='bg-dark/[.2] backdrop-blur-[128px] px-[32px] py-[24px] rounded-[4px]'>
          <div className="flex flex-col">
            <UserHeader user={userData} />

            <span className='block w-full h-[1px] rounded-[2px] bg-white/[.2]'></span>

            <div className="flex pt-[8px] gap-[8px]">
              <UserContent user={userData} type="lists">
                {children}
              </UserContent>
            </div>
          </div>
        </div>
      </div>

    </main>

    <Footer />
  </>
}
