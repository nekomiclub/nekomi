import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAudioFile: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M427-192q41 0 70-28.31T526-290v-202h116v-60H486v187q-11-9-26.38-14-15.39-5-32.62-5-39.27 0-66.13 27.5Q334-329 334-289.5t26.87 68.5q26.86 29 66.13 29M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18zm331-554v-186H220v680h520v-494zM220-820v186zv680z" /></svg>;
export default MaterialAudioFile;