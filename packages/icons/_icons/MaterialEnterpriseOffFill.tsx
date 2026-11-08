import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEnterpriseOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M880-183 320-743v-77q0-23 18.5-41.5T380-880h200q24 0 42 18.5t18 41.5v100h180q23 0 41.5 18t18.5 42zM380-720h200v-100H380zM845-22l-98-98H140q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h79v72L59-809l43-43L888-64z" /></svg>;
export default MaterialEnterpriseOffFill;