import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCenterFocusWeak: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M377-377q-40-40-40-103t40-103 103-40 103 40 40 103-40 103-103 40-103-40m162-44q24-24 24-59t-24-59-59-24-59 24-24 59 24 59 59 24 59-24M180-120q-24 0-42-18t-18-42v-172h60v172h172v60zm428 0v-60h172v-172h60v172q0 24-18 42t-42 18zM120-608v-172q0-24 18-42t42-18h172v60H180v172zm660 0v-172H608v-60h172q24 0 42 18t18 42v172z" /></svg>;
export default MaterialCenterFocusWeak;