import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMoonStarsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M614-668 508-774l106-106 106 106zm200 120-66-66 66-66 66 66zM483-80q-84 0-157.5-32t-128-86.5-86.5-128T79-484q0-146 93-257.5T409-880q-18 98 11 192.5T520-522t165.5 100.5T879-410q-26 144-138 237T483-80" /></svg>;
export default MaterialMoonStarsFill;