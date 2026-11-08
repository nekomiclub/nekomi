import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMicFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M408-454q-29-31-29-75v-251q0-42 29.5-71t71.5-29 71.5 29 29.5 71v251q0 44-29 75t-72 31-72-31m42 334v-136q-106-11-178-89t-72-184h60q0 91 64.5 153T480-314t155.5-62T700-529h60q0 106-72 184t-178 89v136z" /></svg>;
export default MaterialMicFill;