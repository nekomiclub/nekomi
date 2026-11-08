import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVideogameAssetFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-240q-24 0-42-18t-18-42v-360q0-24 18-42t42-18h680q24 0 42 18t18 42v360q0 24-18 42t-42 18zm150-106h60v-104h104v-60H350v-104h-60v104H186v60h104zm334.5-31.5Q638-391 638-409t-13.5-31.5T593-454t-31.5 13.5T548-409t13.5 31.5T593-364t31.5-13.5m90-143Q728-534 728-552t-13.5-31.5T683-597t-31.5 13.5T638-552t13.5 31.5T683-507t31.5-13.5" /></svg>;
export default MaterialVideogameAssetFill;