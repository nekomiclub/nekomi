import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEnterprise: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M479-345q32 0 54-21.5t22-53.5-22-53.5-53.5-21.5-53 22.04q-21.5 22.05-21.5 53Q405-389 426.74-367T479-345M140-120q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h180v-100q0-24 18-42t42-18h200q24 0 42 18t18 42v100h180q24 0 42 18t18 42v480q0 24-18 42t-42 18zm0-60h680v-480H140zm240-540h200v-100H380zM140-180v-480z" /></svg>;
export default MaterialEnterprise;