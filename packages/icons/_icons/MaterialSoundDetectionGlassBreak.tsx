import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSoundDetectionGlassBreak: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-720h720v720zm60-660v418l199-200 159 159 242-271v-106zm0 600h600v-404L541-316 380-477 180-276z" /></svg>;
export default MaterialSoundDetectionGlassBreak;