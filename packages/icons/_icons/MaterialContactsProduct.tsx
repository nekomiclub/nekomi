import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialContactsProduct: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M185-80q-16 0-29-13t-13-29v-105q0-90 56-159t144-88q-40 28-62 70.5T259-312v190q0 11 3 22t10 20zm147 0q-17 0-29.5-12.5T290-122v-190q0-70 49.5-119T459-480h189q70 0 119 49t49 119v64q0 70-49 119T648-80zm148-484q-66 0-112-46t-46-112 46-112 112-46 112 46 46 112-46 112-112 46" /></svg>;
export default MaterialContactsProduct;