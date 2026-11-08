import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSensorDoorFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M170-90v-720q0-24 18-42t42-18h500q24 0 42 18t18 42v720zm450-340q21 0 35.5-15t14.5-35q0-21-14.5-35.5T620-530q-20 0-35 14.5T570-480q0 20 15 35t35 15" /></svg>;
export default MaterialSensorDoorFill;