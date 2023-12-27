'use client'

import { NextPage } from 'next';
import { useEffect, useMemo, useState } from 'react'
import { HeaderSearch, Logo, RatingStar } from '../assets/assets';
import { Popup } from 'react-uvc'
import { useDebounce } from 'use-debounce';
import 'react-uvc/dist/css/popup.css'; // Optional styles.

import '../styles/components/serachPopup.scss'
import { ITitle } from '../interfaces/ITitle';
import $api from './http';
import { env } from '../config';
import Loading from './Loading';
import localizeTitle from './localizeTitle';
import Link from 'next/link';
import { routes } from '../routes';

const Header: NextPage = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery] = useDebounce(searchQuery, 350)
  const [searchResults, setSearchResults] = useState<ITitle[]>([])
  const [popup] = useState(new Popup({
    id: 'search-popup'
  }))

  useEffect(() => {
    popup.init()
  }, [])

  useEffect(() => {
    (async function () {
      const res = await $api.get<{ results: ITitle[] }>(`${env.apiUrl}/v1/titles/search?query=${debouncedQuery}`)
      setSearchResults(res.data.results)
    })()
  }, [debouncedQuery])

  return (
    <>
      <header className='fixed top-0 left-0 w-full py-[16px] bg-dark/[.4] backdrop-blur-[10px] z-[20]'>
        <div className="wrapper flex-row items-center justify-between">
          <Link href={routes.home.path}>
            <Logo width={64} height={48} />
          </Link>

          <div className='flex items-center uvc-popup-trigger' data-uvc-popup-openid="search-popup" onClick={() => popup.open()}>
            <button>
              <HeaderSearch width={32} height={32} />
            </button>
          </div>
        </div>
      </header>

      <div className="uvc-popup-close flex flex-col justify-center items-center px-[24px] cursor-pointer" id="uvc-popup-layer" onClick={() => popup.close()}>
        <div className="uvc-popup-dialog max-h-[800px] max-[500px]:max-h-[600px] max-w-[800px] w-full bg-dark rounded-[4px] overflow-y-scroll search-scroll z-[10] cursor-default duration-200" onClick={e => e.stopPropagation()} data-uvc-popup-id="search-popup">
          <input type="text" className='w-full px-[24px] border-b border-b-[#1D1D1D] bg-transparent py-[8px] text-white' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder='...' />

          <div className='px-[24px] py-[16px] flex flex-col gap-[4px]'>
            {searchResults ? <>
              {searchResults.map(title => {
                return <Link href={`${routes.watch.path}/${title.code}`} key={title.id}>
                  <div className='px-[16px] py-[8px] duration-200 w-fit rounded-[4px] hover:bg-grey flex items-start gap-[16px]'>
                    <img src={title.poster} alt={`Poster for ${title.code}`} className='w-[60px] h-[80px] bg-grey' />

                    <div className='flex flex-col gap-[4px]'>
                      <p className='text-[24px] font-extralight text-white'>{title.names.ukr || title.code}</p>

                      <div className='flex items-center gap-[16px] w-full'>
                        <div className='flex items-center gap-[4px]'>
                          <RatingStar width={16} height={16} />
                          <p className='text-[16px] font-bold gradient--primary-text'>{title.rating}</p>
                        </div>
                        <p className='text-[16px] font-extralight text-white'>{localizeTitle(title).type}</p>
                        <p className='text-[16px] font-extralight text-white'>{title.year}</p>
                      </div>

                      {title.dubs?.length ? <span className='font-bold gradient--primary-text'>Має озвучку</span> : <span className='font-extralight text-white'>Озвучка відсутня</span>}
                    </div>
                  </div>
                </Link>
              })}
            </> : <>
              <p className='text-[16px] font-bold gradient--primary-text'>Завантажуємо...</p>
            </>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;