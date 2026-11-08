import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHourglassCheckFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-80v-60h88v-127q0-71 40-129t106-84q-66-27-106-85t-40-129v-126h-88v-60h640v60h-88v126q0 71-40 129t-106 85q12 5 26.5 12.5T617-452q-63 29-100 92t-37 131q0 41 13 79t38 70zm436-15.5Q540-151 540-229q0-79 56-135t134-56 134 56 56 135q0 78-56 133.5T730-40 596-95.5M703-145l141-142-28-28-113 114-59-60-28 29z" /></svg>;
export default MaterialHourglassCheckFill;