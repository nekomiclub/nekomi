import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSendTimeExtensionFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M536-81v-148l158-44-158-44v-148l384 192zm-356-39q-24 0-42-18t-18-42v-176q44-5 75.5-34.5T227-463t-31.5-72.5T120-570v-176q0-24 18-42t42-18h177q11-40 39.5-67t68.5-27 68.5 27 39.5 67h173q24 0 42 18t18 42v349L476-562v336q-49-5-82 26.5T356-120z" /></svg>;
export default MaterialSendTimeExtensionFill;