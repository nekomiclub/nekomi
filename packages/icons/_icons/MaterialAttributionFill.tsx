import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAttributionFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M436-207h89v-180h58v-183q0-24-25.5-35.5T480-617q-51 0-77 11.5T377-570v183h59zm-113 96q-73-31-127-85t-85-127-31-157 31-157 85-127 127-85 157-31 157 31 127 85 85 127 31 157-31 157-85 127-127 85-157 31-157-31m195.5-550.5Q534-677 534-700t-15.5-38.5T480-754t-38.5 15.5T426-700t15.5 38.5T480-646t38.5-15.5" /></svg>;
export default MaterialAttributionFill;