import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWifiLockFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-120 0-600q99-94 221-147t259-53 259 53 221 147L827-467q-17-6-35-9t-36-2q-85 2-145 62t-62 145q-1 18 2 36t9 35zm202 0q-17 0-28.5-11.5T642-160v-118q0-17 11.5-28.5T682-318h1v-39q0-34 24-58t58-24 58 24 24 58v39h1q17 0 28.5 11.5T888-278v118q0 17-11.5 28.5T848-120zm41-198h84v-39q0-19-11.5-30.5T765-399t-30.5 11.5T723-357z" /></svg>;
export default MaterialWifiLockFill;