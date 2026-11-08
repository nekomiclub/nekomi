import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStars2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149zm457-560 21-89-71-59 94-8 36-84 36 84 94 8-71 59 21 89-80-47z" /></svg>;
export default MaterialStars2Fill;