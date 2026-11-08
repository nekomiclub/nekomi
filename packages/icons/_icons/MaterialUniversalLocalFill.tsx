import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUniversalLocalFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm309-333q-13-13-13-31t13-31 31-13 31 13 13 31-13 31-31 13-31-13m31 233q89-75 132.5-140T656-520q0-83-53.5-131.5T480-700t-122.5 48.5T304-520q0 55 43.5 120T480-260" /></svg>;
export default MaterialUniversalLocalFill;