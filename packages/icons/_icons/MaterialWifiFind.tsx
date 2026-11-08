import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWifiFind: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-120 0-600q95-93 219-146.5T480-800t261.5 53.5T960-600l-43 43q-91-81-200-132t-237-51q-115 0-215 42T88-594l433 433zm392-48L763-277q-18 13-39 20t-44 7q-62 0-106-44t-44-106 44-106 106-44 106 44 44 106q0 23-6.5 44T803-321l111 111zM743.5-336.5Q770-363 770-400t-26.5-63.5T680-490t-63.5 26.5T590-400t26.5 63.5T680-310t63.5-26.5M480-161" /></svg>;
export default MaterialWifiFind;