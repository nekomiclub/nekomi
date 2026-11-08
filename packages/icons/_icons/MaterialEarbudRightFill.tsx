import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEarbudRightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M546-80q-24 0-42-18t-18-42v-660h294q24 0 42 18t18 42v189q0 24-18 42t-42 18h-63v351q0 24-18 42t-42 18zM356-409q-98 0-167-69t-69-167 69-166.5T356-880h30v471z" /></svg>;
export default MaterialEarbudRightFill;