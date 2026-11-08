import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTurnSharpLeft: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M650-120v-250H310q-24.75 0-42.37-17.63Q250-405.25 250-430v-296l-90 90-42-42 162-162 162 162-42 42-90-90v296h340q24.75 0 42.38 17.62Q710-394.75 710-370v250z" /></svg>;
export default MaterialTurnSharpLeft;