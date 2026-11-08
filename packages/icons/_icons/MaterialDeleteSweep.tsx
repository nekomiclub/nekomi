import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDeleteSweep: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M600-230v-60h145v60zm0-368v-60h280v60zm0 184v-60h235v60zM125-675H80v-60h170v-45h135v45h170v60h-45v415q0 24-18 42t-42 18H185q-24 0-42-18t-18-42zm60 0v415h265v-415zm0 0v415z" /></svg>;
export default MaterialDeleteSweep;