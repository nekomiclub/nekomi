import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFanFocus: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80 352-209l42-42 56 56v-272h60v272l56-56 42 42zM233-233 105-362l42-42 56 56v-272h60v272l56-56 42 42zm494 0L599-362l42-42 56 56v-272h60v272l56-56 42 42zM80-531v-249q0-24 18-42t42-18h680q24 0 42 18t18 42v249h-60v-249H140v249z" /></svg>;
export default MaterialFanFocus;