import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFloorLampFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M451-200v-320H228q-15 0-24.5-12.5T199-559l86-279q6-19 22-30.5t36-11.5h276q20 0 36 11.5t22 30.5l86 279q5 14-4.5 26.5T734-520H511v320zM331-80v-60h300v60z" /></svg>;
export default MaterialFloorLampFill;