import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTrailLengthShortFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M600-280q-73 0-129-46.5T402-450H160v-60h242q5-32 20-61.5t37-48.5H240v-60h360q83 0 141.5 58.5T800-480t-58.5 141.5T600-280m-320 0v-60h120v60z" /></svg>;
export default MaterialTrailLengthShortFill;