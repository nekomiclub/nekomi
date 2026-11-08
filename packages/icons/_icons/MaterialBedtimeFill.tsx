import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBedtimeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M484-80q-84 0-157.5-32t-128-86.5-86.5-128T80-484q0-146 93-257.5T410-880q-18 98 11 192.5T521-522t165.5 100.5T880-410q-26 144-138 237T484-80" /></svg>;
export default MaterialBedtimeFill;