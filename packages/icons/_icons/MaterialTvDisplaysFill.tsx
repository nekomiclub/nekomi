import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTvDisplaysFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-327v-493q0-25 17.5-42.5T140-880h574v60H140v493zM448-80v-80H300q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h560q24 0 42 18t18 42v440q0 24-18 42t-42 18H712v80z" /></svg>;
export default MaterialTvDisplaysFill;