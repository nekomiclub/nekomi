import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLinearScale: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M680-280q-74 0-129-47t-69-123H276q-10 29-36.5 49.5T179-380q-41 0-70.5-29.5T79-480t29.5-70.5T179-580q34 0 60.5 20.5T276-510h206q14-76 69-123t129-47q83 0 141.5 58.5T880-480t-58.5 141.5T680-280m99.5-100.5Q820-421 820-480t-40.5-99.5T680-620t-99.5 40.5T540-480t40.5 99.5T680-340t99.5-40.5" /></svg>;
export default MaterialLinearScale;