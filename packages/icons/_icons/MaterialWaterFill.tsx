import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWaterFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-251v-60q38 0 61.5-23t68.5-23 70 27 64 27 65-27 71-27 70.5 27 64.5 27 64.5-27 70.5-27 68.5 23 61.5 23v60q-47 0-69.5-23T750-297t-64 27-71 27-71-27-64-27-64.5 27-71.5 27-70.5-27-63.5-27-60.5 23T80-251m0-160v-60q38 0 61.5-23t68.5-23 70 27 64 27 65-27 71-27 70.5 27 64.5 27 64.5-27 70.5-27 68.5 23 61.5 23v60q-47 0-69.5-23T750-457t-64 27-71 27-71-27-64-27-64.5 27-71.5 27-70.5-27-63.5-27-60.5 23T80-411m0-160v-60q38 0 61.5-23t68.5-23 70 27 64 27 65-27 71-27 70.5 27 64.5 27 64.5-27 70.5-27 68.5 23 61.5 23v60q-47 0-69.5-23T750-617t-64 27-71 27-71-27-64-27-64.5 27-71.5 27-70.5-27-63.5-27-60.5 23T80-571" /></svg>;
export default MaterialWaterFill;