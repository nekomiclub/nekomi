import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFileSaveOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M580 0v-60h232L520-352v192H220q-24 0-42-18t-18-42v-492L38-834l42-42L896-60V0zm244-218-42-42 52-52 42 42zm-64-63-60-60v-78h60zM562-479 179-862q7-8 17-13t24-5h306l234 234v167zm-62-141h200L500-820z" /></svg>;
export default MaterialFileSaveOffFill;