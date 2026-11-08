import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFaceFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M315.5-398.73q-15.5-15.72-15.5-38.5 0-22.77 15.73-38.27 15.72-15.5 38.5-15.5 22.77 0 38.27 15.73 15.5 15.72 15.5 38.5 0 22.77-15.73 38.27-15.72 15.5-38.5 15.5-22.77 0-38.27-15.73m253 0q-15.5-15.72-15.5-38.5 0-22.77 15.73-38.27 15.72-15.5 38.5-15.5 22.77 0 38.27 15.73 15.5 15.72 15.5 38.5 0 22.77-15.73 38.27-15.72 15.5-38.5 15.5-22.77 0-38.27-15.73M480-140q142.38 0 241.19-98.95T820-480.47q0-25.53-4-50.53t-10-46q-20 5-43.26 7T714-568q-97.11 0-183.56-40Q444-648 383-722q-34 81-97.5 141.5T140-487v7q0 142.37 98.81 241.19Q337.63-140 480-140m0 60q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80" /></svg>;
export default MaterialFaceFill;