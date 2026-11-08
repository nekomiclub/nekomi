import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTimer10: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M535-280h185v-400H535zm0 80q-33.33 0-56.67-23.33Q455-246.67 455-280v-400q0-33.33 23.33-56.67Q501.67-760 535-760h185q33.33 0 56.67 23.33Q800-713.33 800-680v400q0 33.33-23.33 56.67Q753.33-200 720-200zm-280 0v-480h-94v-80h174v560z" /></svg>;
export default MaterialTimer10;