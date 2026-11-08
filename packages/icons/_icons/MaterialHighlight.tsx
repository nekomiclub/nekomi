import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHighlight: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m225-655-85-84 43-43 84 85zm225-105v-120h60v120zm285 107-43-43 86-84 42 42zM360-80v-200L240-400v-200h480v200L600-280v200zm60-60h120v-165l120-120v-115H300v115l120 120zm60-200" /></svg>;
export default MaterialHighlight;