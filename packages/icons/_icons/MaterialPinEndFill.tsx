import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPinEndFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v300h-60v-300H140v520h460v60zm425-232L420-537v103h-60v-206h206v60H462l145 145zm205 232q-45 0-77.5-32.5t-32.5-78 32.5-77.5 78-32 77.5 32.08q32 32.09 32 77.92 0 45-32.08 77.5Q815.83-160 770-160" /></svg>;
export default MaterialPinEndFill;