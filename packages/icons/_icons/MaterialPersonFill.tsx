import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M372-523q-42-42-42-108t42-108 108-42 108 42 42 108-42 108-108 42-108-42M160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420t123 15.5T731-360q31 14 50 41t19 65v94z" /></svg>;
export default MaterialPersonFill;