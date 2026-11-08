import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAirlinesFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m80-160 440-640h360L760-160zm499.58-260q33.42 0 56.92-23.08 23.5-23.07 23.5-56.5 0-33.42-23.28-56.92t-57-23.5T523-556.72t-23 57T523.08-443q23.07 23 56.5 23" /></svg>;
export default MaterialAirlinesFill;