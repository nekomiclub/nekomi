import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddPhotoAlternateFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h409q-22 24-33 54.5T545-723q0 74 52 126t126 52q32 0 62.5-11t54.5-33v409q0 24-18 42t-42 18zm60-162h480L576-474 449-307l-94-124zm453-323v-87h-88v-60h88v-88h60v88h87v60h-87v87z" /></svg>;
export default MaterialAddPhotoAlternateFill;