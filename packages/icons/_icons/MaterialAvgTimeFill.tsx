import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAvgTimeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-860v-60h240v60zm40 513-53-107q-4-8-11.5-12t-15.5-4H121q11-140 114-235.5T480-801q67 0 125.5 22T710-717l51-51 43 43-51 51q32 36 56.5 86T839-470H659l-72-144q-8-17-27-17t-27 17zM235.5-176Q133-271 121-410h180l72 144q8 17 27 17t27-17l133-267 53 107q4 8 11.5 12t15.5 4h199q-12 139-114.5 234T480-81t-244.5-95" /></svg>;
export default MaterialAvgTimeFill;