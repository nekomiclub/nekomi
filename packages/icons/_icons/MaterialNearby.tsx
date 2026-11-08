import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNearby: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-277 277-480l203-203 203 203zm43 176q-9 9-20 13.5T481-83t-22.5-4.5T438-101L101-438q-9-9-13.5-20T83-480t4.5-22.5T101-523l338-338q8-8 19-12.5t22-4.5 22 4.5 19 12.5l338 338q9 9 13.5 20.5T877-480t-4.5 22.5T859-438zm-43-66 313-313-313-313-313 313z" /></svg>;
export default MaterialNearby;