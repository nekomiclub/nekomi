import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTableChartViewFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m289-87-42-42 269-270 140 140 215-214 42 42-257 257-140-140zm-149-33q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h600q24 0 42 18t18 42v198H140z" /></svg>;
export default MaterialTableChartViewFill;