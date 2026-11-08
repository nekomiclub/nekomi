import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatInkHighlighter: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80 0v-121h800V0zm501-474L466-589 284-407l115 115zm-72-158 115 115 186-186-115-115zm-64-21 200 200-194 194q-19 19-52.5 19T346-259l-11-11-43 43H137l120-120-4-4q-22-22-21.5-55.5T254-462zm0 0 210-210q17-17 43-17t43 17l112 112q17 17 16.5 45.5T852-660L645-453z" /></svg>;
export default MaterialFormatInkHighlighter;