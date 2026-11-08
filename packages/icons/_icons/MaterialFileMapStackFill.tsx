import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFileMapStackFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18zM140-80q-24 0-42-18t-18-42v-620h60v620h620v60zm369-473q-13-13-13-31t13-31 31-13 31 13 13 31-13 31-31 13-31-13m31 233q89-75 132.5-140T716-580q0-83-53.5-131.5T540-760t-122.5 48.5T364-580q0 55 43.5 120T540-320" /></svg>;
export default MaterialFileMapStackFill;