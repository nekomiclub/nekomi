import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRoofing: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M367-160v-226h226v226zm60-60h106v-106H427zM76-456l-36-48 440-337 178 136v-95h100v172l162 124-36 48-404-309zm404 183" /></svg>;
export default MaterialRoofing;