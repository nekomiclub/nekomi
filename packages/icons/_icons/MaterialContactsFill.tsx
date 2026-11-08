import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialContactsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M144-40v-60h672v60zm0-820v-60h672v60zm336 416q50 0 84-34t34-84-34-84-84-34-84 34-34 84 34 84 84 34M132-160q-24 0-42-18t-18-42v-520q0-26 18-43t42-17h696q24 0 42 18t18 42v520q0 24-18 42t-42 18zm88-60h520q-49-63-120.5-94.5T480-346q-69 0-139 31.5T220-220" /></svg>;
export default MaterialContactsFill;