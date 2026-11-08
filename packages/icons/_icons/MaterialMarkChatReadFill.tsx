import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMarkChatReadFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M701-160 567-294l42-42 92 91 177-177 42 43zM80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v310H490v270H240z" /></svg>;
export default MaterialMarkChatReadFill;