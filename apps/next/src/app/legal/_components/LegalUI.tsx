'use client';

import React, { FC, ReactNode } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { StyledM } from '~/shared/components/styled/StyledText';



type IProps = {
  children: ReactNode | ReactNode[]
}



export const LegalWrapper: FC<IProps> = (props) => {
  return <section className="wrapper min-h-screen gap-[40px] max-w-[1170px] w-full pb-[40px]" style={{ paddingTop: `calc(var(--header-height) + 40px)` }}>
    {props.children}
  </section>;
};



export const LegalArticle: FC<IProps> = (props) => {
  return <article className="px-[24px] py-[16px] rounded-[2px] bg-dark-bright border border-dark-light flex flex-col gap-[8px]">
    {props.children}
  </article>;
};



export const LegalHeader: FC = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const locale = searchParams.get('lang') ?? 'uk';

  function toggleLocale() {
    if (locale === 'uk') router.replace(`${pathname}?lang=en`);
    else if (locale === 'en') router.replace(`${pathname}?lang=uk`);
  }



  return <div className="flex items-center gap-[32px] justify-center w-full max-[880px]:flex-col">
    <button className="ui-button flex items-center gap-[16px] py-[8px] px-[16px]" onClick={toggleLocale}>
      <MaterialSymbol icon="translate" size={20} className="text-white" />
      <StyledM text={locale === 'en' ? 'Українською' : 'English'} className="whitespace-nowrap" />
    </button>
  </div>;
};