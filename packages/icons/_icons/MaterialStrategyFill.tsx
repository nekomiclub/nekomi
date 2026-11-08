import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStrategyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M560-80 320-220v-280l150-88v228h180v-228l150 88v280zM220-520 80-600v-160l140-80 140 80v160zm310 100v-460h351l-73 110 73 110H590v240z" /></svg>;
export default MaterialStrategyFill;