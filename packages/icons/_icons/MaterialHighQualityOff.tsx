import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHighQualityOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m720-326-50-50v-177H570v77l-50-51v-42q0-14.7 12-24.35t28-9.65h126q14.45 0 24.22 9.78Q720-583.45 720-569zm-480-31v-246h50v107h100v-75l50 50v164h-50v-89H290v89zM140-160q-24 0-42-17.63Q80-195.25 80-220v-520q0-24 18-42t42-18h22l60 60h-82v520h519L41-837l42-42 764 765-42 42-88-88zm731-15-51-51v-514H308l-60-60h572q23 0 41.5 18.5T880-740v520.13q0 12.02-2 22.94-2 10.93-7 21.93M400-479" /></svg>;
export default MaterialHighQualityOff;