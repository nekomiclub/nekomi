import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHomePinFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M370-440h60v-120h100v120h60v-185l-110-73-110 73zM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80" /></svg>;
export default MaterialHomePinFill;