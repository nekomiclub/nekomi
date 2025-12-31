'use client';

import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { InfoHeader } from '~/app/info/InfoComponents';
import { conf } from '~/conf';



const Copyright: NextPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [lang, setLang] = useState<'eng' | 'ukr'>(searchParams.get('lang') === 'ukr' ? 'ukr' : 'eng');

  useEffect(() => {
    router.replace(`${pathname}?lang=${lang}`);
  }, [lang]);

  return (
    <div className="w-full min-h-screen items-center" style={{ paddingTop: `132px` }}>
      <div className="wrapper gap-[80px] max-w-[1170px] w-full">
        {lang === 'ukr' && <>
          <InfoHeader heading="DMCA" lang="eng" setLang={setLang} />

          <div className="px-[24px] py-[40px] rounded-[2px] bg-dark-medium flex flex-col gap-[16px]">
            <p className="text-white text-[16px]">DMCA available only in English language</p>
          </div>
        </>}

        {lang === 'eng' && <>
          <InfoHeader heading="DMCA" lang="ukr" setLang={setLang} />

          <div className="px-[24px] py-[40px] rounded-[2px] bg-dark-medium flex flex-col gap-[16px]">
            <p className="text-white text-[16px]">
              This Digital Millennium Copyright Act (DMCA) Policy applies to {conf.domain}, an online service provider. We enable legal copyright owners to upload, store, and display various media through our services. We don`t monitor, screen, or review user-uploaded media. We take copyright infringement seriously and will protect legal copyright owner`s rights.
            </p>

            <h2 className="text-white text-[24px] font-bold text-center">Designated Agent</h2>
            <p className="text-white text-[16px]">
              For DMCA takedown notices, the designated agent is:
              Email: dmca@{conf.domain}
            </p>

            <p className="text-white text-[16px]">
              Upon receiving a proper infringement claim, the Administration will follow the procedures outlined in this policy and the DMCA.
            </p>

            <h2 className="text-white text-[24px] font-bold text-center">Filing a Copyright Infringement Claim</h2>
            <p className="text-white text-[16px]">
              Your copyright infringement claim must include the following:
            </p>

            <ul className="flex flex-col gap-[4px] text-white">
              <li className="!list-decimal relative left-[16px]">
                <p className="text-white text-[16px]">An electronic or physical signature from the copyright owner or an authorized representative.</p>
              </li>

              <li className="!list-decimal relative left-[16px]">
                <p className="text-white text-[16px]">Identification of the copyrighted work you claim is infringed. If multiple works are involved, provide a representative list.</p>
              </li>

              <li className="!list-decimal relative left-[16px]">
                <p className="text-white text-[16px]">Identification of the allegedly infringing material and information sufficient for {conf.domain} to locate it (e.g., URL).</p>
              </li>

              <li className="!list-decimal relative left-[16px]">
                <p className="text-white text-[16px]">Your contact information, including address, phone number, and email address (if available).</p>
              </li>

              <li className="!list-decimal relative left-[16px]">
                <p className="text-white text-[16px]">A good faith belief that the material`s use is unauthorized by the copyright owner, its agent, or the law.</p>
              </li>

              <li className="!list-decimal relative left-[16px]">
                <p className="text-white text-[16px]">A statement under penalty of perjury that the information in the notice is accurate and you are authorized to act on the copyright owner`s </p>
              </li>
            </ul>

            <h2 className="text-white text-[24px] font-bold text-center">Notice and Takedown Procedure</h2>
            <p className="text-white text-[16px]">
              All users are expected to comply with copyright laws. If {conf.domain} receives a proper copyright infringement notice, we will promptly remove or disable access to the allegedly infringing material after investigating and determining the claimёs validity in our sole discretion. We will comply with the DMCAёs provisions if a counter-notification is received.
            </p>

            <h2 className="text-white text-[24px] font-bold text-center">Repeat Infringers</h2>
            <p className="text-white text-[16px]">
              {conf.domain} may, at its discretion, terminate repeat infringersё access to our system or network.
            </p>

            <h2 className="text-white text-[24px] font-bold text-center">Accommodation of Standard Technical Measures</h2>
            <p className="text-white text-[16px]">
              {conf.domain} respects standard technical measures that copyright owners use to identify or protect their works, provided they are considered reasonable under the circumstances.
            </p>
          </div>
        </>}
      </div>
    </div>
  );
};

export default Copyright;