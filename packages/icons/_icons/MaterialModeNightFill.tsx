import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialModeNightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M382-880q81 0 152 30.5t124.5 84 84 126.5T773-481t-31 158.5T658-195t-124.5 84.5T381-80q-54 0-106-13t-87-33q88-66 136.5-158T373-479q0-104-49-197T187-833q35-20 87.5-33.5T382-880" /></svg>;
export default MaterialModeNightFill;