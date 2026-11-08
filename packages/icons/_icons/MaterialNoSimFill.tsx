import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNoSimFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M800-237 278-759l121-121h341q25 0 42.5 18t17.5 42zm46 215L657-211l42-42 101 101v12q0 24-18 42t-42 18H220q-24 0-42-18t-18-42v-495l37-36L39-829l42-42L888-64z" /></svg>;
export default MaterialNoSimFill;