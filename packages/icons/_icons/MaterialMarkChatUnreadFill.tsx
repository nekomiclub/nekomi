import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMarkChatUnreadFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M682-751q-32-32-32-78t32-78 78-32 78 32 32 78-32 78-78 32-78-32M80-80v-740q0-24 18-42t42-18h437q-4 14-6 29.5t-1 30.5q4 76 59 128.5T760-639q33 0 63.5-11t56.5-32v382q0 24-18 42t-42 18H240z" /></svg>;
export default MaterialMarkChatUnreadFill;