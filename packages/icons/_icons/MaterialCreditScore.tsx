import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCreditScore: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-640h680v-100H140zM80-740q0-24 18-42t42-18h680q24 0 42 18t18 42v239H140v281h233v60H140q-24 0-42-18t-18-42zM598-80 428-250l43-43 127 127 240-240 42 44zM140-740v520-158 130z" /></svg>;
export default MaterialCreditScore;