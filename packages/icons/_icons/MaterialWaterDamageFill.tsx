import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWaterDamageFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M201-160v-392L76-456l-36-48 440-337 440 337-36 48-125-96v392zm328.5-190.5Q550-371 550-400q0-26-10-46t-60-92q-50 72-60 92t-10 46q0 29 20.5 49.5T480-330t49.5-20.5" /></svg>;
export default MaterialWaterDamageFill;