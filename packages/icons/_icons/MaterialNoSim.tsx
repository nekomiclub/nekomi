import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNoSim: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m800-237-60-60v-523H427L322-715l-44-44 121-121h341q24.75 0 42.38 18Q800-844 800-820zm46 215L242-627l-22 22v465h520v-72l60 60v12q0 24-18 42t-42 18H220q-24 0-42-18t-18-42v-495l37-36L39-829l42-42L888-64zM489-380" /></svg>;
export default MaterialNoSim;