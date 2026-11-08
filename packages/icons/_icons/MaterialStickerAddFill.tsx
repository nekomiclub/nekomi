import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStickerAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M780-694v-86h-86v-60h86v-87h60v87h87v60h-87v86zM538-594l110-30q3-26-16-45.5T586-689q-25 0-42.5 17.5T526-629q0 10 3 18.5t9 16.5m-259 78 111-34q2-27-17-46.5T327-616q-25 0-42.5 17.5T267-556q0 11 3 21t9 19m179 156q69 0 121.5-42T644-511l-323 93q26 29 62 43.5t75 14.5m151 180 171-171h-83q-35 0-61.5 26.5T609-263zm30 60H180q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h457q-2 8-2.5 15t-.5 15q0 73 52 124.5T811-634h14.5q6.5 0 14.5-2v315z" /></svg>;
export default MaterialStickerAddFill;