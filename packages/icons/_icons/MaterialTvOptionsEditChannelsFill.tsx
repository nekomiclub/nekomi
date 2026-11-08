import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTvOptionsEditChannelsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-330v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm155 330v-60h161v60zm0-165v-60h541v60zm0-165v-60h541v60zm406 500L476-328l43-43 123 125 235-235 43 42z" /></svg>;
export default MaterialTvOptionsEditChannelsFill;