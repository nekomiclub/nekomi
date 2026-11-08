import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMarkEmailRead: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M633-80 472-241l43-43 118 118 244-244 43 43zM478-527l334-213H144zm0 60L140-684v452h256l60 60H140q-24 0-42-18t-18-42v-508q0-24 18-42t42-18h677q24 0 42 18t18 42v244l-60 60v-248zm1 0" /></svg>;
export default MaterialMarkEmailRead;