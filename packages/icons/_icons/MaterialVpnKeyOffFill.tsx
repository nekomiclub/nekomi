import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVpnKeyOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M813-61 497-377h-6q-26 60-78 98.5T280-240q-100 0-170-70T40-480q0-66 35-125t102-92L61-813l43-43 752 752zM280-412q29 0 48.5-19.5T348-480q0-11-4.5-24T328-528q-10-11-23.5-15.5T280-548q-29 0-48.5 19.5T212-480t19.5 48.5T280-412m525 172L492-553h428v146H814v167z" /></svg>;
export default MaterialVpnKeyOffFill;