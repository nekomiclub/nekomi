import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlightLand: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h720v60zm633-209L120-510v-278l79 22 50 144 164 47-36-355 97 28 132 383 183 52q22 7 36.5 25.5T840-398q0 32-25.5 56T753-329" /></svg>;
export default MaterialFlightLand;