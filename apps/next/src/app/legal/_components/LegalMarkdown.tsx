import { FC } from 'react';
import Link from 'next/link';
import MarkdownRenderer from 'react-markdown';




export type IMarkdownProps = {
  markdown: string
}



const LegalMarkdown: FC<IMarkdownProps> = (props) => {
  return <MarkdownRenderer components={{
    h1({ children }) {
      return <h1 className="text-white text-[32px] font-bold text-center mb-[16px]">
        {children}
      </h1>;
    },
    h2({ children }) {
      return <h2 className="text-white text-[24px] font-bold mt-[16px]">
        {children}
      </h2>;
    },
    h3({ children }) {
      return <h3 className="text-white text-[20px] font-bold mt-[16px]">
        {children}
      </h3>;
    },
    p({ children }) {
      return <p className="text-white text-[16px]">
        {children}
      </p>;
    },
    strong({ children }) {
      return <b className="text-white text-[16px] font-bold">
        {children}
      </b>;
    },
    li({ children }) {
      return <li className="!list-disc relative left-[16px] text-white">
        <span className="text-white text-[16px]">
          {children}
        </span>
      </li>;
    },
    a({ href, children }) {
      return <Link href={href ?? '#'}>
        <span className="text-primary text-[16px] font-bold">
          {children}
        </span>
      </Link>;
    }
  }}>
    {props.markdown}
  </MarkdownRenderer>;
};

export default LegalMarkdown;