import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBatteryAndroidPlusFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M130-240q-37.5 0-63.75-26.25T40-330v-300q0-37.5 26.25-63.75T130-720h540v150H550v180h120v150zm600-90v-120H610v-60h120v-120h60v120h120v60H790v120z" /></svg>;
export default MaterialBatteryAndroidPlusFill;