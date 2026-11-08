import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAndroidCellDual5Bar: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-384v-181h100v181zm195 0v-244h100v244zm195 0v-289h100v289zm195 0v-331h100v331zm195 0v-416h100v416zM40-160v-164h100v164zm195 0v-164h100v164zm195 0v-164h100v164zm195 0v-164h100v164zm195 0v-164h100v164z" /></svg>;
export default MaterialAndroidCellDual5Bar;