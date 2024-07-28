'use client'

import { NextPage } from 'next';
import { useEffect, useState } from 'react'
import Link from 'next/link';

import '../styles/components/Footer.scss'
import { routes } from '../routes';
import { config, devMode } from '../config';
import { IWS, IWSPresence, TWS } from '../interfaces/IWS';
import { IcoAnimeeLogo } from '../assets/Icons';
import { IcoSocialDiscord, IcoSocialTelegram, IcoSocialTiktok } from '../assets/Social';

let isFirstOpen = true;
const Footer: NextPage = (props) => {
  const [ws, setWs] = useState<WebSocket>()
  const [online, setOnline] = useState(1)

  useEffect(() => {
    if (typeof window !== undefined && !ws) {
      setWs(new WebSocket(config.services.apiWS))
    }
  }, [])

  useEffect(() => {
    if (!ws) return;
    let sid = (Math.random() + 1).toString(36).substring(8)

    ws.onopen = () => {
      const payload: IWS<IWSPresence> = {
        type: 'presence/audience',
        payload: {
          sid,
          connectedAt: +new Date()
        }
      }

      ws.send(JSON.stringify(payload))
    }

    ws.onmessage = raw => {
      const message = JSON.parse(raw.data) as { type: TWS, payload: any };

      if (message.type === 'presence') {
        setOnline((message as IWS<IWSPresence>).payload.audience!)
      }

      if (isFirstOpen) {
        isFirstOpen = false;
        ws.close();
        setWs(new WebSocket(config.services.apiWS))
      }
    }
  }, [ws])

  return (
    <footer className='relative w-full bg-dark'>
      <div className="wrapper min-[1260px]:!flex-row justify-between items-start !px-[32px] !py-[40px] max-[1260px]:gap-[40px] max-[1260px]:items-center max-[760px]:items-start">
        {/* Left */}
        <div className='flex gap-[16px] items-center max-[760px]:w-full max-[760px]:justify-center max-[560px]:flex-col'>
          <IcoAnimeeLogo width={128} height={128} fill='#FF464E' />

          <div className='flex flex-col gap-[16px]'>
            <div className='flex flex-col gap-[4px]'>
              <p className='text-[32px] font-bold gradient--primary-text max-[560px]:text-center'>ANIMEE.CLUB</p>
              <p className='text-white max-[560px]:text-center'>Поринь у світ україномовного аніме!</p>
            </div>

            <div className='flex items-center gap-[16px] max-[560px]:justify-between'>
              <Link href={`https://t.me/an1meeClub`} target='_blank' className='footer-socialItem'>
                <IcoSocialTelegram width={32} height={32} />
              </Link>

              <Link href={`https://www.tiktok.com/@an1mee.club`} target='_blank' className='footer-socialItem'>
                <IcoSocialTiktok width={32} height={32} />
              </Link>

              <Link href={`https://discord.gg/UmDfKTpsh5`} target='_blank' className='footer-socialItem'>
                <IcoSocialDiscord width={32} height={32} />
              </Link>
            </div>
          </div>
        </div>

        {/* Center */}
        <div className='flex gap-[24px] max-[760px]:flex-col'>
          <ul className='flex flex-col gap-[4px]'>
            <FooterLink href={routes.contacts.path} text='Контакти' />
            <FooterLink href={routes.polling.path} text='Сервіси' />
          </ul>

          <ul className='flex flex-col gap-[4px]'>
            <FooterLink href={routes.agreement.path} text='Угода користувача / Agreement' />
            <FooterLink href={routes.privatePolicy.path} text='Політика конфіденційності / Privacy policy' />
            <FooterLink href={routes.copyright.path} text='Правовласникам / Copyright' />
          </ul>

          <ul className='flex flex-col gap-[4px]'>
            <FooterLink href={routes.rickroll.path} text='Rickroll' disabled />
          </ul>
        </div>

        {/* Right */}
        <div className='flex justify-center max-[760px]:w-full'>
          <p className='text-white'>Онлайн: <b className='font-bold gradient--primary-text'>{online}</b></p>
        </div>
      </div>
    </footer>
  );

  function FooterLink({ href, text, disabled }: { href: string, text: string, disabled?: boolean }) {
    return <li>
      <Link href={href} aria-disabled={disabled} target='_blank' className={`outline-none ${disabled ? 'text-lightGrey' : 'text-white duration-100 hover:text-gradientPrimaryFallback focus-visible:text-gradientPrimaryFallback'}`}>
        {text}
      </Link>
    </li>
  }
}

export default Footer;