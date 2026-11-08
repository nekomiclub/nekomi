import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonRaisedHandFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-40v-60h800v60zm80-120v-210q-39-91-54-147.5T91-631q0-58 14.5-122T146-874q10-22 26.5-33.5T209-919q27 0 41 17.5t14 52.5v131q0 44 17 83t46.5 68 68.5 45.5 84 16.5q81 0 141 12t100 35 59.5 58.5T800-316v156H390v-37q0-38 26-65.5t64-27.5h150v-60H480q-63 0-106.5 45T330-197v37zm207-447q-47-47-47-113t47-113 113-47 113 47 47 113-47 113-113 47-113-47" /></svg>;
export default MaterialPersonRaisedHandFill;