import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHighlightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m225-655-85-84 43-43 84 85zm225-105v-120h60v120zm285 107-43-43 86-84 42 42zM360-80v-200L240-400v-200h480v200L600-280v200z" /></svg>;
export default MaterialHighlightFill;