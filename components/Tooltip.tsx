import { NextPage } from 'next';
import { Tooltip as RT } from 'react-tooltip'

const Tooltip: NextPage<{ children: any, content: string }> = ({ content, children }) => {
  const tooltipId = `ttid-${(Math.random() + 1).toString(36).substring(8)}`

  return (
    <div data-tooltip-id={tooltipId} data-tooltip-content={content} className='relative z-[5]'>
      {children}
      <RT id={tooltipId} />
    </div>
  );
}

export default Tooltip;