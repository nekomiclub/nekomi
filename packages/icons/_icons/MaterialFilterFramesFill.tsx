import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilterFramesFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-80q-24 0-42-18t-18-41.95v-599.17q0-23.95 18-41.91Q116-799 140-799h180l160-161 160 160.67h180q24 0 42 18.09 18 18.1 18 42.24v599.06Q880-116 862-98t-42 18zm0-60h680v-599H140zm100-100v-399h480v399z" /></svg>;
export default MaterialFilterFramesFill;