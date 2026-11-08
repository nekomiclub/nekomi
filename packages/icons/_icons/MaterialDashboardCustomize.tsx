import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDashboardCustomize: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-840h330v330H120zm60 59v188zm330-59h330v330H510zm83 59v188zM120-450h330v330H120zm60 81v189zm465-81h60v135h135v60H705v135h-60v-135H510v-60h135zm-75-330v210h210v-210zm-390 0v210h210v-210zm0 390v210h210v-210z" /></svg>;
export default MaterialDashboardCustomize;