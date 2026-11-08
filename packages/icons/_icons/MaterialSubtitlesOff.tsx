import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSubtitlesOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M835-42 717-160H140q-24 0-42-17.63Q80-195.25 80-220v-520q0-24 18-42t42-18h22l60 60h-82v520h519L527-350H240v-60h228L41-837l42-42L877-84zm36-133-51-51v-514H308l-60-60h572q23 0 41.5 18.5T880-740v520.13q0 12.02-2 22.94-2 10.93-7 21.93M578-470l-60-60h202v60zm-338 0v-60h60v60zm160-9" /></svg>;
export default MaterialSubtitlesOff;