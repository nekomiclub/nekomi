import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDonutLarge: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M452-83Q294-95 187.5-208.5T81-480t106.5-271.5T452-877v102q-115 11-192.5 95.5T183-480t77.5 199.5T452-185zm60 0v-102q106-9 179-84t86-181h102q-11 149-114.5 253T512-83m265-427q-12-106-85.5-181T512-776v-102q148 11 252 115t115 253z" /></svg>;
export default MaterialDonutLarge;