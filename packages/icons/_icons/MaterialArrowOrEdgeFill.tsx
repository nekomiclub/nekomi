import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialArrowOrEdgeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M300-120 154-266l42-43 74 74v-285H100q-24.75 0-42.37-17.63Q40-555.25 40-580v-260h60v260h170q24.75 0 42.38 17.62Q330-544.75 330-520v285l74-73 42 42zm359 0L513-266l42-43 74 74v-285q0-24.75 17.63-42.38Q664.25-580 689-580h171v-260h60v260q0 24.75-17.62 42.37Q884.75-520 860-520H689v285l74-73 42 42z" /></svg>;
export default MaterialArrowOrEdgeFill;