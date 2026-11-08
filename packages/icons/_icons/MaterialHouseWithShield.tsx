import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHouseWithShield: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-255q61-15 100.5-70T620-446.28v-88.95L480-605l-140 69.77v88.95q0 66.28 39.81 121.3Q419.63-269.96 480-255M160-120v-480l320-240 320 240v480zm60-60h520v-394L480-763 220-574zm260-292" /></svg>;
export default MaterialHouseWithShield;