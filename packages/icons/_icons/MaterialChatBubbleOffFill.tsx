import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChatBubbleOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M819-240 178-880h642q23 0 41.5 18.5T880-820v520q0 23-17.5 41.5T819-240m41 212L648-240H240L80-80v-729l-24-23 41-44L903-70z" /></svg>;
export default MaterialChatBubbleOffFill;