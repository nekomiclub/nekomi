import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwitchAccess2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M532-160v-143h60v83h82v60zm246 0v-60h82v-83h60v143zM532-657v-143h142v60h-82v83zm328 0v-83h-82v-60h142v143zM693-330l-42-42 75-78H200v-60h526l-75-77 42-42 148 149zM40-160v-640h388v230H140v180h288v230z" /></svg>;
export default MaterialSwitchAccess2Fill;