import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTabletCameraFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M770-160v-580H190v580H99.8q-24.8 0-42.3-17.63Q40-195.25 40-220v-520q0-24.75 17.63-42.38Q75.25-800 100-800h760q24.75 0 42.38 17.62Q920-764.75 920-740v520q0 24.75-17.62 42.37Q884.75-160 860-160zM360-80q-25 0-42.5-17.5T300-140v-160q0-25 17.5-42.5T360-360h40l40-40h80l40 40h40q25 0 42.5 17.5T660-300v160q0 25-17.5 42.5T600-80zm169.5-90.5Q550-191 550-220t-20.5-49.5T480-290t-49.5 20.5T410-220t20.5 49.5T480-150t49.5-20.5" /></svg>;
export default MaterialTabletCameraFill;