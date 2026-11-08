import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPanoramaVerticalFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-80q-17 0-28.5-11.5T160-120q0-8 9.5-35.5T190-229t20.5-108.5T220-480t-9.5-142.5T190-731t-20.5-73.5T160-840q0-17 11.5-28.5T200-880h560q17 0 28.5 11.5T800-840q0 8-9.5 35.5T770-731t-20.5 108.5T740-480t9.5 142.5T770-229t20.5 73.5T800-120q0 17-11.5 28.5T760-80z" /></svg>;
export default MaterialPanoramaVerticalFill;