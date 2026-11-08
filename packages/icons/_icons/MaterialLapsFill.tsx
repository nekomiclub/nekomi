import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLapsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m360-124-43-42 74-74h-33q-116 0-197-82T80-520t80.5-198T357-800h246q116 0 196.5 82T880-520q0 117-81.5 198.5T600-240v-60q92 0 156-64t64-156q0-91-62.5-155.5T604-740H356q-91 0-153.5 64.5T140-520t63.5 155.5T358-300h34l-74-74 42-42 146 146z" /></svg>;
export default MaterialLapsFill;