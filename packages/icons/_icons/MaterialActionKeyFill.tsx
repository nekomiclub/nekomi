import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialActionKeyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M871-47 751-166q-18 13-40 19.5t-45 6.5q-63 0-108-45t-45-108q0-64 45-109t108-45q64 0 109 45t45 109q0 23-7 44.5T794-209L913-89zm-659-92q-63 0-108-45T59-292q0-65 45-110t108-45q65 0 110 45t45 110q0 63-45 108t-110 45m453-60q40 0 67.5-27.5T760-292q0-40-27.5-67.5T665-387q-38 0-65.5 27.5T572-292q0 38 27.5 65.5T665-199M212-592q-63 0-108-45T59-745q0-65 45-110t108-45q65 0 110 45t45 110q0 63-45 108t-110 45m453 0q-63 0-108-45t-45-108q0-65 45-110t108-45q65 0 110 45t45 110q0 63-45 108t-110 45" /></svg>;
export default MaterialActionKeyFill;