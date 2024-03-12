'use client'

import { NextPage } from 'next';
import { useState, useEffect, useRef, RefObject, KeyboardEvent } from 'react';



import { ITitle, ITitleEpisodesDub } from '../interfaces/ITitle';
import { IDubber } from '../interfaces/IDubber';
import axios from 'axios';
import { IcoNewPlayerList, IcoNewPlayerNext, IcoNewPlayerPause, IcoNewPlayerVolMin, IcoNewPlayerVolMuted, IcoNewPlayerVolNormal } from '../assets/ico/new/player';
import { IcoNewPlay } from '../assets/ico/Icos';

import '../styles/components/KekwPlayer.scss';

type TVideoQuality = 'q240' | 'q480' | 'q720' | 'q1080' | 'q2k' | 'q4k';

const KekwPlayer: NextPage<{
  title: ITitle,
  dubs: IDubber[]
}> = ({ title, dubs }) => {
  // Player data
  const [volume, setVolume] = useState(50)
  const [ep, setEp] = useState(1);
  const [dub, setDub] = useState<ITitleEpisodesDub>()
  const [quality, setQuality] = useState<TVideoQuality>('q1080')
  const [duration, setDuration] = useState(0)
  const [videoMoment, setVideoMoment] = useState(0);

  // Player states
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPiP, setIsPip] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLastEpisode, setIsLastEpisode] = useState(false)

  // Video states
  const [videoSrc, setVideoSrc] = useState('');
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  // Refs
  const playerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)



  // Effects
  useEffect(() => {
    if (window === undefined) return;

    const playerData = localStorage.getItem('kekwplayer_data')

    if (playerData) {
      // TODO Set data from local storage

      try {
        const data = JSON.parse(playerData);
      } catch (e) {
        console.error(e)
        setDefault();
      }
    } else {
      //* Set default data
      setDefault();
    }



    function setDefault() {
      setDub(title!.dubs![0])
    }
  }, [])

  //* Video events
  useEffect(() => {
    const video = videoRef.current;
    const player = playerRef.current;

    if (!video || !player) return;

    video.addEventListener('loadstart', () => {
      setIsVideoLoading(true);
    })

    video.addEventListener('durationchange', () => {
      setDuration(Math.floor(video.duration))
    })

    video.addEventListener('loadeddata', () => {
      setIsVideoLoading(false);
    })

    video.addEventListener('playing', () => {
      setIsVideoLoading(false);
    })

    video.addEventListener('waiting', () => {
      setIsVideoLoading(true);
    })

    video.addEventListener('contextmenu', e => {
      e.preventDefault();
    })

    video.addEventListener('timeupdate', () => {
      setVideoMoment(video.currentTime)
    })

    video.addEventListener('dblclick', () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(e => console.error(e));
      } else {
        player.requestFullscreen().catch(e => console.error(e));
      }
    })

    video.addEventListener('click', () => {
      if (video.paused) {
        video.play()
      } else {
        video.pause();
      }
    })

    //* Events
    video.addEventListener('play', () => {
      setIsPlaying(true)
    })

    video.addEventListener('pause', () => {
      setIsPlaying(false)
    })

    video.addEventListener('volumechange', () => {
      if (video.volume === 0 || video.muted) {
        setIsMuted(true);
      } else {
        setIsMuted(false);
      }
      setVolume(video.volume);
    });

    player.addEventListener('fullscreenchange', () => {
      setIsFullscreen(document.fullscreenElement ? true : false)
    })
  }, [])

  //* Handle video keyboard events
  useEffect(() => {
    document.addEventListener('keydown', handler)

    function handler(e: any) {
      const video = videoRef.current;
      const player = playerRef.current;

      if (!video || !player) return;

      const key = e.code;

      switch (key) {
        // Play
        case 'KeyK': {
          if (isPlaying) {
            video.pause()
          } else {
            video.play()
          }

          break;
        }

        // Skip prev 10s
        case 'KeyJ': {
          let curr = videoMoment;
          curr -= 10;

          if (curr >= 0) {
            changeMoment(curr)
          } else {
            changeMoment(0);
          }

          break;
        }

        // Skip prev 5s
        case 'ArrowLeft': {
          let curr = videoMoment;
          curr -= 5;

          if (curr >= 0) {
            changeMoment(curr)
          } else {
            changeMoment(0);
          }

          break;
        }

        // Skip next 10s
        case 'KeyL': {
          let curr = videoMoment;
          curr += 10;

          if (curr >= duration) {
            changeMoment(duration)
          } else {
            changeMoment(curr);
          }

          break;
        }

        // Skip next 5s
        case 'ArrowRight': {
          let curr = videoMoment;
          curr += 5;

          if (curr >= duration) {
            changeMoment(duration)
          } else {
            changeMoment(curr);
          }

          break;
        }

        // PiP
        case 'KeyP': {
          if (isPiP) {
            document.exitPictureInPicture().catch(e => console.error(e))
          } else {
            video.requestPictureInPicture().catch(e => console.error(e));
          }

          break;
        }

        // Fullscreen
        case 'KeyF': {
          if (isFullscreen) {
            document.exitFullscreen().catch(e => console.error(e))
          } else {
            player.requestFullscreen().catch(e => console.error(e))
          }

          break;
        }

        // Mute
        case 'KeyM': {
          video.muted = !video.muted;

          break;
        }
      }
    }

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [isPlaying, isMuted, videoMoment, isFullscreen, isPiP])

  //* Change video src
  useEffect(() => {
    if (!dub) return;

    const epData = dub.eps.find(el => el.order === ep);
    setVideoSrc(epData?.source[quality])
  }, [quality, dub, ep])

  //* Check if episode is last
  useEffect(() => {
    if (!dub) return;
  }, [ep, dub])

  useEffect(() => {
    console.log(videoMoment)
  }, [videoMoment])


  // Handlers
  function changeMoment(to: number) {
    const video = videoRef.current;

    if (!video) return;

    console.log(`moment changed to ${to}`)

    setVideoMoment(to);
    video.currentTime = to;
  }


  return (
    // Wrapper
    <div className='w-full h-full flex flex-col justify-between bg-black relative z-[5]' ref={playerRef}>
      {/* Menu */}
      <Menu ep={ep} setEp={setEp} dub={dub!} dubs={title.dubs!} dubbers={dubs} isLastEpisode={isLastEpisode} setDub={setDub} />

      {/* Bottom */}
      <div className='flex justify-between gap-[24px] relative z-[10]'>
        <div className='flex items-center gap-[16px]'>
          {/* Play/Pause */}
          <Play isPlaying={isPlaying} videoRef={videoRef} />

          {/* Volume */}
          <Volume volume={volume} isMuted={isMuted} videoRef={videoRef} />
        </div>

        {/* Range */}
        <Timeline />

        {/* Settings */}
        <div className='flex items-center gap-[16px]'>
          {/* PiP */}
          <PiP isPiP={isPiP} videoRef={videoRef} />

          {/* Settings */}
          <Settings />

          {/* Fullscreen */}
          <Fullscreen isFullscreen={isFullscreen} playerRef={playerRef} />
        </div>
      </div>

      {/* Video */}
      <div className='w-full h-full absolute top-0 left-0'>
        {/* Loader */}

        <video src={videoSrc} preload='metadata' className='w-full h-full' controls={false} ref={videoRef}></video>
      </div>
    </div>
  );
}

