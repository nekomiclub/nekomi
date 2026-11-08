import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPhoneCancel: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M795-120q-116 0-236.5-56T335-335 176-558.5 120-795q0-19.29 12.86-32.14Q145.71-840 165-840h140q13.61 0 24.31 10Q340-820 343-805l26.93 125.64Q372-665 369.5-653.5t-10.73 19.73L259-533q26 44 55.5 81.5T378-379q38 38 78.5 69.5T542-254l95-98q10-11 23-15.5t26-1.5l119 26q15.31 3.36 25.16 15.68Q840-315 840-300v135q0 19.29-12.86 32.14Q814.29-120 795-120M229-588l81-82-23-110H180q2 42 13.5 88.5T229-588m369 363q41 19 89 31t93 14v-107l-103-21zm33-364-42-42 83-84-83-83 42-42 84 83 83-83 42 42-83 83 83 84-42 42-83-83z" /></svg>;
export default MaterialPhoneCancel;