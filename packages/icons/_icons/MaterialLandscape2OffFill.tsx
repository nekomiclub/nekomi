import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLandscape2OffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M842-32 33-841l43-43L885-75zM229-574q-47 0-80-33t-33-80q0-32 16.5-58t42.5-40l153 153q-14 26-40.5 42T229-574m702 459L449-597l18-60q14-45 52-73t85-28 84.5 27 52.5 72zM46-160l145-289q8-15 22.5-24t31.5-9q18 0 32.5 10t22.5 27l37 88q6 13 21.5 12t19.5-14l51-172 371 371z" /></svg>;
export default MaterialLandscape2OffFill;