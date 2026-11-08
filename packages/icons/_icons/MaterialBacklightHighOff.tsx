import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBacklightHighOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-370v-60h150v60zm410-310v-200h60v200zm248 104-42-43 115-115 42 43zm72 206v-60h150v60zm43 309L634-240H280v-100h254L61-813l43-43 752 752z" /></svg>;
export default MaterialBacklightHighOff;