import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNearbyOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m733-315-54-54 112-112-313-313-112 112-54-55 125-125q8-8 19.5-12t22.5-4q12 0 22.5 4t18.5 12l337 338q17 17 16.5 43T857-439zm89 259L648-230 521-102q-8 8-19 12t-23 4-23.5-4-19.5-12L99-439q-8-8-12-19.5T83-482t4-23 12-19l127-127L58-820l42-42L864-98zM165-481l313 313 115-115-45-45-70 70-223-223 70-70-45-45zm469 67L411-637l67-67 223 223z" /></svg>;
export default MaterialNearbyOff;