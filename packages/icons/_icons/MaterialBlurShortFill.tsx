import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBlurShortFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M699-381q41-41 41-99t-41-99-99-41-99 41-41 99 41 99 99 41 99-41m-99 101q-74 0-130-48.5T402-450H240v-60h162q4-32 18-60t37-50H160v-60h440q83 0 141.5 58.5T800-480t-58.5 141.5T600-280" /></svg>;
export default MaterialBlurShortFill;