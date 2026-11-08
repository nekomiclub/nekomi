import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHdrAutoFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M286-288h60l44-116h180l45 116h60L511-716h-62zm122-165 71-191h2l72 191zm72 373q-85 0-158-30.5T195-195t-84.5-127T80-480q0-84 30.5-157T195-764t127-85 158-31q84 0 157 31t127 85 85 127 31 157q0 85-31 158t-85 127-127 84.5T480-80" /></svg>;
export default MaterialHdrAutoFill;