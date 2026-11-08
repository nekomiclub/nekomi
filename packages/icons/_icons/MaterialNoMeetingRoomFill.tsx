import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNoMeetingRoomFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m749-319-60-60v-356h-87v269L228-840h374v45h147zm81 252L602-295v175H120v-60h92v-506L85-812l43-43 745 745z" /></svg>;
export default MaterialNoMeetingRoomFill;