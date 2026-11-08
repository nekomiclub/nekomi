import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTimer2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M330-200v-230q0-36 27-63t63-27h170v-160H330v-80h250q36 0 63 27t27 63v140q0 36-27 63t-63 27H410v160h260v80z" /></svg>;
export default MaterialTimer2;