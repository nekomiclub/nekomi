import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOds: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M236-357h60q20 0 35-15t15-35v-146q0-20-15-35t-35-15h-60q-20 0-35 15t-15 35v146q0 20 15 35t35 15m0-50v-146h60v146zm164 50h110q20 0 35-15t15-35v-146q0-20-15-35t-35-15H400zm50-50v-146h60v146zm163 50h127q14.03 0 23.51-9.49Q773-375.98 773-390v-76q0-14-9.49-23.5-9.48-9.5-23.51-9.5h-77v-54h110v-50H646q-14.03 0-23.51 9.49Q613-584.03 613-570v78q0 14 9.49 23.5 9.48 9.5 23.51 9.5h77v52H613zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520z" /></svg>;
export default MaterialOds;