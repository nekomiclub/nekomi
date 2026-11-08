import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVr180Create2d: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-242q-119-23-199.5-114T80-568q0-130 91-221t221-91q121 0 211 80t111 200h-62q-18-95-91.5-157.5T392-820q-104 0-178 74t-74 178q0 95 63.5 166.5T360-304zM480-80q-24 0-42-18t-18-42v-340q0-24 18-42t42-18h340q24 0 42 18t18 42v340q0 24-18 42t-42 18zm0-60h340v-340H480zm29-44h283l-89-117-72 97-57-71zM396-562" /></svg>;
export default MaterialVr180Create2d;