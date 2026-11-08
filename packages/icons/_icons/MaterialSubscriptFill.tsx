import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSubscriptFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M769-160v-70q0-13 8.5-21.5T799-260h91v-40H769v-30h121q13 0 21.5 8.5T920-300v40q0 13-8.5 21.5T890-230h-91v40h121v30zm-534-80 185-291-172-269h86l135 213 135-213h86L518-531l185 291h-85L469-474 320-240z" /></svg>;
export default MaterialSubscriptFill;