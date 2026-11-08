import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTableConvertFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M510-340h330v160q0 24.75-17.62 42.37Q804.75-120 780-120H510zm0-60v-220h330v220zM120-680v-100q0-24.75 17.63-42.38Q155.25-840 180-840h600q24.75 0 42.38 17.62Q840-804.75 840-780v100zm0 600v-60h94q-45-23-72-65.5T115-301q0-75 52.58-127T295-480v60q-50 0-85 34.91T175-300q0 46 30 80t75 39v-119h60v220z" /></svg>;
export default MaterialTableConvertFill;