import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatH2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-280v-400h60v170h180v-170h60v400h-60v-170H180v170zm420 0v-170q0-24.75 17.63-42.38Q575.25-510 600-510h180v-110H540v-60h240q25 0 42.5 17.62Q840-644.75 840-620v110q0 24.75-17.62 42.37Q804.75-450 780-450H600v110h240v60z" /></svg>;
export default MaterialFormatH2;