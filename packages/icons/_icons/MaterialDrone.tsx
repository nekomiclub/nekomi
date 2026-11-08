import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDrone: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-160q0-76 44.5-135T318-379l-15-139H160v-222H40v-60h300v60H220v162h77l-7-60h379l-6 60h76v-162H619v-60h301v60H800v222H656l-14 139q69 25 113.5 84T800-160h-60q0-74-55-124t-130-50H405q-75 0-130 50t-55 124zm217-234h205l20-184H356zm0 0h205z" /></svg>;
export default MaterialDrone;