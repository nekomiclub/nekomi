import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialViewApps: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-160v-640l231 38v564zm321-39v-561h238v561zm559 39-231-38v-564l231-38zm-820-71 111-19v-461l-111-18zm321-28h118v-441H421zm439 28v-498l-111 18v462zm-760 0 111-19zm321-28h118zm439 28-111-18z" /></svg>;
export default MaterialViewApps;