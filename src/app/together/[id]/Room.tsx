'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { IcoArrow, IcoCan, IcoChain, IcoUser } from '~/assets/Icons';
import { IcoSocialTelegram } from '~/assets/Social';
import { cn, copyToClipboard } from '~/components/Components';
import { getUTC, randomNumber } from '~/components/handlers';
import { $api, signCSRF } from '~/components/http';
import KekwPlayer from '~/components/KekwPlayer/KekwPlayer';
import Input from '~/components/UI/Input';
import StyledImage from '~/components/UI/StyledImage';
import { config } from '~/config';
import { useAppSelector } from '~/hooks/redux';
import { IDubber } from '~/interfaces/IDubber';
import { ITitle, ITitleEpisode } from '~/interfaces/ITitle';
import { IUser, IUserTogetherRoom } from '~/interfaces/IUser';
import { IWS_WTConnect, IWS_WTMessage, IWS_WTSync, Message, Request, Response } from '~/interfaces/IWS';



interface IProps {
  user: IUser
  room: IUserTogetherRoom
  title: ITitle
  dubbers: IDubber[]
  userSessionToken: string
}

interface IContextProps {
  user: IUser
  room: IUserTogetherRoom
  title: ITitle
  dubbers: IDubber[]
  isOwner: boolean
  canControlPlayback: boolean
}

interface IMessage {
  text: string
  date: number
  avatar: string
  username: string
  type: 'income' | 'outcome' | 'system'
}

// @ts-ignore
const Context = createContext<IContextProps>({})

const messagePlaceholders = [
  'tg @nekomiclub',
  'ахахахахахаххаха',
  'моя вайфа кста',
  '<script>alert("xss haha")</script>',
]



export const TogetherRoomSecurityLayer: NextPage<IProps> = (props) => {
  const pathname = usePathname();
  const currentUser = useAppSelector(state => state.user);

  return <>
    {/* Pass if user has account */}
    {currentUser.id && <TogetherRoom {...props} />}

    {/* Reject if user dont has account */}
    {!currentUser.id && <>
      <div className="w-screen h-screen z-[10000] bg-dark fixed">
        <div className="wrapper h-full flex justify-center items-center">
          <div className="w-full max-w-[800px] h-[300px] bg-darkGrey px-[32px] py-[24px] rounded-[2px] flex flex-col gap-[24px] items-center justify-between">
            <div className="flex flex-col gap-[8px] items-center">
              <IcoUser width={64} height={64} fill="#fff" />

              <div className="flex flex-col gap-[4px]">
                <h2 className="text-white text-[24px] font-bold text-center">Здається, в тебе нема акаунту</h2>
                <p className="text-lightGrey text-[12px] text-center">Нажаль, для спільного перегляду потрібен акаунт</p>
              </div>
            </div>

            <Link href={`${config.URL.fkAccount}/login?ref=${config.URL.baseURL}${pathname}`} className="px-[16px] py-[8px] rounded-[2px] bg-grey duration-200 hover:bg-gradientPrimaryFallback flex justify-center items-center gap-[16px] max-w-[500px] w-full">
              <p className="text-white">Створити акаунт</p>
              <IcoArrow width={16} height={16} className="-rotate-[90deg]" fill="#fff" />
            </Link>
          </div>
        </div>
      </div>
    </>}
  </>
}

