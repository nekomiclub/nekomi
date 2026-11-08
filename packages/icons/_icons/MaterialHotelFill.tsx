import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHotelFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-200v-585h60v394h353v-309h322q60 0 102.5 42.5T920-555v355h-60v-131H100v131zm154.5-279.5Q164-510 164-555t30.5-75.5T270-661t75.5 30.5T376-555t-30.5 75.5T270-449t-75.5-30.5" /></svg>;
export default MaterialHotelFill;