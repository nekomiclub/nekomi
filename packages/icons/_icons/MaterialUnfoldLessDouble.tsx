import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUnfoldLessDouble: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m354-1-42-42 168-169L650-42 608 0 481-127zm0-200-42-42 168-169 170 170-42 42-127-127zm127-347L311-718l43-42 126 126 127-126 43 43zm0-200L311-918l43-42 126 126 127-126 43 43z" /></svg>;
export default MaterialUnfoldLessDouble;