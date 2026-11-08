import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLockClockFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M350-634h260v-93q0-55-38-94t-92-39-92 39-38 94zm266 532q-56-56-56-137t56-137 137-56 137 56 56 137-56 137-137 56-137-56m211-36 27-27-84-76v-124h-42v136zM557-80H220q-25 0-42.5-17.5T160-140v-434q0-25 17.5-42.5T220-634h70v-93q0-80 55.5-136.5T480-920t134.5 56.5T670-727v93h70q25 0 42.5 17.5T800-574v87q-15-4-30-5t-30 0q-102 4-171 77.5T500-239q0 44 15 84.5T557-80" /></svg>;
export default MaterialLockClockFill;