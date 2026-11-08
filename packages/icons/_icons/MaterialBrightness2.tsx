import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBrightness2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M376-140q140.07 0 238.53-98Q713-336 713-480t-99.5-242T374-820q-20 0-41 2t-32 5q64 72 98 157t34 176-34 176.5T302-148q11 3 31 5.5t43 2.5m5 60q-54.38 0-106.19-13T188-126q88-66 136.5-158T373-479.5 324-676 187-833q35-20 87.47-33.5T382-880q80.83 0 151.91 30.5Q605-819 658.5-765.5t84 126.5T773-481t-30.95 158.29q-30.94 73.28-84 127.5Q605-141 533.59-110.5 462.19-80 381-80m52-399" /></svg>;
export default MaterialBrightness2;