import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextCompare: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M422-40v-80H180q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h242v-80h60v880zM180-180h242v-111H279v-60h143v-99H279v-60h143v-99H279v-60h143v-111H180zm362-600v-60h238q24 0 42 18t18 42v600q0 24-18 42t-42 18H542v-60h238v-600zm0 330v-60h143v60zm0-159v-60h143v60zM422-480" /></svg>;
export default MaterialTextCompare;