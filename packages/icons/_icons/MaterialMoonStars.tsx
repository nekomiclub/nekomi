import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMoonStars: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M614-668 508-774l106-106 106 106zm200 120-66-66 66-66 66 66zM483-80q-84 0-157.5-32t-128-86.5-86.5-128T79-484q0-146 93-257.5T409-880q-18 98 11 192.63 29 94.64 100 165.74t165.5 100.14T879-410.47q-26 144.2-138 237.34Q629-80 483-80m0-60q100 0 182-57t132-145q-90-8-173-41.5T477.5-480 381-625.5 340-797q-88 48-144.5 130.5T139-484q0 143.33 100.33 243.67Q339.67-140 483-140m-6-340" /></svg>;
export default MaterialMoonStars;