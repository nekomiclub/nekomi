import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPostAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18.05-42 18.06-18 42.13-18H575v60H180v600h600v-395h60v394.92Q840-156 822-138t-42 18zm141-157v-60h319v60zm0-127v-60h319v60zm0-127v-60h319v60zm372-74v-87.5h-88V-752h88v-88h60v88h87v60h-87.5v87z" /></svg>;
export default MaterialPostAddFill;