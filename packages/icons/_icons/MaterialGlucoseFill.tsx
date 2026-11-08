import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGlucoseFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M566-80q-33 0-62.5-14T452-133L217-403l49-36q15-11 34-12t35 10l85 56v-425q0-13 9-21.5t21-8.5q13 0 21.5 8.5T480-810v360h90v-200q0-13 9-21.5t21-8.5q13 0 21.5 8.5T630-650v200h80v-160q0-13 9-21.5t21-8.5q13 0 21.5 8.5T770-610v160h90v-80q0-13 9-21.5t21-8.5q13 0 21.5 8.5T920-530v300q0 63-43.5 106.5T770-80zM180-560q-59 0-99.5-40T40-698q0-34 13.5-59t63.5-82l63-72 63 73q51 60 64 84t13 56q0 57-41 97.5T180-560" /></svg>;
export default MaterialGlucoseFill;