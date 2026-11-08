import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWatchOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M809-56 635-230 594-80H366l-47-171q-57-35-88-96t-31-133q0-36 9.5-75t29.5-71L57-808l41-41L850-97zM480-260q28 0 53-6t48-18L284-581q-12 24-18 49t-6 52q0 92 64 156t156 64m232-60-44-44q14-23 23-52t9-64q0-92-64-156t-156-64q-35 0-64 9t-52 23l-44-44 46-168h228l47 171q57 35 88 96t31 133q0 42-12.5 85T712-320" /></svg>;
export default MaterialWatchOffFill;