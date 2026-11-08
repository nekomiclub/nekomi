import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialListAlt: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M321-295q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m0-164q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m0-164q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m111 337h244v-60H432zm0-164h244v-60H432zm0-164h244v-60H432zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" /></svg>;
export default MaterialListAlt;