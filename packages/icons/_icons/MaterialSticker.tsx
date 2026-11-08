import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSticker: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M458-360q69 0 121.5-42T644-511l-323 93q26 29 62 43.5t75 14.5M279.27-516 390-550q2-27-17-46.5T326.53-616q-24.53 0-42.03 17.5T267-556q0 11 3 21t9.27 19M538-594l110-30q3-26-16-45.5T585.53-689q-24.53 0-42.03 17.5T526-629q0 9.58 3 18.29t9 16.71m101 474H180q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v459zm-30-60v-83q0-35 26.5-61.5T697-351h83v-429H180v600zm-429 0v-600z" /></svg>;
export default MaterialSticker;