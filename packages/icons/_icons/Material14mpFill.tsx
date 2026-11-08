import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material14mpFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M336-510h50v-240H273v50h63zm240 0h50v-63h47v-50h-47v-127h-50v127h-56v-127h-50v177h106zM233-210h50v-190h53v127h50v-127h60v190h50v-200q0-14-13-27t-27-13H273q-14 0-27 13t-13 27zm323 0h50v-63h80q14 0 27-13t13-27v-97q0-14-13-27t-27-13H556zm50-113v-77h70v77zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default Material14mpFill;