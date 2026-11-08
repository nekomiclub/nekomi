import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStockpot: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-659h720v409q0 37.5-26.25 63.75T750-160H210q-37.5 0-63.75-26.25T120-250zm60 60v349q0 12.75 8.63 21.37Q197.25-220 210-220h540q12.75 0 21.38-8.63Q780-237.25 780-250v-349zm-60-100v-61h250v-50q0-12.75 8.63-21.38Q387.25-840 400-840h160q12.75 0 21.38 8.62Q590-822.75 590-810v50h250v61zm360 289" /></svg>;
export default MaterialStockpot;