import { NextPage } from 'next';
import { Tooltip as RT } from 'react-tooltip'

/** Tooltip component
 * @prop fitWrapper will fit tooltip in parent width & center content
 */
const Tooltip: NextPage<{ children: any, content: string, fitWrapper?: boolean, className?: string }> = ({ content, children, fitWrapper, className }) => {
  const tooltipId = `ttid-${(Math.random() + 1).toString(36).substring(8)}`

  return (
    <div data-tooltip-id={tooltipId} data-tooltip-content={content} className={`relative z-[5] ${className ? className : ''}`}>
      {children}
      <RT id={tooltipId} className={`${fitWrapper ? '!w-fit text-center' : ''}`} />
    </div>
  );
}

export default Tooltip;