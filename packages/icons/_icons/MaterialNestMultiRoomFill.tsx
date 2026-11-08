import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestMultiRoomFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m160-600 320-240 320 240zm0 480v-180h370v180zm430 0v-180h210v180zM160-360v-180h210v180zm270 0v-180h370v180z" /></svg>;
export default MaterialNestMultiRoomFill;