import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPostAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h394v60H180v600h600v-394h60v394q0 24-18 42t-42 18zm141-157v-60h319v60zm0-127v-60h319v60zm0-127v-60h319v60zm371-73v-88h-88v-60h88v-88h60v88h88v60h-88v88z" /></svg>;
export default MaterialPostAdd;