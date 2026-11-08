import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSoundDetectionDogBarking: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M194-80v-416h60v356h320v-223l102-102q30-30 46-68.5t16-80.5-16.5-80.5T676-762l-32-33-131 131H333l-53 53-43-42 71-71h180l156-156 75 75q38 38 58 87.5T798-614q-1 54-21 103.5T719-423l-85 85v258zm187-215L180-496q-10-10-15-22.5t-5-26.5 5-27 15-23l77-78 117 116q27 27 41.5 61.5T430-423q0 35-12.5 68.5T381-295" /></svg>;
export default MaterialSoundDetectionDogBarking;