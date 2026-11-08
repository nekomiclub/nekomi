import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEmoticon: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M250-280q-21 0-35.5-14.5T200-330q0-20 14.5-35t35.5-15q20 0 35 15t15 35q0 21-15 35.5T250-280m0-300q-21 0-35.5-14.5T200-630q0-20 14.5-35t35.5-15q20 0 35 15t15 35q0 21-15 35.5T250-580m150 130v-60h160v60zm289 205-49-33q29-45 44.5-95.5T700-480q0-67-22-127t-63-108l46-38q46 56 72.5 125.5T760-480q0 66-19 125t-52 110" /></svg>;
export default MaterialEmoticon;