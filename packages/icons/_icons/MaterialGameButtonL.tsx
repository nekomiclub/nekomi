import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGameButtonL: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-160v-486q0-64 44.5-109T233-800h494q64 0 108.5 45T880-646v486zm60-60h680v-426q0-39-27-66.5T727-740H233q-39 0-66 27.5T140-646zm0 0h680zm284-119h173v-46H474v-235h-50z" /></svg>;
export default MaterialGameButtonL;