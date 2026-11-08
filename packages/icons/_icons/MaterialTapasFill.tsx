import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTapasFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M250-40v-370H150q-37.8 0-63.9-26.14t-26.1-64T86.1-564t63.9-26h100v-60H150q-37.8 0-63.9-26.14t-26.1-64T86.1-804t63.9-26h100v-90h60v90h100q37.8 0 63.9 26.14t26.1 64T473.9-676 410-650H310v60h100q37.8 0 63.9 26.14t26.1 64T473.9-436 410-410H310v370zm350 0v-60h90v-304q-57-11-93.5-55.02T560-560v-360h320v360q0 57-36.5 101T750-404v304h90v60zm20-660h200v-160H620z" /></svg>;
export default MaterialTapasFill;