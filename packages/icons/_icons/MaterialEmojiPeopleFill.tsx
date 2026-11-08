import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEmojiPeopleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M368-80v-538q-95-20-152.5-85.5T158-856h60q0 78 60.5 131T426-672h100q38 0 56 6.5t46 30.5l184 172-43 43-185-174v514h-60v-255h-96v255zm56.5-675.5Q403-777 403-807t21.5-51.5T476-880t51.5 21.5T549-807t-21.5 51.5T476-734t-51.5-21.5" /></svg>;
export default MaterialEmojiPeopleFill;