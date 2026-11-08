import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLandscape2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m46-160 145-289q8-15 22.5-24t31.5-9q18 0 32.5 10t22.5 27l37 88q6 13 21.5 12t19.5-14l89-298q14-45 52-73t85-28 84.5 27 52.5 72l174 499zm183-414q-47 0-80-33t-33-80q0-46 33-79.5t80-33.5q46 0 79.5 33.5T342-687q0 47-33.5 80T229-574" /></svg>;
export default MaterialLandscape2Fill;