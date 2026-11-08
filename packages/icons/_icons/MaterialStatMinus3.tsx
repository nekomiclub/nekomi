import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStatMinus3: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-83 240-323l42-42 198 198 198-198 42 42zm0-246L240-569l42-42 198 198 198-198 42 42zm0-246L240-815l42-42 198 198 198-198 42 42z" /></svg>;
export default MaterialStatMinus3;