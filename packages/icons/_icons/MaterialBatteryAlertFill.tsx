import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBatteryAlertFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-403h60v-240h-60zm30.5 150q12.5 0 21-9t8.5-21.5-8.62-21Q492.75-313 480-313q-12 0-21 8.62-9 8.63-9 21.38 0 12 9 21t21.5 9M310-80q-12.75 0-21.37-8.63Q280-97.25 280-110v-676q0-12.75 8.63-21.38Q297.25-816 310-816h90v-64h160v64h90q12.75 0 21.38 8.62Q680-798.75 680-786v676q0 12.75-8.62 21.37Q662.75-80 650-80z" /></svg>;
export default MaterialBatteryAlertFill;