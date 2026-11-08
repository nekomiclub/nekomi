import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestWakeOnPressFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M830-441q-20 0-35-15t-15-35v-259q0-21 15-35.5t35-14.5q21 0 35.5 14.5T880-750v259q0 20-14.5 35T830-441M320-120q-17 0-32-6.5T262-144L80-337l32-33q11-11 25-13.5t29 .5l114 25v-422q0-26 17-43t43-17 43 17 17 43v240h36q11 0 19 1.5t17 6.5l163 82q24 12 36 35t8 49l-26 180q-5 29-28 47.5T573-120z" /></svg>;
export default MaterialNestWakeOnPressFill;