import './styles.scss'

import axios from "axios";
import { headers } from 'next/headers'
import { Metadata, ResolvingMetadata } from "next";
import { HashImage } from "hash-image";

import { IExtendedUser, IUsapiUser, IUser } from "../../../interfaces/IUser";
import { config } from "../../../config";
import NotFound from "@/oops/404/page";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { UserHeader, UserContent, UserBackground } from "./content";


import DefaultBg from '../../../assets/defaultLargeImages/1.webp'
import { $api } from '../../../components/http';
import { IRSCProps } from '../../../interfaces/IRSC';



// Generate metadata
export async function generateMetadata(
  { params, searchParams }: IRSCProps<{ username: string }>,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const { data: usapiData } = await axios.get<{ user: IUsapiUser }>(`${config.URL.fkUsapi}/user/${params.username}`)
    const { data } = await $api.get(`/user/${usapiData.user.id}`)

    return {
      title: `@${data.username}`,
      description: `Сторінка @${data.username} на animee.club`,
      metadataBase: new URL(`https://api.animee.club`),
      openGraph: {
        title: `@${data.username} - animee`,
        description: `Сторінка @${data.username}`,
        url: `https://animee.club/w/${data.username}`,
        siteName: 'Animee',
        type: 'profile',
        images: usapiData.user.photoURL
      }
    }
  } catch (e) {
    return {
      title: `Користувач не знайдений`
    }
  }
}



interface IProps extends IRSCProps<{ username: string }> {
  children: React.ReactElement
}

// Layout
export default async function Layout({ children, params }: IProps) {
  // @ts-expect-error Need empty object
  let userData: IExtendedUser = {}
  let isErrored = false;

  // Fetch user
  try {
    const { data: usapiData } = await axios.get<{ user: IUsapiUser }>(`${config.URL.fkUsapi}/user/${params.username}`)
    const { data } = await $api.get<IUser>(`/user/${usapiData.user.id}`)

    userData = Object.assign({ ...data, ...usapiData.user })
  } catch (e) {
    isErrored = true
  }

  return isErrored ? <NotFound /> : <>
    <Header />

    <main className='w-full min-h-screen h-full bg-dark flex flex-col justify-center items-center py-[120px]'>

      <div className='fixed w-full h-full top-0 left-0'>
        <UserBackground src={DefaultBg.src} />
      </div>

      <div className="wrapper max-w-[1170px]">
        <div className='bg-dark/[.2] backdrop-blur-[128px] px-[32px] py-[24px] rounded-[4px]'>
          <div className="flex flex-col">
            <UserHeader user={userData} />

            <span className='block w-full h-[1px] rounded-[2px] bg-white/[.2]'></span>

            <div className="flex pt-[8px] gap-[8px]">
              <UserContent user={userData}>
                {/* Here children is page.tsx */}
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
