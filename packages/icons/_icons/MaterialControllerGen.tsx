import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialControllerGen: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480.5-250q95.5 0 162.5-67.5t67-163T642.92-643Q575.83-710 480-710q-95 0-162.5 67.08Q250-575.83 250-480q0 95 67.5 162.5t163 67.5m0-60Q410-310 360-359.94T310-480q0-71 49.94-120.5T480-650q71 0 120.5 49.5t49.5 120T600.5-360t-120 50M459-459q9 9 21 9t21-9l56-56q9-9 9-21t-9-21-21-9-21 9l-56 56q-9 9-9 21t9 21M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" /></svg>;
export default MaterialControllerGen;