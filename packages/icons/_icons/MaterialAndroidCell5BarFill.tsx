import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAndroidCell5BarFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-160v-225h100v225zm195 0v-308h100v308zm195 0v-433h100v433zm195 0v-515h100v515zm195 0v-640h100v640z" /></svg>;
export default MaterialAndroidCell5BarFill;