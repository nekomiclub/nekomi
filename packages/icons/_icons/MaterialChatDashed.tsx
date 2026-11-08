import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChatDashed: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-470v-180h60v180zm0 390v-330h60v190l74-80h116v60h-90zm310-160v-60h180v60zm240 0v-60h190v-110h60v110q0 24-18 42t-42 18zm190-230v-180h60v180zm0-239v-111H630v-60h190q24 0 42 18t18 42v111zM390-820v-60h180v60zM80-709v-111q0-24 18-42t42-18h190v60H140v111z" /></svg>;
export default MaterialChatDashed;