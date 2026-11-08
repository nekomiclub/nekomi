import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialProblem: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M282-331q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m-51-121h60v-191h-60zm179 80h319v-60H410zm0-171h319v-60H410zM132-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h696q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h696v-520H132zm0 0v-520z" /></svg>;
export default MaterialProblem;