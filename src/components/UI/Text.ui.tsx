import { NextPage } from 'next';



interface TextProps extends React.DetailsHTMLAttributes<HTMLParagraphElement> {
  type: 'h1' | 'h2' | 'h3' | 'standart' | 'mini'
  text: string
}



export const UIText: NextPage<TextProps> = ({ type, text, className, title, ...props }) => {
  return <>
    {type === 'h1' && <h1 className={`ui-text ui-text--h1 ${className ? className : ''}`} title={title ?? text} {...props}>{text}</h1>}
    {type === 'h2' && <h2 className={`ui-text ui-text--h2 ${className ? className : ''}`} title={title ?? text} {...props}>{text}</h2>}
    {type === 'h3' && <h3 className={`ui-text ui-text--h3 ${className ? className : ''}`} title={title ?? text} {...props}>{text}</h3>}
    {type === 'standart' && <p className={`ui-text line-clamp-6 ${className ? className : ''}`} title={title ?? text} {...props}>{text} </p>}
    {type === 'mini' && <p className={`ui-text ui-text--mini ${className ? className : ''}`} title={title ?? text} {...props}>{text}</p>}
  </>
}