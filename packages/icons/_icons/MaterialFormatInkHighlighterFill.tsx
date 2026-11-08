import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatInkHighlighterFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80 0v-121h800V0zm343-631 200 200-172 172q-19 19-52.5 19T346-259l-11-11-43 43H137l120-120-4-4q-22-22-21.5-55.5T254-462zm43-43 189-189q17-17 43-17t43 17l112 112q17 17 16.5 45.5T852-660L666-474z" /></svg>;
export default MaterialFormatInkHighlighterFill;