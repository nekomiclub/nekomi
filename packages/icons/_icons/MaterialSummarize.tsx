import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSummarize: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M330-630q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m0 171q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m0 171q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h462l198 198v462q0 24-18 42t-42 18zm0-60h600v-428.57H609V-780H180zm0-600v171.43zv600z" /></svg>;
export default MaterialSummarize;