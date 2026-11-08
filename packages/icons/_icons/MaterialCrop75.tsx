import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCrop75: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-200q-24 0-42-18t-18-42v-440q0-23 18-41.5t42-18.5h600q24 0 42 18.5t18 41.5v440q0 24-18 42t-42 18zm0-60h600v-440H180zm0 0v-440z" /></svg>;
export default MaterialCrop75;