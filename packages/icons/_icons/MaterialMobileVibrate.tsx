import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileVibrate: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M301-120q-24.75 0-42.37-17.63Q241-155.25 241-180v-600q0-24.75 17.63-42.38Q276.25-840 301-840h359q24.75 0 42.38 17.62Q720-804.75 720-780v600q0 24.75-17.62 42.37Q684.75-120 660-120zm359-60v-600H301v600zM500-649q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9M0-365v-230h60v230zm120 88v-406h60v406zm780-88v-230h60v230zm-120 88v-406h60v406zm-479 97v-600z" /></svg>;
export default MaterialMobileVibrate;