const TogetherRoom: NextPage<IProps> = ({ dubbers, room, title, user, userSessionToken }) => {
  const currentUser = useAppSelector(state => state.user);
  const roomId = `${user.id}__${room.id}`
  const isOwner = user.id === currentUser.id;
  const canControlPlayback = user.id === currentUser.id || room.settings.usersCanControl;


  const [ws, setWs] = useState<WebSocket>();
  const [messages, setMessages] = useState<IMessage[]>([{
    avatar: '',
    date: 0,
    text: 'Спільний перегляд знаходиться в активній розробці, у випадку багів будь ласка створіть тікет на діскорд сервері',
    type: 'system',
    username: 'SYSTEM'
  }])

  // Player states
  const [order, setOrder] = useState<number>()
  const [episode, setEpisode] = useState<ITitleEpisode>()
  const [dubber, setDubber] = useState<IDubber>()
  const [moment, setMoment] = useState(0)

  const [isBuffering, setIsBuffering] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false);

  const parentRef = useRef<HTMLDivElement>(null)



  // Establish websocket connection & rename document title
  useEffect(() => {
    if (typeof window === 'undefined') return;

    document.title = `${room.settings.name} ― спільний перегляд на nekomi`;

    if (!ws) {
      const websocket = new WebSocket(config.URL.apiWS);

      setWs(websocket)

      // Connect
      websocket.onopen = () => {
        const connect: Request<IWS_WTConnect> = {
          type: 'wt_connect',
          payload: {
            roomId,
            username: currentUser.username
          },
          CSRF: signCSRF(),
          Authorization: userSessionToken
        }

        websocket.send(JSON.stringify(connect));
      }

      websocket.onerror = data => {
        console.error(data)
      }

      window.addEventListener('beforeunload', () => {
        const disconnect: Request<IWS_WTConnect> = {
          type: 'wt_disconnect',
          payload: {
            roomId,
            username: currentUser.username
          },
          CSRF: signCSRF(),
          Authorization: userSessionToken
        }

        websocket.send(JSON.stringify(disconnect));
      })
    }
  }, [])

  // Handle player video events
  useEffect(() => {
    const parent = parentRef.current
    const video = parent?.querySelector('#kekwplayer-video') as HTMLVideoElement | undefined;
    if (!parent || !video) return;

    video.addEventListener('waiting', () => setIsBuffering(true));
    video.addEventListener('playing', () => setIsBuffering(false));

    video.addEventListener('timeupdate', () => setMoment(video.currentTime))
    video.addEventListener('play', () => setIsPlaying(true))
    video.addEventListener('pause', () => setIsPlaying(false))
  }, [])

  // Websocket
  useEffect(() => {
    if (!ws) return;

    ws.onmessage = data => {
      try {
        const message = JSON.parse(data.data) as Message;

        // Handle messages
        if (message.type === 'wt_message') {
          const { payload } = message as Response<IWS_WTMessage>
          if (payload.username === currentUser.username && payload.type === 'income') return;

          addMessage({
            avatar: payload.avatar,
            date: payload.date,
            text: payload.text,
            type: payload.type,
            username: payload.username,
          })
        }

        if (message.type === 'wt_sync') {
          const { payload } = message as Response<IWS_WTSync>
          const video = parentRef.current?.querySelector('#kekwplayer-video') as HTMLVideoElement | undefined;
          if (payload.syncedWithId === currentUser.id || !video) return;

          const { dubberId, isBuffering, isPlaying, moment, order } = payload;

          console.log('-- synced')
          console.log(payload)

          if (isBuffering) {
            video.pause();
          } else {
            video.play().catch(e => console.error(e));
          }

          if (isPlaying) {
            video.play().catch(e => console.error(e));
          } else {
            video.pause()
          }

          setOrder(order)
          setEpisode(title.episodes.find(el => el.dubberID === dubberId && el.order === order));

          video.currentTime = moment;
        }
      } catch (e) {
        console.error(e)
      }
    }
  }, [ws])

  // Sync 
  useEffect(() => {
    if (!ws || ws.readyState !== 1 || !canControlPlayback || !order || !dubber) return;

    console.debug('-- sync ep/dub')
    console.debug('Episode: ', order)
    console.debug('Dubber: ', dubber)
    console.debug('Playing: ', isPlaying)
    console.debug('Moment: ', moment)
    console.debug('Buffering: ', isBuffering)

    const request: Request<IWS_WTSync> = {
      payload: {
        dubberId: dubber.id,
        order: order,
        isBuffering,
        isPlaying,
        moment,
        roomId,
        syncedWithId: currentUser.id
      },
      type: 'wt_sync',
      CSRF: signCSRF(),
      Authorization: userSessionToken
    }

    ws.send(JSON.stringify(request));
    console.debug('-- synced')
  }, [ws, order, dubber])

  useEffect(() => {
    if (!ws || ws.readyState !== 1 || !canControlPlayback || moment === 0 || !order || !dubber) return;

    console.debug('-- sync')
    console.debug('Episode: ', order)
    console.debug('Dubber: ', dubber)
    console.debug('Playing: ', isPlaying)
    console.debug('Moment: ', moment)
    console.debug('Buffering: ', isBuffering)

    const request: Request<IWS_WTSync> = {
      payload: {
        dubberId: dubber.id,
        order: order,
        isBuffering,
        isPlaying,
        moment,
        roomId,
        syncedWithId: currentUser.id
      },
      type: 'wt_sync',
      CSRF: signCSRF(),
      Authorization: userSessionToken
    }

    ws.send(JSON.stringify(request));
    console.debug('-- synced')
  }, [ws, order, dubber, isPlaying, isBuffering])



  function addMessage(message: IMessage) {

    if (message.type === 'outcome') {
      if (!ws) return;

      const request: Request<IWS_WTMessage> = {
        payload: {
          avatar: message.avatar,
          date: 0,
          roomId,
          text: message.text,
          type: 'income',
          username: message.username
        },
        type: 'wt_message',
        CSRF: signCSRF(),
        Authorization: userSessionToken
      }

      ws.send(JSON.stringify(request));
    }

    setMessages(prev => {
      return [...prev, message];
    })
  }



  return <Context.Provider value={{
    dubbers,
    room,
    title,
    user,
    isOwner,
    canControlPlayback
  }}>
    <main className="pt-[124px]">
      <div className="wrapper !flex-row gap-[32px] max-[1020px]:!flex-col">
        <div className="max-w-[1170px] flex flex-col gap-[32px] flex-[3]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-lightGrey">Спільний перегляд: {title.names.ukr}</p>

            <div className="w-full h-[550px]" ref={parentRef}>
              <KekwPlayer dubbers={dubbers} title={title} setOutDubber={setDubber} setOutEp={setOrder} outEpisode={episode} disableScreens={!canControlPlayback} />
            </div>
          </div>

          <Settings className="hidden min-[1020px]:block" />
        </div>

        <div className="flex flex-col gap-[16px] w-[600px] max-[1330px]:w-[450px] max-[1020px]:w-full h-auto">
          <Chat messages={messages} addMessage={addMessage} />
          <RoomControls />
        </div>

        <Settings className="hidden max-[1020px]:block" />
      </div>
    </main>
  </Context.Provider>
}

