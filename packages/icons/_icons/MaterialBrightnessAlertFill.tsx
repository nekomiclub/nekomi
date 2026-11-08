import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBrightnessAlertFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M503.5-289.5Q513-299 513-313t-9.5-23.5T480-346t-23.5 9.5T447-313t9.5 23.5T480-280t23.5-9.5M453-433h60v-253h-60zm28 404L346-160H160v-186L26-480l134-134v-186h186l135-134 133 134h186v186l134 134-134 134v186H614z" /></svg>;
export default MaterialBrightnessAlertFill;