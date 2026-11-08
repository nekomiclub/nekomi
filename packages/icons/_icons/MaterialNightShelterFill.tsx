import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNightShelterFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-240h40v-60h320v60h40v-160q0-33-23.5-56.5T600-480H460v140H320v-180h-40zm145.5-134.5Q440-389 440-410t-14.5-35.5T390-460t-35.5 14.5T340-410t14.5 35.5T390-360t35.5-14.5M160-120v-480l320-240 320 240v480z" /></svg>;
export default MaterialNightShelterFill;