import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStarHalfFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m637-244-42-178 138-120-182-16-71-168v387zM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149z" /></svg>;
export default MaterialStarHalfFill;