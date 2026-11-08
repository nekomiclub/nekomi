import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material60fps: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M335-200H160q-33.33 0-56.67-23.33Q80-246.67 80-280v-400q0-33.33 23.33-56.67Q126.67-760 160-760h212v80H160v138h175q33.33 0 56.67 23.33Q415-495.33 415-462v182q0 33.33-23.33 56.67Q368.33-200 335-200M160-462v182h175v-182zm422 182h218v-400H582zm0 80q-33.33 0-56.67-23.33Q502-246.67 502-280v-400q0-33.33 23.33-56.67Q548.67-760 582-760h218q33.33 0 56.67 23.33Q880-713.33 880-680v400q0 33.33-23.33 56.67Q833.33-200 800-200z" /></svg>;
export default Material60fps;