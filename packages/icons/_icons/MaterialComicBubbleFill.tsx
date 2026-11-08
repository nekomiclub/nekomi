import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialComicBubbleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M440-124 324-240H160v-164L44-520l116-116v-164h164l116-116 116 116h164v164l116 116-116 116 129 253q5 10 3.5 19t-8.5 16-16 8.5-19-3.5L556-240z" /></svg>;
export default MaterialComicBubbleFill;