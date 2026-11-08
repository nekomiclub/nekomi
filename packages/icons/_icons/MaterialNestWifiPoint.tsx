import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestWifiPoint: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-780q-75 0-127.5 52.5T180-600v240q0 17 3 31.5t7 28.5h580q4-14 7-28.5t3-31.5v-240q0-75-52.5-127.5T600-780zm0 660q-100 0-170-70t-70-170v-240q0-100 70-170t170-70h240q100 0 170 70t70 170v240q0 100-70 170t-170 70zm10-60q0-14 8-22t22-8 22 8 8 22h100q0-14 8-22t22-8 22 8 8 22q45 0 81-15t62-45h-63q0 14-8 22t-22 8-22-8-8-22H510q0 14-8 22t-22 8-22-8-8-22H350q0 14-8 22t-22 8-22-8-8-22h-63q26 30 62 45t81 15m-10-120h420-600z" /></svg>;
export default MaterialNestWifiPoint;