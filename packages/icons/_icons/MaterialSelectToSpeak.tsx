import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSelectToSpeak: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M560-131v-62q97-28 158.5-107.5T780-481t-61-181-159-107v-62q124 28 202 125.5T840-481t-78 224.5T560-131m-80-29L280-360H120v-240h160l200-200zm60-152v-337q55 17 87.5 64T660-480q0 57-33 104t-87 64m-120 1v-337L307-540H180v120h127zM40-688v-232h232v60H100v172zM688-40v-60h172v-172h60v232zM300-480" /></svg>;
export default MaterialSelectToSpeak;