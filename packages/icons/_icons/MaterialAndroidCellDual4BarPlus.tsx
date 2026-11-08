import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAndroidCellDual4BarPlus: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M60-384v-184h100v184zm247 0v-247h100v247zM60-160v-164h100v164zm247 0v-164h100v164zm493-300v-339h100v344q-24-8-49.5-9t-50.5 4M553-160v-164h89q-14 40-11.5 83t21.5 81zm257 16v-80h-80v-60h80v-80h60v80h80v60h-80v80zM553-384v-331h100v331z" /></svg>;
export default MaterialAndroidCellDual4BarPlus;