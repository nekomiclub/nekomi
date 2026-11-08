import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKitchenFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M309-650h60v-118h-60zm0 361h60v-196h-60zM220-80q-24.75 0-42.37-17.63Q160-115.25 160-140v-398h640v398q0 24.75-17.62 42.37Q764.75-80 740-80zm-60-518v-222q0-24.75 17.63-42.38Q195.25-880 220-880h520q24.75 0 42.38 17.62Q800-844.75 800-820v222z" /></svg>;
export default MaterialKitchenFill;