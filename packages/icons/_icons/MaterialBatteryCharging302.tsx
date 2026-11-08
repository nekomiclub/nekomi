import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBatteryCharging302: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-290q-12 0-21-9t-9-21v-320q0-12 9-21t21-9h509l-48 60H310v260h278l-11 60zm559 0 28-160H581l176-220h4l-28 160h126L683-290z" /></svg>;
export default MaterialBatteryCharging302;