import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAltRouteFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-80v-200q0-48-16-79t-49-64l43-43q13 11 27.5 30t24.5 35q17-26 33.5-45t31.5-32q58-47 83.5-113.5T648-766l-90 90-42-42 162-162 162 162-42 42-90-90q5 126-24.5 198.5T585-432q-44 40-59.5 73T510-280v200zM258-636q-4-18-6.5-52.5T251-765l-89 89-42-42 162-162 162 162-42 42-90-90q-2 38-1 66.5t5 49.5zm84 171q-17-18-37.5-47.5T273-577l59-15q9 25 24 48t28 37z" /></svg>;
export default MaterialAltRouteFill;