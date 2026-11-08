import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNoEncryption: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m800-247-60-60v-267H473l-60-60h197v-95q0-54.58-39.5-92.79t-95-38.21-94 38.5T343-729v25l-55-55q9-70 62.5-115.5T476-920q80.91 0 137.46 55.5Q670-809 670-729v95h70q24.75 0 42.38 17.62Q800-598.75 800-574zm67 265L764-85q-8 3-13 4t-11 1H220q-24.75 0-42.37-17.63Q160-115.25 160-140v-434q0-23 16-40.5t39-19.5L-14-863l43-42L910-24zM710-140 535-314q-11 11-24.24 16T482-293q-32 0-53.5-21T407-366.68q0-16.32 5.5-29.82T429-421L275-574h-55v434zM606-441" /></svg>;
export default MaterialNoEncryption;