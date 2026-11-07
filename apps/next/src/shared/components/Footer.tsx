import { FC } from 'react';
import Link from 'next/link';

import { conf } from '~/conf';
import Routes from '~/routes';
import { IcoSocialTelegram } from '~/shared/components/Icons';

import StyledIcon from './styled/StyledIcon';
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
          <Link href={conf.URL.nekomiRepository} className="cui-footer-link">
            <StyledIcon icon="CodeBlocks" size={20} color="#fff" />
            <p className="text-white ">Вихідний код</p>
          </Link>
        </li>

        <li>
          <Link href={Routes.legal_tos.path()} className="cui-footer-link">
            <StyledIcon icon="Contract" size={20} color="#fff" />
            <p className="text-white ">Угода користувача</p>
          </Link>
        </li>

        <li>
          <Link href={Routes.legal_privacy.path()} className="cui-footer-link">
            <StyledIcon icon="Encrypted" size={20} color="#fff" />
            <p className="text-white ">Політика конфіденційності</p>
          </Link>
        </li>
      </ul>

      <ul className="h-[50px] flex justify-center items-center gap-[16px]">
        <li>
          <Link href={conf.URL.telegram} className="cui-footer-social">
            <IcoSocialTelegram width={32} height={32} fill="#fff" />
          </Link>
        </li>
      </ul>
    </div>
  </footer>;
};

export default Footer;