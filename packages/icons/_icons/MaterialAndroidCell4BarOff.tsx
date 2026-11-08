import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAndroidCell4BarOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M823-132 653-250v90H553v-160L407-423v263H307v-333L36-682l46-65 786 550zm77-116-100-70v-481h100zM60-160v-308h100v308zm593-261-100-70v-184h100z" /></svg>;
export default MaterialAndroidCell4BarOff;