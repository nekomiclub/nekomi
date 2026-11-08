import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInHomeModeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M611-80 456-235l42-43 113 114 227-226 42 42zm-451-80v-400l-84 64-36-48 440-337 440 337-36 48-14-11-259 258-113-114-129 130 73 73z" /></svg>;
export default MaterialInHomeModeFill;