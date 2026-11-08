import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPhoneLockedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M630-567q-13 0-21.5-8.5T600-597v-143q0-13 8.5-21.5T630-770l13 8 2-47q0-33 22-56t54-23 54 23 22 56l-2 47 17-8q13 0 21.5 8.5T842-740v143q0 13-8.5 21.5T812-567zm47-195h85l2-47q0-19-12.5-32T722-854t-30 13-13 32zm118 642q-116 0-236.5-56T335-335 176-558.5 120-795q0-19 13-32t32-13h140q14 0 24 10t14 25l27 126q2 14-.5 25.5T359-634L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23-15t26-2l119 26q15 4 25 16t10 27v135q0 19-13 32t-32 13" /></svg>;
export default MaterialPhoneLockedFill;