// const Component: NextPage = (props) => {
//   return (
//     <>

//     </>
//   );
// }

const Menu: NextPage<{
  ep: number,
  setEp: (state: number) => void,
  dub: ITitleEpisodesDub,
  setDub: (state: ITitleEpisodesDub) => void,
  dubs: ITitleEpisodesDub[],
  dubbers: IDubber[],
  isLastEpisode: boolean
}> = ({ ep, setEp, dub, dubbers, dubs, isLastEpisode, setDub }) => {
  function nextEpisode() {
    if (!isLastEpisode) {
      setEp(ep += 1)
    }
  }

  return (
    <div className='relative z-[10] px-[24px] py-[16px] flex gap-[4px]'>
      <button className='px-[16px] py-[8px] bg-dark rounded-[2px] duration-200 hover:bg-purple'>
        <IcoNewPlayerList width={40} height={40} />
      </button>

      <div className='bg-dark flex flex-col justify-center gap-[2px] rounded-[2px] px-[16px]'>
        <p className='text-white font-bold text-center'>{ep <= 9 ? `0${ep}` : ep}</p>
        <p className='text-white text-[12px] font-extralight text-center'>{dub ? dubbers.find(el => el.id === dub.id)!.name : '...'}</p>
      </div>

      <button className='px-[16px] bg-dark rounded-[2px] duration-200 hover:bg-purple' onClick={() => nextEpisode()}>
        <IcoNewPlayerNext width={40} height={40} className={`kp-menu_nextBtn ${isLastEpisode ? 'kp-menu_nextBtn--lastEpisode' : ''}`} />
      </button>
    </div>
  );
}

