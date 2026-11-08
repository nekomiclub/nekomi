import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUdonFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M210-480h50v-161h-50zm0-211h50v-71l-50 5.68zm100 211h50v-161h-50zm0-211h50v-82l-50 6zm548 341H102q-11-31.42-16.5-63.38Q80-445.33 80-480h80v-320l720-80v50l-470 52v87h470v50H410v161h470q0 34.67-5.5 66.62Q869-381.42 858-350M480-80q-115 0-208-58T128-290h704q-51 94-144 152T480-80" /></svg>;
export default MaterialUdonFill;