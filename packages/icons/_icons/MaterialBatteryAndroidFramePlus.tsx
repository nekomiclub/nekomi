import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBatteryAndroidFramePlus: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M130-240q-38.25 0-64.12-25.88Q40-291.75 40-330v-300q0-37.5 25.88-63.75Q91.75-720 130-720h540v60H130q-12.75 0-21.37 9-8.63 9-8.63 21v300q0 12.75 8.63 21.37Q117.25-300 130-300h540v60zm600-90v-120H610v-60h120v-120h60v120h120v60H790v120zm-600 0v-300h420v300z" /></svg>;
export default MaterialBatteryAndroidFramePlus;