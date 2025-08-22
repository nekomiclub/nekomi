import '~/styles/components/Footer.scss';

import { NextPage } from 'next';
import Link from 'next/link';

import { IcoNekomiLogo } from '~/assets/Icons';
import { IcoSocialDiscord, IcoSocialTelegram, IcoSocialTiktok } from '~/assets/Social';
import { config } from '~/config';
import { Routes } from '~/routes';




const Footer: NextPage = () => {
  return (
    <footer className="relative w-full bg-dark">
      <div className="wrapper min-[1260px]:!flex-row justify-between items-start !px-[32px] !py-[40px] max-[1260px]:gap-[40px] max-[1260px]:items-center max-[760px]:items-start gap-[24px]">
        {/* Left */}
        <div className="flex gap-[16px] items-center max-[760px]:w-full max-[760px]:justify-center max-[560px]:flex-col">
          <IcoNekomiLogo width={128} height={128} fill="#fff" />

          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[4px]">
              <p className="text-[32px] text-white font-bold max-[560px]:text-center">NEKOMI</p>
              <p className="text-lightGrey max-[560px]:text-center">Поринь у світ україномовного аніме!</p>
            </div>

            <div className="flex items-center gap-[16px] max-[560px]:justify-between">
              <Link href={config.URL.telegram} target="_blank" className="footer-socialItem">
                <IcoSocialTelegram width={32} height={32} />
              </Link>

              <Link href={config.URL.tiktok} target="_blank" className="footer-socialItem">
                <IcoSocialTiktok width={32} height={32} />
              </Link>

              <Link href={config.URL.discord} target="_blank" className="footer-socialItem">
                <IcoSocialDiscord width={32} height={32} />
              </Link>
            </div>
          </div>
        </div>

        {/* Center */}
        <div className="flex gap-[24px] max-[760px]:flex-col">
          <ul className="flex flex-col gap-[4px]">
            <FooterLink href={Routes.infoContacts.path()} text="Контакти" />
            <FooterLink href={'#'} disabled text="FAQ" />
          </ul>

          <ul className="flex flex-col gap-[4px]">
            <FooterLink href={Routes.infoAgreement.path()} text="Угода користувача / Agreement" />
            <FooterLink href={Routes.infoPolicy.path()} text="Політика конфіденційності / Privacy policy" />
            <FooterLink href={Routes.infoDMCA.path()} text="DMCA" />
            <FooterLink href={Routes.infoTerms.path()} text="TOS" />
          </ul>
        </div>

        {/* Right */}
        <div className="flex justify-center max-[760px]:w-full"></div>
      </div>
    </footer>
  );
};

function FooterLink({ href, text, disabled }: { href: string, text: string, disabled?: boolean }) {
  return <li>
    <Link href={href} aria-disabled={disabled} className={`outline-none ${disabled ? 'text-lightGrey' : 'text-white duration-100 hover:text-gradientPrimaryFallback focus-visible:text-gradientPrimaryFallback'}`} prefetch={false}>
      {text}
    </Link>
  </li>;
}

export default Footer;