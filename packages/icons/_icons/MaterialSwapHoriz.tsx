import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwapHoriz: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M273-160 80-353l193-193 42 42-121 121h316v60H194l121 121zm414-254-42-42 121-121H450v-60h316L645-758l42-42 193 193z" /></svg>;
export default MaterialSwapHoriz;