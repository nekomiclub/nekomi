import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwapDrivingApps: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m625-674-44-44 60-60H312v-60h329l-60-60 44-44 134 134zM180-190h600v-214H180zm144-68q16-16 16-39t-16-39-39-16-39 16-16 39 16 39 39 16 39-16m390 0q16-16 16-39t-16-39-39-16-39 16-16 39 16 39 39 16 39-16M120-464h634l-54-163H237l60 60-44 44-134-134 134-134 44 44-60 60h475q14 0 27 11t16 24l85 248v334q0 12-9 21t-21 9h-20q-12 0-21-9t-9-21v-60H200v60q0 12-9 21t-21 9h-20q-12 0-21-9t-9-21zm60 60v214z" /></svg>;
export default MaterialSwapDrivingApps;