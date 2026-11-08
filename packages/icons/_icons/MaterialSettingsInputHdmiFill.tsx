import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSettingsInputHdmiFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-80v-120L200-439v-241h40v-140q0-23 18.5-41.5T300-880h360q23 0 41.5 18.5T720-820v140h40v241L640-200v120zm-20-600h98v-82h34v82h96v-82h34v82h98v-140H300z" /></svg>;
export default MaterialSettingsInputHdmiFill;