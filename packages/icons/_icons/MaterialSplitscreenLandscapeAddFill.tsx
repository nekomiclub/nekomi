import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSplitscreenLandscapeAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M800-650v-90h-90v-60h90v-90h60v90h90v60h-90v90zM200-280h250v-400H200zm680-317v377q0 24.75-17.62 42.37Q844.75-160 820-160H140q-24.75 0-42.37-17.63Q80-195.25 80-220v-520q0-24.75 17.63-42.38Q115.25-800 140-800h512q-2 8-2 15v14.5q0 25.5 6.5 48T674-680H510v400h250v-324q16 7 33 10.5t36 3.5q13.43 0 26.21-1.5Q868-593 880-597" /></svg>;
export default MaterialSplitscreenLandscapeAddFill;