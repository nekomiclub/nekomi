import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMusicCast: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M425-203q-42-42-42-105t42-105 105-42q26 0 46.5 7.5T617-426v-374h263v110H677v382q0 63-42 105t-105 42-105-42M80-308q0-98 34-180.5T208-631t142.5-93.5T530-758v60q-85 0-156.5 29T250-588t-81 123.5T140-308zm120 0q0-73 24.5-134t68-104.5 104-67.5T530-638v60q-123 0-196.5 73T260-308z" /></svg>;
export default MaterialMusicCast;