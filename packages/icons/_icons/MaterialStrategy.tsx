import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStrategy: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-520 80-600v-160l140-80 140 80v160zm0-69 80-46v-90l-80-46-80 46v90zm430 71v-70l150 88v280L560-80 320-220v-280l150-87v69l-90 53v211l180 104 180-104v-211zm-120 98v-460h351l-73 110 73 110H590v240zM220-680" /></svg>;
export default MaterialStrategy;