import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCoffeeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M442-242q-116 0-199-80t-83-195v-263q0-25 17.5-42.5T220-840h529q54 0 92.5 37t38.5 91q0 60-37 106t-94 46h-25v43q0 115-83 195t-199 80M220-620h444v-160H220zm504 0h25q33 0 52-28.5t19-63.5q0-29-21-48.5T749-780h-25zM160-120v-60h640v60z" /></svg>;
export default MaterialCoffeeFill;