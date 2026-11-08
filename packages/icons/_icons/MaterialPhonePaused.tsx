import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPhonePaused: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M640-565v-275h60v275zm140 0v-275h60v275zm15 445q-122 0-242.5-60T336-336 180-552.5 120-795q0-19.29 12.86-32.14Q145.71-840 165-840h140q13.61 0 24.31 9.5Q340-821 343-805l27 126q2 14-.5 25.5T359-634L259-533q56 93 125.5 162T542-254l95-98q10-11 23-15.5t26-1.5l119 26q15.31 3.37 25.16 15.19Q840-316 840-300v135q0 19.29-12.86 32.14Q814.29-120 795-120M229-588l81-82-23-110H180q0 39 12 85.5T229-588m369 363q41 19 89 31t93 14v-107l-103-21zm0 0" /></svg>;
export default MaterialPhonePaused;