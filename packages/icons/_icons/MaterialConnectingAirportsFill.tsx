import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialConnectingAirportsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m249-409 78-205H184l-56 82H80l38-133-38-132h48l56 82h143l-78-205h60l143 205h132q21 0 36 14.5t15 35.5-15 36-36 15H452L309-409zM652-40 509-245H377q-21 0-36-15t-15-36 15-35.5 36-14.5h132l143-205h60l-79 205h144l56-82h47l-38 132 38 133h-47l-56-82H633l79 205z" /></svg>;
export default MaterialConnectingAirportsFill;