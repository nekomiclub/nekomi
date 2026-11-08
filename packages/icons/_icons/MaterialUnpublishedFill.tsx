import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUnpublishedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M833-41 718-156q-50 36-110 56T480-80q-85 0-158-30.5T195-195t-84.5-127T80-480q0-68 20-128t56-110L26-848l43-43L876-84zm-29-201L585-462l119-119-46-45-119 119-297-297q50-36 110-56t128-20q84 0 157 31t127 85 85 127 31 157q0 68-20 128t-56 110m-383-56 78-78-46-45-32 32-120-120-45 45z" /></svg>;
export default MaterialUnpublishedFill;