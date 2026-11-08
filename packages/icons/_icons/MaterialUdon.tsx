import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUdon: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80q-83 0-156-31.5T197-197t-85.5-127T80-480h80v-320l720-80v50l-470 52v87h470v50H410v160.66h470Q880-397 848.5-324T763-197t-127 85.5T480-80M210-480h50v-161h-50zm0-211h50v-71l-50 5.68zm100 211h50v-161h-50zm0-211h50v-82l-50 6zM167-350h625q7-17 12.5-34.5T813-420H147q3 18 8 35.5t12 34.5m313 210q88 0 161-41t119-109H200q46 68 119 109t161 41m0-150v-60z" /></svg>;
export default MaterialUdon;