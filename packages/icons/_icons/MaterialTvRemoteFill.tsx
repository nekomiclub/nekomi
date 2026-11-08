import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTvRemoteFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M579-381q41-41 41-99t-41-99-99-41-99 41-41 99 41 99 99 41 99-41M340-40q-24 0-42-18t-18-42v-760q0-24 18-42t42-18h280q24 0 42 18t18 42v760q0 24-18 42t-42 18zm101-401q-16-16-16-39t16-39 39-16 39 16 16 39-16 39-39 16-39-16m60.5-297.5Q510-747 510-760t-8.5-21.5T480-790t-21.5 8.5T450-760t8.5 21.5T480-730t21.5-8.5" /></svg>;
export default MaterialTvRemoteFill;