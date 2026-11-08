import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwipeLeftAltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M600-280q-82 0-133.5-50.5T401-450H194l89 89-42 42L80-480l161-161 42 42-89 89h207q14-69 65.5-119.5T600-680q83 0 141.5 58.5T800-480t-58.5 141.5T600-280" /></svg>;
export default MaterialSwipeLeftAltFill;