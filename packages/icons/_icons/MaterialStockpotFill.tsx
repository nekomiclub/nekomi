import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStockpotFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M230-160q-45.83 0-77.92-32.38Q120-224.75 120-271v-388h720v388q0 46.25-32.08 78.62Q775.83-160 730-160zM120-699v-61h250v-50q0-12.75 8.63-21.38Q387.25-840 400-840h160q12.75 0 21.38 8.62Q590-822.75 590-810v50h250v61z" /></svg>;
export default MaterialStockpotFill;