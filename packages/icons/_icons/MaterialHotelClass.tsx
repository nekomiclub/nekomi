import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHotelClass: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m668-380 172-148 85 7-189 162 57 246-74-45zm-93-289-57-134 32-77 92 217zM263-245l157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120zm-90 125 65-281L20-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149zm247-345" /></svg>;
export default MaterialHotelClass;