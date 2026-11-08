import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPhoneDisabledFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M813-57 578-291q-107 87-211.5 129T165-120q-23 0-34-12.5T120-165v-135q0-16 10-28t25-15l119-26q13-3 26 1.5t23 15.5l95 98q29-14 60.5-37t56.5-43L64-806l43-43L856-99zM663-377l-43-43q21-25 42.5-56t38.5-57L601-634q-8-8-11-19.5t0-25.5l27-126q3-16 13.5-25.5T655-840h140q19 0 32 13t13 32q0 102-48 214.5T663-377" /></svg>;
export default MaterialPhoneDisabledFill;