import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVideogameAssetOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M683-507q-18 0-31.5-13.5T638-552t13.5-31.5T683-597t31.5 13.5T728-552t-13.5 31.5T683-507M287-343v-104H183v-60h104v-104h60v104h104v60H347v104zM140-240q-24 0-42-18t-18-42v-360q0-24 18-42t42-18h100l60 60H140v360h434L61-813l43-43 752 752-43 43-179-179zm740-60q0 23.64-18 41.82T820-240v-420H386l-60-60h494q24 0 42 18t18 42zM603-450" /></svg>;
export default MaterialVideogameAssetOff;