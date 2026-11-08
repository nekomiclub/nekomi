import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHardDrive: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-260h680v-280H140zm575.5-104.62q14.5-14.62 14.5-35.5t-14.62-35.38-35.5-14.5-35.38 14.62-14.5 35.5 14.62 35.38 35.5 14.5 35.38-14.62M880-600h-85L695-700H265L165-600H80l142-142q8-8 19.28-13t23.72-5h430q12.44 0 23.72 5T738-742zM140-200q-24.75 0-42.37-17.63Q80-235.25 80-260v-340h800v340q0 24.75-17.62 42.37Q844.75-200 820-200z" /></svg>;
export default MaterialHardDrive;