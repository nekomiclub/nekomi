import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobile3: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-40q-24.75 0-42.37-17.63Q200-75.25 200-100v-760q0-24 18-42t42-18h438q24.75 0 42.38 17.62Q758-884.75 758-860v150q18 3 30 16.95 12 13.96 12 31.63V-587q0 19-12 33t-30 17v437q0 24.75-17.62 42.37Q722.75-40 698-40zm0-60h438v-760H260zm0 0v-760zm110-80h218q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H370q-12.75 0-21.37 8.68-8.63 8.67-8.63 21.5 0 12.82 8.63 21.32 8.62 8.5 21.37 8.5" /></svg>;
export default MaterialMobile3;