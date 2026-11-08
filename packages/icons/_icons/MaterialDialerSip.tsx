import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDialerSip: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M795-120q-116 0-236.5-56T335-335 176-558.5 120-795q0-19.29 12.86-32.14Q145.71-840 165-840h140q14 0 24 10t14 25l26.93 125.64Q372-665 369.5-653.5t-10.73 19.73L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.15-15t25.85-2l119 26q15 4 25 16.04 10 12.05 10 26.96v135q0 19.29-12.86 32.14Q814.29-120 795-120M229-588l81-82-23-110H180q2 42 13.5 88.5T229-588m369 363q41 19 89 31t93 14v-107l-103-21zM467-635v-33h86v-53h-86v-119h119v33h-86v53h86v119zm171 0v-205h33v205zm85 0v-205h119v119h-86v86zm33-119h53v-53h-53z" /></svg>;
export default MaterialDialerSip;