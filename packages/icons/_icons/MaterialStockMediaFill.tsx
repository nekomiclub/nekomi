import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStockMediaFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-360q-24 0-42-18t-18-42v-400q0-24 18-42t42-18h400q24 0 42 18t18 42v400q0 24-18 42t-42 18zm181-140-57-71-65 91h283l-89-117zm291 388q-32-32-32-78t32-78 78-32q14 0 26.5 3t23.5 9v-212h140v60h-80v250q0 46-32 78t-78 32-78-32" /></svg>;
export default MaterialStockMediaFill;