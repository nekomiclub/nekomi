import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEditLocation: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M350-430h44l146-147-43-43-147 146zm223-180 27-27q3-3 3-7.5t-3-7.5l-28-28q-3-3-7.5-3t-7.5 3l-27 27zm-93 451q133-121 196.5-219.5T740-552q0-118-75.5-193T480-820t-184.5 75T220-552q0 75 65 173.5T480-159m0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480" /></svg>;
export default MaterialEditLocation;