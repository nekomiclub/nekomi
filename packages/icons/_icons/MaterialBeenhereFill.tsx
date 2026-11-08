import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBeenhereFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-40 184-262q-11-8-17.5-21t-6.5-27v-510q0-24 18-42t42-18h520q24 0 42 18t18 42v510q0 14-6.5 27T776-262zm-42-320 226-226-43-42-184 184-99-99-42 42z" /></svg>;
export default MaterialBeenhereFill;