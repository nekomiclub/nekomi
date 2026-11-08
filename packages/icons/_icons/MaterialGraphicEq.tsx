import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGraphicEq: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M285-240v-480h60v480zM450-80v-800h60v800zM120-400v-160h60v160zm495 160v-480h60v480zm165-160v-160h60v160z" /></svg>;
export default MaterialGraphicEq;