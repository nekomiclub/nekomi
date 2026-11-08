import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTravelFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m393-119-95-179-180-96 59-59 148 27 122-121-327-139 72-72 396 69 133-133q21-21 50.5-21t50.5 21 21 50.5-21 50.5L689-588l69 396-72 72-139-327-121 122 26 147z" /></svg>;
export default MaterialTravelFill;