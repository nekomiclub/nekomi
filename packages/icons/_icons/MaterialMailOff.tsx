import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMailOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m786-88-72-72H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h20l60 60h-80v520h514L55-819l43-43 731 731zm79-93-45-45v-459L543-503l-36-36 309-201H306l-60-60h574q24 0 42 18t18 42v520.16q0 10.84-4 20.84t-11 18" /></svg>;
export default MaterialMailOff;