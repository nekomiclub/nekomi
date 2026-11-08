import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPillOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M679-361 361-679l95-95q32-32 73-49t86-17q94 0 159.5 65.5T840-615q0 45-17 86t-49 73zM813-57 594-276l-90 90q-32 32-73 49t-86 17q-94 0-159.5-65.5T120-345q0-45 17-86t49-73l90-90L64-806l43-43L856-99z" /></svg>;
export default MaterialPillOffFill;