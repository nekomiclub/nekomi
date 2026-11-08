import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSoundDetectionDogBarkingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M194-80v-317l189 189q42-46 74.5-99T490-423q0-50-19.5-95.5T416-599L291-724h197l156-156 75 75q38 38 58 87.5T798-614q-1 54-21 103.5T719-423l-85 85v258zm187-215L180-496q-10-10-15-22.5t-5-26.5 5-27 15-23l77-78 117 116q27 27 41.5 61.5T430-423q0 35-12.5 68.5T381-295" /></svg>;
export default MaterialSoundDetectionDogBarkingFill;