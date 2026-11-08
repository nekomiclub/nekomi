import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDropdownMenu: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m580-380 140-140H440zM320-200q-117 0-198.5-81.5T40-480t81.5-198.5T320-760h320q117 0 198.5 81.5T920-480t-81.5 198.5T640-200zm0-60h320q91.3 0 155.65-64.29T860-479.79 795.65-635.5 640-700H320q-91.3 0-155.65 64.29T100-480.21t64.35 155.71T320-260" /></svg>;
export default MaterialDropdownMenu;