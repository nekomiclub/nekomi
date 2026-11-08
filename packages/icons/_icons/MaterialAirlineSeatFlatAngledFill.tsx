import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAirlineSeatFlatAngledFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m367-452 96-263 346 126q59 21 85 77.5t5 116.5l-44 121zM63-435l20-56 752 273-20 57zm110-98q-35-35-35-85t35-85 85-35 85 35 35 85-35 85-85 35-85-35" /></svg>;
export default MaterialAirlineSeatFlatAngledFill;