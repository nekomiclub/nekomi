import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTabDuplicateFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M305-245q-24.75 0-42.37-17.63Q245-280.25 245-305v-515q0-24.75 17.63-42.38Q280.25-880 305-880h515q24.75 0 42.38 17.62Q880-844.75 880-820v515q0 24.75-17.62 42.37Q844.75-245 820-245zM245-80v-60h60v60zM140-740H80q0-24.75 17.63-42.38Q115.25-800 140-800zM410-80v-60h60v60zm165 0v-60h60v60zm-435-60v60q-24.75 0-42.37-17.63Q80-115.25 80-140zM80-245v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm660 435h60q0 24.75-17.62 42.37Q764.75-80 740-80zM520-640h300v-180H520z" /></svg>;
export default MaterialTabDuplicateFill;