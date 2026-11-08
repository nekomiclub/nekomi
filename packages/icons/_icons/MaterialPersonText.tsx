import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonText: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M680-240v-60h200v60zm-80-210v-60h280v60zm-80-210v-60h360v60zM235.5-517.5Q202-551 202-602t33.5-84.5T320-720t84.5 33.5T438-602t-33.5 84.5T320-484t-84.5-33.5M80-240v-66q0-19 9-36t24-24q45-32 98.5-47.5T320-429t108 17 99 46q14 10 23.5 25.5T560-306v66zm144.5-113Q173-337 135-311v11h370v-11q-39-26-90-42t-95-16-95.5 16M362-560q16-16 16-42t-16-42-42-16-42 16-16 42 16 42 42 16 42-16m-42 260" /></svg>;
export default MaterialPersonText;