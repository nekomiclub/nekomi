import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPlayLesson: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M493-139q3 14 11.5 31T522-79H180q-24 0-42-18t-18-42v-681q0-24 18-42t42-18h520q24 0 42 18t18 42v339q-13.5-2-30-2t-30 2v-339H462v278l-96-59-96 59v-278h-90v681zm98.5 43.5Q536-151 536-232t55.5-136.5T728-424t136.5 55.5T920-232 864.5-95.5 728-40 591.5-95.5M679-140l143-92-143-92zM270-820h192zm223 0H180h520-223z" /></svg>;
export default MaterialPlayLesson;