import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShieldWithHouseFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m480-592 294 228q-26 85-84.5 152T550-107v-243H410v242q-81-38-139.5-105T186-365zm0-289 320 120v238q0 22-2.5 48.5T790-427L480-667 170-427q-5-21-7.5-47.5T160-523v-238z" /></svg>;
export default MaterialShieldWithHouseFill;