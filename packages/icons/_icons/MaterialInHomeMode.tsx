import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInHomeMode: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-160v-400l-84 64-36-48 440-337 440 337-36 48-404-309-260 199v386h192v60zm451 80L456-235l42-43 113 114 227-226 42 42z" /></svg>;
export default MaterialInHomeMode;