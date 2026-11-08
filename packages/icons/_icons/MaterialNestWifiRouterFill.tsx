import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestWifiRouterFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-120q-82 0-147-50t-85-130h704q-20 80-85 130t-147 50zM120-360h.5zv-240q0-100 70-170t170-70h240q100 0 170 70t70 170v240z" /></svg>;
export default MaterialNestWifiRouterFill;