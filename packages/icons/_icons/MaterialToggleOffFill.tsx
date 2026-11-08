import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialToggleOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-240q-100 0-170-70T40-480t70-170 170-70h400q100 0 170 70t70 170-70 170-170 70zm70.5-168.44q29.5-29.44 29.5-71.5t-29.44-71.56-71.5-29.5-71.56 29.44-29.5 71.5 29.44 71.56 71.5 29.5 71.56-29.44" /></svg>;
export default MaterialToggleOffFill;