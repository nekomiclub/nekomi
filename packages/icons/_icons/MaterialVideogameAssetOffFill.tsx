import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVideogameAssetOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-240q-24 0-42-18t-18-42v-360q0-24 18-42t42-18h100l377 377h-86L61-813l43-43 752 752-43 43-179-179zm186-480h494q24 0 42 18t18 42v360q0 33-22.5 46.5T806-240zm325.5 136.5Q638-570 638-552t13.5 31.5T683-507t31.5-13.5T728-552t-13.5-31.5T683-597t-31.5 13.5M287-343h60v-104h104v-60H347v-104h-60v104H183v60h104z" /></svg>;
export default MaterialVideogameAssetOffFill;