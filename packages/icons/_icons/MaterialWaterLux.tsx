import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWaterLux: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-780v-60h120v60zm114 220-43-42 85-85 43 42zm121-152.5Q304-765 300-840h60q3 50 37 85t83 35 83-35 37-85h60q-4 75-55 127.5T480-660t-125-52.5M450-480v-120h60v120zm276-81-85-85 42-42 86 84zm-6-219v-60h120v60zM80-131v-60q38 0 61.5-23t68.5-23 70 27 64 27 65-27 71-27 70.5 27 64.5 27 64.5-27 70.5-27 68.5 23 61.5 23v60q-47 0-69.5-23T750-177t-64 27-71 27-71-27-64-27-64.5 27-71.5 27-70.5-27-63.5-27-60.5 23T80-131m0-160v-60q38 0 61.5-23t68.5-23 70 27 64 27 65-27 71-27 70.5 27 64.5 27 64.5-27 70.5-27 68.5 23 61.5 23v60q-47 0-69.5-23T750-337t-64 27-71 27-71-27-64-27-64.5 27-71.5 27-70.5-27-63.5-27-60.5 23T80-291" /></svg>;
export default MaterialWaterLux;