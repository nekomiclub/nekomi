import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilterFrames: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-80q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h180l160-160 160 160h180q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h680v-600H140zm100-100v-400h480v400zm60-60h360v-280H300zm180-139" /></svg>;
export default MaterialFilterFrames;