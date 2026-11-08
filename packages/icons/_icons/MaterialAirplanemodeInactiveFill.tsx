import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAirplanemodeInactiveFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m880-288-232-94-239-239v-188q0-29 21-50t50-21 50 21 21 50v188l329 231zM480-139 285-80v-83l124-86v-172L80-288v-102l230-162L56-806l42-42L848-97l-42 41-255-255v62l123 86v83z" /></svg>;
export default MaterialAirplanemodeInactiveFill;