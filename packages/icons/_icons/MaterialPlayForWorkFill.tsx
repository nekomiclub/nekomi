import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPlayForWorkFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M311-225.5Q240-291 240-388h60q0 72 53.5 120T480-220t126.5-48T660-388h60q0 97-71 162.5T480-160t-169-65.5M477-358 316-519l42-43 89 89v-285h60v284l88-88 43 43z" /></svg>;
export default MaterialPlayForWorkFill;