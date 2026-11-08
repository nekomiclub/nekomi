import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPlaneContrails: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m371-80-42-43 173-173 43 42zm207 0-43-42 154-154 42 43zM123-534l-43-43 153-153 43 43zm0 206-43-42 174-174 43 42zm648-26-99-247-97 98 20 97-34 34-68-121-121-68 34-34 98 20 97-97-247-99 45-42 297 47 98-99q7-7 16-10.5t19-3.5 19 3.5 17 11.5q8 7 11.5 16t3.5 18q0 10-4 19t-12 17l-98 98 47 297z" /></svg>;
export default MaterialPlaneContrails;