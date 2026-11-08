import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialToolsPhillips: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-120v-60h400v60zm0-120v-400l150-200h100l150 200v400zm60-60h280v-111L480-551 340-411zm0-196 110-110v-161L340-620zm280 0v-124L510-767v161zm0 196H340z" /></svg>;
export default MaterialToolsPhillips;