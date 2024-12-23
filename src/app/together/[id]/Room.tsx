'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import { usePathname } from 'next/navigation';

import { IcoCan, IcoChain } from '~/assets/Icons';
import { IcoSocialTelegram } from '~/assets/Social';
import { cn, copyToClipboard } from '~/components/Components';
import { getUTC, randomNumber } from '~/components/handlers';
import { signCSRF } from '~/components/http';
import KekwPlayer from '~/components/KekwPlayer/KekwPlayer';
import Input from '~/components/UI/Input';
import StyledImage from '~/components/UI/StyledImage';
import { config } from '~/config';
import { useAppSelector } from '~/hooks/redux';
import { IDubber } from '~/interfaces/IDubber';
import { ITitle } from '~/interfaces/ITitle';
import { IUser, IUserTogetherRoom } from '~/interfaces/IUser';
import { IWS_WTConnect, IWS_WTMessage, Message, Request, Response } from '~/interfaces/IWS';



interface IProps {
  user: IUser
  room: IUserTogetherRoom
  title: ITitle
  dubbers: IDubber[]
}

interface IMessage {
  text: string
  date: number
  avatar: string
  username: string
  type: 'income' | 'outcome' | 'system'
}

// @ts-ignore
const Context = createContext<IProps>({})

const messagePlaceholders = [
  'tg @nekomiclub',
  'Ну давай, напиши які у неї...',
  'я гуль',
  'ахахахахахаххаха',
  'ну?',
  'never gonna give you up',
  'о я це в тіктоці бачив',
  'моя вайфа кста',
  'Запропонуй свою репліку в діскорді',
]



export const TogetherRoom: NextPage<IProps> = ({ dubbers, room, title, user }) => {
  const roomId = `${user.id}__${room.id}`
  const currentUser = useAppSelector(state => state.user);



  const [ws, setWs] = useState<WebSocket>();
  const [messages, setMessages] = useState<IMessage[]>([])



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
          CSRF: signCSRF()
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
          CSRF: signCSRF()
        }

        websocket.send(JSON.stringify(disconnect));
      })
    }
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
      } catch (e) {
        console.error(e)
      }
    }
  }, [ws])



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
        CSRF: signCSRF()
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
    user
  }}>
    <main className="pt-[124px]">
      <div className="wrapper !flex-row gap-[32px] max-[1020px]:!flex-col">
        <div className="max-w-[1170px] flex flex-col gap-[32px] flex-[3]">
          <Player />
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

function Player() {
  const { dubbers, title } = useContext(Context);

  return <div className="flex flex-col gap-[8px]">
    <p className="text-lightGrey">Спільний перегляд: {title.names.ukr}</p>

    <div className="w-full h-[550px]">
      <KekwPlayer dubbers={dubbers} title={title} />
    </div>
  </div>
}

function Settings({ className }: { className?: string }) {
  const currentUser = useAppSelector(state => state.user);
  const { user } = useContext(Context)

  return currentUser.id === user.id && <div className={cn('px-[24px] py-[16px] flex flex-col gap-[24px] rounded-[2px] border-[2px] border-darkGrey', className)}>
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
  return <div className="w-full flex justify-start relative">
    <div className="relative pb-[16px]">
      <div className="flex items-end gap-[8px]">
        <StyledImage src={avatar} width="32px" height="32px" className="rounded-[32px] overflow-hidden" />

        <div className="flex flex-col gap-[4px]">
          <p className="text-lightGrey text-[12px]">@{username}</p>

          <div className="px-[12px] py-[6px] bg-darkGrey rounded-[4px] rounded-bl-none">
            <p className="text-white break-all">{text}</p>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-lightGrey absolute right-0 bottom-0">{getUTC(date).time}</p>
    </div>
  </div>
}

function MessageOutcome({ avatar, date, text, username }: IMessage) {
  return <div className="w-full flex justify-end relative">
    <div className="relative pb-[16px]">
      <div className="px-[12px] py-[6px] bg-purple rounded-[4px] rounded-br-none">
        <p className="text-white break-all">{text}</p>
      </div>

      <p className="text-[10px] text-lightGrey absolute right-0 bottom-0">{getUTC(date).time}</p>
    </div>
  </div>
}

function MessageSystem({ text }: IMessage) {
  return <p className="text-lightGrey text-center text-[12px]">{text}</p>
}

function RoomControls() {
  const pathname = usePathname()
  const currentUser = useAppSelector(state => state.user);
  const { user } = useContext(Context)

  const [urlCopied, setUrlCopied] = useState(false);



  function shareRoom() {
    copyToClipboard(`${config.URL.baseURL}${pathname}`);
    setUrlCopied(true);

    setTimeout(() => {
      setUrlCopied(false)
    }, 3000);
  }

  async function deleteRoom() {
    if (!confirm(`Ти дійсно хочеш видалити цю кімнату?`)) return;

    console.log('deleete')
  }



  return <div className="flex gap-[8px] items-center max-[1330px]:flex-col">
    <button className={cn('w-full px-[8] py-[12px] flex justify-center gap-[8px] border-[2px] rounded-[2px] border-darkGrey duration-200 hover:bg-darkGrey', urlCopied && 'bg-green border-green hover:!bg-green')} onClick={shareRoom}>
      <IcoChain width={24} height={24} fill="#fff" />
      <p className="text-white uppercase whitespace-nowrap">
        {!urlCopied && 'поділитися кімнатою'}
        {urlCopied && 'скопійовано!'}
      </p>
    </button>

    {currentUser.id === user.id && <button className="w-full px-[8] py-[12px] flex justify-center gap-[8px] border-[2px] rounded-[2px] border-darkGrey bg-darkGrey duration-200 hover:bg-red hover:border-red" onClick={deleteRoom}>
      <IcoCan width={24} height={24} fill="#fff" />
      <p className="text-white uppercase whitespace-nowrap">видалити кімнату</p>
    </button>}
  </div>
}