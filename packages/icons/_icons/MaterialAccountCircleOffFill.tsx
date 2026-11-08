import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAccountCircleOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-140q52 0 101.5-15t93.5-44L543-331q-16-2-31.5-3.5T480-336q-69 0-134 22t-124 59q60 54 116.5 84.5T480-140m353 99L717-157q-51 38-111.5 57.5T480-80q-83 0-156-31.5T197-197t-85.5-127T80-480q0-64 19.5-124T157-716L26-848l43-43L876-84zm-31-202L566-479q24-20 37.5-48t13.5-60q0-57-40-97t-97-40q-32 0-60 13.5T372-673L243-802q52-38 112.5-58T480-880q83 0 156 31.5T763-763t85.5 127T880-480q0 64-20 124.5T802-243" /></svg>;
export default MaterialAccountCircleOffFill;