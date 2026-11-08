import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialElectricBikeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M193-280q-81 0-137.5-57T-1-475t57-137.5T194-669q71 0 124.5 45.5T383-508h51l-82-232h-73v-60h188v60h-52l26 71h222l-71-191H487v-60h99q24 0 40.5 11t24.5 33l76 207h38q81 0 137.5 56T959-477q0 81-56.5 139T765-280q-72 0-126-48t-66-120H383q-11 72-64.5 120T193-280m12-168h119v-60H205zM516-40 293-153h147v-76l227 114H516zm-18-468h76q4-23 15.5-51t31.5-50H462zm234 31 56-19-39-113-60 20z" /></svg>;
export default MaterialElectricBikeFill;