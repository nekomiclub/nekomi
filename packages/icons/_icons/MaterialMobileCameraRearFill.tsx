import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileCameraRearFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m401-60-43-43 57-57H200v-60h217l-59-59 43-43 131 131zm159-100v-60h200v60zm-60-529q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9M200-272v-548q0-24 18-42t42-18h440q24 0 42 18t18 42v150q18 3 30 17t12 32v74q0 19-12 33t-30 17v225H493l-92-93-93 93z" /></svg>;
export default MaterialMobileCameraRearFill;