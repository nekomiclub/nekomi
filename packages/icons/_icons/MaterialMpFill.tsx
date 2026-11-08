import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMpFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M233-360h50v-190h57v127h50v-127h56v190h50v-206q0-14-9.5-24T463-600H266q-14 0-23.5 10t-9.5 24zm317 0h50v-63h93q14 0 23.5-9.5T726-456v-110q0-14-9.5-24T693-600H550zm50-113v-77h76v77zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default MaterialMpFill;