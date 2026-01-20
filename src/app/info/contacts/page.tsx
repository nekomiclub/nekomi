
import Link from 'next/link';

import { IcoSocialGithub, IcoSocialLinkedin, IcoSocialTelegram } from '~/components/Icons';
import StyledImage from '~/components/styled/StyledImage';
import siteMetadata from '~/utils/site-metadata';




export const metadata = siteMetadata({
  title: `Devs`
});



export default async function IContactsPageRSC() {
  return <main className="w-full h-screen flex justify-center items-center">
    <div className="wrapper h-full justify-center items-center">
      <div className="flex flex-col gap-[8px] max-w-[600px] w-full">
        <div className="w-full flex flex-col">
          <div className="flex items-center gap-[24px] bg-dark-primary border border-dark-light rounded-[4px] rounded-b-none p-[24px]">
            <StyledImage src="/assets/unniiiverse-avatar.png" width="128px" height="128px" className="rounded-[4px] overflow-hidden" />

            <div className="flex flex-col items-center w-full">
              <h2 className="text-white text-[40px] font-space-grotesk font-bold">Mykhailo</h2>
              <h4 className="text-grey-new text-[24px] font-space-grotesk">@unniiiverse</h4>
            </div>
          </div>

          <div className="flex items-center gap-[8px] p-[24px] bg-dark-bright border border-dark-light border-t-0 rounded-[4px] rounded-t-none">
            <div className="w-full flex items-center gap-[8px] flex-wrap">
              <p className="text-primary font-space-grotesk font-bold">Software Engineer</p>
              <p className="text-grey-new font-space-grotesk">•</p>

              <p className="text-white font-space-grotesk">nekomi CEO</p>
            </div>

            <div className="flex items-center gap-[8px] flex-shrink-0">
              <Link href={'https://t.me/unniiiverse'} target="_blank">
                <IcoSocialTelegram width={24} height={24} />
              </Link>

              <Link href={'https://github.com/unniiiverse'} target="_blank">
                <IcoSocialGithub width={24} height={24} />
              </Link>

              <Link href={'https://www.linkedin.com/in/unniiiverse/'} target="_blank">
                <IcoSocialLinkedin width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>;
}