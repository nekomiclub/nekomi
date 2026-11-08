import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMonitorWeightLossFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M600-170v-60h320v60zm-36.5-353.38q34.5-34.38 34.5-83.5t-34.38-83.62-83.5-34.5-83.62 34.38-34.5 83.5 34.38 83.62 83.5 34.5 83.62-34.38M403-593q-6-6-6-14t6-14 14-6 14 6 6 14-6 14-14 6-14-6m63 0q-6-6-6-14t6-14 14-6 14 6 6 14-6 14-14 6-14-6m63 0q-6-6-6-14t6-14 14-6 14 6 6 14-6 14-14 6-14-6M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h600q24.75 0 42.38 17.62Q840-804.75 840-780v375q-19-8-39.33-11.5Q780.33-420 760-420q-91.67 0-155.83 64.17Q540-291.67 540-200q0 20 3.75 40T555-120z" /></svg>;
export default MaterialMonitorWeightLossFill;