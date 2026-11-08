import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSplitscreenAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-533q-24 0-42-18t-18-42v-187q0-24 18-42t42-18h600q24 0 42 18t18 42v187q0 24-18 42t-42 18zm0 413q-24 0-42-18t-18-42v-188q0-24 18-42t42-18h600q24 0 42 18t18 42v33q-9-2-20-3.5t-20-1.5q-75 0-127.5 52.5T620-160q0 11 1 21t3 19zm600 80v-80h-80v-60h80v-80h60v80h80v60h-80v80z" /></svg>;
export default MaterialSplitscreenAddFill;