import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDirectorySync: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M238-211q-57-53-87.5-122.5T120-480q0-150 105-255t255-105v-80l183 140-183 140v-80q-100 0-170 70t-70 170q0 57 25 107.5t67 88.5zM480-40 297-180l183-140v80q100 0 170-70t70-170q0-57-25-108t-70-88l95-71q58 51 89 120.5T840-480q0 150-105 255T480-120z" /></svg>;
export default MaterialDirectorySync;