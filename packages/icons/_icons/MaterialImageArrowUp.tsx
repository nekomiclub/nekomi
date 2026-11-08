import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialImageArrowUp: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h394v60H180v600h600v-348h60v348q0 24-18 42t-42 18zm56-157h489L578-473 446-302l-93-127zm508-307v-181l-74 73-42-42 146-146 146 146-42 42-74-73v181z" /></svg>;
export default MaterialImageArrowUp;