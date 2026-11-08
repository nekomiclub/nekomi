import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCalendarAppsScriptFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M586-80q-13 0-21.5-8.5T556-110t8.5-21.5T586-140h145l-118-83q-10-7-12.5-19t4.5-22 19-12.5 22 4.5l119 82-50-136q-5-11 1-22t18-16 23 .5 16 17.5l48 136 39-139q3-11 13.5-17.5T895-370q12 3 18.5 13t3.5 22L849-80zm-406-80q-24 0-42-18t-18-42v-540q0-24 18-42t42-18h65v-60h65v60h260v-60h65v60h65q24 0 42 18t18 42v302q-15-2-30-2t-30 2v-112H180v350h320q0 15 3 30t8 30z" /></svg>;
export default MaterialCalendarAppsScriptFill;