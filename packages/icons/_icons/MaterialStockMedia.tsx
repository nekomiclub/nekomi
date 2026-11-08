import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStockMedia: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-360q-24 0-42-18t-18-42v-400q0-24 18-42t42-18h400q24 0 42 18t18 42v400q0 24-18 42t-42 18zm0-60h400v-400H140zm181-80-57-71-65 91h283l-89-117zm291 387.88q-32-32.12-32-78T612.08-268q32.09-32 77.92-32 14.3 0 26.65 3t23.35 9v-212h140v60h-80v250q0 45.83-32.12 77.92Q735.76-80 689.88-80T612-112.12M140-420v-400z" /></svg>;
export default MaterialStockMedia;