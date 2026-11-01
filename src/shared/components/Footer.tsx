import { FC } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';
import Link from 'next/link';

import { conf } from '~/conf';
import Routes from '~/routes';
import { IcoSocialDiscord, IcoSocialTelegram, IcoSocialTiktok } from '~/shared/components/Icons';

import StyledImage from './styled/StyledImage';



const Footer: FC = () => {
  return <footer className="h-[500px] bg-dark-bright flex flex-col justify-end relative mt-[40px]">
    <StyledImage width="100%" height="100%" src="/assets/footer-bg.png" className="!absolute top-0 left-0" />

    <div className="wrapper gap-[32px] !flex-row justify-between items-end mb-[16px] max-2xl:!flex-col max-2xl:items-start max-sm:pb-[var(--header-height)]">
      <Link href={Routes.home.path()}>
        <h3 className="text-white text-[60px]  font-bold">nekomi</h3>
      </Link>

      <ul className="h-[50px] flex items-center gap-y-[8px] gap-[32px] flex-wrap max-2xl:h-auto">
        <li>
          <Link href={Routes.info_contacts.path()} className="cui-footer-link">
            <MaterialSymbol icon="code_blocks" size={20} className="text-white" />
            <p className="text-white ">Розробники</p>
          </Link>
        </li>

        <li>
          <Link href={Routes.info_agreement.path()} className="cui-footer-link">
            <MaterialSymbol icon="contract" size={20} className="text-white" />
            <p className="text-white ">Угода користувача</p>
          </Link>
        </li>

        <li>
          <Link href={Routes.info_policy.path()} className="cui-footer-link">
            <MaterialSymbol icon="encrypted" size={20} className="text-white" />
            <p className="text-white ">Політика конфіденційності</p>
          </Link>
        </li>

        <li>
          <Link href={Routes.info_terms.path()} className="cui-footer-link">
            <MaterialSymbol icon="gavel" size={20} className="text-white" />
            <p className="text-white ">Умови користування</p>
          </Link>
        </li>

        <li>
          <Link href={Routes.info_DMCA.path()} className="cui-footer-link">
            <MaterialSymbol icon="copyright" size={20} className="text-white" />
            <p className="text-white ">DMCA</p>
          </Link>
        </li>
      </ul>

      <ul className="h-[50px] flex justify-center items-center gap-[16px]">
        <li>
          <Link href={conf.URL.telegram} className="cui-footer-social">
            <IcoSocialTelegram width={32} height={32} fill="#fff" />
          </Link>
        </li>

        <li>
          <Link href={conf.URL.tiktok} className="cui-footer-social">
            <IcoSocialTiktok width={32} height={32} fill="#fff" />
          </Link>
        </li>

        <li>
          <Link href={conf.URL.discord} className="cui-footer-social">
            <IcoSocialDiscord width={32} height={32} fill="#fff" />
          </Link>
        </li>
      </ul>
    </div>
  </footer>;
};

export default Footer;