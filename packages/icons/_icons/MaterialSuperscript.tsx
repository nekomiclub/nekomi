import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSuperscript: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M769-630v-70q0-13 8.5-21.5T799-730h91v-40H769v-30h121q13 0 21.5 8.5T920-770v40q0 13-8.5 21.5T890-700h-91v40h121v30zM235-160l185-291-172-269h86l135 213 135-213h86L518-451l185 291h-85L469-394 320-160z" /></svg>;
export default MaterialSuperscript;