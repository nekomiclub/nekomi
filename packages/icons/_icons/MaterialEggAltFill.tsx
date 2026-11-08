import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEggAltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M640-80q-67 0-101.5-22.5T480-150q-19-20-36.5-35T399-200q-45 0-100-15.5t-103.5-51T114-359 80-499q-2-167 82.5-274T399-880q71 0 120 20.5t84.5 51.5 60 68.5T710-667q12 20 24 36.5t26 30.5q60 60 90 105t30 136q0 120-74.5 199.5T640-80M480.2-360q49.8 0 84.8-35.2t35-85-35.2-84.8-85-35-84.8 35.2-35 85 35.2 84.8 85 35" /></svg>;
export default MaterialEggAltFill;