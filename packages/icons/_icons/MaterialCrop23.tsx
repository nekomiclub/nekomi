import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCrop23: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M300-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h360q24 0 42 18t18 42v680q0 24-18 42t-42 18zm0-60h360v-680H300zm0 0v-680z" /></svg>;
export default MaterialCrop23;