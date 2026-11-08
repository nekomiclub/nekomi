import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPanoramaHorizontal: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-160q-17 0-28.5-11.5T80-200v-560q0-17 11.5-28.5T120-800q8 0 35.5 9.5T229-770t108.5 20.5T480-740t142.5-9.5T731-770t73.5-20.5T840-800q17 0 28.5 11.5T880-760v560q0 17-11.5 28.5T840-160q-8 0-35.5-9.5T731-190t-108.5-20.5T480-220t-142.5 9.5T229-190t-73.5 20.5T120-160m20-67q82-29 167.5-41T480-280t172.5 12T820-227v-505q-82 28-167.5 40T480-680t-172.5-12T140-732zm340-253" /></svg>;
export default MaterialPanoramaHorizontal;