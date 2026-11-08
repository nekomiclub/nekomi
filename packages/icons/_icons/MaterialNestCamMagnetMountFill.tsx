import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestCamMagnetMountFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M930-318q-29 0-49.5-20.5T860-388v-160q0-29 20.5-49.5T930-618h30v300zm-662.5 92.5Q256-230 248-238L50-435q-9-9-13.5-20T32-477t4.5-22.5T49-520l129-130q29-29 65.5-44t76.5-15q84 0 142 58t58 142q0 40-15 76.5T461-367L332-238q-8 8-19.5 12.5T290-221t-22.5-4.5M679-362l-28-28 56-56H570v-40h142l-60-60 28-28 106 106z" /></svg>;
export default MaterialNestCamMagnetMountFill;