import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLandscape2EditFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M560-120v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22-4.5 22.5T902-340L683-120zm263-224 37-39-37-37-38 38zM229-574q-47 0-80-33t-33-80q0-46 33-79.5t80-33.5q46 0 79.5 33.5T342-687q0 47-33.5 80T229-574M46-160l145-289q8-15 22.5-24t31.5-9q18 0 32.5 10t22.5 27q7 17 18.5 44t18.5 44q6 13 21.5 12t19.5-14l89-298q14-45 52-73t85-28 84.5 27 52.5 72l44 125q-13 5-24.5 12T739-505L500-268v108z" /></svg>;
export default MaterialLandscape2EditFill;