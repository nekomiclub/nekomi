import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTrailLengthMediumFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M275-280v-60h223q-21-21-36-49.5T442-450H200v-60h242q5-29 19.5-59.5T498-620H280v-60h360q83 0 141.5 58.5T840-480t-58.5 141.5T640-280zm-155 0v-60h125v60z" /></svg>;
export default MaterialTrailLengthMediumFill;