import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBatteryChargingFull: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M660-87v-113h-80l120-192v112h80zm-350 7q-12.75 0-21.37-8.63Q280-97.25 280-110v-676q0-12.75 8.63-21.38Q297.25-816 310-816h90v-64h160v64h90q12.75 0 21.38 8.62Q680-798.75 680-786v333q-16 0-31 2t-29 7v-312H340v616h152q9 17 21 32t26 28z" /></svg>;
export default MaterialBatteryChargingFull;