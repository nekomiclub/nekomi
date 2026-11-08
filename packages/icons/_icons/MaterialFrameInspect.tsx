import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFrameInspect: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M521-438.84q29-28.85 29-71Q550-552 521.16-581q-28.85-29-71-29Q408-610 379-581.16q-29 28.85-29 71Q350-468 378.84-439q28.85 29 71 29Q492-410 521-438.84M643-274 539-378q-22 14-44.5 21t-44.03 7Q384-350 337-397t-47-113 47-113 113-47 113 47 47 113.47q0 21.53-7.5 44.03T581-421l105 105zM180-120q-24 0-42-18t-18-42v-172h60v172h172v60zm428 0v-60h172v-172h60v172q0 24-18 42t-42 18zM120-608v-172q0-24 18-42t42-18h172v60H180v172zm660 0v-172H608v-60h172q24 0 42 18t18 42v172z" /></svg>;
export default MaterialFrameInspect;