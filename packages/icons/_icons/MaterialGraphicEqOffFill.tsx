import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGraphicEqOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M813-61 510-364v284h-60v-344L345-529v289h-60v-349L61-813l43-43 752 752zM120-400v-160h60v160zm390-136-60-60v-284h60zm165 165-60-60v-289h60zm105-29v-160h60v160z" /></svg>;
export default MaterialGraphicEqOffFill;