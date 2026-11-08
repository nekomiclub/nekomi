import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInkHighlighterOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m636-404-43-42 217-217-115-115-217 217-42-43 219-219q17-17 43-17t43 17l112 112q17 17 16.5 45.5T852-620zM817-55 552-320 384-152q-19 19-52.5 19T279-152l-11-11-43 43H70l120-120-4-4q-22-22-21.5-55.5T187-355l165-165L55-817l42-42L859-97zM217-300l115 115 178-178-115-115zm235-120" /></svg>;
export default MaterialInkHighlighterOff;