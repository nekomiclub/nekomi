import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInkHighlighterFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m396-564 200 200-212 212q-19 19-52.5 19T279-152l-11-11-43 43H70l120-120-4-4q-22-22-21.5-55.5T187-355zm43-43 216-216q17-17 43-17t43 17l112 112q17 17 16.5 45.5T852-620L639-407z" /></svg>;
export default MaterialInkHighlighterFill;