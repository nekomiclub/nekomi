import React, { FC } from 'react';



interface Props {
  children: React.ReactNode | React.ReactNode[]
}



export const InfoWrapper: FC<Props> = ({ children }) => {
  return <section className="wrapper gap-[40px] max-w-[1170px] w-full">
    {children}
  </section>
}

export const InfoArticle: FC<Props> = ({ children }) => {
  return <article className="px-[24px] py-[16px] rounded-[2px] bg-dark-bright border border-dark-light flex flex-col gap-[16px]">
    {children}
  </article>
}

export const InfoList: FC<Props> = ({ children }) => {
  return <ul className="flex flex-col gap-[4px] text-white">
    {React.Children.map(children, el => {
      return <li className="!list-disc relative left-[16px]">
        {el}
      </li>
    })}
  </ul>
}

// export const InfoComponents: FC<Props> = ({ children }) => {
//   return <div>
//     {children}
//   </div>
// }