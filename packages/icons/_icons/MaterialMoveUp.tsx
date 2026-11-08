import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMoveUp: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-160q-117 0-198.5-81.5T40-440q0-118 83.5-197.5T323-711l-86-86 43-43 160 160-160 160-43-43 89-89q-92-2-159 59.5T100-440q0 92 64 156t156 64h120v60zm200-360v-280h360v280zm0 360v-280h360v280zm60-60h240v-160H580z" /></svg>;
export default MaterialMoveUp;