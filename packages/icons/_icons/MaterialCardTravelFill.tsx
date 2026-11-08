import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCardTravelFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M293-720v-100q0-25 17.5-42.5T353-880h253q25 0 42.5 17.5T666-820v100h154q25 0 42.5 17.5T880-660v480q0 25-17.5 42.5T820-120H140q-25 0-42.5-17.5T80-180v-480q0-25 17.5-42.5T140-720zm60 0h253v-100H353zM140-277h680v-108H140z" /></svg>;
export default MaterialCardTravelFill;