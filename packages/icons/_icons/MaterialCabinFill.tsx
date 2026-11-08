import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCabinFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-180h520v-100H220zm0-160h520v-100H220zm0-160h520v-67l-43-33H264l-44 33zm123-160h275L480-765zM160-120v-401l-84 64-36-48 120-91v-124h60v78l260-198 440 336-36 47-84-64v401zm0-640q0-46 32.5-78t77.5-32q21 0 35.5-15t14.5-35h60q0 45-32 77.5T270-810q-20 0-35 14.5T220-760z" /></svg>;
export default MaterialCabinFill;