const Play: NextPage<{
  isPlaying: boolean,
  videoRef: RefObject<HTMLVideoElement>
}> = ({ isPlaying, videoRef }) => {
  function changePlaying() {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause()
    }
  }

  function getTitle() {
    return isPlaying ? 'Зупинити відео (k)' : 'Продовжити відео (k)'
  }

  return (
    <button className='relative w-[60px] h-[60px]' onClick={() => changePlaying()} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
      <IcoNewPlay width={60} height={60} className={`duration-200 absolute top-0 left-0 ${isPlaying ? 'opacity-0' : 'opacity-100'}`} />
      <IcoNewPlayerPause width={60} height={60} className={`duration-200 absolute top-0 left-0 ${isPlaying ? 'opacity-100' : 'opacity-0'}`} />
    </button>
  );
}

const Volume: NextPage<{
  volume: number,
  isMuted: boolean,
  videoRef: RefObject<HTMLVideoElement>
}> = ({ isMuted, videoRef, volume }) => {
  function changeMuted() {
    const video = videoRef.current;

    if (!video) {
      console.error('Video is not found')
      return;
    };

    video.muted = !video.muted;
  }

  function getTitle() {
    return isMuted ? 'Увімкнути звук (m)' : 'Вимкнути звук (m)'
  }

  return (
    <div className='relative flex items-center gap-[8px]'>
      <button className='relative w-[40px] h-[40px]' onClick={() => changeMuted()} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
        <IcoNewPlayerVolMin width={40} height={40} className={`duration-200 opacity-0 absolute top-0 left-0 ${volume < 30 && !isMuted ? 'opacity-100' : ''}`} />
        <IcoNewPlayerVolNormal width={40} height={40} className={`duration-200 opacity-0 absolute top-0 left-0 ${volume >= 30 && !isMuted ? 'opacity-100' : ''}`} />
        <IcoNewPlayerVolMuted width={40} height={40} className={`duration-200 opacity-0 absolute top-0 left-0 ${isMuted ? 'opacity-100' : ''}`} />
      </button>
    </div>
  );
}

const Timeline: NextPage = (props) => {
  return (
    <>

    </>
  );
}

const Settings: NextPage = (props) => {
  return (
    <>

    </>
  );
}

const PiP: NextPage<{
  isPiP: boolean,
  videoRef: RefObject<HTMLVideoElement>,
}> = ({ isPiP, videoRef }) => {
  function changePiP() {
    const video = videoRef.current;

    if (!video) {
      console.error('Video is not found');
      return;
    }

    if (document.pictureInPictureElement) {
      document.exitPictureInPicture().catch(e => console.error(e));
    } else {
      video.requestPictureInPicture().catch(e => console.error(e))
    }
  }

  function getTitle() {
    return isPiP ? 'Вийти з Картинка в Картинці (p)' : 'Увійти в Картинка в Картинці (p)'
  }

  return (
    <button onClick={() => changePiP()} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
      <p className='text-white'>pip</p>
    </button>
  );
}

const Fullscreen: NextPage<{
  isFullscreen: boolean,
  playerRef: RefObject<HTMLDivElement>
}> = ({ isFullscreen, playerRef }) => {
  function changeFullscreen() {
    const player = playerRef.current

    if (!player) {
      console.error('Player is not found')
      return
    }

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(e => console.error(e));
    } else {
      player.requestFullscreen().catch(e => console.error(e));
    }
  }

  function getTitle() {
    return isFullscreen ? 'Вийти з повноекранного режиму (f)' : 'Увійти в повноекранний режим (f)';
  }

  return (
    <button onClick={() => changeFullscreen()} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
      <p className='text-white'>fullscreen</p>
    </button>
  );
}

export default KekwPlayer;