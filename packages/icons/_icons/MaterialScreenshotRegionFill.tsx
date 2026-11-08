import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScreenshotRegionFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M700-60v-140H560v-60h140v-140h60v140h140v60H760v140zM200-200v-200h60v140h140v60zm0-360v-200h200v60H260v140zm500 0v-140H560v-60h200v200z" /></svg>;
export default MaterialScreenshotRegionFill;