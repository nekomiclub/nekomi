import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDashboardCustomizeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-840h330v330H120zm390 0h330v330H510zM120-450h330v330H120zm525 0h60v135h135v60H705v135h-60v-135H510v-60h135z" /></svg>;
export default MaterialDashboardCustomizeFill;