import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNewsstand: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-160v-60h800v60zm89-160v-316h60v316zm159 0v-480h60v480zm159 0v-480h60v480zm275 0L597-600l54-30 162 280z" /></svg>;
export default MaterialNewsstand;