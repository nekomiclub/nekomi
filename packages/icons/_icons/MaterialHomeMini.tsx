import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHomeMini: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M350-200q-110 0-190-82.5T80-480q0-38 18.5-86t64-91.5 123-73T480-760t194.5 29.5 123 73 64 91.5 18.5 86q0 115-82.5 197.5T600-200zm3-60h244q81 0 138-44t77-116H148q18 72 73.5 116T353-260M140-480h680q0-32-17-70.5T746.5-622t-105-55.5T480-700t-161.5 22.5-105 55.5-56.5 71.5-17 70.5m340 0" /></svg>;
export default MaterialHomeMini;