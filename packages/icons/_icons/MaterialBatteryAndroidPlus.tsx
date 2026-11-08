import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBatteryAndroidPlus: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-300v-360zm30 60q-37.5 0-63.75-26.25T40-330v-300q0-37.5 26.25-63.75T130-720h540v60H130q-12.75 0-21.37 8.62Q100-642.75 100-630v300q0 12.75 8.63 21.37Q117.25-300 130-300h540v60zm600-90v-120H610v-60h120v-120h60v120h120v60H790v120z" /></svg>;
export default MaterialBatteryAndroidPlus;