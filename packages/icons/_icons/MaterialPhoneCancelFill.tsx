import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPhoneCancelFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M795-120q-116 0-236.5-56T335-335 176-558.5 120-795q0-19 13-32t32-13h140q14 0 24.5 10t13.5 25l27 126q2 14-.5 25.5T359-634L259-533q26 44 55.5 81.5T378-379q38 38 78.5 69.5T542-254l95-98q10-11 23-15.5t26-1.5l119 26q15 3 25 15.5t10 27.5v135q0 19-13 32t-32 13M631-589l-42-42 83-84-83-83 42-42 84 83 83-83 42 42-83 83 83 84-42 42-83-83z" /></svg>;
export default MaterialPhoneCancelFill;