import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSchedule: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m627-287 45-45-159-160v-201h-60v225zM480-80q-82 0-155-31.5t-127.5-86-86-127.5T80-480t31.5-155 86-127.5 127.5-86T480-880t155 31.5 127.5 86 86 127.5T880-480t-31.5 155-86 127.5-127.5 86T480-80m0-60q140 0 240-100t100-240-100-240-240-100-240 100-100 240 100 240 240 100" /></svg>;
export default MaterialSchedule;