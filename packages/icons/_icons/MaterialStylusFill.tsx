import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStylusFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M167-120q-21 5-36.5-10.5T120-167l36-169 180 180zm221-70L190-388l443-443q17-17 42-17t42 17l114 114q17 17 17 42t-17 42z" /></svg>;
export default MaterialStylusFill;