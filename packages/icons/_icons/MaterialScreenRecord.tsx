import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScreenRecord: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M159-243q-37-51-58-110.5T80-480t20.5-127T158-717l43 43q-29 42-45 91t-16 103 16.5 103.5T202-285zM480-80q-66 0-126.5-20.5T243-158l43-43q42 29 91 45t103 16 103-16 91-45l43 43q-50 37-110 57.5T480-80m322-162-43-43q29-42 45-91.5T820-480t-16-103-45-91l43-43q37 50 57.5 110T880-480t-20.5 127T802-242M285-759l-43-43q51-37 111-57.5T480-880t127 21 111 58l-43 43q-42-29-91-45.5T480-820q-54 0-103.5 16T285-759m195 469q-79 0-134.5-55.5T290-480t55.5-134.5T480-670t134.5 55.5T670-480t-55.5 134.5T480-290" /></svg>;
export default MaterialScreenRecord;