'use client'

import { NextPage } from 'next';
import { useEffect, useState } from 'react'
import { Logo, IcoSocialTelegram, IcoSupportTiktok } from '../assets/assets';
import Link from 'next/link';

import '../styles/components/Footer.scss'
import { routes } from '../routes';
import { WS_URL, devMode, env } from '../config';
import { IWS, IWSPresence, TWS } from '../interfaces/IWS';

let isFirstOpen = true;
const Footer: NextPage = (props) => {
  const [ws, setWs] = useState<WebSocket>()
  const [online, setOnline] = useState(1)

  useEffect(() => {
    if (typeof window !== undefined && !ws) {
      setWs(new WebSocket(WS_URL))
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
        setWs(new WebSocket(WS_URL))
      }
    }
  }, [ws])

  return (
    <footer className='relative py-[16px] w-full bg-dark'>
      <div className="wrapper flex-col items-center gap-[32px]">
        <div className='flex justify-between w-full items-center max-[600px]:flex-col max-[600px]:gap-[32px]'>
          <div className='flex gap-[24px] items-center'>
            <Logo width={128} height={96} className='max-[670px]:w-[64px] max-[670px]:h-[48px]' />

            <div className='flex flex-col gap-[4px]'>
              <p className='uppercase text-[32px] text-white font-extralight max-[670px]:text-[24px]'>ANIMEE.CLUB</p>
              <p className='text-[16px] text-white font-extralight'>Поринь у світ україномовного аніме!</p>
            </div>
          </div>

          <div className='flex gap-[8px]'>
            <Link href={'https://t.me/an1meeClub'} target='_blank'>
              <IcoSocialTelegram width={32} height={32} />
            </Link>
            <Link href={'https://www.tiktok.com/@an1mee.club'} target='_blank'>
              <IcoSupportTiktok width={32} height={32} />
            </Link>
          </div>

          <p className='text-white text-[16px]'>Онлайн: <span className='font-bold text-white'>{online}</span></p>
        </div>

        <div className='flex gap-[24px] w-full max-[670px]:flex-col max-[670px]:items-center'>
          {/* FK section */}
          <ul className='flex flex-col gap-[4px]'>
            {/* Fullkekw */}
            {/* <Link href={routes.aboutFK.path}> */}
            <p className='footer-link footer-link--disabled'>Fullkekw</p> {/* disabled */}
            {/* </Link> */}

            {/* Join */}
            {/* <Link href={routes.joinFK.path}> */}
            <p className='footer-link footer-link--disabled'>Хочу в FK</p> {/* disabled */}
            {/* </Link> */}

            {/* Contacts */}
            <Link href={routes.contacts.path}>
              <p className='footer-link'>Контакти</p>
            </Link>
          </ul>

          {/* Policy section */}
          <ul className='flex flex-col gap-[4px]'>
            {/* agreement */}
            <Link href={routes.agreement.path}>
              <p className='footer-link'>Угода користувача</p>
            </Link>

            {/* policy */}
            <Link href={routes.privatePolicy.path}>
              <p className='footer-link'>Політика конфіденційності</p>
            </Link>

            {/* copyright */}
            <Link href={routes.copyright.path}>
              <p className='footer-link'>Правовласникам</p>
            </Link>
          </ul>

          {/* Animee section */}
          <ul className='flex flex-col gap-[4px]'>
            {/* support */}
            {/* <Link href={routes.support.path}> */}
            <p className='footer-link footer-link--disabled'>Підтримка проекту</p> {/* disabled */}
            {/* </Link> */}

            {/* partners */}
            {/* <Link href={routes.partners.path}> */}
            <p className='footer-link footer-link--disabled'>Партнери</p> {/* disabled */}
            {/* </Link> */}

            {/* faq */}
            {/* <Link href={routes.FAQ.path}> */}
            <p className='footer-link footer-link--disabled'>FAQ</p> {/* disabled */}
            {/* </Link> */}

            {/* api */}
            {/* <Link href={routes.API.path}> */}
            <p className='footer-link footer-link--disabled'>API</p> {/* disabled */}
            {/* </Link> */}
          </ul>
        </div>

        <p className='text-[16px] text-white/[.3] font-extralight text-center'>animee.club by fullkekw © 2023 - {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;