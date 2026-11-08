import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSleepScore: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M616-887q112 0 191 79t79 191h-60q0-42-15.57-79.02Q794.85-733.03 768-762l-40 66q-9.39 16-20.2 35-10.8 19-23.8 32-12 12-28.62 12-16.63 0-28.5-12-11.88-12-11.38-28t12.5-28q13-13 31.5-24.5T694-730l67-39q-28.97-26.85-65.98-42.43Q658-827 616-827zM483-80q-84 0-157.5-32t-128-86.5-86.5-128T79-484q0-146 93-257.5T409-880q-18 98 11 192.63 29 94.64 100 165.74t165.5 100.14T879-410.47q-26 144.2-138 237.34Q629-80 483-80m0-60q100 0 182-57t132-145q-90-8-173-41.5T477.5-480 381-625.5 340-797q-88 48-144.5 130.5T139-484q0 143.33 100.33 243.67Q339.67-140 483-140m-6-340" /></svg>;
export default MaterialSleepScore;