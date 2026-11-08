import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOdtFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M236-357h60q20 0 35-15t15-35v-146q0-20-15-35t-35-15h-60q-20 0-35 15t-15 35v146q0 20 15 35t35 15m0-50v-146h60v146zm164 50h110q20 0 35-15t15-35v-146q0-20-15-35t-35-15H400zm50-50v-146h60v146zm215 50h50v-196h58v-50H606v50h59zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18z" /></svg>;
export default MaterialOdtFill;