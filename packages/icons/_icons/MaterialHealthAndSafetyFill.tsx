import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHealthAndSafetyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M440-360h80v-100h100v-80H520v-100h-80v100H340v80h100zm40 279q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81" /></svg>;
export default MaterialHealthAndSafetyFill;