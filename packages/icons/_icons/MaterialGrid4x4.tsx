import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGrid4x4: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M215-80v-135H80v-60h135v-175H80v-60h135v-175H80v-60h135v-135h60v135h175v-135h60v135h175v-135h60v135h135v60H745v175h135v60H745v175h135v60H745v135h-60v-135H510v135h-60v-135H275v135zm60-195h175v-175H275zm235 0h175v-175H510zM275-510h175v-175H275zm235 0h175v-175H510z" /></svg>;
export default MaterialGrid4x4;