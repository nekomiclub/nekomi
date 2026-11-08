import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChatBubbleOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M820-240v-580H238l-60-60h642q23 0 41.5 18.5T880-820v520q0 24.75-17.62 42.37Q844.75-240 820-240m40 212L648-240H240L80-80v-729l-24-23 41-44L903-70zM140-749v529l74-80h374z" /></svg>;
export default MaterialChatBubbleOff;