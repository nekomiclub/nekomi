'use client'

import next, { NextPage } from 'next';
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useDebounce } from 'use-debounce';
import { ITitle } from '../../interfaces/ITitle';
import $api from '../../components/httpOld';
import Loading from '../../components/Loading';

import '../../styles/components/Lib.scss'
import Link from 'next/link';
import { routes } from '../../routes';
import { UserLibDelayed } from '../../assets/user';
import { Tooltip } from 'react-tooltip';
import { IcoArrow } from '../../assets/ico/Icos';
import { config } from '../../config';

function randomInteger(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

const randomNames = ['Магічна Битва 2', 'Монолог травниці', 'Сходження в тіні 2', 'Коносуба', 'Re Zero Starting Life in Another World']

const LibItem: NextPage<{ title: ITitle }> = ({ title }) => {
  return (
    <Link href={`${routes.watchTitle.path.replace('/*', '')}/${title.code}`} className='lib-card duration-200 relative flex flex-col items-center justify-between h-[240px]'>
      <img src={title.poster} alt={`${title.code} poster`} loading='lazy' className='w-full h-full absolute top-0 left-0' />

      <div className='w-full flex justify-end items-center px-[8px] py-[8px] gap-[8px]'>
        <div className='px-[8px] py-[4px] rounded-[2px] gradient--primary relative '>
          <p className='text-[16px] text-white font-bold'>{title.rating || '-'}</p>
        </div>

        <div className={`flex items-center justify-center relative px-[4px] py-[4px] rounded-[2px] ${title.country !== 'null' ? 'bg-green-600' : 'bg-red-400'}`} data-tooltip-id={`${title.code}-tt--isUpdated`} data-tooltip-content={title.country !== 'null' ? 'Цей тайтл оновлений' : 'Цей тайтл ще не оновлений'}>
          <UserLibDelayed width={24} height={24} className='lib-card--isUpdated' />
          <Tooltip id={`${title.code}-tt--isUpdated`} />
        </div>
      </div>

      <div className='lib-card--blur bg-dark/[.4] backdrop-blur-[10px] px-[16px] py-[8px] w-full duration-200'>
        <p className='text-[16px] text-white font-extralight text-center'>{title.names.ukr || title.code}</p>
      </div>
    </Link>
  );
}

const Page: NextPage<{ page: number, currPage: number, setPage: (page: number) => void }> = ({ currPage, page, setPage }) => {
  return <div className={`lib-pageTrack px-[14px] py-[8px] rounded-[2px] border border-white/[.2] cursor-pointer ${page === currPage ? 'gradient--primary' : ''}`} onClick={() => setPage(currPage)}>
    <p className='text-[16px] text-white font-extralight'>{currPage}</p>
  </div>
}

const Lib: NextPage = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery] = useDebounce(searchQuery, 350)
  const [titles, setTitles] = useState<ITitle[]>([])
  const [pages, setPages] = useState(0)
  const [totalTitles, setTotalTitles] = useState(0)

  const titlesContainerRef = useRef<HTMLDivElement>(null)

  const [randomTitleQuery] = useState(randomNames[randomInteger(0, randomNames.length - 1)])

  const router = useRouter()
  const path = usePathname()
  const searchParams = useSearchParams()
  const [page, setPage] = useState(+searchParams.get('page')! || 1)

  const [pagesTrack, setPagesTrack] = useState<number[]>([])

  const titlesPerPage = 30;

  useEffect(() => {
    const container = titlesContainerRef.current;

    function resizeEstimatedHeight() {
      if (!container || !pages || !totalTitles) return;

      const windowWidth = window.innerWidth;
      let elementsInViewport = 0
      const gap = 24;
      const elementHeight = 240;
      const titlesOnPage = container.querySelectorAll('.lib-card').length;

      if (windowWidth < 600) {
        elementsInViewport = 1
      } else if (windowWidth < 1100) {
        elementsInViewport = 2
      } else if (windowWidth < 1400) {
        elementsInViewport = 3
      } else if (windowWidth > 1400) {
        elementsInViewport = 4
      }

      const containerHeight = (Math.ceil(titlesOnPage / elementsInViewport) * (elementHeight + gap)) - 24;
      container.style.height = `${containerHeight}px`
    }

    if (container && titles && pages && totalTitles) resizeEstimatedHeight();

    window.addEventListener('resize', () => resizeEstimatedHeight())
    return () => window.removeEventListener('resize', () => resizeEstimatedHeight())
  }, [titlesContainerRef, pages, totalTitles, page, titles])

  useEffect(() => {
    setLib()

    $api.get<{ results: ITitle[], total: number }>(`${config.services.apiURL}/v1/titles`).catch(e => console.error(e)).then(res => {
      setPages(Math.round(res!.data.total / titlesPerPage))
      setTotalTitles(res!.data.total)
    })
  }, [])

  // Search
  useEffect(() => {
    if (!debouncedQuery) {
      // @ts-ignore
      return setLib()
    }

    (async function () {
      const res = await $api.get<{ results: ITitle[] }>(`${config.services.apiURL}/v1/titles/search?query=${debouncedQuery}`)
      setTitles(res.data.results)
    })()
  }, [debouncedQuery])

  useEffect(() => {
    setLib()
    router.replace(`${path}/?page=${page}`)

    reorderPagesTrack();

    window.addEventListener('resize', () => reorderPagesTrack())

    function reorderPagesTrack() {
      const widnowWidth = window.innerWidth;
      const values: { pagesMax: number, pagesMin: number } = {
        pagesMax: widnowWidth > 756 ? 10 : 5,
        pagesMin: widnowWidth > 756 ? 4 : 2,
      }

      if (pages) {
        let numsArr: number[] = []

        // Offset breakpoints
        if (page < values.pagesMin + 1) {
          numsArr = Array.from(Array(pages > values.pagesMax ? values.pagesMax : pages).keys())

          numsArr.shift();

          pages > values.pagesMax ? numsArr.push(values.pagesMax) : numsArr.push(pages)
        } else if (page > pages - Math.ceil(values.pagesMax / 2)) {
          let nextI = 0;
          let prevI = 0;
          let tmpPage = page;
          let tmpNumsArr: number[] = []

          // Set next pages
          while (nextI < pages - page) {
            nextI++;
            numsArr.push(page + nextI);
          }

          // Set current page
          numsArr.unshift(page)

          // Set prev pages
          while (prevI <= values.pagesMax - 2 - nextI) {
            tmpPage--;

            if (tmpPage < 1) return

            tmpNumsArr.push(tmpPage)
            prevI++
          }

          numsArr.unshift(...tmpNumsArr.reverse())
        } else {
          let prevI = 0;
          let nextI = 0;
          let tmpPage = page;
          let tmpNumsArr: number[] = []

          while (prevI <= values.pagesMin - 1) {
            tmpNumsArr.push(--tmpPage)
            prevI++
          }

          numsArr.push(...tmpNumsArr.reverse())
          numsArr.push(page)
          tmpPage = page;

          while (nextI <= values.pagesMin - 1) {
            if (tmpPage++ <= pages) {
              numsArr.push(tmpPage)
              nextI++
            }
          }
        }

        setPagesTrack(numsArr)
      }
    }

  }, [page, pages])

  function setLib() {
    $api.get<{ results: ITitle[] }>(`${config.services.apiURL}/v1/titles?limit=${titlesPerPage}&page=${page}`).catch(e => console.error(e)).then(res => setTitles(res!.data.results))
  }

  return (
    <>
      <Header />

      <main className='lib min-h-screen h-full bg-dark pt-[200px]'>
        <div className="wrapper gap-[24px] items-start">
          <div className='w-full bg-grey rounded-[2px] px-[32px] py-[24px] flex flex-col items-center gap-[24px]'>
            <div className='flex items-center justify-between w-full'>
              <p className='text-[32px] text-white font-bold'>Тека</p>

              <div className='flex items-center gap-[16px]'>

              </div>
            </div>

            <div className='w-full'>
              <input type="text" className='w-full px-[24px] py-[16px] border border-white/[.4] bg-transparent placeholder:text-white/[.2] text-white' placeholder={`Наприклад: ${randomTitleQuery}`} value={searchQuery} onChange={e => setSearchQuery(e.target!.value)} />
            </div>

            <div ref={titlesContainerRef} className='w-full h-full flex gap-[24px] justify-center flex-wrap'>
              {titles.length ? <>
                {titles.map(title => {
                  return <LibItem title={title} key={title.id} />
                })}
              </> : <Loading />}
            </div>

            <div className={`w-full flex justify-center items-center gap-[4px] duration-200 ${debouncedQuery ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
              <button onClick={() => page - 1 !== -1 ? setPage(prev => prev -= 1) : null}>
                <IcoArrow width={24} height={24} className='rotate-[90deg]' />
              </button>

              <div className='px-[16px]'>
                <Page currPage={1} page={page} setPage={setPage} />
              </div>

              {pagesTrack.map(currPage => {
                return <Page page={page} currPage={currPage} setPage={setPage} key={currPage} />
              })}

              <div className='px-[16px]'>
                <Page currPage={pages} page={page} setPage={setPage} />
              </div>

              <button onClick={() => page + 1 !== pages ? setPage(prev => prev += 1) : null}>
                <IcoArrow width={24} height={24} className='-rotate-[90deg]' />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Lib;