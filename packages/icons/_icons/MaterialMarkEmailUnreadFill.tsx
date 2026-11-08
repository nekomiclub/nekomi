import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMarkEmailUnreadFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M682-682q-32-32-32-78t32-78 78-32 78 32 32 78-32 78-78 32-78-32M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h434q-3 15-4 30t1 30q4 35 19.5 65.5T631-621l-151 99-340-221v58l340 223 195-128q20 10 41 15t44 5q33 0 63.5-11t56.5-32v393q0 24-18 42t-42 18z" /></svg>;
export default MaterialMarkEmailUnreadFill;