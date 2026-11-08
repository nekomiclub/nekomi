import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlightTakeoffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h720v60zm66-210L43-568l79-22 117 98 165-45-214-285 98-26 310 260 184-50q29-7 53.5 8t32.5 44q8 28-5.5 52.5T822-501z" /></svg>;
export default MaterialFlightTakeoffFill;