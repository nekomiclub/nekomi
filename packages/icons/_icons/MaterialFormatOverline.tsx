import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatOverline: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-780v-60h560v60zm81.5 578.5Q200-283 200-400t81.5-198.5T480-680t198.5 81.5T760-400t-81.5 198.5T480-120t-198.5-81.5m340-56.76q58.5-58.27 58.5-141.5 0-83.24-58.26-141.74-58.27-58.5-141.5-58.5-83.24 0-141.74 58.26-58.5 58.27-58.5 141.5 0 83.24 58.26 141.74 58.27 58.5 141.5 58.5 83.24 0 141.74-58.26" /></svg>;
export default MaterialFormatOverline;