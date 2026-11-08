import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMerge: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m256-120-42-42 196-196q24-24 32-44t8-59v-265l-90 90-42-42 162-162 162 162-42 42-90-90v265q0 39 8 59t32 44l196 196-42 42-224-224z" /></svg>;
export default MaterialMerge;