import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLocationHomeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M558-402q32-32 32-78t-32-78-78-32-78 32-32 78 32 78 78 32 78-32M220-180h512q0-14-2-27t-12-21q-52-40-112.5-61T479-310q-65 0-125.5 21T242-228q-11 8-16.5 21t-5.5 27m-60 60v-480l320-240 320 240v480z" /></svg>;
export default MaterialLocationHomeFill;