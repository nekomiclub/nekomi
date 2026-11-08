import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMan: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M420-80v-280h-80v-253q0-24.75 17.63-42.38Q375.25-673 400-673h160q24.75 0 42.38 17.62Q620-637.75 620-613v253h-80v280zm60.08-654q-30.08 0-51.58-21.42t-21.5-51.5 21.42-51.58 51.5-21.5 51.58 21.42 21.5 51.5-21.42 51.58-51.5 21.5" /></svg>;
export default MaterialMan;