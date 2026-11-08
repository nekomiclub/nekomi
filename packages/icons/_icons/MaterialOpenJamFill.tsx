import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOpenJamFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-120v-60h270v-339l78 78 46-46-154-154-154 154 46 46 78-78v191H140q-24 0-42-18t-18-42v-392q0-24 18-42t42-18h680q24 0 42 18t18 42v392q0 24-18 42t-42 18H610v148h110v60z" /></svg>;
export default MaterialOpenJamFill;