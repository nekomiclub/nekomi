import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonShieldFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M726-80q-71-18-112.5-78T572-292v-98l154-77 154 77v98q0 74-41.5 134T726-80m-566-80v-94q0-38 19-65t49-41q67-30 128.5-45T480-420h16q8 0 16 1v127q0 35 8 68t23 64zm213.5-364.5Q330-568 330-631t43.5-106.5T480-781t106.5 43.5T630-631t-43.5 106.5T480-481t-106.5-43.5" /></svg>;
export default MaterialPersonShieldFill;