import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLowPriorityFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-494q0 88 62.5 146.5T352-289l-66-68 42-42 136 139-139 140-42-42 64-67q-110 0-188.5-76.5T80-494q0-109 74.5-187.5T336-760h152v60H336q-82 0-139 60.5T140-494m432 265v-60h308v60zm0-235v-61h308v61zm-24-236v-60h332v60z" /></svg>;
export default MaterialLowPriorityFill;