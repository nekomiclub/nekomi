'use client';

import React, { FC, ReactNode } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';

import { StyledHeading, StyledM } from '~/shared/components/styled/StyledText';



interface Props {
  children: ReactNode | ReactNode[]
}

interface InfoHeaderProps {
  heading: string
  lang: InfoLangType
  setLang(val: InfoLangType): void
}

export type InfoLangType = 'eng' | 'ukr'



export const InfoWrapper: FC<Props> = ({ children }) => {
  return <section className="wrapper min-h-screen gap-[40px] max-w-[1170px] w-full pb-[40px]" style={{ paddingTop: `calc(var(--header-height) + 40px)` }}>
    {children}
  </section>;
};



export const InfoArticle: FC<Props> = ({ children }) => {
  return <article className="px-[24px] py-[16px] rounded-[2px] bg-dark-bright border border-dark-light flex flex-col gap-[16px]">
    {children}
  </article>;
};



export const InfoList: FC<Props> = ({ children }) => {
  return <ul className="flex flex-col gap-[4px] text-white">
    {React.Children.map(children, el => {
      return <li className="!list-disc relative left-[16px]">
        {el}
      </li>;
    })}
  </ul>;
};



export const InfoHeader: FC<InfoHeaderProps> = ({ heading, lang, setLang }) => {
  return <div className="flex items-center gap-[32px] justify-center w-full max-[880px]:flex-col">
    <StyledHeading text={heading} className="text-[40px]" bold center />

    <button className="ui-button flex items-center gap-[16px] py-[8px] px-[16px]" onClick={() => setLang(lang)}>
      <MaterialSymbol icon="translate" size={20} className="text-white" />
      <StyledM text={
        lang === 'ukr' ? 'Українською'
          : 'English'
      } />
    </button>
  </div>;
};



// export const InfoComponents: FC<Props> = ({ children }) => {
//   return <div>
//     {children}
//   </div>
//}