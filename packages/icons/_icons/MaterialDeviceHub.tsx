import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDeviceHub: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-180h154l176-176v-149q-35-12-57.5-40.65T370-730q0-45.83 32.12-77.92 32.12-32.08 78-32.08T558-807.92q32 32.09 32 77.92 0 35.7-22.5 64.35T510-625v149l176 176h154v180H660v-116L480-416 300-236v116z" /></svg>;
export default MaterialDeviceHub;