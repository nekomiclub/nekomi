import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPsychiatryFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-130v-309h-20q-64 0-120.5-24.5T209-533t-66.5-104T120-760v-80h78q62 0 119 24.5T419-746q33 34 54.5 76t30.5 89q8-12 17-23t19-22q45-45 102-69.5T762-720h78v80q0 64-24 123t-68 104q-45 45-101.5 69T528-320h-18v190z" /></svg>;
export default MaterialPsychiatryFill;