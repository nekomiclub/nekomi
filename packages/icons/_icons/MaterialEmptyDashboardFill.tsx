import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEmptyDashboardFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-220h240v-180H220zm0-220h240v-300H220zm280 220h240v-300H500zm0-340h240v-180H500zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v60h60v60h-60v150h60v60h-60v150h60v60h-60v60q0 24-18 42t-42 18z" /></svg>;
export default MaterialEmptyDashboardFill;