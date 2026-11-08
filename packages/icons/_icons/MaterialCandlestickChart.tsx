import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCandlestickChart: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-160v-90h-80v-460h80v-90h60v90h80v460h-80v90zm-20-150h100v-340H260zm360 150v-210h-80v-260h80v-170h60v170h80v260h-80v210zm-20-270h100v-140H600zm50-70" /></svg>;
export default MaterialCandlestickChart;