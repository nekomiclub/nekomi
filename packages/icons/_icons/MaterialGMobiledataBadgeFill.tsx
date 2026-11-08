import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGMobiledataBadgeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm200-160h201q25 0 42-17.63 17-17.62 17-42.37v-172H513v60h68v112H380v-280h260q-3-24-19.45-42T581-680H380q-24.75 0-42.37 17.62Q320-644.75 320-620v280q0 24.75 17.63 42.37Q355.25-280 380-280" /></svg>;
export default MaterialGMobiledataBadgeFill;