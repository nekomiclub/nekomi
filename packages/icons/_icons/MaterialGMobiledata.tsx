import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGMobiledata: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M340-280q-24 0-42-18t-18-42v-280q0-24 18-42t42-18h240q24 0 40 18t16 42H340v280h240v-110H439v-60h201v170q0 24-18 42t-42 18z" /></svg>;
export default MaterialGMobiledata;