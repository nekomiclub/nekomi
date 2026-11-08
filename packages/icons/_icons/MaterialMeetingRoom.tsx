import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMeetingRoom: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h92v-660h390v45h147v615h91v60H689v-615h-87v615zm152-660v600zm207.5 328.5Q491-463 491-480t-11.5-28.5T451-520t-28.5 11.5T411-480t11.5 28.5T451-440t28.5-11.5M272-180h270v-600H272z" /></svg>;
export default MaterialMeetingRoom;