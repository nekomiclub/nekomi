import { FC } from 'react';
import Link from 'next/link';
import { MaterialSymbol } from 'react-material-symbols';

import { IcoSocialDiscord, IcoSocialTelegram, IcoSocialTiktok } from '~/assets/Social';
import { config } from '~/config';
import { Routes } from '~/routes';

import StyledImage from './Styled/StyledImage';



const Footer: FC = () => {
  return <footer className="h-[500px] bg-dark-bright flex flex-col justify-end relative mt-[40px]">
    <StyledImage width="100%" height="100%" src="/assets/footer-bg.png" useImg className="!absolute top-0 left-0" />

    <div className="wrapper gap-[32px] !flex-row justify-between items-end mb-[16px] max-2xl:!flex-col max-2xl:items-start max-sm:pb-[var(--header-height)]">
      <Link href={Routes.home.path()}>
        <h3 className="text-white text-[60px] font-space-grotesk font-bold">nekomi</h3>
      </Link>

      <ul className="h-[50px] flex items-center gap-y-[8px] gap-[32px] flex-wrap max-2xl:h-auto">
        <li>
          <Link href={Routes.infoContacts.path()} className="gui-footer-link">
            <MaterialSymbol icon="code_blocks" size={20} className="text-white" />
            <p className="text-white font-manrope">Розробники</p>
          </Link>
        </li>

        <li>
          <Link href={Routes.infoAgreement.path()} className="gui-footer-link">
            <MaterialSymbol icon="contract" size={20} className="text-white" />
            <p className="text-white font-manrope">Угода користувача</p>
          </Link>
        </li>

        <li>
          <Link href={Routes.infoPolicy.path()} className="gui-footer-link">
            <MaterialSymbol icon="encrypted" size={20} className="text-white" />
            <p className="text-white font-manrope">Політика конфіденційності</p>
          </Link>
        </li>

        <li>
          <Link href={Routes.infoTerms.path()} className="gui-footer-link">
            <MaterialSymbol icon="gavel" size={20} className="text-white" />
            <p className="text-white font-manrope">Умови користування</p>
          </Link>
        </li>

        <li>
          <Link href={Routes.infoDMCA.path()} className="gui-footer-link">
            <MaterialSymbol icon="copyright" size={20} className="text-white" />
            <p className="text-white font-manrope">DMCA</p>
          </Link>
        </li>
      </ul>

      <ul className="h-[50px] flex justify-center items-center gap-[16px]">
        <li>
          <Link href={config.URL.telegram} className="gui-footer-social">
            <IcoSocialTelegram width={32} height={32} fill="#fff" />
          </Link>
        </li>

        <li>
          <Link href={config.URL.tiktok} className="gui-footer-social">
            <IcoSocialTiktok width={32} height={32} fill="#fff" />
          </Link>
        </li>

        <li>
          <Link href={config.URL.discord} className="gui-footer-social">
            <IcoSocialDiscord width={32} height={32} fill="#fff" />
          </Link>
        </li>
      </ul>
    </div>
  </footer>;
};

export default Footer;