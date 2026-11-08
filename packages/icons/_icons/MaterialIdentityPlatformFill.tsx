import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialIdentityPlatformFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m480-131 224-135q-48-39-105-61.5T480-350t-119 22.5T255-267zm92-357q38-38 38-92t-38-92-92-38-92 38-38 92 38 92 92 38 92-38M480-60 120-280v-400l360-220 360 220v400z" /></svg>;
export default MaterialIdentityPlatformFill;