import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAirlineSeatIndividualSuiteFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-280v-370h60v310h353v-310h322q60 0 102.5 42.5T920-505v225zm305.5-149.5Q376-460 376-505t-30.5-75.5T270-611t-75.5 30.5T164-505t30.5 75.5T270-399t75.5-30.5" /></svg>;
export default MaterialAirlineSeatIndividualSuiteFill;