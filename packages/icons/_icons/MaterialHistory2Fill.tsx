import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHistory2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80q-155 0-268.5-102T83-437h60q16 128 112 212.5T480-140q142 0 241-99t99-241-99-241-241-99q-96 0-178.5 51T177-633h127v60H91q32-136 140.5-221.5T480-880q83 0 156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m115-243L450-468v-206h60v182l127 127z" /></svg>;
export default MaterialHistory2Fill;