function Settings({ className }: { className?: string }) {
  const { isOwner } = useContext(Context)

  return isOwner && <div className={cn('px-[24px] py-[16px] flex flex-col gap-[24px] rounded-[2px] border-[2px] border-darkGrey', className)}>
    <h2 className="text-[24px] text-white font-bold">Налаштування кімнати</h2>

    <div className="flex flex-col gap-[16px]">
      <p className="text-lightGrey">Налаштування кімнати в розробці...</p>
    </div>
  </div>
}

function Chat({ messages, addMessage }: { messages: IMessage[], addMessage: (message: IMessage) => void }) {
  const user = useAppSelector(state => state.user);

  const [message, setMessage] = useState('')
  const [placeholder, setPlaceholder] = useState(messagePlaceholders[0]);

  const messagesRef = useRef<HTMLDivElement>(null)



  useEffect(() => {
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight })
  }, [messages])

  async function sendMessage() {
    if (message.length < 1) return;

    setMessage('')
    setPlaceholder(messagePlaceholders[randomNumber(0, messagePlaceholders.length - 1)])

    addMessage({
      avatar: user.avatar,
      date: getUTC().timestamp,
      text: message,
      username: user.username,
      type: 'outcome',
    })
  }



  return <div className="w-full px-[24px] py-[16px] rounded-[4px] border-[2px] border-darkGrey h-full min-h-[300px] max-h-[920px] gap-[16px] flex flex-col max-[1020px]:h-[500px]">
    <div className="w-full overflow-x-hidden overflow-y-auto h-full flex-1 flex flex-col gap-[8px]" ref={messagesRef}>
      {!messages.length && <p className="text-lightGrey text-center">Тут поки що нічого нема :(</p>}

      {messages.map((message, i) => {
        return message.type === 'income' ? <MessageIncome {...message} key={`chat-message--${i}`} /> :
          message.type === 'outcome' ? <MessageOutcome {...message} key={`chat-message--${i}`} /> :
            message.type === 'system' ? <MessageSystem {...message} key={`chat-message--${i}`} /> :
              <p className="text-lightGrey text-[12px]" key={`chat-message--${i}`}>Йой, це повідомлення нажаль не підтримується</p>
      })}
    </div>

    <form className="flex items-center gap-[16px] w-full" onSubmit={e => { e.preventDefault(); sendMessage() }}>
      <Input state={message} stateSetter={setMessage} placeholder={placeholder} className="!bg-darkGrey w-full" />

      <button>
        <IcoSocialTelegram width={24} height={24} fill="#fff" />
      </button>
    </form>
  </div>
}

