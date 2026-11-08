import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAlbumFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-316q70 0 120-47.5T650-480q0-71-49.5-120.5T480-650q-69 0-116.5 50T316-480q0 69 47.5 116.5T480-316m-28.5-135.5Q440-463 440-480t11.5-28.5T480-520t28.5 11.5T520-480t-11.5 28.5T480-440t-28.5-11.5M480-80q-82 0-155-31.5t-127.5-86-86-127.5T80-480q0-83 31.5-156t86-127T325-848.5 480-880q83 0 156 31.5T763-763t85.5 127T880-480q0 82-31.5 155T763-197.5t-127 86T480-80" /></svg>;
export default MaterialAlbumFill;