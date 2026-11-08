import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLightbulbFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M422.5-103.5Q399-127 399-161h162q0 34-23.5 57.5T480-80t-57.5-23.5M318-223v-60h324v60zm5-121q-66-43-104.5-107.5T180-597q0-122 89-211t211-89 211 89 89 211q0 81-38 145.5T637-344z" /></svg>;
export default MaterialLightbulbFill;