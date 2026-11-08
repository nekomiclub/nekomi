import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBottomAppBar: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-203v143h600v-143H548q-14 14-31.16 22-17.17 8-37 8-19.84 0-36.84-8t-31-22zm321-39q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m-321-21h210q0-36 27-63t63-27 63 27 27 63h210v-397H180zm0 203h600z" /></svg>;
export default MaterialBottomAppBar;