function MessageIncome({ avatar, date, text, username }: IMessage) {
  const offset = (new Date().getTimezoneOffset() < 0 ? Math.abs(new Date().getTimezoneOffset()) : -new Date().getTimezoneOffset()) * 60000

  return <div className="w-full flex justify-start relative">
    <div className="relative pb-[16px]">
      <div className="flex items-end gap-[8px]">
        <StyledImage src={avatar} width="32px" height="32px" className="rounded-[32px] overflow-hidden" />

        <div className="flex flex-col gap-[4px]">
          <p className="text-lightGrey text-[12px]">@{username}</p>

          <div className="px-[12px] py-[6px] bg-darkGrey rounded-[4px] rounded-bl-none w-fit relative">
            <p className="text-white break-all">{text}</p>

            <p className="text-[10px] text-lightGrey absolute right-0 -bottom-[15px]">{getUTC(date + offset).time}</p>
          </div>

        </div>
      </div>

    </div>
  </div>
}

function MessageOutcome({ avatar, date, text, username }: IMessage) {
  const offset = (new Date().getTimezoneOffset() < 0 ? Math.abs(new Date().getTimezoneOffset()) : -new Date().getTimezoneOffset()) * 60000

  return <div className="w-full flex justify-end relative">
    <div className="relative pb-[16px]">
      <div className="px-[12px] py-[6px] bg-purple rounded-[4px] rounded-br-none">
        <p className="text-white break-all">{text}</p>
      </div>

      <p className="text-[10px] text-lightGrey absolute right-0 bottom-0">{getUTC(date + offset).time}</p>
    </div>
  </div>
}

function MessageSystem({ text }: IMessage) {
  return <p className="text-lightGrey text-center text-[12px]">{text}</p>
}

function RoomControls() {
  const pathname = usePathname()
  const router = useRouter();

  const { isOwner, room } = useContext(Context)

  const [urlCopied, setUrlCopied] = useState(false);



  function shareRoom() {
    copyToClipboard(`${config.URL.baseURL}${pathname}`);
    setUrlCopied(true);

    setTimeout(() => {
      setUrlCopied(false)
    }, 3000);
  }

  async function deleteRoom() {
    if (!isOwner) return console.error(`User can not delete room`);

    if (!confirm(`Ти дійсно хочеш видалити цю кімнату?`)) return;

    try {
      await $api.delete(`/user/together/${room.id}`)
      router.push(`${config.URL.baseURL}`);
    } catch (e) {
      console.error(e)
    }
  }



  return <div className="flex gap-[8px] items-center max-[1330px]:flex-col">
    <button className={cn('w-full px-[8] py-[12px] flex justify-center gap-[8px] border-[2px] rounded-[2px] border-darkGrey duration-200 hover:bg-darkGrey', urlCopied && 'bg-green border-green hover:!bg-green')} onClick={shareRoom}>
      <IcoChain width={24} height={24} fill="#fff" />
      <p className="text-white uppercase whitespace-nowrap">
        {!urlCopied && 'поділитися кімнатою'}
        {urlCopied && 'скопійовано!'}
      </p>
    </button>

    {isOwner && <button className="w-full px-[8] py-[12px] flex justify-center gap-[8px] border-[2px] rounded-[2px] border-darkGrey bg-darkGrey duration-200 hover:bg-red hover:border-red" onClick={deleteRoom}>
      <IcoCan width={24} height={24} fill="#fff" />
      <p className="text-white uppercase whitespace-nowrap">видалити кімнату</p>
    </button>}
  </div>
}