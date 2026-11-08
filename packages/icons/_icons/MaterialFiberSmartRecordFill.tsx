import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFiberSmartRecordFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-200q-117 0-198.5-81.5T80-480t81.5-198.5T360-760t198.5 81.5T640-480t-81.5 198.5T360-200m285-7v-60q78-14 126.5-75.5T820-483t-49-140-126-75v-60q102 16 168.5 94T880-483t-66.5 181T645-207" /></svg>;
export default MaterialFiberSmartRecordFill;