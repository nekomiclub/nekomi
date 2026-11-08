import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStars2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m323-245 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120zm-90 125 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149zm457-560 21-89-71-59 94-8 36-84 36 84 94 8-71 59 21 89-80-47zM480-485" /></svg>;
export default MaterialStars2;