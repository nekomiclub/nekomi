import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBarChart4Bars: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-130v-60h800v60zm40-120v-270h100v270zm206 0v-470h100v470zm207 0v-350h100v350zm207 0v-590h100v590z" /></svg>;
export default MaterialBarChart4Bars;