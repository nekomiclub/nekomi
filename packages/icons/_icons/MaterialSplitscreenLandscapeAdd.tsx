import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSplitscreenLandscapeAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M510-280h250v-400H510zm-310 0h250v-400H200zm600-370v-90h-90v-60h90v-90h60v90h90v60h-90v90zM140-220v-520zm740-369v369q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h510v60H140v520h680v-369z" /></svg>;
export default MaterialSplitscreenLandscapeAdd;