import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBoy: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M437.5-697.6Q420-715.2 420-740.1t17.6-42.4 42.5-17.5 42.4 17.6 17.5 42.5-17.6 42.4-42.5 17.5-42.4-17.6M420-160v-200h-40v-200q0-24.75 17.63-42.38Q415.25-620 440-620h80q24.75 0 42.38 17.62Q580-584.75 580-560v200h-40v200z" /></svg>;
export default MaterialBoy;