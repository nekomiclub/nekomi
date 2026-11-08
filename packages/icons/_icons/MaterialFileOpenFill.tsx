import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFileOpenFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M878-79 750-207v125h-60v-228h228v60H792l128 128zM520-600h220L520-820zM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h340l240 240v270H630v290z" /></svg>;
export default MaterialFileOpenFill;