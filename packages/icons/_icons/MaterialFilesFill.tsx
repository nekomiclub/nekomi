import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilesFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24.75 0-42.37-17.63Q80-195.25 80-220v-160h360q24.75 0 42.38-17.63Q500-415.25 500-440v-360h320q24.75 0 42.38 17.62Q880-764.75 880-740v520q0 24.75-17.62 42.37Q844.75-160 820-160zM80-406v-254q0-24.75 17.63-42.38Q115.25-720 140-720h254zm119-34 241-241v241z" /></svg>;
export default MaterialFilesFill;