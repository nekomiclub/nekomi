import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBackgroundDotLargeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M375.5-304.5Q390-319 390-340t-14.5-35.5T340-390t-35.5 14.5T290-340t14.5 35.5T340-290t35.5-14.5m0-280Q390-599 390-620t-14.5-35.5T340-670t-35.5 14.5T290-620t14.5 35.5T340-570t35.5-14.5m280 280Q670-319 670-340t-14.5-35.5T620-390t-35.5 14.5T570-340t14.5 35.5T620-290t35.5-14.5m0-280Q670-599 670-620t-14.5-35.5T620-670t-35.5 14.5T570-620t14.5 35.5T620-570t35.5-14.5M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default MaterialBackgroundDotLargeFill;