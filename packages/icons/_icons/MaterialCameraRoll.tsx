import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCameraRoll: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-80q-24.75 0-42.37-17.63Q80-115.25 80-140v-640q0-24.75 17.63-42.38Q115.25-840 140-840h60v-40q0-17 11.5-28.5T240-920h160q17 0 28.5 11.5T440-880v40h60q24.75 0 42.38 17.62Q560-804.75 560-780v20h320v600H560v20q0 24.75-17.62 42.37Q524.75-80 500-80zm0-60h360v-80h320v-480H500v-80H140zm240-140h60v-60h-60zm0-300h60v-60h-60zm160 300h60v-60h-60zm0-300h60v-60h-60zm160 300h60v-60h-60zm0-300h60v-60h-60zM320-460" /></svg>;
export default MaterialCameraRoll;