import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSimulationFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-280v-23q0-44 44-70.5T480-400t116 26.5 44 70.5v23zm103.5-183.5Q400-487 400-520t23.5-56.5T480-600t56.5 23.5T560-520t-23.5 56.5T480-440t-56.5-23.5M264-133q-111-16-167.5-48T40-261v-424q0-57 111.5-86T480-800t328.5 29T920-685v424q0 48-56.5 80T696-133v-486q63-11 106.5-26t69.5-35q-49-31-145-46t-247-15q-147 0-243 14.5T86-680q23 20 66 35t112 26z" /></svg>;
export default MaterialSimulationFill;