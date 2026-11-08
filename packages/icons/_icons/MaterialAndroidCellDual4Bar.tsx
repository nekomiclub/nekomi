import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAndroidCellDual4Bar: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M60-384v-184h100v184zm247 0v-247h100v247zm246 0v-331h100v331zm247 0v-415h100v415zM60-160v-164h100v164zm247 0v-164h100v164zm246 0v-164h100v164zm247 0v-164h100v164z" /></svg>;
export default MaterialAndroidCellDual4Bar;