import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material50mpFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M553-510h90q14 0 27-13t13-27v-160q0-14-13-27t-27-13h-90q-14 0-27 13t-13 27v160q0 14 13 27t27 13m3-50v-140h77v140zM233-210h50v-190h53v127h50v-127h60v190h50v-200q0-14-13-27t-27-13H273q-14 0-27 13t-13 27zm323 0h50v-63h80q14 0 27-13t13-27v-97q0-14-13-27t-27-13H556zm50-113v-77h70v77zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm86-390h130q14 0 27-13t13-27v-56q0-14-13-27t-27-13h-80v-54h120v-50H266v137h120v53H266z" /></svg>;
export default Material50mpFill;