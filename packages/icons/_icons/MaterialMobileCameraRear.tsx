import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileCameraRear: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m401-60-43-43 57-57H200v-60h217l-59-59 43-43 131 131zm159-100v-60h200v60zM260-820v548h-60v-548q0-24 18-42t42-18h440q24 0 42 18t18 42v150q18 3 30 16.95 12 13.96 12 31.63V-547q0 19-12 33t-30 17v225h-60v-548zm240 131q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9" /></svg>;
export default MaterialMobileCameraRear;