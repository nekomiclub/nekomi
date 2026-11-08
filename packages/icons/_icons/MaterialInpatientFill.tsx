import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInpatientFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-80q-24.75 0-42.37-17.63Q80-115.25 80-140v-680q0-24.75 17.63-42.38Q115.25-880 140-880h400q24.75 0 42.38 17.62Q600-844.75 600-820v680q0 24.75-17.62 42.37Q564.75-80 540-80zm0-445q20-17 45.5-26t54.5-9h200q29 0 54.5 9t45.5 26v-295H140zm150.5-105.59q-20.5-20.59-20.5-49.5t20.59-49.41 49.5-20.5 49.41 20.59 20.5 49.5-20.59 49.41-49.5 20.5-49.41-20.59M780-340 640-480l140-140 42 42-67 68h165v60H755l67 68zM310-210h60v-80h80v-60h-80v-80h-60v80h-80v60h80z" /></svg>;
export default MaterialInpatientFill;