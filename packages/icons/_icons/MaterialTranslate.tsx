import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTranslate: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m475-80 185-480h79L924-80h-65l-45-117H584L539-80zM162-201l-42-42 201-201q-51-53-85.5-107.5T183-660h65q16 43 43.5 85t72.5 88q46-48 85-117.5T505-740H40v-60h290v-80h60v80h290v60H567q-17 78-61.5 159.5T406-443l102 104-24 63-121-125zm443-51h188l-94-248z" /></svg>;
export default MaterialTranslate;