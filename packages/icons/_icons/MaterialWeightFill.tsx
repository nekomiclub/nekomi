import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWeightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-680q25.5 0 42.75-17.25T540-740t-17.25-42.75T480-800t-42.75 17.25T420-740t17.25 42.75T480-680m104 0h96q23.11 0 40.05 14.5Q737-651 740-628l62 440q4 27-13.62 47.5Q770.75-120 743-120H217q-27.75 0-45.37-20.5Q154-161 158-188l62-440q3-23 19.95-37.5Q256.89-680 280-680h96q-8-14-12-28.57-4-14.56-4-31.43 0-50 35-85t85-35 85 35 35 85q0 17-4 31.5T584-680" /></svg>;
export default MaterialWeightFill;