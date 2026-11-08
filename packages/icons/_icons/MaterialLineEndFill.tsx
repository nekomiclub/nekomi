import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLineEndFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M790-390q-29.09 0-52.54-17Q714-424 705-450H80v-60h625q9-26 32.46-43 23.45-17 52.54-17 37.8 0 63.9 26.14t26.1 64T853.9-416 790-390" /></svg>;
export default MaterialLineEndFill;