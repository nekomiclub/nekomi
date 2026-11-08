import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwitchAccess3Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M469-80q-24 0-42-18t-18-42v-117l222-223-222-223v-117q0-24 18-42t42-18h351q24 0 42 18t18 42v149q16 0 27 10.5t11 26.5v101q0 16-11 27t-27 11v355q0 24-18 42t-42 18zm-71-251-42-43 75-76H80v-60h351l-75-76 42-43 148 149zM80-610v-143h142v143zm0 402v-142h142v142z" /></svg>;
export default MaterialSwitchAccess3Fill;