import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShadesClosedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-80v-740H80v-60h800v60h-40v740h-75q-14.04-39.38-47.52-64.69T640.05-170Q595-170 562-144.5T516-80h-73q-12.81-39.38-45.91-64.69Q364-170 320.05-170q-45.05 0-78.53 25.31T194-80zm390-740h-60v593h60z" /></svg>;
export default MaterialShadesClosedFill;