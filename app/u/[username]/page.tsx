'use client'

import { NextPage } from 'next';
import { useParams } from 'next/navigation'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { useState, useEffect } from 'react'
import Loading from '../../../components/Loading';
import $api from '../../../components/http';
import { env } from '../../../config';
import NotFound from '@/oops/404/page';
import { IUser } from '../../../interfaces/IUser';

import DefaultBg from '../../../assets/defaultLargeImages/1.webp'
import { useAppSelector } from '../../../hooks/redux';

const UserPage: NextPage = (props) => {
  const { username } = useParams<{ username: string }>()
  const [userData, setUserData] = useState<IUser>()
  const [isFound, setIsFound] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const state = useAppSelector(state => state.user)

  useEffect(() => {
    (async function () {
      try {
        const res = await $api.get<IUser>(`${env.apiUrl}/v1/user/${username}`);
        setUserData(res.data)
        setIsFound(true)
      } catch (e) {
        setIsFound(false)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  useEffect(() => console.log(isFound), [isFound])

  return (
    <>
      <Header />

      <main className='w-full min-h-screen h-full bg-dark flex flex-col justify-center items-center'>

        {/* Loading */}
        {isLoading ? <Loading /> : <>

          {/* User not found */}
          {!isFound && !userData ? <NotFound /> : <>
            <img src={userData!.profileBg || DefaultBg.src} loading='lazy' alt="..." className='w-full h-full absolute top-0 left-0' />

            <div className="wrapper items-center">
              <div className='backdrop-blur-[128px] flex flex-col gap-[16px] max-w-[1170px] w-full px-[32px] py-[16px] rounded-[4px]' style={{ background: 'rgba(18, 18, 18, 0.40)' }}>
                <div className='flex items-center w-full gap-[40px] max-[512px]:flex-col'>
                  <img src={userData!.avatar!} alt="avatar" className='rounded-[2px] w-[128px] h-[128px]' />

                  <div className='flex flex-col gap-[4px]'>
                    <div className='flex items-center gap-[24px] max-[512px]:justify-center'>
                      <h3 className='text-[32px] font-bold text-white'>{userData?.username}</h3>

                      <div className='flex items-center gap-[4px]'>
                        {/* // TODO Badges */}
                      </div>
                    </div>

                    <div className='flex flex-col gap-[4px]'>
                      <p className='text-[16px] text-white max-[600px]:text-center'>Зареєстрований {new Date(userData?.stats.createdAt!).toLocaleString('ua').split(',')[0]}</p>
                      {state.username === username ? <>
                        <p className='text-[16px] text-white max-[600px]:text-center'>Ви є власником цього акаунту.</p>
                      </> : null}
                    </div>
                  </div>
                </div>

                <span className='w-full h-[1px] block bg-white/[.2]'></span>

                <div>
                  {/* <ul className='flex flex-col gap-[4px]'>
                    <li className='w-full'>Hide</li>

                    <li className='flex gap-[16px] items-center px-[8px] py-[4px] rouned-[2px]'>
                      <p className='text-[white] text-[12px]'>icon</p>
                      <p></p>
                    </li>
                  </ul> */}

                  <span className='w-[1px] h-full block bg-white/[.2]'></span>

                  <div className='w-full h-full flex justify-center items-center'>
                    <h5 className='text-[24px] font-bold text-white'>В розробці</h5>
                  </div>
                </div>
              </div>
            </div>
          </>}
        </>}

      </main>

      <Footer />
    </>
  );
}

export default UserPage;