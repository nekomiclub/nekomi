import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLandslideFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-80v-180l160 51 435-144L880-80zm160-191L80-325v-95l160 51 264-85 129 51zm500-129 180-80v-160l-180-40-100 80v120zm-500-31L80-485v-155h240l109 146zm240-209 200-80v-200l-200-40-120 80v160z" /></svg>;
export default MaterialLandslideFill;