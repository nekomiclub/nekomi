import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCircleNotificationsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M519.5-233q16.5-17 16.5-40H423q0 23 17 40t40 17 39.5-17M286-333h387v-60h-40v-115q0-60-31.5-110.5T513-680v-30q0-14-9.5-23.5T480-743t-24 9.5-10 23.5v30q-57 11-88.5 59T326-514v121h-40zM480-80q-82 0-155-31.5t-127.5-86-86-127.5T80-480q0-83 31.5-156t86-127T325-848.5 480-880q83 0 156 31.5T763-763t85.5 127T880-480q0 82-31.5 155T763-197.5t-127 86T480-80" /></svg>;
export default MaterialCircleNotificationsFill;