import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBatteryFullAltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M174-280q-12.75 0-21.37-8.63Q144-297.25 144-310v-90H80v-160h64v-90q0-12.75 8.63-21.38Q161.25-680 174-680h676q12.75 0 21.38 8.62Q880-662.75 880-650v340q0 12.75-8.62 21.37Q862.75-280 850-280z" /></svg>;
export default MaterialBatteryFullAltFill;