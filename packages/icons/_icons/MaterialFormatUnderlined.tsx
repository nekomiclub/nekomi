import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatUnderlined: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-140v-60h560v60zm123.5-198.5Q267-397 267-497v-343h83v343q0 63 34 101t96 38 96-38 34-101v-343h83v343q0 100-56.5 158.5T480-280t-156.5-58.5" /></svg>;
export default MaterialFormatUnderlined;