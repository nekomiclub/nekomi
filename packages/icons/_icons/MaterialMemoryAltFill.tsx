import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMemoryAltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M250-370h60v-220h-60zm200 0h60v-220h-60zm200 0h60v-220h-60zM210-120v-80h-70q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h70v-80h60v80h180v-80h60v80h180v-80h60v80h70q24 0 42 18t18 42v440q0 24-18 42t-42 18h-70v80h-60v-80H510v80h-60v-80H270v80z" /></svg>;
export default MaterialMemoryAltFill;