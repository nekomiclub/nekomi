import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatParagraph: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M370-160v-260h-20q-78.85 0-134.43-55.61Q160-531.21 160-610.11q0-78.89 55.57-134.39Q271.15-800 350-800h370v60h-90v580h-60v-580H430v580z" /></svg>;
export default MaterialFormatParagraph;