import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialArrowAndEdgeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-120 334-266l42-43 74 74v-225q0-24.75-17.62-42.38Q414.75-520 390-520H100q-24.75 0-42.37-17.63Q40-555.25 40-580v-260h60v260h290q26.82 0 49.91 11T480-539q17-19 40.09-30T570-580h290v-260h60v260q0 24.75-17.62 42.37Q884.75-520 860-520H570q-24.75 0-42.37 17.62Q510-484.75 510-460v225l74-73 42 42z" /></svg>;
export default MaterialArrowAndEdgeFill;