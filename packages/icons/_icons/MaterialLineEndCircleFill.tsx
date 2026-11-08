import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLineEndCircleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M640-240q-92 0-159.5-60.5T402-450H80v-60h322q11-89 78.5-149.5T640-720q100 0 170 70t70 170-70 170-170 70" /></svg>;
export default MaterialLineEndCircleFill;