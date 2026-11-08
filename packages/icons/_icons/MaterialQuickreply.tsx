import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialQuickreply: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v280h-60v-280H140v600l74-80h432v60H240zm60-220v-520zM766-40v-200h-60v-240h145l-58 170h87z" /></svg>;
export default MaterialQuickreply;