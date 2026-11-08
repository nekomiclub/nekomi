import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBorderColor: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80 0v-121h800V0zm140-301h44l391-391-22-22-22-22-391 391zm-60 60v-128l494-494q9-9 20-13t22-4 22.5 4 19.5 13l44 44q9 8 13.5 19.5T800-777t-4.5 22-13.5 20L288-241zm576-537-41-41zm-81 86-22-22-22-22z" /></svg>;
export default MaterialBorderColor;