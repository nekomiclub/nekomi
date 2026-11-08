import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpeedCameraFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m715-368-68-39 125-93 68 39zM160-160v-60h210v-262l-142-80q-22-13-28.5-37t6.5-46l75-125q13-21 36.5-27.5T362-792l395 223-235 173-92-52v228q0 25-17.5 42.5T370-160z" /></svg>;
export default MaterialSpeedCameraFill;