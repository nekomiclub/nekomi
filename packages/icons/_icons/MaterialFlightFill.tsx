import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M285-80v-83l124-86v-172L80-288v-102l329-231v-188q0-29 21-50t50-21 50 21 21 50v188l329 231v102L551-421v172l123 86v83l-194-59z" /></svg>;
export default MaterialFlightFill;