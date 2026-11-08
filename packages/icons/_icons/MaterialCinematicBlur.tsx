import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCinematicBlur: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m140-840 74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h112q24 0 42 18t18 42v600q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-600q0-24 18-42t42-18m0 212v448h680v-448zm0 0v448zm180 388h320v-32q0-42-42.5-65T480-360t-117.5 23-42.5 65zm212.5-201.5Q554-463 554-494t-21.5-52.5T480-568t-52.5 21.5T406-494t21.5 52.5T480-420t52.5-21.5" /></svg>;
export default MaterialCinematicBlur;